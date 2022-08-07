'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "48dcc227038cf8ad27b62d1645787ec2",
".git/config": "cfeb40628bda09dc90f7d99c66c6c499",
".git/description": "d1befa03c79ca0b84ecc488dea96bc68",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c52152bcc38bf828b4e9590e384e9f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "888502976662e6c6b9bedadd779e0951",
".git/logs/refs/heads/main": "888502976662e6c6b9bedadd779e0951",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/14/80b5cc1690b774d301a5a018c06a08ffcd5f40": "c1da7964d60dcb28d0cf1a3ef07bfe7f",
".git/objects/1a/011e32195102e1f91e99f249bea1bf42263ff4": "7c38da18e897d741653e43c663d56433",
".git/objects/24/36aea007d31a66da368b0ee2608106349087c0": "b22377c9bc458c27dfea708f30826b03",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/2c/bd5c7b085c226f8f847622cd0112b1935948d0": "0a409aedbd41d0c962818ddf2a4e75b5",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/59/147f266c12eef51f4893491ef2db0345f13986": "9fae806a9d8e4675e33d588c4bac3079",
".git/objects/5f/b1fa7ca51474b16bb5536c6038c1a69e52894f": "2c0dc9647008104e46032206f74a45ef",
".git/objects/67/d1e75d5cdde4d60191d750620e698475a03fc0": "d088d702897333eba521860a9581296f",
".git/objects/6a/6d404bdcd3d683f1f0638e2ed1fccf513c4a0f": "bbf01b8428d93ff9f267c06bdab71054",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/6361716fcc7594a0a111ee27a3673db8292a40": "7f9282c7c791bce8d5a52e92c47e9239",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "ece2ffefc2a6377e1ce228d55c7fd5f7",
"assets/AssetManifest.json": "1d54ab0ca64a2254e1cb0b808b3a98c3",
"assets/assets/hobby_terrorist.jpg": "f5120660b43b49b9f9cbce1f998f5a74",
"assets/assets/jump_n_run.jpg": "1cbab679930ff45b6b11c5ce5bf645dd",
"assets/assets/zombie_survival.jpg": "206d13b8f2b245ce5b50428b16e42d98",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "06c1a5443c1bf38ad87ef097226c3f32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aa1efeb9680c8d411b769c07f996174f",
"/": "aa1efeb9680c8d411b769c07f996174f",
"LICENSE": "4d9e77b402c895a1a1853608b8e633ad",
"main.dart.js": "c80bea4c88a4af30cf61cde02947e39d",
"manifest.json": "804bda134b7b5da4f3ba100bbaf7c96d",
"version.json": "980547175e325fe622a3362b84d55b6a",
"website/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"website/.git/config": "02b6ff03a4c4dc27b68a916371c1c429",
"website/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"website/.git/FETCH_HEAD": "1f16b09d9c660a8a1bd30d13bf897bb9",
"website/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"website/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"website/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"website/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"website/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"website/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"website/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"website/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"website/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"website/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"website/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"website/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"website/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"website/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"website/.git/index": "0f026bb13abb72c63f328436ff593aed",
"website/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"website/.git/logs/HEAD": "938c1eb30302dfaa945c03352ac2cf2c",
"website/.git/logs/refs/heads/main": "938c1eb30302dfaa945c03352ac2cf2c",
"website/.git/logs/refs/remotes/origin/main": "f53e9072395240abf1f7f80289963295",
"website/.git/objects/1a/011e32195102e1f91e99f249bea1bf42263ff4": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/314779a1": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/3414b1b5": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/81961fac": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/970a3e07": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/975cec40": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/b358b01": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/ed53886c": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/1a/f27ab8f9": "7c38da18e897d741653e43c663d56433",
"website/.git/objects/90/1fec06c2": "4106037e45957fe9a5efc1e0754a10c8",
"website/.git/objects/90/786d82c6b561a34aa925c76ceb1246f9e9adfc": "4106037e45957fe9a5efc1e0754a10c8",
"website/.git/objects/90/96efb223": "4106037e45957fe9a5efc1e0754a10c8",
"website/.git/objects/90/da5e0eeb": "4106037e45957fe9a5efc1e0754a10c8",
"website/.git/objects/90/dbcb686e": "4106037e45957fe9a5efc1e0754a10c8",
"website/.git/objects/d9/25290e58": "f293b155795c276be008e587fc4dd65e",
"website/.git/objects/d9/bd82c8b6": "f293b155795c276be008e587fc4dd65e",
"website/.git/objects/d9/eddf9a4e78e66a78f1040ecb8d83255bf6c118": "f293b155795c276be008e587fc4dd65e",
"website/.git/objects/df/3afa4fb5": "76f8baefc49c326b504db7bf751c967d",
"website/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"website/.git/refs/heads/main": "239e4d45627be67db47e3802e5f96595",
"website/.git/refs/remotes/origin/main": "239e4d45627be67db47e3802e5f96595",
"website/LICENSE": "4d9e77b402c895a1a1853608b8e633ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
