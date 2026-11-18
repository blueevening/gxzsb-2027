#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""弱网下测量背单词首屏就绪时间，并统计词库请求次数（用于确认去重与提前加载生效）"""
import argparse, json, os, shutil, subprocess, sys, tempfile, time, urllib.request
from websocket import create_connection

EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(EDGE):
    EDGE = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"
PORT = 9335


class CDP:
    def __init__(self, ws):
        self.ws = create_connection(ws, timeout=25, max_size=32 * 1024 * 1024)
        self.n = 0
        self.ev = []

    def cmd(self, method, params=None, session=None):
        self.n += 1
        msg = {"id": self.n, "method": method, "params": params or {}}
        if session:
            msg["sessionId"] = session
        self.ws.send(json.dumps(msg))
        while True:
            d = json.loads(self.ws.recv())
            if d.get("id") == self.n:
                if "error" in d:
                    raise RuntimeError("%s -> %s" % (method, d["error"]))
                return d.get("result", {})
            self.ev.append(d)

    def pump(self, sec):
        end = time.time() + sec
        self.ws.settimeout(0.5)
        while time.time() < end:
            try:
                self.ev.append(json.loads(self.ws.recv()))
            except Exception:
                pass


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default="http://127.0.0.1:8788/index.html#/words")
    ap.add_argument("--kb", type=float, default=500, help="下载带宽 kbps")
    ap.add_argument("--rtt", type=int, default=300)
    args = ap.parse_args()

    profile = tempfile.mkdtemp(prefix="gxzsb-perf-")
    p = subprocess.Popen([EDGE, "--headless=new", "--disable-gpu", "--no-first-run",
                          "--remote-debugging-port=%d" % PORT, "--remote-allow-origins=*",
                          "--user-data-dir=" + profile, "about:blank"],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        ws_url = None
        for _ in range(40):
            try:
                ws_url = json.load(urllib.request.urlopen("http://127.0.0.1:%d/json/version" % PORT, timeout=2))["webSocketDebuggerUrl"]
                break
            except Exception:
                time.sleep(0.25)
        c = CDP(ws_url)
        tid = c.cmd("Target.createTarget", {"url": "about:blank"})["targetId"]
        sid = c.cmd("Target.attachToTarget", {"targetId": tid, "flatten": True})["sessionId"]
        for m in ("Page.enable", "Runtime.enable", "Network.enable"):
            c.cmd(m, session=sid)
        c.cmd("Emulation.setDeviceMetricsOverride", {"width": 390, "height": 844, "deviceScaleFactor": 3, "mobile": True}, sid)
        c.cmd("Network.setCacheDisabled", {"cacheDisabled": True}, sid)
        c.cmd("Network.emulateNetworkConditions", {
            "offline": False, "latency": args.rtt,
            "downloadThroughput": int(args.kb * 1024 / 8 * 1.0),
            "uploadThroughput": int(args.kb * 1024 / 8 * 0.5),
        }, sid)

        t0 = time.time()
        c.cmd("Page.navigate", {"url": args.url}, sid)
        ok_at = None
        dots_seen = None
        while time.time() - t0 < 45:
            c.pump(0.25)
            try:
                r = c.cmd("Runtime.evaluate", {"expression":
                          "JSON.stringify({ok:!!(window.WORDS&&window.WORDS.getStats),dots:!!document.querySelector('.wb-loading-dots'),fail:!!window.__wbLoadFail})",
                          "returnByValue": True}, sid)["result"]["value"]
                st = json.loads(r)
            except Exception:
                continue
            if st["dots"] and dots_seen is None:
                dots_seen = round(time.time() - t0, 2)
            if st["ok"]:
                ok_at = round(time.time() - t0, 2)
                break

        wb_reqs = 0
        for e in c.ev:
            if e.get("method") == "Network.requestWillBeSent":
                u = e["params"]["request"]["url"]
                if "wordbook.js" in u:
                    wb_reqs += 1
        print("词库请求次数: %d" % wb_reqs)
        print("加载态出现: %ss" % dots_seen)
        print("词库就绪: %ss" % ok_at)
    finally:
        p.terminate()
        try:
            p.wait(timeout=5)
        except Exception:
            p.kill()
        shutil.rmtree(profile, ignore_errors=True)


if __name__ == "__main__":
    main()
