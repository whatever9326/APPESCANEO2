diff --git a/service-worker.js b/service-worker.js
index 717169cce5dd34e61cb377bbd5396569e90b27b5..3c7161813975750f94025c32ba37bd8edfe74c9d 100644
--- a/service-worker.js
+++ b/service-worker.js
@@ -1,17 +1,19 @@
 
 self.addEventListener('install', e => {
   e.waitUntil(
     caches.open('escaneo-store').then(cache => cache.addAll([
       '/',
       '/index.html',
       '/manifest.json',
       '/icon-192.png',
-      '/icon-512.png'
+      '/icon-512.png',
+        '/ok.wav',
+        '/error1.wav' 
     ]))
   );
 });
 self.addEventListener('fetch', e => {
   e.respondWith(
     caches.match(e.request).then(response => response || fetch(e.request))
   );
 });
