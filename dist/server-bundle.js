module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_api__ = __webpack_require__(17);
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchIdsByType;
/* unused harmony export fetchItem */
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchItems;
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchUser;
/* unused harmony export watchList */
// this is aliased in webpack config based on server/client build


// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].onServer && !__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].warmCacheStarted) {
  __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].warmCacheStarted = true
  warmCache()
}

function warmCache () {
  fetchItems((__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds.top || []).slice(0, 30))
  setTimeout(warmCache, 1000 * 60 * 15)
}

function fetch (child) {
  var cache = __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedItems
  if (cache && cache.has(child)) {
    return Promise.resolve(cache.get(child))
  } else {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].child(child).once('value', function (snapshot) {
        var val = snapshot.val()
        // mark the timestamp when this item is cached
        if (val) { val.__lastUpdated = Date.now() }
        cache && cache.set(child, val)
        resolve(val)
      }, reject)
    })
  }
}

function fetchIdsByType (type) {
  return __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds && __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds[type]
    ? Promise.resolve(__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds[type])
    : fetch((type + "stories"))
}

function fetchItem (id) {
  return fetch(("item/" + id))
}

function fetchItems (ids) {
  return Promise.all(ids.map(function (id) { return fetchItem(id); }))
}

function fetchUser (id) {
  return fetch(("user/" + id))
}

function watchList (type, cb) {
  var first = true
  var ref = __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].child((type + "stories"))
  var handler = function (snapshot) {
    if (first) {
      first = false
    } else {
      cb(snapshot.val())
    }
  }
  ref.on('value', handler)
  return function () {
    ref.off('value', handler)
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(36)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return app; });







// sync the router with the vuex store.
// this registers `store.state.route`
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */])

