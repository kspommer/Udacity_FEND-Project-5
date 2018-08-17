// Reference:  Service Worker - adapting lessons 4.13.3-4

// Variable
var staticCacheName = 'restaurant-app-cache';

// wait for service worker to install
self.addEventListener('install', function(event) {
	// cache array of URLS on install
	var urlsToCache = [
		'/',
		'index.html',
		'restaurant.html',
		'js/main.js', 
		'js/index.js',
		'js/dbhelper.js',
		'js/restaurant_info.js',
		'img/1.jpg',
		'img/2.jpg', 
		'img/3.jpg',
		'img/4.jpg', 
		'img/5.jpg', 
		'img/6.jpg', 
		'img/7.jpg', 
		'img/8.jpg', 
		'img/9.jpg', 
		'img/10.jpg',
		'css/styles.css',
		'data/restaurants.json',
	];
	event.waitUntil(
		// cache all the URLs in new cache
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});
// get rid of old caches
// fires when this service worker is active
self.addEventListener('activate', function(event) {
	event.waitUntil(
		// get all cache names
		caches.keys().then(function(cacheNames){
			// wait on completion of all promises below
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					// filter out the urlsToCache cache
					return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
				}).map(function(cacheName) {
					// delete caches which are not named cache
					return cache.delete(cacheName);
				})
			)	
		})
	);
});
// render page using caches for best user experience
self.addEventListener('fetch', function(event){
	// respond with item from cache
	// if not found, ping network for resource
	event.respondWith(
		caches.match(event.request).then(function(response) {
			// hijack when response not found and pull from cache
			if (response) {
				return response;
			}				
			return fetch(event.request);
		}).catch(function () {
			// response if offline
			return new Response("Unable to connect.  Retrying...");
		})
	);
});	