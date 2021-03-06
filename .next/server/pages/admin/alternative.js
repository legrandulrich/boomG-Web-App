module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+BtV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "08Fa":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-2-dcfcf3b77210fe85b0abc8260e6fa70e.jpg";

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "31c6":
/***/ (function(module, exports) {

module.exports = require("react-jvectormap");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ARZQ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5MOl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/angular-368685db949cddcd901ba54559a727d9.jpg";

/***/ }),

/***/ "5njf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-5-53033970a416368da35794389680266f.jpg";

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "8cHP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const routes = [{
  collapse: true,
  name: "Dashboards",
  icon: "ni ni-shop text-primary",
  state: "dashboardsCollapse",
  views: [{
    path: "/dashboard",
    name: "Dashboard",
    miniName: "D",
    layout: "/admin"
  }, {
    path: "/alternative",
    name: "Alternative",
    miniName: "A",
    layout: "/admin"
  }]
}, {
  collapse: true,
  name: "Examples",
  icon: "ni ni-ungroup text-orange",
  state: "examplesCollapse",
  views: [{
    path: "/pricing",
    name: "Pricing",
    miniName: "P",
    layout: "/auth"
  }, {
    path: "/login",
    name: "Login",
    miniName: "L",
    layout: "/auth"
  }, {
    path: "/register",
    name: "Register",
    miniName: "R",
    layout: "/auth"
  }, {
    path: "/lock",
    name: "Lock",
    miniName: "L",
    layout: "/auth"
  }, {
    path: "/timeline",
    name: "Timeline",
    miniName: "T",
    layout: "/admin"
  }, {
    path: "/profile",
    name: "Profile",
    miniName: "P",
    layout: "/admin"
  }, {
    path: "/rtl-support",
    name: "RTL Support",
    miniName: "RS",
    layout: "/rtl"
  }]
}, {
  collapse: true,
  name: "Components",
  icon: "ni ni-ui-04 text-info",
  state: "componentsCollapse",
  views: [{
    path: "/buttons",
    name: "Buttons",
    miniName: "B",
    layout: "/admin"
  }, {
    path: "/cards",
    name: "Cards",
    miniName: "C",
    layout: "/admin"
  }, {
    path: "/grid",
    name: "Grid",
    miniName: "G",
    layout: "/admin"
  }, {
    path: "/notifications",
    name: "Notifications",
    miniName: "N",
    layout: "/admin"
  }, {
    path: "/icons",
    name: "Icons",
    miniName: "I",
    layout: "/admin"
  }, {
    path: "/typography",
    name: "Typography",
    miniName: "T",
    layout: "/admin"
  }, {
    collapse: true,
    name: "Multi Level",
    miniName: "M",
    state: "multiCollapse",
    views: [{
      path: "#pablo",
      name: "Third level menu",
      layout: "/"
    }, {
      path: "#pablo",
      name: "Just another link",
      layout: "/"
    }, {
      path: "#pablo",
      name: "One last link",
      layout: "/"
    }]
  }]
}, {
  collapse: true,
  name: "Forms",
  icon: "ni ni-single-copy-04 text-pink",
  state: "formsCollapse",
  views: [{
    path: "/elements",
    name: "Elements",
    miniName: "E",
    layout: "/admin"
  }, {
    path: "/components",
    name: "Components",
    miniName: "C",
    layout: "/admin"
  }, {
    path: "/validation",
    name: "Validation",
    miniName: "V",
    layout: "/admin"
  }]
}, {
  collapse: true,
  name: "Tables",
  icon: "ni ni-align-left-2 text-default",
  state: "tablesCollapse",
  views: [{
    path: "/tables",
    name: "Tables",
    miniName: "T",
    layout: "/admin"
  }, {
    path: "/sortable",
    name: "Sortable",
    miniName: "S",
    layout: "/admin"
  }, {
    path: "/react-bs-tables",
    name: "React BS Tables",
    miniName: "RBT",
    layout: "/admin"
  }]
}, {
  collapse: true,
  name: "Maps",
  icon: "ni ni-map-big text-primary",
  state: "mapsCollapse",
  views: [{
    path: "/google",
    name: "Google",
    miniName: "G",
    layout: "/admin"
  }, {
    path: "/vector",
    name: "Vector",
    miniName: "V",
    layout: "/admin"
  }]
}, {
  path: "/widgets",
  name: "Widgets",
  icon: "ni ni-archive-2 text-green",
  layout: "/admin"
}, {
  path: "/charts",
  name: "Charts",
  icon: "ni ni-chart-pie-35 text-info",
  layout: "/admin"
}, {
  path: "/calendar",
  name: "Calendar",
  icon: "ni ni-calendar-grid-58 text-red",
  layout: "/admin"
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "9usk":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-1-53033970a416368da35794389680266f.jpg";

/***/ }),

/***/ "ARZQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "chart.js"
var external_chart_js_ = __webpack_require__("HAYV");

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./layouts/Admin.js
var Admin = __webpack_require__("i6E2");

// CONCATENATED MODULE: ./components/Headers/AlternativeHeader.js




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // reactstrap components



