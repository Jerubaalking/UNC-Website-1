const cdnHost = 'https://static-assets-prod.epicgames.com/static/';
const precacheManifest = ["https://static-assets-prod.epicgames.com/fortnite/static/webpack/../vendor/jquery-3.1.0.min.js","https://static-assets-prod.epicgames.com/fortnite/static/webpack/../vendor/TweenMax-1.19.0.min.js","https://static-assets-prod.epicgames.com/fortnite/static/webpack/./main.fortnite-site.5fa7852dd4b99e45e00e.js","https://static-assets-prod.epicgames.com/fortnite/static/webpack/./main.fortnite-site.5fa7852dd4b99e45e00e.css","https://static-assets-prod.epicgames.com/fortnite/static/webpack/./thirdParty.fortnite-site.5fa7852dd4b99e45e00e.css","https://static-assets-prod.epicgames.com/fortnite/static/webpack/./polyfill.fortnite-site.5fa7852dd4b99e45e00e.js"];
const navigationFallback = '';

// EPIC EDITED
importScripts(cdnHost + "workbox-v3.1.0/workbox-sw.js");
workbox.setConfig({
    modulePathPrefix: cdnHost + "workbox-v3.1.0"
});
// EPIC EDITED
workbox.core.setCacheNameDetails({prefix: "epic-service-worker"});

self.__precacheManifest = precacheManifest.concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// EPIC EDITED
if (navigationFallback) {
    workbox.routing.registerNavigationRoute(navigationFallback);
}