// register global utility filters.
Object.keys(__WEBPACK_IMPORTED_MODULE_5__filters__).forEach(function (key) {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter(key, __WEBPACK_IMPORTED_MODULE_5__filters__[key])
})

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(Object.assign({}, {router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]},
  __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a))

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Nav_MainMenu_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Nav_MainMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Nav_MainMenu_vue__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    MainMenu: __WEBPACK_IMPORTED_MODULE_0__components_Nav_MainMenu_vue___default.a
  }
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    auto: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    nextSlide: function nextSlide() {
      var carousel = this.$refs.carousel;
      var seats = this.$refs.seat;
      var currentRef = document.querySelector('.slider__seat.is-ref');
      var currentRefIndex = Number(currentRef.id.substring(currentRef.id.indexOf('-') + 1));
      carousel.classList.remove('is-reversing');
      carousel.classList.remove('is-set');
      setTimeout(function () {
        carousel.classList.add('is-set');
      }, 10);
      seats.forEach(function (seat) { return (
        seat.style.order = 3
      ); });

      // current image
      var currentImageIndex = -1;
      if (currentRefIndex === seats.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex = currentRefIndex + 1;
      }

      var nextRefIndex = currentImageIndex;

      var nextImageIndex = -1;
      if (currentImageIndex === seats.length - 1) {
        nextImageIndex = 0;
      } else {
        nextImageIndex = currentImageIndex + 1;
      }
      currentRef.classList.remove('is-ref');
      seats[nextRefIndex].classList.add('is-ref');
      seats[nextRefIndex].style.order = 1;

      seats[nextImageIndex].style.order = 2;
    },
    previousSlide: function previousSlide() {
      var carousel = this.$refs.carousel;
      var seats = this.$refs.seat;
      var currentRef = document.querySelector('.slider__seat.is-ref');
      var currentRefIndex = Number(currentRef.id.substring(currentRef.id.indexOf('-') + 1));
      carousel.classList.add('is-reversing');
      carousel.classList.remove('is-set');
      setTimeout(function () {
        carousel.classList.add('is-set');
      }, 10);
      seats.forEach(function (seat) { return (
        seat.style.order = 3
      ); });

      var nextImageIndex = currentRefIndex;

      var nextRefIndex = -1;
      if (nextImageIndex === 0) {
        nextRefIndex = seats.length - 1;
      } else {
        nextRefIndex = nextImageIndex - 1;
      }

      currentRef.classList.remove('is-ref');
      seats[nextRefIndex].classList.add('is-ref');
      seats[nextRefIndex].style.order = 1;

      seats[nextImageIndex].style.order = 2;
    },
  },
  data: function data() {
    return {
      slides: [
        { image: { src: __webpack_require__(20), alt: 'slide 1' }, info: 'Some image info' },
        { image: { src: __webpack_require__(21), alt: 'slide 2' }, info: 'Some image info' },
        { image: { src: __webpack_require__(22), alt: 'slide 2' }, info: 'Some image info' } ],
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    if (this.auto) {
      this.interval = setInterval(function () {
        this$1.nextSlide();
      }, 5000);
    }
  },
  onDestroy: function onDestroy() {
    clearInterval(this.interval);
  },
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainMenuItem_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainMenuItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MainMenuItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MobileOverlay_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MobileOverlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MobileOverlay_vue__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'MainMenu',
  components: {
    MainMenuItem: __WEBPACK_IMPORTED_MODULE_0__MainMenuItem_vue___default.a,
    MobileOverlay: __WEBPACK_IMPORTED_MODULE_1__MobileOverlay_vue___default.a,
  },
  data: function data() {
    return {
      items: [
        {
          title: 'Quienes Somos',
          url: '#',
          submenu: [
            { title: 'Sub menu 1', url: '#' },
            { title: 'Sub menu 2', url: '#' },
            { title: 'Sub menu 3', url: '#' } ],
        },
        {
          title: 'Productos',
          url: '#',
          submenu: [
            { title: 'Sub menu 1', url: '#' },
            { title: 'Sub menu 2', url: '#' },
            { title: 'Sub menu 3', url: '#' } ],
        },
        {
          title: 'Contacto',
          url: '#',
          submenu: [
            { title: 'Sub menu 1', url: '#' },
            { title: 'Sub menu 2', url: '#' },
            { title: 'Sub menu 3', url: '#' } ],
        } ],
      showMobileOverlay: false,
    };
  },
  methods: {
    onCloseMovileOverlayClick: function onCloseMovileOverlayClick() {
      this.showMobileOverlay = false;
    },
  },
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuOverlay_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuOverlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MenuOverlay_vue__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  name: 'MainMenuItem',
  components: {
    MenuOverlay: __WEBPACK_IMPORTED_MODULE_0__MenuOverlay_vue___default.a,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    alternative: {
      type: Boolean,
      required: true,
    },
  },
  data: function data() {
    return {
      showOverlay: false,
    };
  },
  methods: {
    handleMouseOver: function handleMouseOver(index) {
      document.querySelector(("menu-overlay-" + index));
    },
  },
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'MenuOverlay',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    submenu: {
      type: Object,
      required: true,
    },
    alternative: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    setOverlayStyle: function setOverlayStyle() {
      if (this.show) {
        return {
          maxHeight: '400px',
        };
      }
      return {
        maxHeight: '0',
      };
    },
  },
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {

    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    handleCloseMobileOverlay: {
      type: Function,
      required: true,
    },
  },
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductsGridItem_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductsGridItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductsGridItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuickViewOverlay_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuickViewOverlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__QuickViewOverlay_vue__);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    ProductsGridItem: __WEBPACK_IMPORTED_MODULE_0__ProductsGridItem_vue___default.a,
    QuickViewOverlay: __WEBPACK_IMPORTED_MODULE_1__QuickViewOverlay_vue___default.a,
  },
  data: function data() {
    return {
      items: [
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' } ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' } ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' } ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' } ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' } ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' } ],
        } ],
      selectedProduct: null,
    };
  },
  methods: {
    handleQuickViewClick: function handleQuickViewClick(product) {
      this.selectedProduct = product;
    },
    handleCloseOverlay: function handleCloseOverlay() {
      this.selectedProduct = null;
    },
  },
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    ProductsSwatches: __WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue___default.a,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    handleQuickViewClick: {
      type: Function,
      required: true,
    },
  },
  data: function data() {
    return {
      showQuickViewButton: false,
    };
  },
  methods: {
    handleClick: function handleClick() {
      this.handleQuickViewClick(this.item);
    },
  },
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    swatches: {
      type: Array,
      required: true,
    },
  },
  data: function data() {
    return {
      filtered: this.swatches.slice(0, 4),
    };
  },
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    ProductsSwatches: __WEBPACK_IMPORTED_MODULE_0__ProductsSwatches_vue___default.a,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    handleCloseOverlay: {
      type: Function,
      required: true,
    },
  },
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Products_ProductsGrid_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Products_ProductsGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Products_ProductsGrid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Common_Slider_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Common_Slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Common_Slider_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'SampleSite',
  components: {
    ProductsGrid: __WEBPACK_IMPORTED_MODULE_0__components_Products_ProductsGrid_vue___default.a,
    Slider: __WEBPACK_IMPORTED_MODULE_1__components_Common_Slider_vue___default.a,
  },
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["host"] = host;
/* harmony export (immutable) */ __webpack_exports__["timeAgo"] = timeAgo;
function host (url) {
  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  var parts = host.split('.').slice(-3)
  if (parts[0] === 'www') { parts.shift() }
  return parts.join('.')
}

