const filesToCache = [
    '/',
    '/index.html',
    '/css/main.css',
    '/js/main.js'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('Handling fetch event for', event.request.url);

    event.respondWith(
        caches.open(staticCacheName).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                if (response) {
                    console.log(' Found response in cache:', response);

                    return response;
                }
                console.log('No response for %s found in cache. About to fetch from network...', event.request.url);

                return fetch(event.request.clone()).then(function(response) {
                    console.log('Response for %s from network is: %O', event.request.url, response);

                    if (response.status < 400) {
                        cache.put(event.request, response.clone());
                    } else {
                        console.log('Not caching the response to', event.request.url);
                    }

                    return response;
                });
            }).catch(function(error) {
                console.error('  Error in fetch handler:', error);

                throw error;
            });
        })
    );
});