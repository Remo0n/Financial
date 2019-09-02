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
        "/images/logo-light.png",
        "/images/logo-dark.png",
        "/images/full-6-600x420.jpg",
        "/images/full-5-600x420.jpg",
        "/images/download%20(1).jpg",
        "/images/business-main-700x680.jpg",
        "/images/logo_01.png",
        "/images/logo_02.png",
        "/images/logo_03.png",
        "/images/logo_04.png",
        "/images/business-2.jpg"
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
