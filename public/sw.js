if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CV_Akim_BENCHIHA_EN.pdf",revision:"9444891ca5c6ad526bb7b4531adb4a71"},{url:"/_next//static/media/akim2020.0ae75927.jpg",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next//static/media/bitmoji-cactus.1ca356ea.png",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next//static/media/bitmoji-hi.66c98c9f.png",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next//static/media/bitmoji-question.e659d521.png",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/Y8WajdANCnml11j7UK1ga/_buildManifest.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/Y8WajdANCnml11j7UK1ga/_middlewareManifest.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/Y8WajdANCnml11j7UK1ga/_ssgManifest.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/165-07e7adcc6d409156.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/1bfc9850-bcaee15dceed619e.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/247.b722767b8303fcf9.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/29107295-a2d0c8e72019a3ed.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/527-8c252b0085a2275c.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/main-ec95d66e0c86d60d.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/pages/_app-b5b446aa4c4f8462.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/pages/feedback-5cf6d67b2c1fa834.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/pages/index-f568c53231ad988d.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/_next/static/chunks/webpack-ea01ef2ed14f43f9.js",revision:"Y8WajdANCnml11j7UK1ga"},{url:"/akim2020.jpg",revision:"ce42d9064dbb0918334142eed8cfb312"},{url:"/assets/bitmojis/bitmoji-cactus.png",revision:"2c464223c0ebd3829484c3f7b663681d"},{url:"/assets/bitmojis/bitmoji-door.png",revision:"5e3f24b4e17eaf0f82dd7ec5e5ea712b"},{url:"/assets/bitmojis/bitmoji-hey.png",revision:"2a9c13a95b5f4fcd06c71b6ed6a1a811"},{url:"/assets/bitmojis/bitmoji-hi.png",revision:"f481ce1cf0b08e6f77ab36c787dbb015"},{url:"/assets/bitmojis/bitmoji-question.png",revision:"aa7341f26e3829bf480ccbaccc724c53"},{url:"/assets/bitmojis/bitmoji-think.png",revision:"83eb18fc110fa7f7bc8fd013aadb1161"},{url:"/assets/favicons/favicon-16x16.png",revision:"ab7c4154590b71c3c217e7d1a5cce2c5"},{url:"/assets/favicons/favicon-32x32.png",revision:"1b214ba4ba1d439520dcfa310401e9db"},{url:"/assets/favicons/favicon.ico",revision:"9d9526a3f95b0483c9f7ec3ef71ab871"},{url:"/assets/icons/android-chrome-192x192.png",revision:"e49ecea016c33658acc40e0ea9275e29"},{url:"/assets/icons/apple-touch-icon.png",revision:"01cacd3d5b34dac79ac8a913fe1d2ed1"},{url:"/assets/icons/icon-128x128.png",revision:"d94729e683bea6ea11ce253aae846c94"},{url:"/assets/icons/icon-144x144.png",revision:"6950d3f8274706b66e07f461b332c353"},{url:"/assets/icons/icon-152x152.png",revision:"870a75cda86688a5d3fa4d49ae78dbbb"},{url:"/assets/icons/icon-192x192.png",revision:"83afc694aeb39b21dd7a362194056df2"},{url:"/assets/icons/icon-284x284.png",revision:"78da146743f1cde306aa654755067338"},{url:"/assets/icons/icon-384x384.png",revision:"1cf186cc7835cf825f330709caaed857"},{url:"/assets/icons/icon-48x48.png",revision:"b1106be3148892bb9c747456734d11c9"},{url:"/assets/icons/icon-512x512.png",revision:"50621ba1aa448ff270c35180b4c9a99e"},{url:"/assets/icons/icon-72x72.png",revision:"9bd7985a2d582f13b44e50ad19a40da6"},{url:"/assets/icons/icon-96x96.png",revision:"b1b608166cbb29d6175fe23cbe124ac9"},{url:"/assets/icons/mstile-150x150.png",revision:"c20567f5f10a4a5a4250db2c73fc17d1"},{url:"/assets/icons/safari-pinned-tab.svg",revision:"8652ed270cc19faf8bdefe6a28289310"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/portfolioShot.png",revision:"6004ffce6aac6faebadd7165e195e018"},{url:"/projects/backendNodejs.png",revision:"0205ce3fb1ad75bf41475700aae17029"},{url:"/projects/cryptoSender.png",revision:"66065e3b6c765cf3359b4ec3b4138f6c"},{url:"/projects/metaverse.png",revision:"eeff6bf43c4126e9c2f10aae47d2ab17"},{url:"/projects/solidity.png",revision:"af754fabdf729eaf03164c3568144e33"},{url:"/projects/spotify.png",revision:"446edcb1bbf7ec218fe3cf0669c8d642"},{url:"/site.webmanifest",revision:"9faa2ce76d625970d3ca728b8aa74783"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
