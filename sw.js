/* sw.js — Service Worker
   PENTING: naikkan CACHE_VER setiap kali fail frontend diubah. */
const CACHE_VER = 'pfa-tot-v1.0.0';
const FAIL = [
  './', './index.html', './styles.css',
  './content.js', './soalan.js', './app.js', './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VER).then(c => c.addAll(FAIL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE_VER).map(x => caches.delete(x))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // jangan cache panggilan API atau font
  if (url.includes('script.google.com') || url.includes('fonts.g')) return;
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const salin = res.clone();
        caches.open(CACHE_VER).then(c => c.put(e.request, salin));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
