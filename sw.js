if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
   
    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "fast.png",
    "revision": "bc37dd8a4818db3dd6706631e7ccdd74"
  },
  {
    "url": "index.html",
    "revision": "a3c446377bfc3e990e46220a258066cf"
  },
  {
    "url": "precache-manifest.0343d8655b66a187a6dc252a747767a5.js",
    "revision": "0343d8655b66a187a6dc252a747767a5"
  },
  {
    "url": "service-worker.js",
    "revision": "bac0428ca3b230a369fbe09530173a7b"
  },
  {
    "url": "static/css/main.b4c6fabe.chunk.css",
    "revision": "b2742113c1855be18124f2c8f98a2105"
  },
  {
    "url": "static/js/2.d60d4488.chunk.js",
    "revision": "4731e255beb0a323989c17add7ffc9f3"
  },
  {
    "url": "static/js/main.e866c4d7.chunk.js",
    "revision": "188a5cd5ee2cbe2d968776514d07d9be"
  },
  {
    "url": "static/js/runtime~main.10776b7b.js",
    "revision": "893713fd8595f4dab2c1cc4bad32a77d"
  }
]);
   
    /* custom cache rules */
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });
   
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      }),
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}