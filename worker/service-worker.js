const cacheName = '__WorkerSAT__'

addEventListener('install', (event) => {
  console.log('SW install')

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
        '/assets/activate.png',
        '/assets/handle.png',
        '/assets/install.png',
        '/assets/register.png',
        '/assets/cache.png',
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

addEventListener('activate', (event) => {
  console.log('SW activate')

  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map((key) => {
      if (key !== cacheName) {
        console.log('SW removing old cache', key)

        return caches.delete(key)
      }
      return null
    }))),
  )

  return self.clients.claim()
})

addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response
        || fetch(event.request)
          .catch(() => caches.match('/static.html'))),
  )
})