function timeAgo (time) {
  var between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_HomeView_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_HomeView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_HomeView_vue__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a)

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
// import UserView from '../views/UserView.vue'


/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  scrollBehavior: function () { return ({ y: 0 }); },
  routes: [
    // { path: '/top/:page(\\d+)?', component: createListView('top') },
    // { path: '/new/:page(\\d+)?', component: createListView('new') },
    // { path: '/show/:page(\\d+)?', component: createListView('show') },
    // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    // { path: '/job/:page(\\d+)?', component: createListView('job') },
    // { path: '/item/:id(\\d+)', component: ItemView },
    // { path: '/user/:id', component: UserView },
    // { path: '/', redirect: '/top' }
    { path: '/', component: __WEBPACK_IMPORTED_MODULE_2__views_HomeView_vue___default.a }
  ]
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lru_cache__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lru_cache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lru_cache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(1);




var api
var config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}
var version = '/v0'

if (process.__API__) {
  api = process.__API__
} else {
  __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config)
  api = process.__API__ = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.database().ref(version)
  api.onServer = true

  // fetched item cache
  api.cachedItems = __WEBPACK_IMPORTED_MODULE_1_lru_cache___default()({
    max: 1000,
    maxAge: 1000 * 60 * 15 // 15 min cache
  })

  // cache the latest story ids
  api.cachedIds = {}
  ;['top', 'new', 'show', 'ask', 'job'].forEach(function (type) {
    api.child((type + "stories")).on('value', function (snapshot) {
      api.cachedIds[type] = snapshot.val()
    })
  })
}