function AlternativeHeader() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "header pb-6",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "header-body",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
            className: "align-items-center py-4",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Col"], {
              lg: "6",
              xs: "7",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "h2 d-inline-block mb-0",
                children: "Alternative"
              }), " ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Breadcrumb"], {
                className: "d-none d-md-inline-block ml-md-4",
                listClassName: "breadcrumb-links",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["BreadcrumbItem"], {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                      className: "fas fa-home"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["BreadcrumbItem"], {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    children: "Dashboards"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["BreadcrumbItem"], {
                  "aria-current": "page",
                  className: "active",
                  children: "Alternative"
                })]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Col"], {
              className: "text-right",
              lg: "6",
              xs: "5",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                className: "btn-neutral",
                color: "",
                href: "#pablo",
                onClick: e => e.preventDefault(),
                size: "sm",
                children: "New"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                className: "btn-neutral",
                color: "",
                href: "#pablo",
                onClick: e => e.preventDefault(),
                size: "sm",
                children: "Filters"
              })]
            })]
          })
        })
      })
    })
  });
}

/* harmony default export */ var Headers_AlternativeHeader = (AlternativeHeader);
// EXTERNAL MODULE: ./variables/charts.js
var charts = __webpack_require__("ccUJ");

// CONCATENATED MODULE: ./pages/admin/alternative.js




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // we'll use this to import an use the vector map plugin

 // react plugin for creating vector maps

const VectorMap = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "31c6", 7)).then(m => m.VectorMap), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("31c6")],
    modules: ["react-jvectormap"]
  }
}); // javascipt plugin for creating charts

 // react plugin used to create charts

 // reactstrap components

 // layout for this page

 // core components



let mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

