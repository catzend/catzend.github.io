"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Catzend"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"13bfb0aabcf1b1a13052e27f0b087c52",url:"./404.html"},{revision:"d4d3d85f7c467f7cc07ea8bd4bd22bb8",url:"./archives/2020/09/index.html"},{revision:"eb4b3f7157f2982693a36f2acd7e9ebc",url:"./archives/2020/index.html"},{revision:"fa5f15302ed5349ed70086d619c57f2a",url:"./archives/index.html"},{revision:"899c2b6ff4631ec1ee300ab9e9085804",url:"./calendar.json"},{revision:"7ba5256ae213580474fc7d1ec0803cf6",url:"./categories/index.html"},{revision:"55c9366c34d766690e5b656d519b5671",url:"./css/index.css"},{revision:"f45838d909955f5915062bf3025961cd",url:"./css/mycss.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"b9b2b455a3c4a36b4527e5d913a5fcdf",url:"./img/pwa/manifest.json"},{revision:"fc69ae01bc4a29038a8e20868994f4ca",url:"./index.html"},{revision:"ca9cd95450a683fbac01a20d86868543",url:"./js/calendar.js"},{revision:"f91da663f3967fbadeec813b776e63c8",url:"./js/languages.js"},{revision:"4898030387012f8af71563ef8353433a",url:"./js/main.js"},{revision:"9b694a4c0696926a0145e5322264d2fe",url:"./js/myscript.js"},{revision:"67eadc20b6271ef2dd7578733f3c45bf",url:"./js/rotation.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"b47e9989b921ef2b23e6338ca8a360be",url:"./link/index.html"},{revision:"b30d1f08ab8b35d4913b3244e2b5d372",url:"./live2dw/assets/wanko.model.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"db5805d1d983c9b4ff83ab03c59c1c78",url:"./music/index.html"},{revision:"a4b533d833bf52eb836e8ce68cb234af",url:"./posts/16107.html"},{revision:"f3ebfe30ab5851b60b0113524a95c7a0",url:"./posts/1ae7ca75.html"},{revision:"3c60867457f67d932f0c73302516deec",url:"./posts/297c98f1.html"},{revision:"8ecd886e4af403e295ea07e89e3b61e0",url:"./posts/6414ea5e.html"},{revision:"c7ec61857c721d09ad39b06a7cd41157",url:"./posts/7872.html"},{revision:"d9d40f6d35ff598c750aa03ee4871544",url:"./posts/cb25713c.html"},{revision:"7b1fc4b5031b6a93bb38b52902f8615c",url:"./posts/d15db6a3.html"},{revision:"039173393e95c1e4b46214dd406f962e",url:"./posts/de8ffd2e.html"},{revision:"57063fd4b6046a8b06ae0533dd2bdfec",url:"./posts/fe758c0a.html"},{revision:"49a8ff44bd59d46d055d197f157f0dd5",url:"./sw-register.js"},{revision:"20d2eefd70acc3d49b762a99a03e952e",url:"./tags/“标签外挂”，-Note-Gallery相册图库-，“Gallery相册”，“Tag-hide”，“mermaid”，“Tabs”，“Button”/index.html"},{revision:"f2b8af919cab6e0b91eb92e203db1755",url:"./tags/Background/index.html"},{revision:"19f3ee0e214605b3d72564c422b0274d",url:"./tags/CSS/index.html"},{revision:"7892e127c89a0508e3fadd496bb28414",url:"./tags/CSS基础知识/index.html"},{revision:"e9772f3ead2d564238adfdfba297e71a",url:"./tags/Fonts/index.html"},{revision:"e26d1b879f5c5fb960135efdb4c4ca19",url:"./tags/HTML5/index.html"},{revision:"c8321fb5a60ba28eb8928d4df2d95c09",url:"./tags/HTML新属性/index.html"},{revision:"344fecccf93e079d75c207ba9c854f54",url:"./tags/index.html"},{revision:"ea87a392840fc099da10d556a5fd0c13",url:"./tags/Text/index.html"},{revision:"0200599fd9c1dfb2a1f2d61d85e582fc",url:"./tags/列表样式/index.html"},{revision:"72492d391799d7d0e79fc1e71a483715",url:"./tags/盒模型/index.html"},{revision:"175d42522c8443330e9f72f1f338265e",url:"./tags/表格样式/index.html"},{revision:"2a2a556b31015f6e2ec116ab9065f4f9",url:"./tags/链接-links/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();