/* harmony default export */ __webpack_exports__["a"] = api;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(1);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a)

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    items: {/* [id: number]: Item */},
    users: {/* [id: string]: User */},
    lists: {
      top: [/* number */],
      new: [],
      show: [],
      ask: [],
      job: []
    }
  },

  actions: {
    // ensure data for rendering given list type
    FETCH_LIST_DATA: function (ref, ref$1) {
      var commit = ref.commit;
      var dispatch = ref.dispatch;
      var state = ref.state;
      var type = ref$1.type;

      commit('SET_ACTIVE_TYPE', { type: type })
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["a" /* fetchIdsByType */])(type)
        .then(function (ids) { return commit('SET_LIST', { type: type, ids: ids }); })
        .then(function () { return dispatch('ENSURE_ACTIVE_ITEMS'); })
    },

    // ensure all active items are fetched
    ENSURE_ACTIVE_ITEMS: function (ref) {
      var dispatch = ref.dispatch;
      var getters = ref.getters;

      return dispatch('FETCH_ITEMS', {
        ids: getters.activeIds
      })
    },

    FETCH_ITEMS: function (ref, ref$1) {
      var commit = ref.commit;
      var state = ref.state;
      var ids = ref$1.ids;

      // on the client, the store itself serves as a cache.
      // only fetch items that we do not already have, or has expired (3 minutes)
      var now = Date.now()
      ids = ids.filter(function (id) {
        var item = state.items[id]
        if (!item) {
          return true
        }
        if (now - item.__lastUpdated > 1000 * 60 * 3) {
          return true
        }
        return false
      })
      if (ids.length) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["b" /* fetchItems */])(ids).then(function (items) { return commit('SET_ITEMS', { items: items }); })
      } else {
        return Promise.resolve()
      }
    },

    FETCH_USER: function (ref, ref$1) {
      var commit = ref.commit;
      var state = ref.state;
      var id = ref$1.id;

      return state.users[id]
        ? Promise.resolve(state.users[id])
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* fetchUser */])(id).then(function (user) { return commit('SET_USER', { user: user }); })
    }
  },

  mutations: {
    SET_ACTIVE_TYPE: function (state, ref) {
      var type = ref.type;

      state.activeType = type
    },

    SET_LIST: function (state, ref) {
      var type = ref.type;
      var ids = ref.ids;

      state.lists[type] = ids
    },

    SET_ITEMS: function (state, ref) {
      var items = ref.items;

      items.forEach(function (item) {
        if (item) {
          __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.items, item.id, item)
        }
      })
    },

    SET_USER: function (state, ref) {
      var user = ref.user;

      __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.users, user.id, user)
    }
  },

  getters: {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds: function activeIds (state) {
      var activeType = state.activeType;
      var itemsPerPage = state.itemsPerPage;
      var lists = state.lists;
      var page = Number(state.route.params.page) || 1
      if (activeType) {
        var start = (page - 1) * itemsPerPage
        var end = page * itemsPerPage
        return lists[activeType].slice(start, end)
      } else {
        return []
      }
    },

    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activeItems: function activeItems (state, getters) {
      return getters.activeIds.map(function (id) { return state.items[id]; }).filter(function (_) { return _; })
    }
  }
})