function Alternative() {
  if (false) {}

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Headers_AlternativeHeader, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Container"], {
      className: "mt--6",
      fluid: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
          md: "6",
          xl: "3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Card"], {
            className: "bg-gradient-primary border-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["CardBody"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardTitle"], {
                    tag: "h5",
                    className: "text-uppercase text-muted mb-0 text-white",
                    children: "Tasks completed"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "h2 font-weight-bold mb-0 text-white",
                    children: "8/24"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                    className: "progress-xs mt-3 mb-0",
                    max: "100",
                    value: "30",
                    color: "success"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                  className: "col-auto",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                      size: "sm",
                      color: "neutral",
                      className: "mr-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "fas fa-ellipsis-h"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                      right: true,
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Another action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Something else here"
                      })]
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3 mb-0 text-sm",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "text-nowrap text-white font-weight-600",
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: "See details"
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
          md: "6",
          xl: "3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Card"], {
            className: "bg-gradient-info border-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["CardBody"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardTitle"], {
                    tag: "h5",
                    className: "text-uppercase text-muted mb-0 text-white",
                    children: "Contacts"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "h2 font-weight-bold mb-0 text-white",
                    children: "123/267"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                    className: "progress-xs mt-3 mb-0",
                    max: "100",
                    value: "50",
                    color: "success"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                  className: "col-auto",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                      size: "sm",
                      color: "neutral",
                      className: "mr-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "fas fa-ellipsis-h"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                      right: true,
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Another action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Something else here"
                      })]
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3 mb-0 text-sm",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "text-nowrap text-white font-weight-600",
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: "See details"
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
          md: "6",
          xl: "3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Card"], {
            className: "bg-gradient-danger border-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["CardBody"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardTitle"], {
                    tag: "h5",
                    className: "text-uppercase text-muted mb-0 text-white",
                    children: "Items sold"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "h2 font-weight-bold mb-0 text-white",
                    children: "200/300"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                    className: "progress-xs mt-3 mb-0",
                    max: "100",
                    value: "80",
                    color: "success"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                  className: "col-auto",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                      size: "sm",
                      color: "neutral",
                      className: "mr-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "fas fa-ellipsis-h"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                      right: true,
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Another action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Something else here"
                      })]
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3 mb-0 text-sm",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "text-nowrap text-white font-weight-600",
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: "See details"
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
          md: "6",
          xl: "3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Card"], {
            className: "bg-gradient-default border-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["CardBody"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardTitle"], {
                    tag: "h5",
                    className: "text-uppercase text-muted mb-0 text-white",
                    children: "Notifications"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "h2 font-weight-bold mb-0 text-white",
                    children: "50/62"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                    className: "progress-xs mt-3 mb-0",
                    max: "100",
                    value: "90",
                    color: "success"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                  className: "col-auto",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                      size: "sm",
                      color: "neutral",
                      className: "mr-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "fas fa-ellipsis-h"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                      right: true,
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Another action"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Something else here"
                      })]
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3 mb-0 text-sm",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "text-nowrap text-white font-weight-600",
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: "See details"
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "card-deck flex-column flex-xl-row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["CardHeader"], {
            className: "bg-transparent",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "text-muted text-uppercase ls-1 mb-1",
              children: "Overview"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "h3 mb-0",
              children: "Sales value"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardBody"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "chart",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Line"], {
                data: charts["chartExample3"].data,
                options: charts["chartExample3"].options,
                id: "chart-sales",
                className: "chart-canvas"
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardHeader"], {
            className: "bg-transparent",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Row"], {
              className: "align-items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "col",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                  className: "text-uppercase text-muted ls-1 mb-1",
                  children: "Performance"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                  className: "h3 mb-0",
                  children: "Total orders"
                })]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardBody"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "chart",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Bar"], {
                data: charts["chartExample2"].data,
                options: charts["chartExample2"].options,
                className: "chart-canvas",
                id: "chart-bars"
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardHeader"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
              className: "align-items-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Col"], {
                xs: "8",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                  className: "surtitle",
                  children: "5/23 projects"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                  className: "h3 mb-0",
                  children: "Progress track"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                className: "text-right",
                xs: "4",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                  className: "btn-neutral",
                  color: "default",
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  size: "sm",
                  children: "Action"
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardBody"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["ListGroup"], {
              className: "list my--3",
              flush: true,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("anW6")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "Argon Design System"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "60",
                      color: "warning"
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("5MOl")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "Angular Now UI Kit PRO"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "100",
                      color: "success"
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("mliW")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "Black Dashboard"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "72",
                      color: "danger"
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("XVCQ")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "React Material Dashboard"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "90",
                      color: "info"
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("bBUN")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "Vue Paper UI Kit PRO"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "100",
                      color: "success"
                    })]
                  })]
                })
              })]
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
          xl: "8",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardHeader"], {
              className: "border-0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                className: "align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "mb-0",
                    children: "Page visits"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col text-right",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                    color: "primary",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    size: "sm",
                    children: "See all"
                  })
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Table"], {
              className: "align-items-center table-flush",
              responsive: true,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
                className: "thead-light",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    className: "sort",
                    "data-sort": "name",
                    scope: "col",
                    children: "Project"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    className: "sort",
                    "data-sort": "budget",
                    scope: "col",
                    children: "Budget"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    className: "sort",
                    "data-sort": "status",
                    scope: "col",
                    children: "Status"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "col",
                    children: "Users"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    className: "sort",
                    "data-sort": "completion",
                    scope: "col",
                    children: "Completion"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "col"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tbody", {
                className: "list",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "row",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Media"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar rounded-circle mr-3",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("anW6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Media"], {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: "name mb-0 text-sm",
                          children: "Argon Design System"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "budget",
                    children: "$2500 USD"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Badge"], {
                      className: "badge-dot mr-4",
                      color: "",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "bg-warning"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "status",
                        children: "pending"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "avatar-group",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip133563378",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip133563378",
                        children: "Ryan Tompson"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip336932279",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip336932279",
                        children: "Romina Hadid"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip619079522",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip619079522",
                        children: "Alexander Smith"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip432104658",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip432104658",
                        children: "Jessica Doe"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "completion mr-2",
                        children: "60%"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                          max: "100",
                          value: "60",
                          color: "warning"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "text-right",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                        color: "",
                        size: "sm",
                        className: "btn-icon-only text-light",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fas fa-ellipsis-v"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                        className: "dropdown-menu-arrow",
                        right: true,
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Another action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Something else here"
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "row",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Media"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar rounded-circle mr-3",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("5MOl")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Media"], {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: "name mb-0 text-sm",
                          children: "Angular Now UI Kit PRO"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "budget",
                    children: "$1800 USD"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Badge"], {
                      className: "badge-dot mr-4",
                      color: "",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "bg-success"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "status",
                        children: "completed"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "avatar-group",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip634319950",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip634319950",
                        children: "Ryan Tompson"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip493477456",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip493477456",
                        children: "Romina Hadid"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip556499717",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip556499717",
                        children: "Alexander Smith"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip106307927",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip106307927",
                        children: "Jessica Doe"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "completion mr-2",
                        children: "100%"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                          max: "100",
                          value: "100",
                          color: "success"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "text-right",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                        color: "",
                        size: "sm",
                        className: "btn-icon-only text-light",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fas fa-ellipsis-v"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                        className: "dropdown-menu-arrow",
                        right: true,
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Another action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Something else here"
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "row",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Media"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar rounded-circle mr-3",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("mliW")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Media"], {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: "name mb-0 text-sm",
                          children: "Black Dashboard"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "budget",
                    children: "$3150 USD"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Badge"], {
                      className: "badge-dot mr-4",
                      color: "",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "bg-danger"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "status",
                        children: "delayed"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "avatar-group",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip389668727",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip389668727",
                        children: "Ryan Tompson"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip477178747",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip477178747",
                        children: "Romina Hadid"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip927225283",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip927225283",
                        children: "Alexander Smith"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip394856270",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip394856270",
                        children: "Jessica Doe"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "completion mr-2",
                        children: "72%"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                          max: "100",
                          value: "72",
                          color: "danger"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "text-right",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                        color: "",
                        size: "sm",
                        className: "btn-icon-only text-light",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fas fa-ellipsis-v"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                        className: "dropdown-menu-arrow",
                        right: true,
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Another action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Something else here"
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "row",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Media"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar rounded-circle mr-3",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("XVCQ")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Media"], {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: "name mb-0 text-sm",
                          children: "React Material Dashboard"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "budget",
                    children: "$4400 USD"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Badge"], {
                      className: "badge-dot mr-4",
                      color: "",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "bg-info"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "status",
                        children: "on schedule"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "avatar-group",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip51649841",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip51649841",
                        children: "Ryan Tompson"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip85562388",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip85562388",
                        children: "Romina Hadid"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip195204481",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip195204481",
                        children: "Alexander Smith"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip967941406",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip967941406",
                        children: "Jessica Doe"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "completion mr-2",
                        children: "90%"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                          max: "100",
                          value: "90",
                          color: "info"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "text-right",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                        color: "",
                        size: "sm",
                        className: "btn-icon-only text-light",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fas fa-ellipsis-v"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                        className: "dropdown-menu-arrow",
                        right: true,
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Another action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Something else here"
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "row",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Media"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar rounded-circle mr-3",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("bBUN")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Media"], {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: "name mb-0 text-sm",
                          children: "Vue Paper UI Kit PRO"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "budget",
                    children: "$2200 USD"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Badge"], {
                      className: "badge-dot mr-4",
                      color: "",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "bg-success"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "status",
                        children: "completed"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "avatar-group",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip177298166",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip177298166",
                        children: "Ryan Tompson"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip290379011",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip290379011",
                        children: "Romina Hadid"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip2287293",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip2287293",
                        children: "Alexander Smith"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip539852250",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip539852250",
                        children: "Jessica Doe"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "completion mr-2",
                        children: "100%"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                          max: "100",
                          value: "100",
                          color: "success"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "text-right",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                        color: "",
                        size: "sm",
                        className: "btn-icon-only text-light",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fas fa-ellipsis-v"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                        className: "dropdown-menu-arrow",
                        right: true,
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Another action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Something else here"
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
                    scope: "row",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Media"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar rounded-circle mr-3",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("anW6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Media"], {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: "name mb-0 text-sm",
                          children: "Argon Design System"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "budget",
                    children: "$2500 USD"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Badge"], {
                      className: "badge-dot mr-4",
                      color: "",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                        className: "bg-warning"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "status",
                        children: "pending"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "avatar-group",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip758997307",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip758997307",
                        children: "Ryan Tompson"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip597292977",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip597292977",
                        children: "Romina Hadid"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip443183509",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip443183509",
                        children: "Alexander Smith"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: "avatar avatar-sm rounded-circle",
                        href: "#pablo",
                        id: "tooltip806450131",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip806450131",
                        children: "Jessica Doe"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "completion mr-2",
                        children: "60%"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                          max: "100",
                          value: "60",
                          color: "warning"
                        })
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                    className: "text-right",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["UncontrolledDropdown"], {
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownToggle"], {
                        color: "",
                        size: "sm",
                        className: "btn-icon-only text-light",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fas fa-ellipsis-v"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["DropdownMenu"], {
                        className: "dropdown-menu-arrow",
                        right: true,
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Another action"
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["DropdownItem"], {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Something else here"
                        })]
                      })]
                    })
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
          xl: "4",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
            className: "widget-calendar",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardHeader"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                className: "align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                  xs: "8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                    className: "h3 mb-0",
                    children: "Real time"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                  className: "text-right",
                  xs: "4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                    className: "btn-neutral",
                    color: "default",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    size: "sm",
                    children: "Action"
                  })
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["CardBody"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(VectorMap, {
                containerClassName: "vector-map vector-map-sm",
                containerStyle: {
                  width: "100%",
                  height: "280px"
                },
                map: "world_mill",
                zoomOnScroll: false,
                scaleColors: ["#f00", "#0071A4"],
                normalizeFunction: "polynomial",
                hoverOpacity: 0.7,
                hoverColor: false,
                backgroundColor: "transparent",
                regionStyle: {
                  initial: {
                    fill: "#e9ecef",
                    "fill-opacity": 0.8,
                    stroke: "none",
                    "stroke-width": 0,
                    "stroke-opacity": 1
                  },
                  hover: {
                    fill: "#dee2e6",
                    "fill-opacity": 0.8,
                    cursor: "pointer"
                  },
                  selected: {
                    fill: "yellow"
                  },
                  selectedHover: {}
                },
                markerStyle: {
                  initial: {
                    fill: "#fb6340",
                    "stroke-width": 0
                  },
                  hover: {
                    fill: "#11cdef",
                    "stroke-width": 0
                  }
                },
                markers: [{
                  latLng: [41.9, 12.45],
                  name: "Vatican City"
                }, {
                  latLng: [43.73, 7.41],
                  name: "Monaco"
                }, {
                  latLng: [35.88, 14.5],
                  name: "Malta"
                }, {
                  latLng: [1.3, 103.8],
                  name: "Singapore"
                }, {
                  latLng: [1.46, 173.03],
                  name: "Kiribati"
                }, {
                  latLng: [-21.13, -175.2],
                  name: "Tonga"
                }, {
                  latLng: [15.3, -61.38],
                  name: "Dominica"
                }, {
                  latLng: [-20.2, 57.5],
                  name: "Mauritius"
                }, {
                  latLng: [26.02, 50.55],
                  name: "Bahrain"
                }],
                series: {
                  regions: [{
                    values: mapData,
                    scale: ["#ced4da", "#adb5bd"],
                    normalizeFunction: "polynomial"
                  }]
                }
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["ListGroup"], {
                className: "list my--3",
                flush: true,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("iF6T")
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Country:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "United States"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Visits:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "2500"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Bounce:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "30%"
                      })]
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("gNFc")
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Country:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "Germany"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Visits:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "2500"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Bounce:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "30%"
                      })]
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("+BtV")
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Country:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "Great Britain"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Visits:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "2500"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                        children: "Bounce:"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                        className: "mb-0",
                        children: "30%"
                      })]
                    })]
                  })
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "card-deck flex-column flex-xl-row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardHeader"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
              className: "h3 mb-0",
              children: "Team members"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardBody"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["ListGroup"], {
              className: "list my--3",
              flush: true,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("9usk")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col ml--2",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                      className: "mb-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "John Michael"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: "text-success mr-1",
                      children: "\u25CF"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "Online"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                      color: "primary",
                      size: "sm",
                      type: "button",
                      children: "Add"
                    })
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("08Fa")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col ml--2",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                      className: "mb-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Alex Smith"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: "text-warning mr-1",
                      children: "\u25CF"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "In a meeting"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                      color: "primary",
                      size: "sm",
                      type: "button",
                      children: "Add"
                    })
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("JXq+")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col ml--2",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                      className: "mb-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "Samantha Ivy"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: "text-danger mr-1",
                      children: "\u25CF"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "Offline"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                      color: "primary",
                      size: "sm",
                      type: "button",
                      children: "Add"
                    })
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("wSe6")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col ml--2",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                      className: "mb-0",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: "John Michael"
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: "text-success mr-1",
                      children: "\u25CF"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "Online"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Button"], {
                      color: "primary",
                      size: "sm",
                      type: "button",
                      children: "Add"
                    })
                  })]
                })
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardHeader"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
              className: "h3 mb-0",
              children: "To do list"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardBody"], {
            className: "p-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["ListGroup"], {
              "data-toggle": "checklist",
              flush: true,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "checklist-entry flex-column align-items-start py-4 px-4",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "checklist-item checklist-item-success checklist-item-checked",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "checklist-info",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      className: "checklist-title mb-0",
                      children: "Call with Dave"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "10:30 AM"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "custom-control custom-checkbox custom-checkbox-success",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        className: "custom-control-input",
                        defaultChecked: true,
                        id: "chk-todo-task-1",
                        type: "checkbox"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                        className: "custom-control-label",
                        htmlFor: "chk-todo-task-1"
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "checklist-entry flex-column align-items-start py-4 px-4",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "checklist-item checklist-item-warning",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "checklist-info",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      className: "checklist-title mb-0",
                      children: "Lunch meeting"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "10:30 AM"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "custom-control custom-checkbox custom-checkbox-warning",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        className: "custom-control-input",
                        id: "chk-todo-task-2",
                        type: "checkbox"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                        className: "custom-control-label",
                        htmlFor: "chk-todo-task-2"
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "checklist-entry flex-column align-items-start py-4 px-4",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "checklist-item checklist-item-info",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "checklist-info",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      className: "checklist-title mb-0",
                      children: "Argon Dashboard Launch"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "10:30 AM"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "custom-control custom-checkbox custom-checkbox-info",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        className: "custom-control-input",
                        id: "chk-todo-task-3",
                        type: "checkbox"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                        className: "custom-control-label",
                        htmlFor: "chk-todo-task-3"
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "checklist-entry flex-column align-items-start py-4 px-4",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "checklist-item checklist-item-danger checklist-item-checked",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "checklist-info",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      className: "checklist-title mb-0",
                      children: "Winter Hackaton"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                      children: "10:30 AM"
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "custom-control custom-checkbox custom-checkbox-danger",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        className: "custom-control-input",
                        defaultChecked: true,
                        id: "chk-todo-task-4",
                        type: "checkbox"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                        className: "custom-control-label",
                        htmlFor: "chk-todo-task-4"
                      })]
                    })
                  })]
                })
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Card"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardHeader"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
              className: "h3 mb-0",
              children: "Progress track"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["CardBody"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["ListGroup"], {
              className: "list my--3",
              flush: true,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("anW6")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "Argon Design System"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "60",
                      color: "warning"
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("5MOl")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "Angular Now UI Kit PRO"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "100",
                      color: "success"
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("mliW")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "Black Dashboard"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "72",
                      color: "danger"
                    })]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ListGroupItem"], {
                className: "px-0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_reactstrap_["Row"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: "avatar rounded-circle",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        alt: "...",
                        src: __webpack_require__("XVCQ")
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                      children: "React Material Dashboard"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Progress"], {
                      className: "progress-xs mb-0",
                      max: "100",
                      value: "90",
                      color: "info"
                    })]
                  })]
                })
              })]
            })
          })]
        })]
      })]
    })]
  });
}

