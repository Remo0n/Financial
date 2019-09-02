self.addEventListener("install", function(event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open("static").then(function(cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/js/app.js",
        "/js/bootstrap.min.js",
        "/js/jquery-3.3.1.min.js",
        "/css/bootstrap.min.css",
        "/css/index_style.css",
        " /images/logo-light.png"
      ]);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("[Service Worker] Activating Service Worker ...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
