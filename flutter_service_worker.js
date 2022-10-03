'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c8896440cddcbde0df8714f6134b6b02",
".git/config": "eb2d22f106a55bcd3726a7fabe6f1486",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "ed1a62cd3aba75bc56942dc5cdbe8aa1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59d57ae1740f0834d4c7c6503e9d8004",
".git/logs/refs/heads/main": "416cecc1ad9a854d32f7bd80a2ad6d55",
".git/objects/0c/94f8ed6cb0ac955b3b59a2ba0e788f5c4173bb": "8e3d2948434e1f19d1e65bc5846da2f6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/a66924bae9e5e7a46c1cfba06a6720067d5f2f": "6f9f76c3d32fb8f2277506ae05f6f86b",
".git/objects/0f/17c260427877a71dd0b9100234a81103f961f6": "dce57ee4b98384c7c7b386118a04462c",
".git/objects/1a/3650a8c4d2ab385c2336552f0a35a61c5ed422": "2c038c5357b8af50992dcaec5d07cdbd",
".git/objects/20/2235c96fc62cd73cb3b82103e850d0b496ac24": "accb5e3d1bdae4fc70843a3415b4d68b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2c/c9066deb0e4d1f95b600bc6dad645b24393de7": "90946190a22b70719b09e5dca28a69ed",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/46adfd2751fe5094ff2d9900e9c916c42a6f03": "299f2e0378788ad88c6e98165f4ec904",
".git/objects/31/0a625e394c99cd2ab8dd6260c7fae00aa52a5a": "fc41f21aa21c6479b4c1fe9f1ec92d25",
".git/objects/3b/f5c962f0fa3c444497da46785b34424b63f76f": "d0a57ef23595728c3a9012306fe8cf8e",
".git/objects/3e/6842ee3158a085c120e1fed28b797a0c91827a": "c359015c39dd2de293688c9a63ae68f4",
".git/objects/3f/16070bfb90dd13498ff3d0908ad6b6bf565546": "df7c6f8ed6146e11a860fb64d07f78c1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4b/e0887435bcb494c4e0e4c1f99cc8990fd626a9": "c3ad4f34f7b116034c69da3f58b20fd4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/e5e9bf1e8c6af7ed36c932d30fc2bf95ef5562": "e86c803a5f4c80e85d0011ba2707a4b4",
".git/objects/5b/ccf8b1587580a3cb2934af5ddcbd1814a0cd0d": "e6c65c30ccea535ff7d174f68b93cf87",
".git/objects/5d/dbd6179c0d3e9df327ff49228440963e4e3fd9": "2638fad34d38b1e6ad89602adc564152",
".git/objects/69/2fab5e4d787f47248aa7873a2a5addcd12f8e0": "f7f3db045666c2a6be57ed2335710cc9",
".git/objects/69/e8ffbc8d8ed352989893de0f71fdf6b3d53c8e": "484aae6e66656246117edff73bdd2037",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/613a803e1d92ccedfd3f2a27df02b10612eb71": "1f6c93828c208b69f3db82bd88727391",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f69be0565d63ac15d29f2cab68cb93d623acae": "37269efc519984019ecda297d0e0d9c1",
".git/objects/9a/8316a579cf0904ac92892b76e10d2374865a77": "042429eb92c1a7ec74710a74d41d1b7c",
".git/objects/9c/2144b58a7aeb59d6beead3d63c73f3ad5860e4": "ef534ee878447c62e0e7093a8d796de6",
".git/objects/9c/7749fc3aac06544a581e4eb00296cd14f23577": "2699b927ec5e9c86888f02ef3dcad5b7",
".git/objects/a0/00133c33755a15beed54d70be065a155b010ba": "39507da41668bf27f27b576f3580d8b6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/7917489614a9f069b241a3bbdb6b48cb54d514": "351bf1eb4876419c4e8d45f00489afff",
".git/objects/a9/5533cb4d008a2bd47fe4fc39ff9943daf76f11": "7006f9eb51b2c6256a80590a8e396508",
".git/objects/a9/6ea2753adf6ca7b8a027f4d586b3fbeb5264e7": "30a026b646497b56190e093fa62b5100",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/2a6dbcf70d7eeaa5e9d6311a85801239c80708": "e58ef3d23bd53b386e6ec8a732c4f859",
".git/objects/b5/cb8ad32167da3ae71bdacad1747f54a2f2b880": "7bb4bb93f8ec5b767e691877c81a9a93",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/d22c242ef9258cb8e80c0765c89340baaf8361": "26acf74dbb37a06f734606ef68c702c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/ad828f2645ebd4e0a6d86fb9f6ebc55cf76d0e": "40af2fd35495f6a3cd3743b1d60aecd6",
".git/objects/dc/ad29083eafea3474d8b2c95c94d92dbbb47778": "d5d75c485be0f6223967be60b1324a3c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/1889f1f72f37dbdab5bc8f2920abe99b2b8c42": "f6de8c70251669001102b48fdf168e73",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/87aa04070c6631d403cf119161e03e17d4410e": "74c9db429d41b767b0385f4c94f423b5",
".git/objects/f8/4dd319a911103f386677a52d395f1b0d24ce56": "5f3b05755d60ecb54638bb5ac1ad948e",
".git/objects/f9/940a4539399bd5e2ea902b3782bd29c30dfc99": "068bab2aff19aca0e673fc8597001580",
".git/refs/heads/main": "28d3cad46aca595c2f8121a8b01b2d5e",
"assets/AssetManifest.json": "e0727e9e36e65172cb1349ca81ee47af",
"assets/assets/icons/check.svg": "dd735539b67e97568c995e71b425c523",
"assets/assets/icons/download.svg": "85409fc366bce11d88e301d19f0cb83c",
"assets/assets/icons/dribble.svg": "afe18831fbd18995b8414abc50dd1c3f",
"assets/assets/icons/github.svg": "fbee22e344e5baf90c46325fc6f0fe3f",
"assets/assets/icons/linkedin.svg": "c94cf806f5fccbdb0cd138f73214951f",
"assets/assets/icons/twitter.svg": "96281107839e6dd7eae214fc2b3d0f79",
"assets/assets/images/background.jpg": "6c30401cffa8c55fcb28461ad9871eae",
"assets/assets/images/client-01.jpg": "a8cf784c0b156eca9abc445bda2b60ce",
"assets/assets/images/client-02.jpg": "e25622d13030aae60d54843c38588c04",
"assets/assets/images/client-03.jpg": "1c40bab606aefabf545df0f535107dcd",
"assets/assets/images/logo.png": "85f483b926b14da6a87ed097761ae50f",
"assets/assets/images/project-01.jpg": "9732f3ae219a179802313b0c6d592d52",
"assets/assets/images/project-02.jpg": "dc60d019ee7f5546d8b815ce9ca837fa",
"assets/assets/images/project-03.jpg": "ad46b01c47af2cd3d1431e06494caffc",
"assets/assets/images/project-04.jpg": "54d3c3cacbe54c6acf176e6bc0ef0e9c",
"assets/assets/images/project-05.jpg": "3b8a778a22ef08e5bab2ed9c41749be1",
"assets/assets/images/project-06.jpg": "69c1835b11602d73f02f10a2238ca881",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cbd85a1659681d101b106c2ba9eadd5b",
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
"index.html": "cd9b77b516e7fc8834199a9cccb196ea",
"/": "cd9b77b516e7fc8834199a9cccb196ea",
"main.dart.js": "6133cd8dcdfa6a72a57513a3b7c87638",
"manifest.json": "aa45fb1d373e073217d83d8396fa4bd1",
"version.json": "a7c8c16d726467472e019fead389906e"
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