Alternative.layout = Admin["a" /* default */];
/* harmony default export */ var alternative = __webpack_exports__["default"] = (Alternative);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "HAYV":
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "JXq+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-3-497bb3590e24c9f8b645864bfffc39b8.jpg";

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RG8o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RfFk");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// react library that creates nice scrollbar on windows devices
 // reactstrap components



function Sidebar({
  toggleSidenav,
  sidenavOpen,
  routes,
  logo,
  rtlActive,
  router
}) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});
  const [windowWidth, setWindowWidth] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const [navigatorPlatform, setNavigatorPlatform] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setState(getCollapseStates(routes));
    setWindowWidth(window.innerWidth);
    setNavigatorPlatform(navigator.platform); // eslint-disable-next-line
  }, []); // verifies if routeName is the one active (in browser input)

  const activeRoute = routeName => {
    return router.pathname.indexOf(routeName) > -1 ? "active" : "";
  }; // makes the sidenav normal on hover (actually when mouse enters on it)


  const onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }; // makes the sidenav mini on hover (actually when mouse leaves from it)


  const onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }; // this creates the intial state of this component based on the collapse routes
  // that it gets through props.routes


  const getCollapseStates = routes => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = _objectSpread(_objectSpread({
          [prop.state]: getCollapseInitialState(prop.views)
        }, getCollapseStates(prop.views)), initialState);
      }

      return null;
    });
    return initialState;
  }; // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.js - route /admin/regular-forms


  const getCollapseInitialState = routes => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (router.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }

    return false;
  }; // this is used on mobile devices, when a user navigates
  // the sidebar will autoclose


  const closeSidenav = () => {
    if (windowWidth < 1200) {
      toggleSidenav();
    }
  }; // this function creates the links and collapses that appear in the sidebar (left menu)


  const createLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }

      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
            href: "#pablo",
            "data-toggle": "collapse",
            "aria-expanded": state[prop.state],
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
              active: getCollapseInitialState(prop.views)
            }),
            onClick: e => {
              e.preventDefault();
              setState(st);
            },
            children: prop.icon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: prop.icon
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: prop.name
              })]
            }) : prop.miniName ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-mini-icon",
                children: [" ", prop.miniName, " "]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-normal",
                children: [" ", prop.name, " "]
              })]
            }) : null
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
            isOpen: state[prop.state],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
              className: "nav-sm flex-column",
              children: createLinks(prop.views)
            })
          })]
        }, key);
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        className: activeRoute(prop.layout + prop.path),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: prop.layout + prop.path,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
            href: "#pablo",
            onClick: closeSidenav,
            children: prop.icon !== undefined ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: prop.icon
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: prop.name
              })]
            }) : prop.miniName !== undefined ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-mini-icon",
                children: [" ", prop.miniName, " "]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-normal",
                children: [" ", prop.name, " "]
              })]
            }) : prop.name
          })
        })
      }, key);
    });
  };

  const scrollBarInner = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "scrollbar-inner",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "sidenav-header d-flex align-items-center",
      children: [logo && logo.innerLink ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: logo.innerLink,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarBrand"], {
            href: "#pablo",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              alt: logo.imgAlt,
              className: "navbar-brand-img",
              src: logo.imgSrc
            })
          })
        })
      }) : null, logo && logo.outterLink ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarBrand"], {
        href: logo.outterLink,
        target: "_blank",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          alt: logo.imgAlt,
          className: "navbar-brand-img",
          src: logo.imgSrc
        })
      }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ml-auto",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("sidenav-toggler d-none d-xl-block", {
            active: sidenavOpen
          }),
          onClick: toggleSidenav,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "sidenav-toggler-inner",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "sidenav-toggler-line"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "sidenav-toggler-line"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "sidenav-toggler-line"
            })]
          })
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "navbar-inner",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        navbar: true,
        isOpen: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
          navbar: true,
          children: createLinks(routes)
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {
          className: "my-3"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h6", {
          className: "navbar-heading p-0 text-muted",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "docs-normal",
            children: "Documentation"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "docs-mini",
            children: "D"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
          className: "mb-md-3",
          navbar: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/overview/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-spaceship"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Getting started"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/colors/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-palette"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Foundation"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/alerts/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-ui-04"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Components"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/react-chartjs-2/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-chart-pie-35"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Plugins"
              })]
            })
          })]
        })]
      })
    })]
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    className: "sidenav navbar-vertical navbar-expand-xs navbar-light bg-white " + (rtlActive ? "" : "fixed-left"),
    onMouseEnter: onMouseEnterSidenav,
    onMouseLeave: onMouseLeaveSidenav,
    children: navigatorPlatform && navigatorPlatform.indexOf("Win") > -1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: scrollBarInner
    }) : scrollBarInner
  });
}

