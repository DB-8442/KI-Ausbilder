const VERSION = "v5.3";
const CACHE_NAME = `ki-ausbilder-${VERSION}`;
const ASSETS = ["./","./index.html","./manifest.webmanifest","./sw.js"];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(key => key.startsWith("ki-ausbilder-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  // Always ask the network first for the main HTML so deployments are picked up.
  if (request.mode === "navigate" || new URL(request.url).pathname.endsWith("/index.html")) {
    event.respondWith(
      fetch(request, {cache:"no-store"})
        .then(response => {
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)).catch(()=>{});
          return response;
        })
        .catch(() => caches.match(request).then(r=>r || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)).catch(()=>{});
      return response;
    }))
  );
});
