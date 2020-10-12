/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","adc28f1f973d3784dd0f157b2bb64b35"],["/archives/2020/09/index.html","5fa6d22ed23fc41cc008568729288240"],["/archives/2020/09/page/2/index.html","9db2d0fba696da9344f9b55b682c675c"],["/archives/2020/10/index.html","a85d1b503879afb24e7d1f0702a72c7a"],["/archives/2020/10/page/2/index.html","d6bb4eff4edd977dbc749f04c25dd789"],["/archives/2020/index.html","28f3318259bf4fdda0e3c2a352f496d7"],["/archives/2020/page/2/index.html","e2db113477cb3b116d77a05f0b00ca9b"],["/archives/2020/page/3/index.html","559db84c8ab1859b68be7347b5929d59"],["/archives/2020/page/4/index.html","3cce6f9f3ab7a7c0537f8ca074eb1efe"],["/archives/index.html","042a4eba08a43262b3e94206950afd71"],["/archives/page/2/index.html","84b04d12b8f26fb7a0a144c04e4657de"],["/archives/page/3/index.html","42ceb80a3fea587273ec44e0c9c54907"],["/archives/page/4/index.html","ea9a67883368e9780997202310f955a3"],["/books/index.html","58430200e1e7c21bae679112914b6d45"],["/categories/CSS/index.html","f55882aa3314bbc2b96b0a9462f2c911"],["/categories/CSS/page/2/index.html","38f0aa5b5340b4d32697ea26d804e936"],["/categories/JavaScript/index.html","d7f1ab06311b38f000fb4b149a2c3575"],["/categories/index.html","784ade3d1b7a3612c0f2881e6f8c8457"],["/css/index.css","55c9366c34d766690e5b656d519b5671"],["/css/mycss.css","f45838d909955f5915062bf3025961cd"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","2117949a4969237bf9d95bd235aef5c4"],["/image/001.jpg","bf315b98a8f3b1dc336a8cde4c4466d1"],["/image/002.jpg","75072746fe49f956bc5c5c352570b493"],["/image/003.jpg","02bfa6d154ad0770ee02971a0404dd43"],["/image/004.jpg","d633991c6172341596f6ba75ebeac216"],["/image/005.jpg","94dd009c80e90081ca0eaa14946fb3e5"],["/image/006.jpg","a78f34e2485144dcf74c67abcfdf3c68"],["/image/007.jpg","3c6f407299064fab6f73f3cbcdd408a9"],["/image/008.jpg","e6437393e255ddc4df5f6c1759fa3f47"],["/image/009.jpg","a69257be92e8f40f5bb6aa39975c2c0e"],["/image/010.jpg","c4e8bb81d7bb61aca65b5b8e6eddd027"],["/image/011.jpg","2f93d8397912956b3c91447a72cca223"],["/image/012.jpg","d9a9fc312219e782c8de25d4bce620a1"],["/image/013.jpg","1872b25aae2afc8e77c58103a67ce0da"],["/image/014.png","fd156ea55df3a47b8b0f3769fb5df5a0"],["/image/015.png","3779c55d08ed375c03cc96977870f63b"],["/image/016.jpg","3afdc523f3c9b9c2fe33c3df257f6dc1"],["/image/017.jpg","f870ab55084f491b03fd73014d4555ae"],["/image/018.jpg","ef899a6cb7f101d8de065827e4ad42e7"],["/image/019.png","dece61f0b2a035d035710feff7e6eb7b"],["/image/020.gif","c89220c5ab2637a06139e29aa2127374"],["/image/021.png","188eea2bf0595cf9e67466ecb8ee94de"],["/image/022.jpg","3a894d0fd8bfb9d64fcd0947ead34ded"],["/image/022.png","3c2de63ae6e4806fdf374491f52d900a"],["/image/023.jpg","2427c188bbb645e735e7f29da75aed7e"],["/image/024.jpg","8ece3082bcbaf6c12e1686975ef90b6a"],["/image/024.png","d225b943f5a264d88eebde068be01965"],["/image/025.jpg","6f729456d5ba9e99d4e7f88a211fa7ea"],["/image/025.png","9d4d0ad04fc3b8d21271f023acb19b22"],["/image/026.jpg","4006003e1fb54358b3d8b4f93de76a17"],["/image/026.png","a0b8d6c46ec2bab9f9334da6d2b04812"],["/image/027.png","bb2349307818a89b85684aee75b5dac0"],["/image/028.png","5e7b1d72cab26400aa62623610d78e46"],["/image/029.png","d42bc7116525edfbcc6ca918b3f9c345"],["/image/030.png","586802c8dca4ef1f40ad393bef55b2d4"],["/image/031.png","69ece8b907b0b1f811ce3a6e36ce3d4a"],["/image/032.png","cd4c85a6a3c4ae039e40a168d99e1619"],["/image/033.png","8d6219385477ac3c50a7b73f9fd07e66"],["/image/034.png","fef9ef323aa038bc321a73058c3d6e3f"],["/image/035.png","76461a579118e24d74fd112d4c7cef94"],["/image/036.png","121e62c4b2a1779e193ff8d41f130b5c"],["/image/037.png","fb7f36e50244f6629ea92ee7fa489c76"],["/image/038.png","8b402883445b842ca38727fc09f60d00"],["/image/039.png","0ac377493a33869f2829c4b1d3d70100"],["/image/040.png","940f145a234cc9972dc232668bb96766"],["/image/041.png","7e8a06a9347193bcb4a969962ebfa3aa"],["/image/042.jpg","6215cf568af888a6442517b68a2825d8"],["/image/042.png","0ec9e81c35c66f66b23e724c6063fce8"],["/image/043.jpg","4a8a486060e81a05895277c987af5c96"],["/image/044.png","b1beedefc6a3eb52960a682ad0121926"],["/image/045.png","aade7abc9eb8c177c66d0128b1cc6ca9"],["/image/046.png","70f89eba41edc0a70278c44b74747294"],["/image/047.png","0c40e2971edc015685f43798e9a5b90f"],["/image/048.jpg","e24a8660e626cd488ee1e21645a92bb0"],["/image/049.png","0d93c40b34a77529f71ddd927dd49c82"],["/image/js/01.png","bb0a78d59dd39a11a1d843f28adc75f6"],["/image/js/02.png","f4f879f0712d36e9cd2b3930e95bef85"],["/image/微信图片编辑_20200917004058.jpg","02bfa6d154ad0770ee02971a0404dd43"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/rabbit/1.jpg","6657a1e3c35d0dc93feabad0f56a97a6"],["/img/rabbit/2.jpg","3ae100ca54794aaa89b3385de39f3133"],["/img/rabbit/3.jpg","bbe79316e45bc7947d669d35102861e8"],["/img/rabbit/4.jpg","f26da4b18b38f74f0e6ec4928bcbb754"],["/img/rabbit/5.jpg","9c22835e19e851f65104aa58bc22cbfe"],["/img/rabbit/6.jpg","a7b29e72bfa5243b6a772696f6aef3f9"],["/img/rabbit/first.jpg","e78df7e73032968eb3309c6705ed9338"],["/img/rabbit/niu.jpg","16db9a8b3405e3777e6d34d48aa80991"],["/img/rabbit/top_img.jpg","aee734c5c3fbf91d35de86f8949289b4"],["/img/rabbit/user.jpg","59efd169e29ffdfe5b0d927c11dc5f9e"],["/img/wx.png","80ba301c6f50e7935e234c216cd12d1d"],["/img/zfb.png","1f4a71f4ab88119cce5b0fedd541a71a"],["/index.html","9bb0ccd0c9f161e01e944925ee891344"],["/js/calendar.js","ca9cd95450a683fbac01a20d86868543"],["/js/languages.js","f91da663f3967fbadeec813b776e63c8"],["/js/main.js","4898030387012f8af71563ef8353433a"],["/js/myscript.js","9b694a4c0696926a0145e5322264d2fe"],["/js/rotation.js","67eadc20b6271ef2dd7578733f3c45bf"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/link/index.html","21c5013d3b5ca5159c7ccfdd8ab9bb9d"],["/live2d-widget/README.html","d3bd69397361cda7d447c5707a67e791"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","a6165664717b0386b000733eade12fd5"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","b3ac9b11d8c99f99eab9ecefd5fc5b2a"],["/music/index.html","1cce6a86d084d8bbdb6b1d43a240fb57"],["/page/2/index.html","3a91fab52d576478a1f717d6d31c5aab"],["/page/3/index.html","af283b769da02905b7dc1475ea099f6d"],["/page/4/index.html","9c44f77f1e0b9fca99d74a073b5b51c7"],["/posts/1ae7ca75.html","0097e08c7cd9c3b53490c08053e58543"],["/posts/295a9df3.html","1a76410d0c47367082f61ba906eca45b"],["/posts/297c98f1.html","4fb6a266c7a9e4e9ac41a99f5ba5a703"],["/posts/2aa54dbf.html","3f5e3f053f47548cc3a1969365238094"],["/posts/358b7717.html","c5e55e6c8d22a8b1c14e986ae5c4b027"],["/posts/3632cac.html","2b497251fcf5440f98f1333b779009c2"],["/posts/3fbb8f8a.html","d4349c25d334983c5e2400cf6d62b72a"],["/posts/40010742.html","64ac07abf18a744d0fd13ef5c1f48af6"],["/posts/46aa503f.html","8071c505835a561ffefd9b8fb7fbdd0e"],["/posts/48220063.html","b0b86f5646751bec852d9308fe362040"],["/posts/5d53b7be.html","ea804cd47bac841fd44cf0645f94fa3b"],["/posts/6414ea5e.html","8d555dd0ec086a1e28821a8d5b5fec02"],["/posts/6aa7da5.html","5677d750a010d36d767e46731bf3dcd5"],["/posts/6d2b0479.html","6f969de17db7529ddd855588901dbd5d"],["/posts/7872.html","4dbbc92e6debeeda5699d2ae06ea83b8"],["/posts/7f003a75.html","d9f78e67a092f7d2b670cb0bc235f261"],["/posts/9e0ca47f.html","3494ef9708afc6d303389410375163c2"],["/posts/a3bb9c3c.html","0e2a7d2d2602fca89906a4e9e2440c1d"],["/posts/a7e1f63d.html","7c73cb733b9ea43f927eb50b0e53ccbe"],["/posts/bce9bf30.html","537b9f6185530db46e5dc385dead9ab5"],["/posts/c32a5f2c.html","ab3a5d536eec107c781b3aad77f3965d"],["/posts/c399464a.html","716422e1753c20befddcd4b5d7f8a7bb"],["/posts/c414b4a2.html","6a87f1b01e08b671ea976ae857e4a4e9"],["/posts/cb25713c.html","8aaa017f5ccdb8a26ccd5014367b0cbb"],["/posts/d15db6a3.html","3af0c740dc496329c121146ae3d1a325"],["/posts/d90e4f30.html","ba1562c1659327b6f909c909965840a7"],["/posts/de8ffd2e.html","ef31273bf68ddf3978945786a7a5391b"],["/posts/e0a4257a.html","f3b29d6b051b6cf7060cf0dddaf465f2"],["/posts/e60f7207.html","c144ba8faed0fa64db90f5150043f57c"],["/posts/ece6e1f.html","533b91ac921c8e851e852df8df0506dd"],["/posts/fe758c0a.html","64c4e05eae13e2f37c84419bff738b2e"],["/posts/fefed28d.html","2e66d53bf9f0115bfa4f19f69c41fd61"],["/posts/undefined.html","fba4ac04f08974bc7ddabc1ab8660052"],["/sw-register.js","51fc01fc74a74d893985de6d6975a0a1"],["/tags/2D转换/index.html","29d8c71c62b41b2c5e94c5f5bba41581"],["/tags/3D转换/index.html","c5353dc0db3c0fedd2e8253484a323b3"],["/tags/CSS-尺寸-Dimension/index.html","aefb8dd5eedac66a2886a1a0958829ed"],["/tags/CSS/index.html","0ea080285a9b2e5ba10b6dd525d013d9"],["/tags/CSS/page/2/index.html","3d1dd6d4bc71627bbbd647b771ca8afb"],["/tags/CSS3-边框/index.html","9c145573d5d53fe2510ccc807d7dad00"],["/tags/CSS基础知识/index.html","9fca49109b5e8010e372304102620c2e"],["/tags/CSS背景/index.html","d0e948a8836a96c67ee353344c03c751"],["/tags/Flex/index.html","bf26dd940e2c94fb8e413f6f3d60c6da"],["/tags/Font/index.html","ed09290d5265f1bc608f308da00caff6"],["/tags/Fonts/index.html","ee0832fc8fce07dcd2e57665b2236358"],["/tags/Gradients/index.html","bb2b38a96b6d28c1096775fc2064551d"],["/tags/HTML5/index.html","9557c7053676c79e6c833253469884df"],["/tags/HTML新属性/index.html","1ce48ff8210730476183d8e4370c3816"],["/tags/JavaScript/index.html","8765dfc02fd993ca4f33076143410077"],["/tags/Linear-Gradients/index.html","933676ad3bfa66d4dbb87eb19b836821"],["/tags/Radial-Gradients/index.html","6505a7d581a3fd55429478ef16bed2d6"],["/tags/Text/index.html","e4aca1823c4abfae2609c98124a50e2d"],["/tags/Visibility/index.html","d4d620919a7a1b5d082786c9e204e6be"],["/tags/anmiation/index.html","60bf5e1181c68f3799af658ae3560637"],["/tags/background/index.html","1a29634b0e72c437799eaae1e8c97190"],["/tags/border/index.html","93fda1e2ce449e715efb00cd726bd69a"],["/tags/border的使用教程/index.html","814408452d74414b951ce064c629a624"],["/tags/display/index.html","0fd4c8c3d70c32167356a850f00e42f7"],["/tags/float/index.html","a2b6db2f41a2ab1e09035f99536e62da"],["/tags/float使用/index.html","e70a7faf5a1d7b9ed227482e33c17ba9"],["/tags/index.html","a822285f20e6e250232c31fa6235e47d"],["/tags/keyframe/index.html","6a864b3cfa9f6caf55b9f3b36c6c25ad"],["/tags/margin/index.html","efcd83df727923ff6459cd9566ac581c"],["/tags/outline/index.html","32a992fb55cf9878447006ae5295f147"],["/tags/padding/index.html","0ae8fc810f5bd4a761ed702539145aad"],["/tags/position/index.html","9db614cb7ebdff26fc7f8d9fb394269e"],["/tags/transition/index.html","0199a92103d6644475908f39130dba13"],["/tags/“标签外挂”，-Note-Gallery相册图库-，“Gallery相册”，“Tag-hide”，“mermaid”，“Tabs”，“Button”/index.html","9b6aee12bf0e39143e47e42b4004e5bf"],["/tags/列表样式/index.html","3dfd915635d4c061dc9b402502c64888"],["/tags/前端布局/index.html","8bdb17b528dfefd0585dcacaba8122c5"],["/tags/可见性/index.html","24c6be4dc56ad1dd42a9562f6d0c9e92"],["/tags/定位/index.html","f13f6fa83b370d8084c7234045aa4468"],["/tags/显示/index.html","796a7d82427cd9bb0dac53128af9e0b8"],["/tags/盒模型/index.html","0336b7fe8734254d253c29fe141fd1ac"],["/tags/表格样式/index.html","b55c87ffe89d65175e830ad7a3ef1e76"],["/tags/轮廓/index.html","10d019f73faf6f0cced39b4266a657db"],["/tags/过渡/index.html","bf3787c375500b9d884d135fa5847b98"],["/tags/选择器/index.html","6af9f8a3d0b980babdcdc709bb4f79cd"],["/tags/链接-links/index.html","acce4cb091e1ddc9116970a1a7eab9e9"]];
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
