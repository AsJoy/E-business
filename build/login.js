webpackJsonp([11],{0:function(e,t,r){e.exports=r(665)},21:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPDATE_TOAST="UPDATE_TOAST",t.UPDATE_ALERT="UPDATE_ALERT"},31:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SHOP_SHOW_ALL="SHOP_SHOW_ALL",t.SHOP_UPDATE="SHOP_UPDATE",t.SHOP_UPDATE_ALL="SHOP_UPDATE_ALL",t.SHOP_REDUCE="SHOP_REDUCE"},34:function(e,t,r){var n=r(49);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},40:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(2),l=n(u);r(48);var c=l.default.Component,f=l.default.PropTypes,d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.refs.toastBox,r=2100;t&&(t.style.cssText="animation-duration: "+r+"ms",setTimeout(function(){e.closeToast()},r-100))}},{key:"closeToast",value:function(){this.props.doAction("UPDATE_TOAST",{text:""})}},{key:"render",value:function(){var e=this.props.data;return e.text?l.default.createElement("div",null,l.default.createElement("div",{id:"toastBg",className:"toastBg"}),l.default.createElement("div",{id:"toastBox",ref:"toastBox",className:"toastBox"},l.default.createElement("div",{id:"toastText",className:"toastText",dangerouslySetInnerHTML:{__html:e.text}}))):l.default.createElement("div",null)}}]),t}(c);d.propTypes={data:f.object.isRequired,doAction:f.func.isRequired},t.default=d},44:function(e,t,r){(function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(r,n){"object"===t(e)&&e.exports?e.exports=window[r]=n():(window[r]&&console.warn(r+"命名空间已经存在"),window[r]=n())}("shopcart",function(){function e(){return l||{cartColumn:0}}function t(e,t,r){var n=0;return l[e]&&(n=l[e].count||0),0===r&&l[e]?(l.cartColumn-=l[e].count,delete l[e],i(),l):(l[e]={shopId:t,count:r},l.cartColumn-=n,l.cartColumn+=r,i(),l)}function r(e,t){l[e]?l[e]={count:1,shopId:t}:l[e].count++,i()}function n(e){l[e]||(l[e].count<=0?l[e].count=0:(l[e].count--,l.cartColumn--),i())}function o(e){var t=l[e];return void 0===t&&(console.warn("改商品购物车不存在"),t=null),t.itemId=e,t}function i(){window.localStorage.setItem(c,JSON.stringify(l))}function a(){l={cartColumn:0},i()}function s(){var e=window.localStorage.getItem(c);return e&&"undefined"!==e?void(l=JSON.parse(e)):void(l={cartColumn:0})}var u=null,l={cartColumn:0},c="globalCart";return s(),u={setItem:t,getItem:o,getShopCart:e,clearCart:a,addItem:r,reduceItem:n}})}).call(t,r(57)(e))},48:function(e,t,r){var n=r(50);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},49:function(e,t,r){t=e.exports=r(5)(),t.push([e.id,".order_header{width:100%;height:.973333rem;line-height:.973333rem;border-bottom:1px solid #c8c8c8;color:#000;text-align:center;font-size:.353333rem;background-color:#f7f7f8;position:relative}.order_header a{position:absolute;left:.4rem;height:100%}.order_header a i{font-size:.355rem}.order_header .editor{float:right;margin-right:.4rem}",""])},50:function(e,t,r){t=e.exports=r(5)(),t.push([e.id,".toastBg{position:fixed;width:100%;height:100%;top:0;left:0;z-index:99999;cursor:pointer}.toastBox{position:fixed;display:table;width:3.2rem;height:1.8rem;top:50%;left:50%;margin-left:-1.6rem;margin-top:-.9rem;font-weight:100;background-color:rgba(0,0,0,.8);border-radius:.06rem;z-index:100000;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-name:toastTrans;animation-name:toastTrans;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.toastBox .toastText{color:#fff;width:100%;text-align:center;font-size:.26rem;line-height:.48rem;vertical-align:middle;display:table-cell;word-break:break-all}@-webkit-keyframes toastTrans{0%,to{-webkit-transform:scale(.3);transform:scale(.3);opacity:.3}15%,85%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}",""])},55:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments[1],r=t.param,n=null,o=0,a=null;switch(t.type){case l.SHOP_SHOW_ALL:return e;case l.SHOP_UPDATE:return n={},n[r.id]={shopId:r.shopId,count:r.count},o=0,e[r.id]&&(o=e[r.id].count),e=f.default.setItem(r.id,r.shopId,r.count),a=Object.assign({},e,n),0===n[r.id].count&&delete a[r.id],a;case l.SHOP_REDUCE:return n={},n[r.id]={shopId:r.shopId,count:r.count},o=0,e[r.id]&&(o=e[r.id].count),f.default.setItem(r.id,r.shopId,r.count),a=Object.assign({},e,n),console.log(n[r.id].count),0===n[r.id].count&&delete a[r.id],a;case l.SHOP_UPDATE_ALL:return a=e,r.forEach(function(e){f.default.setItem(e.id,e.shopId,e.count),a=Object.assign({},a,i({},e.id,{count:e.count,itemId:e.id})),0===e.count&&delete a[e.id]}),a;default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=a;var u=r(31),l=o(u),c=r(44),f=n(c),d=r(8),p=(n(d),s({},f.default.getShopCart()))},56:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1],r=t.type,n=t.param;switch(r){case o.UPDATE_TOAST:return(0,a.default)({},e,{toastObj:{text:n.text||"",time:e.toastObj.time}});case o.UPDATE_ALERT:return(0,a.default)({},e,{alertObj:{title:n.title,text:n.text,callback:n.callback}});default:return e}};var o=r(21),i=r(8),a=n(i),s={errorText:"",alertObj:{title:"微店提示",text:"",callback:void 0},confirmObj:{title:"微店提示",text:""},toastObj:{text:""}}},77:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return g.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function l(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(g.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(g.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(g.arrayBuffer&&g.blob&&_(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!g.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!v(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},g.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},g.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var r=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function m(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function y(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var g={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(g.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=function(e){return e&&DataView.prototype.isPrototypeOf(e)},v=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},g.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},f.call(p.prototype),f.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];y.redirect=function(e,t){if(E.indexOf(t)===-1)throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=p,e.Response=y,e.fetch=function(e,t){return new Promise(function(r,n){var o=new p(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new y(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&g.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},78:function(e,t){"use strict";function r(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}t.__esModule=!0;var n=r();n.withExtraArgument=r,t.default=n},84:function(e,t){"use strict";!function(e,t){function r(e,t){function n(e,t){return function(){return e.apply(t,arguments)}}var i;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!r.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,u=0,l=a.length;u<l;u++)s[a[u]]=n(s[a[u]],s);o&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,r,n){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,r.hijacked||r,n):o.call(e,t,r,n)},e.addEventListener=function(t,r,n){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,r.hijacked||(r.hijacked=function(e){e.propagationStopped||r(e)}),n):o.call(e,t,r,n)}),"function"==typeof e.onclick&&(i=e.onclick,e.addEventListener("click",function(e){i(e)},!1),e.onclick=null)}}var n=navigator.userAgent.indexOf("Windows Phone")>=0,o=navigator.userAgent.indexOf("Android")>0&&!n,i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!n,a=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),s=i&&/OS [6-7]_\d/.test(navigator.userAgent),u=navigator.userAgent.indexOf("BB10")>0;r.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(i&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},r.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!o;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},r.prototype.sendClick=function(e,t){var r,n;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),n=t.changedTouches[0],r=document.createEvent("MouseEvents"),r.initMouseEvent(this.determineEventType(e),!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),r.forwardedTouchEvent=!0,e.dispatchEvent(r)},r.prototype.determineEventType=function(e){return o&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},r.prototype.focus=function(e){var t;i&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},r.prototype.updateScrollParent=function(e){var t,r;if(t=e.fastClickScrollParent,!t||!t.contains(e)){r=e;do{if(r.scrollHeight>r.offsetHeight){t=r,e.fastClickScrollParent=r;break}r=r.parentElement}while(r)}t&&(t.fastClickLastScrollTop=t.scrollTop)},r.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},r.prototype.onTouchStart=function(e){var t,r,n;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),r=e.targetTouches[0],i){if(n=window.getSelection(),n.rangeCount&&!n.isCollapsed)return!0;if(!a){if(r.identifier&&r.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=r.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=r.pageX,this.touchStartY=r.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},r.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],r=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>r||Math.abs(t.pageY-this.touchStartY)>r},r.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},r.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},r.prototype.onTouchEnd=function(e){var t,r,n,u,l,c=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,r=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,s&&(l=e.changedTouches[0],c=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||c,c.fastClickScrollParent=this.targetElement.fastClickScrollParent),n=c.tagName.toLowerCase(),"label"===n){if(t=this.findControl(c)){if(this.focus(c),o)return!1;c=t}}else if(this.needsFocus(c))return e.timeStamp-r>100||i&&window.top!==window&&"input"===n?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,e),i&&"select"===n||(this.targetElement=null,e.preventDefault()),!1);return!(!i||a||(u=c.fastClickScrollParent,!u||u.fastClickLastScrollTop===u.scrollTop))||(this.needsClick(c)||(e.preventDefault(),this.sendClick(c,e)),!1)},r.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},r.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},r.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},r.prototype.destroy=function(){var e=this.layer;o&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},r.notNeeded=function(e){var t,r,n,i;if("undefined"==typeof window.ontouchstart)return!0;if(r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!o)return!0;if(t=document.querySelector("meta[name=viewport]")){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(r>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(u&&(n=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),n&&n[1]>=10&&n[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(i=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(i>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(t.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},r.attach=function(e,t){return new r(e,t)},t.FastClick=r.attach}(window,window)},269:function(e,t,r){var n=r(272);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},272:function(e,t,r){t=e.exports=r(5)(),t.push([e.id,"html body{padding:0}html{background:#f0f0f0}.login-wrapper__login_1Oda- .header__login_3pN1l{width:100%;height:.973333rem;line-height:.973333rem;border-bottom:1px solid #c8c8c8;color:#000;text-align:center;font-size:.353333rem;background-color:#f7f7f8}.login-wrapper__login_1Oda- .title__login_3NHzB{font-size:.6rem;letter-spacing:.15rem;color:#f40;text-align:center;line-height:1.8rem}.login-wrapper__login_1Oda- .from-control__login_3VffR{background:#fff;font-size:.255rem;color:#666;line-height:.977rem}.login-wrapper__login_1Oda- .from-control__login_3VffR label{box-sizing:border-box;padding-left:.1rem;display:inline-block;width:1.5rem}.login-wrapper__login_1Oda- .from-control__login_3VffR input{width:6rem;margin:0;box-sizing:border-box;font:.255rem/.977rem }.login-wrapper__login_1Oda- .from-control__login_3VffR input:focus{outline:none}.login-wrapper__login_1Oda- .from-control__login_3VffR+.from-control__login_3VffR{border-top:2px solid #f0f0f0}.login-wrapper__login_1Oda- .from-submit__login_2knOU{text-align:center;padding:.35rem 0 .45rem}.login-wrapper__login_1Oda- .login__login_tSvVM{background:#f60;color:#fff;font-size:.255rem;line-height:.8rem;text-align:center;border-radius:.07rem;display:inline-block;width:6.9rem}.login-wrapper__login_1Oda- .otherwise__login_2VT9h{padding:0 .3rem}.login-wrapper__login_1Oda- .otherwise__login_2VT9h a{color:#666}.login-wrapper__login_1Oda- .otherwise__login_2VT9h .fr__login_2B-_1{float:right}.login-wrapper__login_1Oda- .error__login_1mxhM{font-size:.25rem;color:#f40;text-align:center;padding-top:.2rem}",""]),t.locals={"login-wrapper":"login-wrapper__login_1Oda-",header:"header__login_3pN1l",title:"title__login_3NHzB","from-control":"from-control__login_3VffR","from-submit":"from-submit__login_2knOU",login:"login__login_tSvVM",otherwise:"otherwise__login_2VT9h",fr:"fr__login_2B-_1",error:"error__login_1mxhM"}},525:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOGIN_ERROR="LOGIN_ERROR"},665:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(2),i=n(o),a=r(91),s=r(30),u=r(701),l=n(u);r(86);var c=r(745),f=n(c);r(84),r(77),Object.assign=r(8),window.FastClick(document.body);var d=(0,f.default)();(0,a.render)(i.default.createElement(s.Provider,{store:d},i.default.createElement(l.default,null)),document.getElementById("root"))},675:function(e,t,r){"use strict";function n(e,t){return function(r){if(""===e||""===t)return r({type:i.LOGIN_ERROR,params:{message:"用户名与密码不能为空"}});var n=new Headers;n.append("Content-Type","application/json"),fetch("/api/user/login",{method:"POST",body:JSON.stringify({telephone:e,password:t}),headers:n}).then(function(e){return e.json()}).then(function(e){"500"===e.code?r({type:i.LOGIN_ERROR,params:{message:e.msg}}):(window.sessionStorage.setItem("user",JSON.stringify(e.entry[0])),location.href="/demo/self.html")})}}function o(e,t){var r=t.text;return{type:a.UPDATE_TOAST,params:{text:r}}}Object.defineProperty(t,"__esModule",{value:!0}),t.login=n,t.updateToast=o;var i=r(525),a=r(21)},688:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(2),l=n(u),c=r(269),f=n(c),d=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return a(t,e),s(t,[{key:"handlerClick",value:function(){var e=this.props.login;e(this.refs.telephone.value,this.refs.password.value)}},{key:"render",value:function(){var e=this.props.indexReduce;return l.default.createElement("div",{className:f.default["login-wrapper"]},l.default.createElement("header",{className:f.default.header},"WeiShop登录"),l.default.createElement("from",null,l.default.createElement("div",{className:f.default.title},"WeiShop"),l.default.createElement("div",{className:f.default["from-control"]},l.default.createElement("label",{htmlFor:"telphone"},"账号"),l.default.createElement("input",{ref:"telephone",type:"text",id:"telphone",className:"telphone",placeholder:"手机号"})),l.default.createElement("div",{className:f.default["from-control"]},l.default.createElement("label",{htmlFor:"password"},"登录密码"),l.default.createElement("input",{ref:"password",type:"password",className:"password",id:"password"})),l.default.createElement("div",{className:f.default.error},e.message),l.default.createElement("div",{className:f.default["from-submit"]},l.default.createElement("button",{className:f.default.login,onClick:this.handlerClick.bind(this)},"登录")),l.default.createElement("div",{className:f.default.otherwise},l.default.createElement("a",{href:"/demo/register.html"},"免费注册"),l.default.createElement("a",{href:"#",className:f.default.fr},"忘记密码"))))}}]),t}(u.Component);t.default=d},701:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{toastReducers:e.toastReducers,indexReduce:e.indexReduce}}function l(e){return{actions:(0,p.bindActionCreators)(v,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2),d=o(f),p=r(16),h=r(30),m=r(40),y=o(m),g=r(688),b=o(g),_=r(675),v=n(_);r(34);var w=function(e){function t(e){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.toastReducers,r=e.actions,n=e.indexReduce;return d.default.createElement("div",null,d.default.createElement(b.default,{indexReduce:n,login:r.login}),d.default.createElement(y.default,{data:t.toastObj,doAction:r.updateToast}))}}]),t}(f.Component);w.propTypes={actions:f.PropTypes.object.isRequired,toastReducers:f.PropTypes.object},t.default=(0,h.connect)(u,l)(w)},725:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1],r=t.params;switch(t.type){case o.LOGIN_ERROR:return console.log(123123),Object.assign({},r);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(525),i={message:""}},726:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(16),i=r(56),a=n(i),s=r(55),u=n(s),l=r(725),c=n(l),f=(0,o.combineReducers)({toastReducers:a.default,shopReduce:u.default,indexReduce:c.default});t.default=f},745:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,i.createStore)(s.default,e,(0,i.applyMiddleware)(c));return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=r(16),a=r(726),s=n(a),u=r(78),l=n(u),c=l.default}});