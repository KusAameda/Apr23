var FBPublication="object"==typeof FBPublication?FBPublication:{};FBPublication.analytics=function(i){var n={};function t(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return i[a].call(e.exports,e,e.exports,t),e.l=!0,e.exports}return t.m=i,t.c=n,t.d=function(i,n,a){t.o(i,n)||Object.defineProperty(i,n,{enumerable:!0,get:a})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,n){if(1&n&&(i=t(i)),8&n)return i;if(4&n&&"object"==typeof i&&i&&i.__esModule)return i;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&n&&"string"!=typeof i)for(var e in i)t.d(a,e,(function(n){return i[n]}).bind(null,e));return a},t.n=function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(n,"a",n),n},t.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},t.p="",t(t.s=1)}([function(i,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"==typeof window&&(t=window)}i.exports=t},function(i,n,t){i.exports=t(2)},function(i,n,t){"use strict";t.r(n);var a=t(3),e=t(4);window.universalAnalytics=a.default,window.UniversalAnalytics=e.UniversalAnalytics},function(i,n,t){"use strict";t.r(n),(function(i){n.default={dimensionForVersion:void 0,version:void 0,appName:void 0,dimensionForAdditionalLabel:void 0,uaIDs:[],nonInteraction:!0,multiua:function(){if(void 0===i.FBO||!i.FBO.Config.DisableViewTracking){var n=Array.prototype.slice.call(arguments);if(i.universalAnalytics.uaIDs)for(var t=0,a=i.universalAnalytics.uaIDs.length;t<a;t++){var e=n.slice();e[0]="additional"+t.toString()+"."+e[0],i.universalAnalytics.pushApply(e)}}},fbua:function(){if(void 0===i.FBO||!i.FBO.Config.DisableViewTracking){var n=Array.prototype.slice.call(arguments);if(i.universalAnalytics.fbIDs)for(var t=0,a=i.universalAnalytics.fbIDs.length;t<a;t++){var e=n.slice();e[0]="additional"+t.toString()+"."+e[0],i.universalAnalytics.pushApply(e)}}},lastApply:(new Date).getTime(),timerId:void 0,tryApply:function(){var n=(new Date).getTime();if(n-i.universalAnalytics.lastApply>40){var t=i.universalAnalytics.events.shift();i.ua.apply(null,t),i.universalAnalytics.lastApply=n}i.universalAnalytics.events.length>0?void 0===i.universalAnalytics.timerId&&(i.universalAnalytics.timerId=setInterval((function(){i.universalAnalytics.tryApply()}),40)):(clearInterval(i.universalAnalytics.timerId),i.universalAnalytics.timerId=void 0)},pushApply:function(n){i.universalAnalytics.events.push(n),i.universalAnalytics.tryApply()},events:[],ip:void 0,generateId:function(){var i="xx-x-x-x-xxx".replace(/[xy]/g,(function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}));try{localStorage.setItem("clientId",i)}catch(n){}return i},init:function(n,t,a,e,s,l,o,r,c,u,y){if(void 0===i.FBO||!i.FBO.Config.DisableViewTracking){var d,v;if("[object Object]"===Object.prototype.toString.call(n)?(d=n,i.universalAnalytics.platform=d.platform,i.universalAnalytics.startDate=d.startDate,i.universalAnalytics.dimensionForAdditionalLabel=d.dimensionForAdditionalLabel,i.universalAnalytics.dimensionForVersion=d.dimensionForVersion,i.universalAnalytics.dimensionForClientId=d.dimensionForClientId,i.universalAnalytics.sessionControl=d.sessionControl,i.universalAnalytics.version=d.version,i.universalAnalytics.appName=d.appName,i.universalAnalytics.fbIDs=d.fbUAIDs.slice(),i.universalAnalytics.uaIDs=d.fbUAIDs.concat(d.userUAIDs).slice(),i.universalAnalytics.anonymizeIp=d.anonymizeIp,i.universalAnalytics.url=null===d.url?"auto":d.url,i.universalAnalytics.title=d.title):(i.universalAnalytics.platform=e,i.universalAnalytics.startDate=s,i.universalAnalytics.dimensionForAdditionalLabel=c,i.universalAnalytics.dimensionForVersion=u,i.universalAnalytics.version=l,i.universalAnalytics.appName=r,i.universalAnalytics.fbIDs=n.slice(),i.universalAnalytics.uaIDs=n.concat(t).slice(),i.universalAnalytics.anonymizeIp=o,i.universalAnalytics.url=null===a?"auto":a,i.universalAnalytics.title=y),i.universalAnalytics.dimensionForAdditionalLabel||(i.universalAnalytics.dimensionForAdditionalLabel="dimension1"),i.universalAnalytics.dimensionForVersion||(i.universalAnalytics.dimensionForVersion="dimension2"),function(i,n,t,a,e,s,l){i.GoogleAnalyticsObject=e,i[e]=i[e]||function(){(i[e].q=i[e].q||[]).push(arguments)},i[e].l=1*new Date,s=n.createElement(t),l=n.getElementsByTagName(t)[0],s.async=1,s.src=a,l.parentNode.insertBefore(s,l)}(i,document,"script","//www.google-analytics.com/analytics.js","ua"),d&&d.clientId)v=d.clientId;else try{v=localStorage.getItem("clientId")}catch(h){console.log("No access to localStorage.")}finally{v=v||i.universalAnalytics.generateId()}for(var p={allowLinker:!0,storage:"none",storeGac:!1,clientId:v},A=0,f=i.universalAnalytics.uaIDs.length;A<f;A++)i.ua("create",i.universalAnalytics.uaIDs[A],i.universalAnalytics.url,"additional"+A.toString(),p);i.universalAnalytics.dimensionForClientId&&i.universalAnalytics.fbua("set",i.universalAnalytics.dimensionForClientId,v),i.universalAnalytics.multiua("require","displayfeatures"),!0===i.universalAnalytics.anonymizeIp?i.universalAnalytics.multiua("set","anonymizeIp",!0):i.universalAnalytics.fbua("set","anonymizeIp",!0),i.universalAnalytics.title&&i.universalAnalytics.multiua("set","title",i.universalAnalytics.title),void 0!==i.universalAnalytics.dimensionForVersion&&i.universalAnalytics.multiua("set",i.universalAnalytics.dimensionForVersion,i.universalAnalytics.version),void 0===i.universalAnalytics.sessionControl||i.universalAnalytics.sessionControl?i.universalAnalytics.multiua("send","pageview",{sessionControl:"start"}):i.universalAnalytics.multiua("send","pageview"),i.universalAnalytics.multiua("require","ecommerce"),i.universalAnalytics.multiua("require","ec")}},getPlatform:function(){return i.universalAnalytics.platform},path:void 0,getPath:function(){if(void 0===i.universalAnalytics.path)if(void 0!==i.FBO)i.universalAnalytics.path=i.FBO.PreloadedPublicationModel.Publication.HashId+"/";else{if(i.universalAnalytics.path=i.location.pathname,"basic"===i.universalAnalytics.platform){var n=new RegExp("files/assets/basic-html/page.*html");i.universalAnalytics.path=i.universalAnalytics.path.replace(n,"")}i.universalAnalytics.path.length>0&&"/"!==i.universalAnalytics.path.charAt(0)&&(i.universalAnalytics.path="/"+i.universalAnalytics.path);var t=i.universalAnalytics.path.indexOf("index.html");-1!==t&&t+10===i.universalAnalytics.path.length&&(i.universalAnalytics.path=i.universalAnalytics.path.slice(0,t)),-1!==(t=i.universalAnalytics.path.indexOf("index.htm"))&&t+9===i.universalAnalytics.path.length&&(i.universalAnalytics.path=i.universalAnalytics.path.slice(0,t))}return i.universalAnalytics.path},transactionID:void 0,deteleTransactionID:function(){delete i.universalAnalytics.transactionID},getTransactionID:function(){return void 0===i.universalAnalytics.transactionID&&(i.universalAnalytics.transactionID=(new Date).getTime().toString(36),void 0!==i.universalAnalytics.startDate&&(i.universalAnalytics.transactionID+=i.universalAnalytics.startDate.toString(36)),void 0!==i.universalAnalytics.openedDate&&(i.universalAnalytics.transactionID+=i.universalAnalytics.openedDate.toString(36))),i.universalAnalytics.transactionID},setCurrency:function(n){i.universalAnalytics.currency=n,i.universalAnalytics.multiua("set","&cu",n)},setShopName:function(n){i.universalAnalytics.shopName=n},addImpression:function(n,t){i.universalAnalytics.multiua("ec:addImpression",{id:t,name:n})},addTransaction:function(n){i.universalAnalytics.multiua("ecommerce:addTransaction",{id:i.universalAnalytics.getTransactionID(),affiliation:i.universalAnalytics.shopName,revenue:n,currency:i.universalAnalytics.currency})},addItem:function(n,t,a,e){i.universalAnalytics.multiua("ecommerce:addItem",{id:i.universalAnalytics.getTransactionID(),name:n,sku:t,price:a,quantity:e}),i.universalAnalytics.multiua("ec:addProduct",{id:t,name:n})},purchase:function(n){i.universalAnalytics.multiua("ecommerce:send"),i.universalAnalytics.multiua("ec:setAction","purchase",{id:i.universalAnalytics.getTransactionID(),revenue:n}),i.universalAnalytics.deteleTransactionID()},shareByFacebook:function(n){i.ua&&i.universalAnalytics.multiua("send","social","Facebook","Share",n)},shareByGooglePlus:function(n){i.ua&&i.universalAnalytics.multiua("send","social","Google+","Share",n)},shareByLinkedin:function(n){i.ua&&i.universalAnalytics.multiua("send","social","LinkedIn","Share",n)},shareByTumblr:function(n){i.ua&&i.universalAnalytics.multiua("send","social","Tumblr","Share",n)},shareByVK:function(n){i.ua&&i.universalAnalytics.multiua("send","social","VK","Share",n)},shareByBlogger:function(n){i.ua&&i.universalAnalytics.multiua("send","social","Blogger","Share",n)},tweet:function(n){i.ua&&i.universalAnalytics.multiua("send","social","Twitter","Tweet",n)},shareByEmail:function(n){i.ua&&i.universalAnalytics.multiua("send","social","Email","Mail",n)},shareByMySpace:function(n){i.ua&&i.universalAnalytics.multiua("send","social","MySpace","Share",n)},shareByClipboard:function(n){i.ua&&i.universalAnalytics.multiua("send","social","Clipboard","Copy",n)},dispatch:function(n,t,a,e,s){var l={};void 0!==a&&(l.eventLabel=a),void 0!==e&&(l.eventValue=e),i.universalAnalytics.nonInteraction&&(l.nonInteraction=!0),void 0!==s&&void 0!==i.universalAnalytics.dimensionForAdditionalLabel&&(l[i.universalAnalytics.dimensionForAdditionalLabel]=s),l.page=i.universalAnalytics.getPath(),!0===i.universalAnalytics.anonymizeIp&&(l.anonymizeIp=!0),i.ua&&i.universalAnalytics.multiua("send","event",n,t,l)},fbDispatch:function(n,t,a,e,s){var l={};void 0!==a&&(l.eventLabel=a),void 0!==e&&(l.eventValue=e),i.universalAnalytics.nonInteraction&&(l.nonInteraction=!0),void 0!==s&&void 0!==i.universalAnalytics.dimensionForAdditionalLabel&&(l[i.universalAnalytics.dimensionForAdditionalLabel]=s),l.page=i.universalAnalytics.getPath(),l.anonymizeIp=!0,i.ua&&i.universalAnalytics.fbua("send","event",n,t,l)},zoomIn:function(n,t){i.universalAnalytics.dispatch("Zoom","Zoom In",t,void 0,n)},zoomOut:function(n,t){i.universalAnalytics.dispatch("Zoom","Zoom Out",t,void 0,n)},zoomBlock:function(n){i.universalAnalytics.dispatch("Zoom","Zoom Block",n)},openWindow:function(n,t){i.universalAnalytics.dispatch(n,"Open",t)},closeWindow:function(n,t){i.universalAnalytics.dispatch(n,"Close",t)},print:function(n,t,a){var e=a||t;i.universalAnalytics.dispatch("Print","Print",e)},clickImage:function(n){i.universalAnalytics.dispatch("Image","Click",n)},imageLoaded:function(n){i.universalAnalytics.dispatch("Image","Loaded",n)},download:function(n,t){i.universalAnalytics.dispatch("Download","Download",n,void 0,t)},videoPlay:function(n,t){i.universalAnalytics.dispatch("Video","Play",n,void 0,t)},videoPause:function(n,t){i.universalAnalytics.dispatch("Video","Pause",n,void 0,t)},videoStop:function(n,t){i.universalAnalytics.dispatch("Video","Stop",n,void 0,t)},videoSeekTo:function(n,t){i.universalAnalytics.dispatch("Video","SeekTo",n,void 0,t)},fullscreenOn:function(n){i.universalAnalytics.dispatch("Fullscreen","On",n)},fullscreenOff:function(n){i.universalAnalytics.dispatch("Fullscreen","Off",n)},slideshowStart:function(){i.universalAnalytics.dispatch("Slideshow","Start")},slideshowStop:function(){i.universalAnalytics.dispatch("Slideshow","Stop")},soundOn:function(){i.universalAnalytics.dispatch("Sound","On")},soundOff:function(){i.universalAnalytics.dispatch("Sound","Off")},addBookmark:function(n,t){i.universalAnalytics.dispatch("Bookmarks","Add",t,void 0,n)},removeBookmark:function(n,t){i.universalAnalytics.dispatch("Bookmarks","Remove",t,void 0,n)},productLink:function(n,t,a){var e=void 0===t?a:t;i.universalAnalytics.dispatch("Link","Product",n,void 0,e)},externalLink:function(n,t,a){a?i.universalAnalytics.fbDispatch("Link","External",n,void 0,t):i.universalAnalytics.dispatch("Link","External",n,void 0,t)},internalLink:function(n,t){i.universalAnalytics.dispatch("Link","Internal",n,void 0,t)},note:function(n,t){i.universalAnalytics.dispatch("Note",n,t)},selectText:function(n,t){i.universalAnalytics.dispatch("SelectText",n,t)},search:function(n){i.universalAnalytics.dispatch("Search","Search",n)},startLoading:function(){i.universalAnalytics.dispatch("Loading","Start",i.universalAnalytics.getPlatform())},openedDate:void 0,publicationOpened:function(){i.universalAnalytics.openedDate=(new Date).getTime(),i.universalAnalytics.dispatch("Loading","Open",i.universalAnalytics.getPlatform(),void 0,i.universalAnalytics.openedDate-i.universalAnalytics.startDate),i.universalAnalytics.sendApplicationTiming(i.universalAnalytics.openedDate-i.universalAnalytics.startDate),i.universalAnalytics.sendFBTiming("Application Load 2",i.universalAnalytics.openedDate-i.universalAnalytics.startDate),i.universalAnalytics.nonInteraction=!1},preloaderLoaded:function(){i.universalAnalytics.preloaderDate=(new Date).getTime(),i.universalAnalytics.sendFBTiming("Preloader Load",i.universalAnalytics.preloaderDate-i.universalAnalytics.startDate)},preloaderDate:void 0,startFlippingBookLoad:function(){i.universalAnalytics.startFlippingBookDate=(new Date).getTime()},startFlippingBookDate:void 0,endFlippingBookLoad:function(){i.universalAnalytics.endFlippingBookDate=(new Date).getTime(),i.universalAnalytics.sendFBTiming("Style Load",i.universalAnalytics.endFlippingBookDate-i.universalAnalytics.startFlippingBookDate)},endFlippingBookDate:void 0,startStyleLoad:function(){i.universalAnalytics.startStyleDate=(new Date).getTime()},startStyleDate:void 0,endStyleLoad:function(){i.universalAnalytics.endStyleDate=(new Date).getTime(),i.universalAnalytics.sendFBTiming("Style Load",i.universalAnalytics.endStyleDate-i.universalAnalytics.startStyleDate)},endStyleDate:void 0,startPropertyLoad:function(){i.universalAnalytics.startPropertyDate=(new Date).getTime()},startPropertyDate:void 0,endPropertyLoad:function(){i.universalAnalytics.endPropertyDate=(new Date).getTime(),i.universalAnalytics.sendFBTiming("Property Load",i.universalAnalytics.endPropertyDate-i.universalAnalytics.startPropertyDate)},endPropertyDate:void 0,startStyleXmlLoad:function(){i.universalAnalytics.startStyleXmlDate=(new Date).getTime()},startStyleXmlDate:void 0,endStyleXmlLoad:function(){i.universalAnalytics.endStyleXmlDate=(new Date).getTime(),i.universalAnalytics.sendFBTiming("Style xml Load",i.universalAnalytics.endStyleXmlDate-i.universalAnalytics.startStyleXmlDate)},endStyleXmlDate:void 0,startFontLoad:function(){i.universalAnalytics.startFontDate=(new Date).getTime()},startFontDate:void 0,endFontLoad:function(){i.universalAnalytics.endFontDate=(new Date).getTime(),i.universalAnalytics.sendFBTiming("Font Load",i.universalAnalytics.endFontDate-i.universalAnalytics.startFontDate)},endFontDate:void 0,previousPage:void 0,previousPage2:void 0,pageView:function(n){var t=i.universalAnalytics.getPath(),a="undefined"!=typeof FBO?n:"#"+n;i.ua&&i.universalAnalytics.multiua("send","pageview",{page:t+a})},flipToLastPage:function(n){i.universalAnalytics.fbDispatch("Pages","Last Page",n)},flipToFirstPage:function(n){i.universalAnalytics.fbDispatch("Pages","First Page",n)},contentSize:function(n,t,a,e){var s=e||n,l=t+"x"+a;i.universalAnalytics.fbDispatch("ContentSize",s,l)},develop:function(n,t){i.universalAnalytics.fbDispatch("Develop",n,t)},contextMenu:function(n,t){i.universalAnalytics.fbDispatch("ContextMenu",n,t)},highlight:function(n,t){i.universalAnalytics.fbDispatch("Highlight",n,t)},openInSlide:function(n,t){"Start Book"!==n&&i.universalAnalytics.dispatch("Pages","openInSlide",t,void 0,n),i.universalAnalytics.previousPage!==t&&(i.universalAnalytics.pageView(t),i.universalAnalytics.previousPage=t)},openInSpread:function(n,t,a){"Start Book"!==n&&i.universalAnalytics.dispatch("Pages","OpenInSpread",t,void 0,n),t!==i.universalAnalytics.previousPage&&t!==i.universalAnalytics.previousPage2&&i.universalAnalytics.pageView(t),a&&(i.universalAnalytics.dispatch("Pages","OpenInSpread",a,void 0,n),a!==i.universalAnalytics.previousPage&&a!==i.universalAnalytics.previousPage2&&i.universalAnalytics.pageView(a),i.universalAnalytics.previousPage2=a),i.universalAnalytics.previousPage=t},turned:function(n,t,a){i.universalAnalytics.dispatch("Pages","Turned",t,n,a)},orientation:function(n,t,a){i.universalAnalytics.dispatch("Orientation",t,n,void 0,a)},sendTiming:function(n,t,a){i.ua&&i.universalAnalytics.multiua("send","timing",i.universalAnalytics.getPlatform(),n,t,a)},sendFBTiming:function(n,t,a){i.ua&&i.universalAnalytics.fbua("send","timing",i.universalAnalytics.getPlatform(),n,t,a)},sendApplicationTiming:function(n){i.universalAnalytics.sendTiming("Application Load",n)},sendPageTiming:function(n,t){i.universalAnalytics.sendTiming("Page Load",n,t)},sendSlideTiming:function(n,t){i.universalAnalytics.sendTiming("Slide Load",n,t)},sendThumbnailTiming:function(n,t){i.universalAnalytics.sendTiming("Thumbnail Load",n,t)},sendFatalError:function(n,t){i.ua&&i.universalAnalytics.multiua("send","exception",{exDescription:n,exFatal:!0,appName:i.universalAnalytics.appName,appVersion:i.universalAnalytics.version}),i.universalAnalytics.dispatch("Error","Fatal",n,void 0,t)},sendError:function(n,t){i.ua&&i.universalAnalytics.multiua("send","exception",{exDescription:n,exFatal:!1,appName:i.universalAnalytics.appName,appVersion:i.universalAnalytics.version}),i.universalAnalytics.dispatch("Error","Non Fatal",n,void 0,t)}}}).call(this,t(0))},function(i,n,t){(function(i){!function(t,a){"use strict";t(i,n)}((function(i,n){"use strict";function t(){this.handlers=["init","bookStateChanged","turned","goToFirstPage","goToLastPage","zoomed","unzoomed","slideshow","link","image","video","sound","window","share","print","download","fullscreen","search","develop","contextMenu","highlight","note","orientation","selectText"]}function a(i){return"function"==typeof i||!1}function e(i){return i.charAt(0).toUpperCase()+i.slice(1)}t.prototype.subscribe=function(n){if(this.evt=n,i.universalAnalytics)this.analytics=i.universalAnalytics,this._apiSubscribe();else{var t=this;setTimeout((function n(){i.universalAnalytics?(console.log("subscribe"),t.analytics=i.universalAnalytics,t._apiSubscribe()):setTimeout(n,200)}),200)}},t.prototype._apiSubscribe=function(){if(this.analytics&&this.evt&&a(this.evt.on))for(var i in this.handlers)if(this.handlers.hasOwnProperty(i)){var n=this.handlers[i];this.evt.on(n,this[n],this)}},t.prototype.init=function(i){this.state=i,this.oldState=i,this.develop({action:"version",data:i.version}),this.analytics.publicationOpened()},t.prototype.bookStateChanged=function(i,n){this.oldState=this.state||i,this.state=i,this.state.leftPageUrl!==this.state.rightPageUrl||this.state.isSingle||(this.state.rightPageUrl=void 0),this.state.isSlide?this.analytics.openInSlide(n,this.state.leftPageUrl):this.state.isSingle?this.analytics.openInSpread(n,this.state.rightPageUrl):this.analytics.openInSpread(n,this.state.leftPageUrl,this.state.rightPageUrl)},t.prototype.turned=function(i,n,t){var a=i.leftPageUrl;i.isSingle&&(a=i.rightPageUrl),this.analytics.turned(a,n,t)},t.prototype.develop=function(i){this.analytics.develop(i.action,i.data)},t.prototype.goToFirstPage=function(){this.analytics.flipToFirstPage(void 0)},t.prototype.goToLastPage=function(){this.analytics.flipToLastPage(void 0)},t.prototype.zoomed=function(i){i.isSingle?this.analytics.zoomIn(void 0,i.rightPageUrl):this.analytics.zoomIn(void 0,i.leftPageUrl||i.rightPageUrl)},t.prototype.unzoomed=function(i){i&&i.isSingle?this.analytics.zoomOut(void 0,i.rightPageUrl):this.oldState.isZoomed?this.analytics.zoomOut(void 0,this.oldState.leftPageUrl||this.oldState.rightPageUrl):this.analytics.zoomOut(void 0,i.leftPageUrl||i.rightPageUrl)},t.prototype.slideshow=function(i){i&&"start"===i.action?this.analytics.slideshowStart():"stop"===i.action&&this.analytics.slideshowStop()},t.prototype.link=function(i){"internal"===i.type&&"page"===i.source?this.analytics.internalLink(i.pageToUrl,i.pageUrl):"external"===i.type&&this.analytics.externalLink(i.url,i.pageUrl,i.isBlacklisted)},t.prototype.image=function(i){"loaded"===i.action?this.analytics.imageLoaded(i.url):"click"===i.action&&this.analytics.clickImage(i.url)},t.prototype.video=function(i){"play"===i.action?this.analytics.videoPlay(i.url,i.time):"pause"===i.action?this.analytics.videoPause(i.url,i.time):"stop"===i.action?this.analytics.videoStop(i.url,i.time):"seekTo"===i.action&&this.analytics.videoSeekTo(i.url,i.time)},t.prototype.sound=function(i){"on"===i.action?this.analytics.soundOn():"off"===i.action&&this.analytics.soundOff()},t.prototype.window=function(i){var n={Toc:"TOC",Social:"Share"},t=e(i.component);void 0!==n[t]&&(t=n[t]),"open"===i.action?this.analytics.openWindow(t):"close"===i.action&&this.analytics.closeWindow(t)},t.prototype.share=function(i){"facebook"===i.service?this.analytics.shareByFacebook(i.url):"twitter"===i.service?this.analytics.tweet(i.url):"linkedIn"===i.service?this.analytics.shareByLinkedin(i.url):"tumblr"===i.service?this.analytics.shareByTumblr(i.url):"google+"===i.service?this.analytics.shareByGooglePlus(i.url):"email"===i.service?this.analytics.shareByEmail(i.url):"vk"===i.service?this.analytics.shareByVK(i.url):"clipboard"===i.service&&this.analytics.shareByClipboard(i.url)},t.prototype.print=function(i){this.analytics.print(i.filename,e(i.option),i.number)},t.prototype.download=function(i){this.analytics.download(i.fileName,e(i.option))},t.prototype.contextMenu=function(i){"open"===i.action?this.analytics.contextMenu("Open",i.page):"select"===i.action&&this.analytics.contextMenu("Select",i.selectedItem)},t.prototype.highlight=function(i){"on"===i.action?this.analytics.highlight("On",i.page):"off"===i.action&&this.analytics.highlight("Off",i.page)},t.prototype.fullscreen=function(i){"on"===i.action?this.analytics.fullscreenOn():"off"===i.action&&this.analytics.fullscreenOff()},t.prototype.search=function(i){this.analytics.search(i.query)},t.prototype.note=function(i){this.analytics.note(i.action,i.initiator)},t.prototype.orientation=function(i){var n=i.state.rightPageUrl||i.state.leftPageUrl;this.analytics.orientation(n,i.value,i.action)},t.prototype.selectText=function(i){this.analytics.selectText(e(i.action),i.pageUrl)},n.UniversalAnalytics=t}))}).call(this,t(0))}]);