Sidebar.defaultProps = {
  routes: [{}],
  toggleSidenav: () => {},
  sidenavOpen: false,
  rtlActive: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Sidebar));

/***/ }),

/***/ "RfFk":
/***/ (function(module, exports) {

module.exports = require("react-perfect-scrollbar");

/***/ }),

/***/ "SbLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);



 // reactstrap components



function AdminFooter() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
        className: "footer pt-0",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "align-items-center justify-content-lg-between",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            lg: "6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "copyright text-center text-lg-left text-muted",
              children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                className: "font-weight-bold ml-1",
                href: "#",
                target: "_blank",
                children: "BoomGTech Inc."
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            lg: "6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              className: "nav-footer justify-content-center justify-content-lg-end",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "#",
                  target: "_blank",
                  children: "BoomGTech"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "#",
                  target: "_blank",
                  children: "About Us"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "#",
                  target: "_blank",
                  children: "Blog"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "#",
                  target: "_blank",
                  children: "License"
                })
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (AdminFooter);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XVCQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/react-c4eb3d0be0cf5a2d156a123bdf7fb40d.jpg";

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "anW6":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bootstrap-ab904daa548967670847fc3929bf50f4.jpg";

/***/ }),

/***/ "bBUN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/vue-9378e368a757bd0c7ca556a0258cb527.jpg";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser???s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "ccUJ":
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  global.window = {};
}

