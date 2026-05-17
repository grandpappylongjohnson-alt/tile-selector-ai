const CACHE_NAME = 'tile-ai-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
      .catch(() => {
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
