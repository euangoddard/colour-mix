importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js"
);
workbox.precaching.precacheAndRoute([
  {
    "url": "android-chrome-192x192.87fff06b.png",
    "revision": "cc756fcb8860e1f9b728c0694e0ef358"
  },
  {
    "url": "android-chrome-512x512.8317aa54.png",
    "revision": "d323eebd70b31fc70674c3de1717866c"
  },
  {
    "url": "apple-touch-icon.89582f1e.png",
    "revision": "445a5ef4cf1140ebab183f13b50486fd"
  },
  {
    "url": "dropper.405140ea.svg",
    "revision": "c45d2579ddf7e20876f5bf3446d4b294"
  },
  {
    "url": "favicon-16x16.d7266d5f.png",
    "revision": "0d81dabedd3bf72f88737d0831d2a822"
  },
  {
    "url": "favicon-32x32.d5c7030c.png",
    "revision": "7860c034a3273d9ff11181a43844716e"
  },
  {
    "url": "index.html",
    "revision": "91cc63665a1ed36fc7d0c1c7a4212252"
  },
  {
    "url": "main.0e8948de.js",
    "revision": "d6e36492c0d3b6a11cc3c4e20451db92"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "05a7a9237cc734c9e4c28742140527da"
  },
  {
    "url": "styles.2f27e10d.css",
    "revision": "5a104fc5f5d07bfdcfb2e728d395936d"
  },
  {
    "url": "sw-register.9a1d39be.js",
    "revision": "c3f71b4a60c75a79e95736f01f583ae0"
  }
]);