if (typeof document === "undefined") {
  global.document = {
    querySelector: () => {}
  };
}
/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


const Chart = __webpack_require__("HAYV"); // Only for demo purposes - return a random number to generate datasets


var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
}; //
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//


Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth; // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed

  var cornerRadius = 6;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || "bottom";
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || "left";
  } // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line


  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

    var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0); // not become a vertical line?

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    } // not become a horizontal line?


    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth; // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |

  var corners = [[left, bottom], [left, top], [right, top], [right, bottom]]; // Find first (starting) corner with fallback to 'bottom'

  var borders = ["bottom", "left", "top", "right"];
  var startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  } // Draw rectangle from 'startCorner'


  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    let nextCornerId = i + 1;

    if (nextCornerId === 4) {
      nextCornerId = 0;
    } // let nextCorner = cornerAt(nextCornerId);


    let width = corners[2][0] - corners[1][0];
    let height = corners[0][1] - corners[1][1];
    let x = corners[1][0];
    let y = corners[1][1]; // eslint-disable-next-line

    var radius = cornerRadius; // Fix radius being too large

    if (radius > height / 2) {
      radius = height / 2;
    }

    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
};

var mode = "light"; //(themeMode) ? themeMode : 'light';

var fonts = {
  base: "Open Sans"
}; // Colors

