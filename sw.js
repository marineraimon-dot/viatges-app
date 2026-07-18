// Service worker de l'app de viatges: permet instal·lar-la a la pantalla
// d'inici i que funcioni sense connexió. Estratègia "xarxa primer, cau com a
// reserva": si hi ha internet sempre agafa la darrera versió publicada (i
// l'actualitza al cau); si no n'hi ha, serveix l'última versió desada.
const CACHE_NAME = 'viatges-app-v1';
const APP_SHELL = ['./', './index.html', './data-seed.js', './manifest.json', './icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
