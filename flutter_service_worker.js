'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "daf182b3b74af405c0dc4c4ed87b0217",
"assets/assets/Arapey-Regular.ttf": "0b5809c6e02a643b712fa7ca1db11944",
"assets/assets/curvePointIcons/angleNonSymmetric.png": "9af5c123cd8b5b7bb5188c4987c1b470",
"assets/assets/curvePointIcons/arcicon.png": "8bb1fa8214becf232e46e3e08e89827d",
"assets/assets/curvePointIcons/nonsymmetricicon.png": "f5910a6d1d06096bc11cad79cbe0131d",
"assets/assets/curvePointIcons/normal.png": "6536ee93e2b72203e6382a1c791acddb",
"assets/assets/curvePointIcons/symmetricicon.png": "2aebedb9d2e576a78c737a7197f18053",
"assets/assets/custompath1%2520(9).json": "8d6d7f2bb4ec7c322a873e71d8ba74c8",
"assets/assets/icons/file.png": "340dff2cfcdad09e41994dc4913f3a5e",
"assets/assets/icons/files.png": "d442a59ef40fdfe86cdba3a0c0a54b16",
"assets/assets/icons/newfile.png": "ab9bd06f3b423ed18993c8eaa28bf826",
"assets/assets/icons/openfile.png": "31a6ce3697d2d02c2b669a9ae8e1d981",
"assets/assets/icons/pan.png": "a219f48efde11344f32feceede563347",
"assets/assets/icons/save.png": "35a163a812178b8ece17bddebbef96b5",
"assets/assets/icons/saveas.png": "5ae1e977df25b7de91e7ad0ef6683739",
"assets/assets/icons/translate.png": "ae17b023ed09334f8fe3b1374b395cc5",
"assets/assets/icons/translate_arrow.png": "b1ca9bdab309012ecc1fac03e72ea67a",
"assets/assets/icons/translate_arrow_transp.png": "9ee674374edfad8ddce2fb1b271b4390",
"assets/assets/icons/youtube.png": "48e0b02dd613c829619a6369b6530548",
"assets/assets/sample%2520files/car.json": "60fe95d47057452df85559683b14f703",
"assets/assets/sample%2520files/circle.json": "56e7277ee760d5c250ade43ddff92b81",
"assets/assets/sample%2520files/face.json": "493c4788710f5104a21eb0be5b9a039c",
"assets/assets/sample%2520files/heart.json": "2a95d90c272f8f0025ed880eea3d5eae",
"assets/assets/sample%2520files/heart1.json": "c2c335e105863addbf1bc16d6cedb7db",
"assets/assets/sample%2520files/hhh.json": "4f339a068aa5f98e16b8ca4e481f10a0",
"assets/assets/sample%2520files/pentagon.json": "bfe2b53e99b326787a3fe2c3a1b31a5c",
"assets/assets/sample%2520files/sample1.json": "a3800e35f7762f621a6bc1709582e226",
"assets/assets/sample%2520files/star5.json": "19787e9bd56478932229e914c187409f",
"assets/assets/sample%2520files/wave.json": "caf076b86e7446f7d412a4e70ec703a9",
"assets/assets/sampleImage/code1.png": "a710a7eab4bd042b4614ae887972cc91",
"assets/assets/sampleImage/duck.jpg": "a156ee83ca730b5a351bc4c52cbaa747",
"assets/assets/sampleImage/duck.png": "7709bdbb6c9b50bfe85d4f0929d18f26",
"assets/assets/thr111.json": "293b311339d5f0a955c458118bf57705",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1ef462b38473d84f530c39658999936a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "b3e27c0d08da98c43257e56014beffb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "14d221d164c9b233aa741ea48628f687",
"icons/android-chrome-512x512.png": "24489ae2b6f85820643c4d7065f6a8d9",
"icons/apple-touch-icon.png": "0491bd17f3eac3bd43f5422d6ffcaa1b",
"index.html": "fd7b0e012d4a42c6b56ca899c8726e08",
"/": "fd7b0e012d4a42c6b56ca899c8726e08",
"logo.png": "14d221d164c9b233aa741ea48628f687",
"main.dart.js": "67699323effdcca55225fc93c3f37d9d",
"manifest.json": "f4dc163a6b088d2cfc5ad7ab115402bf",
"version.json": "01aefe83deffaae12221b30947dbfe65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