var colors = {
  gray: {
    100: "#f6f9fc",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#8898aa",
    700: "#525f7f",
    800: "#32325d",
    900: "#212529"
  },
  theme: {
    default: "#172b4d",
    primary: "#5e72e4",
    secondary: "#f4f5f7",
    info: "#11cdef",
    success: "#2dce89",
    danger: "#f5365c",
    warning: "#fb6340"
  },
  black: "#12263F",
  white: "#FFFFFF",
  transparent: "transparent"
}; // Methods
// Chart.js global options

function chartOptions() {
  // Options
  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme["primary"]
          },
          line: {
            tension: 0.4,
            borderWidth: 4,
            borderColor: colors.theme["primary"],
            backgroundColor: colors.transparent,
            borderCapStyle: "rounded"
          },
          rectangle: {
            backgroundColor: colors.theme["warning"]
          },
          arc: {
            backgroundColor: colors.theme["primary"],
            borderColor: mode === "dark" ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false
        }
      },
      doughnut: {
        cutoutPercentage: 83,
        legendCallback: function (chart) {
          var data = chart.data;
          var content = "";
          data.labels.forEach(function (label, index) {
            var bgColor = data.datasets[0].backgroundColor[index];
            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += "</span>";
          });
          return content;
        }
      }
    }
  }; // yAxes

  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode === "dark" ? colors.gray[900] : colors.gray[300],
      drawBorder: false,
      drawTicks: false,
      lineWidth: 1,
      zeroLineWidth: 1,
      zeroLineColor: mode === "dark" ? colors.gray[900] : colors.gray[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function (value) {
        if (!(value % 10)) {
          return value;
        }
      }
    }
  }); // xAxes

  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false
    },
    ticks: {
      padding: 20
    }
  });
  return options;
} // Parse global options


function parseOptions(parent, options) {
  for (var item in options) {
    if (typeof options[item] !== "object") {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
} // Example 1 of Chart inside src/views/dashboards/Dashboard.js


let chartExample1 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[700],
          zeroLineColor: colors.gray[700]
        },
        ticks: {
          callback: function (value) {
            if (!(value % 10)) {
              return "$" + value + "k";
            }
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$" + yLabel + "k";
          return content;
        }
      }
    }
  },
  data1: canvas => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
      }]
    };
  },
  data2: canvas => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 20, 5, 25, 10, 30, 15, 40, 40]
      }]
    };
  }
}; // Example 2 of Chart inside src/views/dashboards/Dashboard.js and src/views/dashboards/Alternative.js and src/views/pages/Charts.js

let chartExample2 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[200],
          zeroLineColor: colors.gray[200]
        },
        ticks: {
          callback: function (value) {
            if (!(value % 10)) {
              //return '$' + value + 'k'
              return value;
            }
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += yLabel;
          return content;
        }
      }
    }
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales",
      data: [25, 20, 30, 22, 17, 29],
      maxBarThickness: 10
    }]
  }
}; // Example 3 of Chart inside src/views/dashboards/Alternative.js and src/views/pages/Charts.js

let chartExample3 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[200],
          zeroLineColor: colors.gray[200]
        },
        ticks: {}
      }]
    }
  },
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Performance",
      data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
    }]
  }
}; // Example 4 of Chart inside src/views/pages/Charts.js

const chartExample4 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[200],
          zeroLineColor: colors.gray[200]
        },
        ticks: {}
      }]
    }
  },
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Performance",
      data: [10, 18, 28, 23, 28, 40, 36, 46, 52],
      pointRadius: 10,
      pointHoverRadius: 15,
      showLine: false
    }]
  }
}; // Example 5 of Chart inside src/views/pages/Charts.js

const chartExample5 = {
  data: {
    labels: ["Danger", "Warning", "Success", "Primary", "Info"],
    datasets: [{
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      backgroundColor: [colors.theme["danger"], colors.theme["warning"], colors.theme["success"], colors.theme["primary"], colors.theme["info"]],
      label: "Dataset 1"
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: "top"
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}; // Example 6 of Chart inside src/views/pages/Charts.js

const chartExample6 = {
  data: {
    labels: ["Danger", "Warning", "Success", "Primary", "Info"],
    datasets: [{
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      backgroundColor: [colors.theme["danger"], colors.theme["warning"], colors.theme["success"], colors.theme["primary"], colors.theme["info"]],
      label: "Dataset 1"
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: "top"
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}; // Example 7 of Chart inside src/views/pages/Charts.js

const chartExample7 = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "Dataset 1",
      backgroundColor: colors.theme["danger"],
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      maxBarThickness: 10
    }, {
      label: "Dataset 2",
      backgroundColor: colors.theme["primary"],
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      maxBarThickness: 10
    }, {
      label: "Dataset 3",
      backgroundColor: colors.theme["success"],
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      maxBarThickness: 10
    }]
  },
  options: {
    tooltips: {
      mode: "index",
      intersect: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
};
module.exports = {
  chartOptions,
  // used alonside with the chartExamples variables
  parseOptions,
  // used alonside with the chartExamples variables
  chartExample1,
  // used inside src/views/dashboards/Dashboard.js
  chartExample2,
  // used inside src/views/dashboards/Dashboard.js and src/views/dashboards/Alternative.js and src/views/pages/Charts.js
  chartExample3,
  // used inside src/views/dashboards/Alternative.js and src/views/pages/Charts.js
  chartExample4,
  // used inside src/views/pages/Charts.js
  chartExample5,
  // used inside src/views/pages/Charts.js
  chartExample6,
  // used inside src/views/pages/Charts.js
  chartExample7 // used inside src/views/pages/Charts.js

};

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won???t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gNFc":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "i6E2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jnuQ");
/* harmony import */ var components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SbLS");
/* harmony import */ var components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RG8o");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8cHP");




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

 // core components






function Admin({
  router,
  children
}) {
  const [sidenavOpen, setSidenavOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }

      if (prop.layout === "/admin") {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Route, {
          path: prop.layout + prop.path,
          component: prop.component
        }, key);
      } else {
        return null;
      }
    });
  };

  const getBrandText = path => {
    for (let i = 0; i < routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].length; i++) {
      if (router.pathname.indexOf(routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][i].layout + routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][i].path) !== -1) {
        return routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][i].name;
      }
    }

    return "Brand";
  }; // toggles collapse between mini sidenav and normal


  const toggleSidenav = e => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }

    setSidenavOpen(!sidenavOpen);
  };

  const getNavbarTheme = () => {
    return router.pathname.indexOf("admin/alternative-dashboard") === -1 ? "dark" : "light";
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      routes: routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
      toggleSidenav: toggleSidenav,
      sidenavOpen: sidenavOpen,
      logo: {
        innerLink: "/",
        imgSrc: __webpack_require__("v3H1"),
        imgAlt: "..."
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "main-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        theme: getNavbarTheme(),
        toggleSidenav: toggleSidenav,
        sidenavOpen: sidenavOpen,
        brandText: getBrandText(router.pathname)
      }), children, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})]
    }), sidenavOpen ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "backdrop d-xl-none",
      onClick: toggleSidenav
    }) : null]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Admin));

