_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery,a=void 0!==i&&i;return n||o&&a}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return T}));var r=n("o0o1"),o=n.n(r),i=n("HaE+"),a=n("rePB"),u=n("nKUr");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p=n("JX7q");function d(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?Object(p.a)(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=n("q1tI"),b=n.n(h),v=n("i8i4"),m=n.n(v),g=n("8Bbg"),O=n.n(g),w=n("g4pe"),j=n.n(w),x=n("20a2"),P=n.n(x),E=n("bTjV");var _=function(t){var e=t.path;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"page-transition-wrapper-div",children:[Object(u.jsx)("div",{className:"page-transition-icon-wrapper mb-3",children:Object(u.jsx)(E.a,{color:"white",style:{width:"6rem",height:"6rem",borderWidth:".3rem"}})}),Object(u.jsxs)("h4",{className:"title text-white",children:["Loading page contents for: ",e]})]})})};n("p9jD"),n("kVbL"),n("hBAK"),n("w4EW"),n("RBMv"),n("1yRD"),n("p1OT"),n("vs8Z"),n("Omkr"),n("RMqu");function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}P.a.events.on("routeChangeStart",(function(t){console.log("Loading: ".concat(t)),document.body.classList.add("body-page-transition"),m.a.render(Object(u.jsx)(_,{path:t}),document.getElementById("page-transition"))})),P.a.events.on("routeChangeComplete",(function(){m.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")})),P.a.events.on("routeChangeError",(function(){m.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")}));var T=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(l,t);var e,n,r,a=S(l);function l(){return c(this,l),a.apply(this,arguments)}return e=l,n=[{key:"componentDidMount",value:function(){var t=document.createComment("\n\n=========================================================\n* * NextJS Argon Dashboard PRO v1.1.0 based on Argon Dashboard PRO React v1.1.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro\n* Copyright 2021 Creative Tim (https://www.creative-tim.com)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n");document.insertBefore(t,document.documentElement)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=e.layout||function(t){var e=t.children;return Object(u.jsx)(u.Fragment,{children:e})};return Object(u.jsxs)(b.a.Fragment,{children:[Object(u.jsxs)(j.a,{children:[Object(u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(u.jsx)("title",{children:"BoomGTech"}),Object(u.jsx)("script",{src:"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"})]}),Object(u.jsx)(r,{children:Object(u.jsx)(e,C({},n))})]})}}],r=[{key:"getInitialProps",value:function(){var t=Object(i.a)(o.a.mark((function t(e){var n,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,e.router,r=e.ctx,i={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:i=t.sent;case 6:return t.abrupt("return",{pageProps:i});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}],n&&s(e.prototype,n),r&&s(e,r),l}(O.a)},"20a2":function(t,e,n){t.exports=n("nOHt")},"33Jr":function(t,e,n){"use strict";n.r(e),n.d(e,"getScrollbarWidth",(function(){return a})),n.d(e,"setScrollbarWidth",(function(){return u})),n.d(e,"isBodyOverflowing",(function(){return c})),n.d(e,"getOriginalBodyPadding",(function(){return s})),n.d(e,"conditionallyUpdateScrollbar",(function(){return f})),n.d(e,"setGlobalCssModule",(function(){return l})),n.d(e,"mapToCssModules",(function(){return p})),n.d(e,"omit",(function(){return d})),n.d(e,"pick",(function(){return y})),n.d(e,"warnOnce",(function(){return b})),n.d(e,"deprecated",(function(){return v})),n.d(e,"DOMElement",(function(){return g})),n.d(e,"targetPropType",(function(){return O})),n.d(e,"tagPropType",(function(){return w})),n.d(e,"TransitionTimeouts",(function(){return j})),n.d(e,"TransitionPropTypeKeys",(function(){return x})),n.d(e,"TransitionStatuses",(function(){return P})),n.d(e,"keyCodes",(function(){return E})),n.d(e,"PopperPlacements",(function(){return _})),n.d(e,"canUseDOM",(function(){return M})),n.d(e,"isReactRefObj",(function(){return C})),n.d(e,"toNumber",(function(){return T})),n.d(e,"isObject",(function(){return k})),n.d(e,"isFunction",(function(){return A})),n.d(e,"findDOMElements",(function(){return I})),n.d(e,"isArrayOrNodeList",(function(){return N})),n.d(e,"getTarget",(function(){return R})),n.d(e,"defaultToggleEvents",(function(){return D})),n.d(e,"addMultipleEventListeners",(function(){return q})),n.d(e,"focusableElements",(function(){return W}));var r,o=n("17x9"),i=n.n(o);function a(){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function u(t){document.body.style.paddingRight=t>0?t+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function s(){var t=window.getComputedStyle(document.body,null);return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function f(){var t=a(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=e?parseInt(e.style.paddingRight||0,10):0;c()&&u(n+t)}function l(t){r=t}function p(t,e){return void 0===t&&(t=""),void 0===e&&(e=r),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function d(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}function y(t,e){for(var n,r=Array.isArray(e)?e:[e],o=r.length,i={};o>0;)i[n=r[o-=1]]=t[n];return i}var h={};function b(t){h[t]||("undefined"!==typeof console&&console.error(t),h[t]=!0)}function v(t,e){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&b('"'+r+'" property of "'+o+'" has been deprecated.\n'+e);for(var i=arguments.length,a=new Array(i>3?i-3:0),u=3;u<i;u++)a[u-3]=arguments[u];return t.apply(void 0,[n,r,o].concat(a))}}var m="object"===typeof window&&window.Element||function(){};function g(t,e,n){if(!(t[e]instanceof m))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var O=i.a.oneOfType([i.a.string,i.a.func,g,i.a.shape({current:i.a.any})]),w=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],P={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},_=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function C(t){return!(!t||"object"!==typeof t)&&"current"in t}function S(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function T(t){var e=typeof t;if("number"===e)return t;if("symbol"===e||"object"===e&&"[object Symbol]"===S(t))return NaN;if(k(t)){var n="function"===typeof t.valueOf?t.valueOf():t;t=k(n)?""+n:n}if("string"!==e)return 0===t?t:+t;t=t.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(t);return r||/^0o[0-7]+$/i.test(t)?parseInt(t.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(t)?NaN:+t}function k(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function A(t){if(!k(t))return!1;var e=S(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}function I(t){if(C(t))return t.current;if(A(t))return t();if("string"===typeof t&&M){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function N(t){return null!==t&&(Array.isArray(t)||M&&"number"===typeof t.length)}function R(t,e){var n=I(t);return e?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var D=["touchstart","click"];function q(t,e,n,r){var o=t;N(o)||(o=[o]);var i=n;if("string"===typeof i&&(i=i.split(/\s+/)),!N(o)||"function"!==typeof e||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(t){Array.prototype.forEach.call(o,(function(n){n.addEventListener(t,e,r)}))})),function(){Array.prototype.forEach.call(i,(function(t){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(t,e,r)}))}))}}var W=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?i=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var f=p[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&a||!d.has(l)?(d.add(l),r[f]=d):i=!1}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function y(t){var e=t.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},e)}y.rewind=function(){};var h=y;e.default=h},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),i=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("yXPU");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var l=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var p=l(n("q1tI")),d=n("g/15");function y(t){return h.apply(this,arguments)}function h(){return(h=s(r.mark((function t(e){var n,o,i;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return i=t.sent,t.abrupt("return",{pageProps:i});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps,e.NextWebVitalsMetric=d.NextWebVitalsMetric;var b=function(t){a(n,t);var e=f(n);function n(){return o(this,n),e.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,i=t.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||i?{}:{url:v(e)}))}}]),n}(p.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=b,b.origGetInitialProps=y,b.getInitialProps=y},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}n.d(e,"a",(function(){return o}))},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),l=function(t){a(n,t);var e=s(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=l},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},bTjV:function(t,e,n){"use strict";var r=n("wx14"),o=n("zLVn"),i=n("q1tI"),a=n.n(i),u=n("17x9"),c=n.n(u),s=n("TSYQ"),f=n.n(s),l=n("33Jr"),p={tag:l.tagPropType,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},d=function(t){var e=t.className,n=t.cssModule,i=t.type,u=t.size,c=t.color,s=t.children,p=t.tag,d=Object(o.a)(t,["className","cssModule","type","size","color","children","tag"]),y=Object(l.mapToCssModules)(f()(e,!!u&&"spinner-"+i+"-"+u,"spinner-"+i,!!c&&"text-"+c),n);return a.a.createElement(p,Object(r.a)({role:"status"},d,{className:y}),s&&a.a.createElement("span",{className:Object(l.mapToCssModules)("sr-only",n)},s))};d.propTypes=p,d.defaultProps={tag:"div",type:"border",children:"Loading..."},e.a=d},g4pe:function(t,e,n){t.exports=n("8Kt/")},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},zLVn:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))}},[[0,0,2,16,1,51]]]);