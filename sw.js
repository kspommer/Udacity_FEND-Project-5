// Service worker - lesson 4.13.3-4

self.addEventListener('fetch', function(event){
	console.log("hello!");
	console.log(event.request);
});