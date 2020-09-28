/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1b8c9b4cdbeb0a7e02ac9d92db4eb916"],["/archives/2020/09/index.html","c32d4aff98460c873213941b6174a813"],["/archives/2020/09/page/2/index.html","9f728058f628bdfaca2451f43b0701f8"],["/archives/2020/index.html","7f8355483accd8e8f96e1a8328c76f08"],["/archives/2020/page/2/index.html","e2580ff06261684f621cf184ee84ec9f"],["/archives/index.html","49535e41443336a4f2e400a5ffb1e0aa"],["/archives/page/2/index.html","7972b43b4a814a158a725bc3bd75b095"],["/books/index.html","8658724e582b44ec391aaa7158fd9233"],["/categories/index.html","1c2bc6bf56d6dbfa16ed2dcb5ff7ee84"],["/css/index.css","55c9366c34d766690e5b656d519b5671"],["/css/mycss.css","f45838d909955f5915062bf3025961cd"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","3d7ae71b22d2b0978c7d53225487835e"],["/image/001.jpg","bf315b98a8f3b1dc336a8cde4c4466d1"],["/image/002.jpg","75072746fe49f956bc5c5c352570b493"],["/image/003.jpg","02bfa6d154ad0770ee02971a0404dd43"],["/image/004.jpg","d633991c6172341596f6ba75ebeac216"],["/image/005.jpg","94dd009c80e90081ca0eaa14946fb3e5"],["/image/006.jpg","a78f34e2485144dcf74c67abcfdf3c68"],["/image/007.jpg","3c6f407299064fab6f73f3cbcdd408a9"],["/image/008.jpg","e6437393e255ddc4df5f6c1759fa3f47"],["/image/009.jpg","a69257be92e8f40f5bb6aa39975c2c0e"],["/image/010.jpg","c4e8bb81d7bb61aca65b5b8e6eddd027"],["/image/011.jpg","2f93d8397912956b3c91447a72cca223"],["/image/012.jpg","d9a9fc312219e782c8de25d4bce620a1"],["/image/013.jpg","1872b25aae2afc8e77c58103a67ce0da"],["/image/014.png","fd156ea55df3a47b8b0f3769fb5df5a0"],["/image/015.png","3779c55d08ed375c03cc96977870f63b"],["/image/016.jpg","3afdc523f3c9b9c2fe33c3df257f6dc1"],["/image/017.jpg","f870ab55084f491b03fd73014d4555ae"],["/image/018.jpg","ef899a6cb7f101d8de065827e4ad42e7"],["/image/019.png","dece61f0b2a035d035710feff7e6eb7b"],["/image/020.gif","c89220c5ab2637a06139e29aa2127374"],["/image/021.png","188eea2bf0595cf9e67466ecb8ee94de"],["/image/022.jpg","3a894d0fd8bfb9d64fcd0947ead34ded"],["/image/022.png","3c2de63ae6e4806fdf374491f52d900a"],["/image/微信图片编辑_20200917004058.jpg","02bfa6d154ad0770ee02971a0404dd43"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/rabbit/1.jpg","6657a1e3c35d0dc93feabad0f56a97a6"],["/img/rabbit/2.jpg","3ae100ca54794aaa89b3385de39f3133"],["/img/rabbit/3.jpg","bbe79316e45bc7947d669d35102861e8"],["/img/rabbit/4.jpg","f26da4b18b38f74f0e6ec4928bcbb754"],["/img/rabbit/5.jpg","9c22835e19e851f65104aa58bc22cbfe"],["/img/rabbit/6.jpg","a7b29e72bfa5243b6a772696f6aef3f9"],["/img/rabbit/first.jpg","e78df7e73032968eb3309c6705ed9338"],["/img/rabbit/niu.jpg","16db9a8b3405e3777e6d34d48aa80991"],["/img/rabbit/top_img.jpg","aee734c5c3fbf91d35de86f8949289b4"],["/img/rabbit/user.jpg","59efd169e29ffdfe5b0d927c11dc5f9e"],["/img/wx.png","80ba301c6f50e7935e234c216cd12d1d"],["/img/zfb.png","1f4a71f4ab88119cce5b0fedd541a71a"],["/index.html","e0779aeebede9fb3456716a34f82d109"],["/js/calendar.js","ca9cd95450a683fbac01a20d86868543"],["/js/languages.js","f91da663f3967fbadeec813b776e63c8"],["/js/main.js","4898030387012f8af71563ef8353433a"],["/js/myscript.js","9b694a4c0696926a0145e5322264d2fe"],["/js/rotation.js","67eadc20b6271ef2dd7578733f3c45bf"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/link/index.html","e2388ebea8dfee0600a6d32cca5a9449"],["/live2d-widget/README.html","d3bd69397361cda7d447c5707a67e791"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","a6165664717b0386b000733eade12fd5"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","1ca96f99c3d4ff3b113545c76419b823"],["/music/index.html","19e896f7821d9c748c734ea9923c84e5"],["/page/2/index.html","73355a9872ef89863bb61e42fb1e9b20"],["/posts/16107.html","9d15ee411082ca68d577f42e17545a31"],["/posts/1ae7ca75.html","54044ce3d3466b4a5810648f0e5de923"],["/posts/295a9df3.html","b88c57fe5d20d7575063c0432f38ecec"],["/posts/297c98f1.html","e7057cbc430bed3b5d4ef324ec3b0b17"],["/posts/2aa54dbf.html","dcfb7d8e3157c31ad1386ee5a5cb7265"],["/posts/358b7717.html","9b1b5f14915986deecc4b95578e29666"],["/posts/48220063.html","ac29996ced3a1f5d9cb7d357341f4b38"],["/posts/6414ea5e.html","6c12fc00f35640c5b9f734560a0e7df4"],["/posts/7872.html","c87d0966c64a65b040b2ca5a70d5d2b2"],["/posts/7f003a75.html","0d4525c9d0fb7c37258e73ea645fce0c"],["/posts/cb25713c.html","da87dc793cca13f6f7bdd1f6c8a43739"],["/posts/d15db6a3.html","f7e028b69d6e6c07788414406c21d3b5"],["/posts/de8ffd2e.html","fb2c606773917c02e143ed6ea60af965"],["/posts/e0a4257a.html","3bdb0923e6f3355f892fe591d01da4a7"],["/posts/e60f7207.html","e3aa0c39f2dce6849de8aba211947b5e"],["/posts/fe758c0a.html","7b7856717cd2dc6e32fbfcfd1da1fa4c"],["/posts/undefined.html","91c9b4ce3cad61c837d68ef02380f254"],["/sw-register.js","22595434fe906a9cbeec959ec8b88089"],["/tags/Background/index.html","7c24690bd070b93182ac60ca0fb71ff8"],["/tags/CSS-尺寸-Dimension/index.html","6e47afb1f7d166c2737509cda2c86a33"],["/tags/CSS/index.html","f08c46d6a69b800763db88d240ac4064"],["/tags/CSS3-边框/index.html","5d783ba88754daebdf8cb1641a9a0ba3"],["/tags/CSS基础知识/index.html","1b7e271b54de06c6b7c90f15cb8e08f2"],["/tags/Font/index.html","5d5024dd73df9cf4b0d7e4201cd84f60"],["/tags/Fonts/index.html","8e0fa37a721eb50ddcb15a39d6a818e5"],["/tags/HTML5/index.html","32be951cb9274307d4eb8828261a4dbc"],["/tags/HTML新属性/index.html","6016874b1273335fa797c0247c67a211"],["/tags/Text/index.html","d8d3c695444ab6e196eb32439cdd9d01"],["/tags/Visibility/index.html","b58956d7efff77349fd1535093dd00b8"],["/tags/border/index.html","14ae5d33b1e4be38c230c33cd81e394e"],["/tags/border的使用教程/index.html","21b8e3bf9640d14f4d275edca0dac047"],["/tags/display/index.html","b78c2a35c14dac61dbd2db11210b520d"],["/tags/float/index.html","1ad78e430ae05ab9f5332f0f05a1cb61"],["/tags/float使用/index.html","5a07a68c02e88373014af76e0b709ebe"],["/tags/index.html","2e4790bb025c015cf828624e8a016931"],["/tags/outline/index.html","5adc2499bef716c61361fc46d0c8756a"],["/tags/position/index.html","e3adba3f618a03d1d7c070bf6e029622"],["/tags/“标签外挂”，-Note-Gallery相册图库-，“Gallery相册”，“Tag-hide”，“mermaid”，“Tabs”，“Button”/index.html","eaed0583d3f27964dcb2934f0e023987"],["/tags/列表样式/index.html","eefbb9aea1960bcda37fa590f6bab9f8"],["/tags/可见性/index.html","561e600a42aa1e32bb85d0f5edb9897c"],["/tags/定位/index.html","8c8a74c75fbdca847c4a5a86e7e9fa8f"],["/tags/显示/index.html","e93775d60c7e7d7ab8d89513e6e47c1a"],["/tags/盒模型/index.html","b1db549d1c9f7b11cc8f13227dd5729a"],["/tags/表格样式/index.html","e1327da56ddef74e57a82f402ac3cda4"],["/tags/轮廓/index.html","a0f67dd23cfa1a9a0eb5a1a454cc2928"],["/tags/链接-links/index.html","a058a203ccf3aeec0e47f2b6c9d578e8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
