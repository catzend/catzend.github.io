"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Catzend"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"da70b56d3e547852cb476ae5371808b3",url:"./404.html"},{revision:"252f3ef79c7a6b641879e1a482e36eec",url:"./archives/2020/09/index.html"},{revision:"a4efa201a67614e1a9338e0923dee270",url:"./archives/2020/09/page/2/index.html"},{revision:"dd62b4641bc0541efefc7dd25c2c853a",url:"./archives/2020/10/index.html"},{revision:"969ced8e5525670bc2b1e8668e87a661",url:"./archives/2020/index.html"},{revision:"d91661455f9337326d17916acd804a70",url:"./archives/2020/page/2/index.html"},{revision:"73fd20edf2776e6b243a82890dcc87b2",url:"./archives/index.html"},{revision:"6027535f4676703019f20b40184870ac",url:"./archives/page/2/index.html"},{revision:"40d4a29b2bab6cff4ee20797da6f78dc",url:"./books/index.html"},{revision:"5bb1f1282369068ab8c4c25d1fee397d",url:"./calendar.json"},{revision:"b86d7fa2e935152d21b825701ab2f11a",url:"./categories/CSS/index.html"},{revision:"4a4441a735633aff86ef51e5383e2992",url:"./categories/CSS/page/2/index.html"},{revision:"d8f1596697b19397d3b268a923c2c721",url:"./categories/index.html"},{revision:"55c9366c34d766690e5b656d519b5671",url:"./css/index.css"},{revision:"f45838d909955f5915062bf3025961cd",url:"./css/mycss.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"6bc63c04847de851675578cfda0588c4",url:"./games/index.html"},{revision:"b9b2b455a3c4a36b4527e5d913a5fcdf",url:"./img/pwa/manifest.json"},{revision:"1377f57c0ffa4200d2a028192d52e86d",url:"./index.html"},{revision:"ca9cd95450a683fbac01a20d86868543",url:"./js/calendar.js"},{revision:"f91da663f3967fbadeec813b776e63c8",url:"./js/languages.js"},{revision:"4898030387012f8af71563ef8353433a",url:"./js/main.js"},{revision:"9b694a4c0696926a0145e5322264d2fe",url:"./js/myscript.js"},{revision:"67eadc20b6271ef2dd7578733f3c45bf",url:"./js/rotation.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"728a35bf1e2893180375ef9fe155733d",url:"./link/index.html"},{revision:"ed6060817a4de0735ea29ca62e644ee9",url:"./live2d-widget/autoload.js"},{revision:"8f4281df7112a31e3aed1a2684aa610d",url:"./live2d-widget/demo/demo.html"},{revision:"3beb35bbaed25473731415aaa79474ba",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"d3bd69397361cda7d447c5707a67e791",url:"./live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"c0b987bdddfa732f8505a8d139bdb69b",url:"./live2d-widget/waifu.css"},{revision:"b30d1f08ab8b35d4913b3244e2b5d372",url:"./live2dw/assets/wanko.model.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"61083ecb5738f72bb50b97d05f1b3e3f",url:"./movies/index.html"},{revision:"57b3e8fc16f612877141ecf0e42918df",url:"./music/index.html"},{revision:"829820893cad045c6a2c61d1e161caa2",url:"./page/2/index.html"},{revision:"f37cc077d3c6564e0b52df2f2105adf3",url:"./posts/1ae7ca75.html"},{revision:"932eee175362a8e3a2c8476eca12c668",url:"./posts/295a9df3.html"},{revision:"15c2681da4a9408a2420dc277217aa55",url:"./posts/297c98f1.html"},{revision:"d7b70ae7277bada975d87107d1b2d707",url:"./posts/2aa54dbf.html"},{revision:"6b03aba5eebd2602bdc3cc3738a735ed",url:"./posts/358b7717.html"},{revision:"3fcdc62e8b889211e8b52368d764c8b3",url:"./posts/3fbb8f8a.html"},{revision:"ed0eab9f40f5935944aee3f78f26f337",url:"./posts/48220063.html"},{revision:"5dc0d206138ebffae462ba80dafe7b27",url:"./posts/6414ea5e.html"},{revision:"4ec1508654d55c436cbe33beb353a1eb",url:"./posts/7872.html"},{revision:"8af4c30522c6d9cfda93d9f8e4836aaa",url:"./posts/7f003a75.html"},{revision:"5418b943cb3baecfc4416f47365df3b6",url:"./posts/cb25713c.html"},{revision:"775e74c05f10951636abd3170ca7e46f",url:"./posts/d15db6a3.html"},{revision:"ef8ac7af699f76f5dc2979b2023a4fe8",url:"./posts/de8ffd2e.html"},{revision:"c8b7c21fa70dc67955a0b91f56f349b2",url:"./posts/e0a4257a.html"},{revision:"02eed076be2a833e74de173cc054fcbf",url:"./posts/e60f7207.html"},{revision:"85bd9cbe8110df853a662144b12e6ceb",url:"./posts/ece6e1f.html"},{revision:"433ec341dbad45c0df560f7301e13604",url:"./posts/fe758c0a.html"},{revision:"4288db11f20ab4b7ad6278f8f2a3b742",url:"./posts/undefined.html"},{revision:"a3f335fa63db4f342232601762bcc133",url:"./sw-register.js"},{revision:"47c14443611a3eb170ba92629a9c5132",url:"./tags/“标签外挂”，-Note-Gallery相册图库-，“Gallery相册”，“Tag-hide”，“mermaid”，“Tabs”，“Button”/index.html"},{revision:"96b763900b4f4343eb8f1e7bcd7acc6b",url:"./tags/background/index.html"},{revision:"63878eb1b53ca863c1511303f88fa25c",url:"./tags/border/index.html"},{revision:"a7221cbdbfe6d564181899865a4bbc05",url:"./tags/border的使用教程/index.html"},{revision:"142c7fe6bde74d121a484e2c91a42995",url:"./tags/CSS-尺寸-Dimension/index.html"},{revision:"2973bdcbeac775d444290283e4caf99f",url:"./tags/CSS/index.html"},{revision:"1c6041fb5c6a5626e9fdadd6cf3f677e",url:"./tags/CSS3-边框/index.html"},{revision:"ff8f7bfc96d1fd2dbbf76df8764907b7",url:"./tags/CSS基础知识/index.html"},{revision:"9393a64e52fa06f8f3be0dc9532af545",url:"./tags/CSS背景/index.html"},{revision:"5cf97612a00cd6d949e436cb271a2c0a",url:"./tags/display/index.html"},{revision:"6e763cc999c5c0ea237c2c68f7e31c1c",url:"./tags/float/index.html"},{revision:"54717c48e41d140f3fd8ace2cb35c1b5",url:"./tags/float使用/index.html"},{revision:"9b76f378d4f271f8ecaee2867051aec7",url:"./tags/Font/index.html"},{revision:"55af073a3fd7720968ed3db8601a78f6",url:"./tags/Fonts/index.html"},{revision:"b9b52e625196a729d66383a64b82565b",url:"./tags/Gradients/index.html"},{revision:"61772370449f7a1cdf91115dd1b1f3c5",url:"./tags/HTML5/index.html"},{revision:"027f7fde62241551ba9ca56d29516cb7",url:"./tags/HTML新属性/index.html"},{revision:"59c3ec9ff04df342492e5db08cf418f5",url:"./tags/index.html"},{revision:"57b81eae4e1c7d81c17ec27bf4e15d03",url:"./tags/Linear-Gradients/index.html"},{revision:"043fab6233cc2cf4d5c2afd171652cfb",url:"./tags/margin/index.html"},{revision:"30cd2a6ab27a85901f703dfc314ee568",url:"./tags/outline/index.html"},{revision:"0a5d178f213c3684b0298a739bc79c15",url:"./tags/padding/index.html"},{revision:"8b854a163b53707ab48a854e7eed3a6d",url:"./tags/position/index.html"},{revision:"4a14e2bfa05694090083f0b9d3806440",url:"./tags/Radial-Gradients/index.html"},{revision:"9ed0621f429e2db495b2dd46a4ed90f9",url:"./tags/Text/index.html"},{revision:"18a373c825e71006d57ce52efbfd2448",url:"./tags/Visibility/index.html"},{revision:"b2ab099453583d1fa36070511fe5670d",url:"./tags/列表样式/index.html"},{revision:"68c19664942d29cd430c3f95f177ab2d",url:"./tags/可见性/index.html"},{revision:"ad06e8cdfbd25f131883309a7acb8cfd",url:"./tags/定位/index.html"},{revision:"c63af8b62d2686d21295c821ba12e9e3",url:"./tags/显示/index.html"},{revision:"99e5a7cfb2d377b644205cf698b34444",url:"./tags/盒模型/index.html"},{revision:"ac76f02f1c34725970fd86afbf969422",url:"./tags/表格样式/index.html"},{revision:"e7aef23be086b9ea479a493b0b8a2750",url:"./tags/轮廓/index.html"},{revision:"706f55be1263574be4f078da3eaf3bc5",url:"./tags/链接-links/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();