/***/ }),

/***/ "iF6T":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "jnuQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// reactstrap components


function AdminNavbar({
  theme,
  sidenavOpen,
  toggleSidenav
}) {
  // function that on mobile devices makes the search open
  const openSearch = () => {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }; // function that on mobile devices makes the search close


  const closeSearch = () => {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-top navbar-expand border-bottom", {
        "navbar-dark bg-dark": theme === "dark"
      }, {
        "navbar-light bg-secondary": theme === "light"
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
          navbar: true,
          isOpen: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-search form-inline mr-sm-3", {
              "navbar-search-light": theme === "dark"
            }, {
              "navbar-search-dark": theme === "light"
            }),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
              className: "mb-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
                className: "input-group-alternative input-group-merge",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
                  addonType: "prepend",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-search"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                  placeholder: "Search",
                  type: "text"
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              "aria-label": "Close",
              className: "close",
              type: "button",
              onClick: closeSearch,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                "aria-hidden": true,
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
            className: "align-items-center ml-md-auto",
            navbar: true,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
              className: "d-xl-none",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pr-3 sidenav-toggler", {
                  active: sidenavOpen
                }, {
                  "sidenav-toggler-dark": theme === "dark"
                }),
                onClick: toggleSidenav,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "sidenav-toggler-inner",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "sidenav-toggler-line"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "sidenav-toggler-line"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "sidenav-toggler-line"
                  })]
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
              className: "d-sm-none",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                onClick: openSearch,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ni ni-zoom-split-in"
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], {
              nav: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
                className: "nav-link",
                color: "",
                tag: "a",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ni ni-bell-55"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
                className: "dropdown-menu-xl py-0 overflow-hidden",
                right: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "px-3 py-3",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h6", {
                    className: "text-sm text-muted m-0",
                    children: ["You have ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                      className: "text-info",
                      children: "13"
                    }), " ", "notifications."]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroup"], {
                  flush: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "2 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "Let's meet at Starbucks at 11:30. Wdyt?"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "3 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "A new issue has been reported for Argon."
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "5 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "Your posts have been liked a lot."
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "2 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "Let's meet at Starbucks at 11:30. Wdyt?"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("5njf")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "3 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "A new issue has been reported for Argon."
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  className: "text-center text-info font-weight-bold py-3",
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: "View all"
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], {
              nav: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
                className: "nav-link",
                color: "",
                tag: "a",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ni ni-ungroup"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
                className: "dropdown-menu-lg dropdown-menu-dark bg-default",
                right: true,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                  className: "shortcuts px-4",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-red",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-calendar-grid-58"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Calendar"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-orange",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-email-83"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Email"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-info",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-credit-card"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Payments"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-green",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-books"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Reports"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-purple",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-pin-3"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Maps"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-yellow",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-basket"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Shop"
                    })]
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
            className: "align-items-center ml-auto ml-md-0",
            navbar: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], {
              nav: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
                className: "nav-link pr-0",
                color: "",
                tag: "a",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "avatar avatar-sm rounded-circle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      alt: "...",
                      src: __webpack_require__("wSe6")
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
                    className: "ml-2 d-none d-lg-block",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "mb-0 text-sm font-weight-bold",
                      children: "John Snow"
                    })
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
                right: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  className: "noti-title",
                  header: true,
                  tag: "div",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                    className: "text-overflow m-0",
                    children: "Welcome!"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-single-02"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "My profile"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-settings-gear-65"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Settings"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-calendar-grid-58"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Activity"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-support-16"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Support"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  divider: true
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-user-run"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Logout"
                  })]
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark"
};
/* harmony default export */ __webpack_exports__["a"] = (AdminNavbar);

/***/ }),

/***/ "mliW":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sketch-e7c82e5c569db9d9761b13ef1384f702.jpg";

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "v3H1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nextjs_argon_black-00653defbe44f7b5ed0e3926ec44f265.png";

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wSe6":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-4-230071328b705f8686cabd26a85ed6a5.jpg";

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });