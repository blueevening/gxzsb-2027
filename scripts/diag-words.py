#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""诊断单词页加载：抓 console / 异常 / 失败请求 / WORDS 状态"""
import argparse, json, os, shutil, subprocess, sys, tempfile, time, urllib.request
from websocket import create_connection

EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(EDGE):
    EDGE = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

PORT = 9334


class CDP:
    def __init__(self, ws_url):
        self.ws = create_connection(ws_url, timeout=25, max_size=32 * 1024 * 1024)
        self.n = 0
        self.events = []

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
            self.events.append(data)

    def drain(self, seconds):
        """收集若干秒内的事件"""
        end = time.time() + seconds
        self.ws.settimeout(1.0)
        while time.time() < end:
            try:
                self.events.append(json.loads(self.ws.recv()))
            except Exception:
                pass


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default="https://blueevening.github.io/gxzsb-2027/index.html#/words")
    ap.add_argument("--wait", type=float, default=10.0)
    ap.add_argument("--width", type=int, default=390)
    ap.add_argument("--height", type=int, default=844)
    args = ap.parse_args()

    profile = tempfile.mkdtemp(prefix="gxzsb-diag-")
    proc = subprocess.Popen([
        EDGE, "--headless=new", "--disable-gpu",
        "--no-first-run", "--no-default-browser-check",
        "--remote-debugging-port=%d" % PORT, "--remote-allow-origins=*",
        "--user-data-dir=" + profile, "about:blank",
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
            sys.exit("无法连接调试端口")

        cdp = CDP(ws_url)
        target = cdp.cmd("Target.createTarget", {"url": "about:blank"})["targetId"]
        sid = cdp.cmd("Target.attachToTarget", {"targetId": target, "flatten": True})["sessionId"]
        for m in ("Page.enable", "Runtime.enable", "Network.enable", "Log.enable"):
            try:
                cdp.cmd(m, session=sid)
            except Exception as e:
                print("[warn] %s: %s" % (m, e))
        cdp.cmd("Emulation.setDeviceMetricsOverride", {
            "width": args.width, "height": args.height, "deviceScaleFactor": 3, "mobile": True,
        }, sid)

        cdp.cmd("Page.navigate", {"url": args.url}, sid)
        cdp.drain(args.wait)

        print("=== console / exception / log ===")
        for ev in cdp.events:
            m = ev.get("method")
            p = ev.get("params", {})
            if m == "Runtime.consoleAPICalled":
                txt = " ".join(str(a.get("value", a.get("description", ""))) for a in p.get("args", []))
                print("console.%s: %s" % (p.get("type"), txt[:300]))
            elif m == "Runtime.exceptionThrown":
                d = p.get("exceptionDetails", {})
                print("EXCEPTION: %s %s" % (d.get("text"), (d.get("exception", {}).get("description") or "")[:400]))
            elif m == "Log.entryAdded":
                e = p.get("entry", {})
                print("LOG[%s]: %s %s" % (e.get("level"), e.get("text"), e.get("url", "")))
            elif m == "Network.loadingFailed":
                print("LOAD FAILED: %s %s" % (p.get("errorText"), p.get("type")))
            elif m == "Network.responseReceived":
                r = p.get("response", {})
                u = r.get("url", "")
                if "wordbook" in u or u.endswith("app.js") or "sw.js" in u:
                    print("RESP %s %s (%s)" % (r.get("status"), u[-70:], p.get("type")))

        r = cdp.cmd("Runtime.evaluate", {
            "expression": """JSON.stringify({
              hasWORDS: !!window.WORDS,
              hasStats: !!(window.WORDS && window.WORDS.getStats),
              V: window.V || null,
              hash: location.hash,
              appText: (document.querySelector('#app')||{}).innerText ? ((document.querySelector('#app').innerText||'').slice(0,160)) : null,
              scripts: [...document.scripts].map(s=>s.src.split('/').pop()).slice(-8)
            })""", "returnByValue": True}, sid)
        print("=== state ===")
        print(r["result"]["value"])
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except Exception:
            proc.kill()
        shutil.rmtree(profile, ignore_errors=True)


if __name__ == "__main__":
    main()
