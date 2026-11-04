/* gxzsb sw v2.11.1 — 双缓存策略：静态资源按版本缓存(秒开、版本更新自动换)，index.html 网络优先拿最新版 */
const VERSION = "3.5.0";
const CACHE = "gxzsb-appshell-" + VERSION;   // 版本化：只存 index.html
const STATIC = "gxzsb-static-" + VERSION;    // 版本化：题库/JS/CSS，版本一变自动清旧

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((k) => {
          // 清掉所有旧版本缓存（appshell + static），只保留当前版本
          if (k === CACHE || k === STATIC) return null;
          if (k.indexOf("gxzsb-appshell-") === 0) return caches.delete(k);
          if (k.indexOf("gxzsb-static-") === 0) return caches.delete(k);
          return null;
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // supabase 等第三方不缓存

  // 页面导航(index.html)：网络优先，拿最新版本号引用；离线回退缓存
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put("./index.html", copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // 静态资源(JS/CSS/题库/图片)：永久缓存优先，秒开
  // URL 带 ?v=版本号，app.js/styles.css 版本一变 URL 就变，自动下新版；
  // 题库文件 URL 不变，永远命中缓存，版本更新不再重下 4.4M
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(STATIC).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
    })
  );
});
