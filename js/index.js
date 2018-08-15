// Service Worker Script

// reference:  https://developers.google.com/web/fundamentals/primers/service-workers/
// https://developers.google.com/web/fundamentals/primers/promises
// Register service worker 
// For older browsers, simply return as functionality N/A
if(!navigator.serviceWorker) {
	return;
} 
// Otherwise register service worker
if('serviceWorker' in navigator) {
	// delay until after page load 
	navigator.addEventListener('load', function() {	
		navigator.serviceWorker.register('/sw.js').then(function() {
			console.log("success!");
		}).catch(function() {
  			console.log("failed");
		}); 
	}
}


