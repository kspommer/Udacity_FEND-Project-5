// Service Worker Script

// reference:  https://developers.google.com/web/fundamentals/primers/service-workers/
// https://developers.google.com/web/fundamentals/primers/promises
// Register service worker 
// For older browsers, simply return as functionality N/A
// Otherwise register service worker
if(navigator.serviceWorker) {
	// delay until after page load 
	window.addEventListener('load', function() {	
		navigator.serviceWorker.register('/sw.js').then(function() {
			console.log("success!");
		}).catch(function() {
  			console.log("failed");
		}); 
	});
}


