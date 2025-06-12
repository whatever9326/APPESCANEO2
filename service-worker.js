self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('escaneo-store').then(cache => cache.addAll([
            '/',
            '/index.html',
            '/manifest.json',
            '/icon-192.png',
            '/icon-512.png',
            '/ok.wav',
            '/error1.wav',
        ]))
    );
});
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