/* harmony default export */ __webpack_exports__["a"] = store;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pvsol.png?2f416653ac2a72f344c3ce60052d4b75";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide1.jpg?1506012fb9f09e414ddc0f98d8a7e6bb";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide2.jpg?db8a699b646053b3ef1bb4a9a96cbd5d";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide3.jpg?4649655861df84d9b6c224e26a6b553c";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(35)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(43)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(33)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sample-site"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('slider', {
    attrs: {
      "auto": true
    }
  }), _vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _c('div', {
    staticClass: "section container"
  }, [_c('h1', {
    staticClass: "element"
  }, [_vm._v("Product grid sample")]), _c('products-grid')], 1)], 1), _vm._m(6)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info container"
  }, [_c('h1', [_vm._v("Some page title and information")]), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "promo"
  }, [_c('div', {
    staticClass: "promo__item element"
  }, [_c('img', {
    attrs: {
      "src": "http://placehold.it/300x200"
    }
  }), _c('p', {
    staticClass: "text-center text-capitalize text-bold"
  }, [_vm._v("image title")])]), _c('div', {
    staticClass: "promo__item element"
  }, [_c('img', {
    attrs: {
      "src": "http://placehold.it/300x200"
    }
  }), _c('p', {
    staticClass: "text-center text-capitalize text-bold"
  }, [_vm._v("image title")])]), _c('div', {
    staticClass: "promo__item element"
  }, [_c('img', {
    attrs: {
      "src": "http://placehold.it/300x200"
    }
  }), _c('p', {
    staticClass: "text-center text-capitalize text-bold"
  }, [_vm._v("image title")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info"
  }, [_c('h1', [_vm._v("More information on page")]), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card container"
  }, [_c('p', {
    staticClass: "element"
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]), _c('textarea', {
    staticClass: "element",
    attrs: {
      "placeholder": "textarea"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section container"
  }, [_c('h3', {
    staticClass: "element"
  }, [_vm._v("Small header for section")]), _c('p', {
    staticClass: "element"
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h2', {
    staticClass: "element"
  }, [_vm._v("Small header for section")]), _c('p', {
    staticClass: "element"
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_c('ul', {
    staticClass: "footer__content"
  }, [_c('li', {
    staticClass: "text-capitalize"
  }, [_c('h1', [_vm._v("header")])]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 1")]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 2")]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 3")])]), _c('ul', {
    staticClass: "footer__content"
  }, [_c('li', {
    staticClass: "text-capitalize"
  }, [_c('h1', [_vm._v("header")])]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 1")]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 2")]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 3")])]), _c('ul', {
    staticClass: "footer__content"
  }, [_c('li', {
    staticClass: "text-capitalize"
  }, [_c('h1', [_vm._v("header")])]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 1")]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 2")]), _c('li', {
    staticClass: "text-capitalize"
  }, [_vm._v("item 3")])])])
}]}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "nav__menu-item",
    on: {
      "mouseenter": function($event) {
        _vm.showOverlay = true
      },
      "mouseleave": function($event) {
        _vm.showOverlay = false
      }
    }
  }, [_c('a', {
    staticClass: "nav__menu-link",
    attrs: {
      "href": _vm.item.url
    }
  }, [_vm._v(_vm._s(_vm.item.title))]), _c('menu-overlay', {
    attrs: {
      "submenu": _vm.item,
      "show": _vm.showOverlay,
      "alternative": _vm.alternative
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mobile-overlay"
  }, [_c('button', {
    staticClass: "mobile-overlay__close",
    on: {
      "click": _vm.handleCloseMobileOverlay
    }
  }, [_c('i', {
    staticClass: "fa fa-times"
  })]), _c('ul', {
    staticClass: "mobile-overlay__menu"
  }, _vm._l((_vm.items), function(item) {
    return _c('li', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.title))])
  }))])
},staticRenderFns: []}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "products-grid__item-swatches"
  }, [_vm._l((_vm.filtered), function(swatch) {
    return _c('li', [_c('img', {
      attrs: {
        "src": swatch.src
      }
    })])
  }), (_vm.swatches.length > 4) ? _c('li', {
    staticClass: "swatches-overflow"
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "products-grid__item card"
  }, [_c('div', {
    staticClass: "products-grid__item-image",
    on: {
      "mouseenter": function($event) {
        _vm.showQuickViewButton = true
      },
      "mouseleave": function($event) {
        _vm.showQuickViewButton = false
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.item.image.src,
      "alt": _vm.item.image.alt
    }
  }), (_vm.showQuickViewButton) ? _c('div', {
    staticClass: "products-grid__item-quick-view"
  }, [_c('button', {
    staticClass: "text-capitalize",
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v("quick view")])]) : _vm._e()]), _c('div', {
    staticClass: "products-grid__item-name text-uppercase"
  }, [_vm._v(_vm._s(_vm.item.name))]), _c('products-swatches', {
    attrs: {
      "swatches": _vm.item.swatches
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('main-menu'), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slider-container"
  }, [_c('button', {
    staticClass: "slider-next",
    on: {
      "click": _vm.nextSlide
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-right"
  })]), _c('button', {
    staticClass: "slider-previous",
    on: {
      "click": _vm.previousSlide
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  })]), _c('ul', {
    ref: "carousel",
    staticClass: "slider is-set"
  }, _vm._l((_vm.slides), function(slide, index) {
    return _c('li', {
      ref: "seat",
      refInFor: true,
      staticClass: "slider__seat",
      class: {
        'is-ref': index === _vm.slides.length - 1
      },
      attrs: {
        "id": ("slider__seat-" + index)
      }
    }, [_c('img', {
      attrs: {
        "src": slide.image.src,
        "alt": slide.image.alt
      }
    })])
  }))])
},staticRenderFns: []}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "nav__logo"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(19)
    }
  })])], 1), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showMobileOverlay),
      expression: "!showMobileOverlay"
    }],
    staticClass: "nav__toggle",
    on: {
      "click": function($event) {
        _vm.showMobileOverlay = !_vm.showMobileOverlay
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-bars"
  })]), _c('ul', {
    staticClass: "nav__menu"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('main-menu-item', {
      attrs: {
        "item": item,
        "alternative": _vm.items.length - 1 === index
      }
    })
  })), _c('mobile-overlay', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMobileOverlay),
      expression: "showMobileOverlay"
    }],
    attrs: {
      "items": _vm.items,
      "handle-close-mobile-overlay": _vm.onCloseMovileOverlayClick
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav-overlay",
    class: {
      'nav-overlay--right': _vm.alternative
    },
    style: (_vm.setOverlayStyle)
  }, _vm._l((_vm.submenu.submenu), function(item) {
    return _c('li', {
      staticClass: "nav-overlay__item"
    }, [_c('a', {
      staticClass: "nav-overlay__link",
      attrs: {
        "href": item.url
      }
    }, [_vm._v(_vm._s(item.title))])])
  }))
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "quick-view-overlay"
  }, [_c('div', {
    staticClass: "quick-view-overlay__product"
  }, [_c('div', {
    staticClass: "quick-view-overlay__product-close-overlay center-all"
  }, [_c('button', {
    on: {
      "click": _vm.handleCloseOverlay
    }
  }, [_c('i', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "quick-view-overlay__product-images"
  }, [_c('img', {
    staticClass: "quick-view-overlay__product-main-image",
    attrs: {
      "src": _vm.item.image.src
    }
  }), _c('products-swatches', {
    attrs: {
      "swatches": _vm.item.swatches
    }
  })], 1), _c('div', {
    staticClass: "quick-view-overlay__product-detail"
  }, [_c('h1', {
    staticClass: "quick-view-overlay__product-title text-uppercase"
  }, [_vm._v(_vm._s(_vm.item.name))])])])])
},staticRenderFns: []}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "products-grid"
  }, [(_vm.selectedProduct) ? _c('quick-view-overlay', {
    attrs: {
      "item": _vm.selectedProduct,
      "handle-close-overlay": _vm.handleCloseOverlay
    }
  }) : _vm._e(), _vm._l((_vm.items), function(item) {
    return _c('products-grid-item', {
      attrs: {
        "item": item,
        "handle-quick-view-click": _vm.handleQuickViewClick
      }
    })
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(3);


var isDev = "production" !== 'production'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ __webpack_exports__["default"] = function (context) {
  var s = isDev && Date.now()

  // set router's location
  __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].push(context.url)
  var matchedComponents = __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].getMatchedComponents()

  // no matched routes
  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' })
  }

  // Call preFetch hooks on components matched by the route.
  // A preFetch hook dispatches a store action and returns a Promise,
  // which is resolved when the action is complete and store state has been
  // updated.
  return Promise.all(matchedComponents.map(function (component) {
    if (component.preFetch) {
      return component.preFetch(__WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */])
    }
  })).then(function () {
    isDev && console.log(("data pre-fetch: " + (Date.now() - s) + "ms"))
    // After all preFetch hooks are resolved, our store is now
    // filled with the state needed to render the app.
    // Expose the state on the render context, and let the request handler
    // inline the state in the HTML response. This allows the client-side
    // store to pick-up the server-side state without having to duplicate
    // the initial data fetching on the client.
    context.initialState = __WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */].state
    return __WEBPACK_IMPORTED_MODULE_0__app__["c" /* app */]
  })
};


/***/ })
/******/ ]);