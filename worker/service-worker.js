const cacheName = '__WorkerSAT__'

console.log('HALKO')

addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(
      [
        '/main/bundle.js',
        '/static/bundle.js',
        '/assets/callback-queue.png',
        '/assets/cosmos.png',
        '/assets/data-exchange.png',
        '/assets/forever-alone.png',
        '/assets/js-async.png',
        '/assets/processing.png',
        '/assets/satelite.png',
        '/assets/galaxy-watching.png',
        '/assets/sw-lifecycle.png',
        '/worker.js',
        '/favicon.ico',
        '/',
        '/static.html',

      ],
    )),
  )
})

addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response
        || fetch(event.request)
          .catch(() => caches.match('/static.html'))),
  )
})
