#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gxzsb-2027 手机端 UI 体检脚本（无依赖 CDP 驱动）

用法：
  python scripts/qa-mobile.py                       # 默认 390x844，抓首页等 5 个页面
  python scripts/qa-mobile.py --routes home,bank,words
  python scripts/qa-mobile.py --theme dark --out _ux-review/dark
  python scripts/qa-mobile.py --width 360 --height 780

产物：
  <out>/<route>.png         首屏截图
  <out>/<route>-full.png    整页截图（--full）
  <out>/metrics.json        布局体检数据（横向溢出 / 过小点击区 / 固定条）
"""
import argparse, base64, json, os, shutil, subprocess, sys, tempfile, time, urllib.request

try:
    from websocket import create_connection
except ImportError:
    sys.exit("缺少依赖：python -m pip install websocket-client")

EDGE_CANDIDATES = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
]
PORT = 9333

METRICS_JS = r"""
(() => {
  const vw = innerWidth, vh = innerHeight;
  const out = { innerWidth: vw, innerHeight: vh, dpr: devicePixelRatio,
                docHeight: document.documentElement.scrollHeight,
                scrollWidth: document.documentElement.scrollWidth,
                overflow: [], small: [], fixed: [], clipped: [] };
  const vis = (el) => {
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0' && r.width > 0 && r.height > 0;
  };
  const sel = (el) => {
    let p = el.tagName.toLowerCase();
    if (el.id) p += '#' + el.id;
    if (el.className && typeof el.className === 'string') p += '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.');
    return p;
  };
  // 1. 横向溢出：右边界超出视口
  document.querySelectorAll('body *').forEach((el) => {
    if (!vis(el) || out.overflow.length > 30) return;
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 && r.width > 4) {
      out.overflow.push({ sel: sel(el), left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width) });
    }
  });
  // 2. 过小点击区（触控目标 < 40px 任一边）
  document.querySelectorAll('button, a, [data-nav], [role="button"], input, select, textarea').forEach((el) => {
    if (!vis(el) || out.small.length > 40) return;
    const r = el.getBoundingClientRect();
    if (r.width < 40 || r.height < 40) {
      out.small.push({ sel: sel(el), w: Math.round(r.width), h: Math.round(r.height), text: (el.textContent || '').trim().slice(0, 12) });
    }
  });
  // 3. 固定元素（检查是否压住内容/贴边）
  document.querySelectorAll('body *').forEach((el) => {
    if (!vis(el) || out.fixed.length > 20) return;
    if (getComputedStyle(el).position === 'fixed') {
      const r = el.getBoundingClientRect();
      out.fixed.push({ sel: sel(el), top: Math.round(r.top), bottom: Math.round(r.bottom), h: Math.round(r.height), z: getComputedStyle(el).zIndex });
    }
  });
  // 4. 文字被截断（有省略号但没省略号字符）
  document.querySelectorAll('body *').forEach((el) => {
    if (!vis(el) || out.clipped.length > 30 || !el.childElementCount === false) return;
    if (el.children.length) return;
    const s = getComputedStyle(el);
    if (s.textOverflow === 'ellipsis' && el.scrollWidth > el.clientWidth + 2) {
      out.clipped.push({ sel: sel(el), text: (el.textContent || '').trim().slice(0, 20), sw: el.scrollWidth, cw: el.clientWidth });
    }
  });
  return out;
})()
"""


class CDP:
    def __init__(self, ws_url):
        self.ws = create_connection(ws_url, timeout=20, max_size=32 * 1024 * 1024)
        self.n = 0

    def cmd(self, method, params=None, session=None):
        self.n += 1
        msg = {"id": self.n, "method": method, "params": params or {}}
        if session:
            msg["sessionId"] = session
        self.ws.send(json.dumps(msg))
        while True:
            data = json.loads(self.ws.recv())
            if data.get("id") == self.n:
                if "error" in data:
                    raise RuntimeError("%s -> %s" % (method, data["error"]))
                return data.get("result", {})


def find_browser():
    for p in EDGE_CANDIDATES:
        if os.path.exists(p):
            return p
    sys.exit("找不到 Edge / Chrome，请手动传 --browser 路径")


def wait_value(cdp, sid, expr, timeout=12):
    t0 = time.time()
    while time.time() - t0 < timeout:
        try:
            r = cdp.cmd("Runtime.evaluate", {"expression": expr, "returnByValue": True}, sid)
            if r.get("result", {}).get("value"):
                return True
        except Exception:
            pass
        time.sleep(0.25)
    return False


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--routes", default="home,bank,words,wrong,me")
    ap.add_argument("--width", type=int, default=390)
    ap.add_argument("--height", type=int, default=844)
    ap.add_argument("--out", default="_ux-review/mobile-qa")
    ap.add_argument("--base", default="http://127.0.0.1:8788/index.html")
    ap.add_argument("--theme", default="light", choices=["light", "dark"])
    ap.add_argument("--full", action="store_true", help="同时输出整页长图")
    ap.add_argument("--browser", default="")
    ap.add_argument("--js", default="", help="截图前在当前页执行的 JS（支持 async/await，用于进入答题等有状态页面）")
    args = ap.parse_args()

    out_dir = os.path.abspath(args.out)
    os.makedirs(out_dir, exist_ok=True)
    profile = tempfile.mkdtemp(prefix="gxzsb-qa-")
    browser = args.browser or find_browser()
    proc = subprocess.Popen([
        browser, "--headless=new", "--disable-gpu", "--hide-scrollbars",
        "--no-first-run", "--no-default-browser-check",
        "--remote-debugging-port=%d" % PORT, "--remote-allow-origins=*",
        "--user-data-dir=" + profile,
        "about:blank",
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    try:
        ws_url = None
        for _ in range(40):
            try:
                ws_url = json.load(urllib.request.urlopen("http://127.0.0.1:%d/json/version" % PORT, timeout=2))["webSocketDebuggerUrl"]
                break
            except Exception:
                time.sleep(0.25)
        if not ws_url:
            sys.exit("无法连接调试端口 %d" % PORT)

        cdp = CDP(ws_url)
        target = cdp.cmd("Target.createTarget", {"url": "about:blank"})["targetId"]
        sid = cdp.cmd("Target.attachToTarget", {"targetId": target, "flatten": True})["sessionId"]
        cdp.cmd("Page.enable", session=sid)
        cdp.cmd("Runtime.enable", session=sid)
        cdp.cmd("Emulation.setDeviceMetricsOverride", {
            "width": args.width, "height": args.height,
            "deviceScaleFactor": 3, "mobile": True,
        }, sid)
        cdp.cmd("Emulation.setTouchEmulationEnabled", {"enabled": True, "maxTouchPoints": 5}, sid)
        if args.theme == "dark":
            cdp.cmd("Page.addScriptToEvaluateOnNewDocument", {
                "source": "try{localStorage.setItem('gxzsb.theme',JSON.stringify('dark'));localStorage.setItem('gxzsb.themeBak',JSON.stringify('dark'));document.documentElement.setAttribute('data-theme','dark')}catch(e){}"
            }, sid)
        else:
            cdp.cmd("Page.addScriptToEvaluateOnNewDocument", {
                "source": "try{localStorage.removeItem('gxzsb.theme')}catch(e){}"
            }, sid)

        report = {}
        for route in [r.strip() for r in args.routes.split(",") if r.strip()]:
            url = "%s#/%s" % (args.base, route)
            cdp.cmd("Page.navigate", {"url": url}, sid)
            wait_value(cdp, sid, "document.readyState === 'complete'")
            wait_value(cdp, sid, "!!document.querySelector('#app') && !document.querySelector('#app .skeleton')", timeout=20)
            time.sleep(1.0)
            if args.js:
                r = cdp.cmd("Runtime.evaluate", {"expression": args.js, "returnByValue": True,
                                                 "awaitPromise": True, "timeout": 8000}, sid)
                val = r.get("result", {}).get("value")
                if val not in (None, ""):
                    print("[js] %s" % val)
                time.sleep(0.6)
                wait_value(cdp, sid, "!!document.querySelector('#app') && !document.querySelector('#app .skeleton')", timeout=20)
                time.sleep(0.6)
            shot = cdp.cmd("Page.captureScreenshot", {"format": "png", "captureBeyondViewport": False}, sid)
            p = os.path.join(out_dir, route.replace("/", "_") + ".png")
            open(p, "wb").write(base64.b64decode(shot["data"]))
            m = cdp.cmd("Runtime.evaluate", {"expression": METRICS_JS, "returnByValue": True, "awaitPromise": False}, sid)
            report[route] = m["result"]["value"]
            if args.full:
                lm = cdp.cmd("Page.getLayoutMetrics", session=sid)["cssContentSize"]
                h = min(int(lm["height"]), 5000)
                full = cdp.cmd("Page.captureScreenshot", {"format": "png", "captureBeyondViewport": True,
                                                          "clip": {"x": 0, "y": 0, "width": args.width, "height": h, "scale": 1}}, sid)
                open(os.path.join(out_dir, route.replace("/", "_") + "-full.png"), "wb").write(base64.b64decode(full["data"]))
            print("[ok] %s -> %s" % (route, os.path.basename(p)))
        with open(os.path.join(out_dir, "metrics.json"), "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        print("[ok] metrics -> %s" % os.path.join(out_dir, "metrics.json"))
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except Exception:
            proc.kill()
        shutil.rmtree(profile, ignore_errors=True)


if __name__ == "__main__":
    main()
