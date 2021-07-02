(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-view-homepage-homepage-module"],{

/***/ "+3b4":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/main-view/homepage/hero-slider/hero-slider.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HeroSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSliderComponent", function() { return HeroSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");



class HeroSliderComponent {
    constructor() {
        this.config = {
            a11y: {
                enabled: true
            },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            speed: 1100,
            autoplay: true,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }
        };
    }
    ngOnInit() {
    }
}
HeroSliderComponent.ɵfac = function HeroSliderComponent_Factory(t) { return new (t || HeroSliderComponent)(); };
HeroSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroSliderComponent, selectors: [["hero-slider"]], decls: 5, vars: 1, consts: [[1, "swiper-container"], [1, "swiper-wrapper", 3, "config"], [1, "swiper-slide", 2, "background-image", "url(../../../../../assets/img/project1.jpeg)"], [1, "swiper-slide", 2, "background-image", "url(../../../../../assets/img/project2.jpeg)"], [1, "swiper-slide", 2, "background-image", "url(../../../../../assets/img/project3.jpeg)"]], template: function HeroSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperComponent"]], styles: [".hero-slide-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  overflow: hidden;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  width: 250px !important;\n  height: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2RvY3MvaGVyby1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUNGIiwiZmlsZSI6Imhlcm8tc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tc2xpZGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hero-slider',
                templateUrl: './hero-slider.component.html',
                styleUrls: ['./hero-slider.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/Rr7":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideTo.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideTo; });
function slideTo(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "/WHX":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeSlide.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeSlide; });
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "/xfr":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/*! exports provided: extend, getDocument, getWindow, ssrDocument, ssrWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrDocument", function() { return ssrDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrWindow", function() { return ssrWindow; });
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
    requestAnimationFrame: function (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "00qV":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/removeClasses.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClasses; });
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "0Xqd":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/autoplay/autoplay.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint no-underscore-dangle: "off" */


var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
      var autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
        swiper.autoplay.run();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      autoplay: _extends({}, Autoplay, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }

      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
});

/***/ }),

/***/ "0me/":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/prependSlide.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prependSlide; });
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "0roy":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate */ "jQP/");
/* harmony import */ var _setTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate */ "EJt4");
/* harmony import */ var _minTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate */ "IBc5");
/* harmony import */ var _maxTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate */ "2ijT");
/* harmony import */ var _translateTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo */ "s/PY");





/* harmony default export */ __webpack_exports__["default"] = ({
  getTranslate: _getTranslate__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "0t0F":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/esm/modules/resize/resize.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'resize',
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(); // Emit resize

      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
});

/***/ }),

/***/ "1VCM":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-cube/effect-cube.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: swiperWidth + "px"
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
      }
    }

    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      cubeEffect: _extends({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "cube");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "2ijT":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/maxTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maxTranslate; });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "3PNi":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/*! exports provided: default, $, add, addClass, animate, animationEnd, append, appendTo, attr, blur, change, children, click, closest, css, data, dataset, detach, each, empty, eq, filter, find, focus, focusin, focusout, hasClass, height, hide, html, index, insertAfter, insertBefore, is, keydown, keypress, keyup, mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseover, mouseup, next, nextAll, off, offset, on, once, outerHeight, outerWidth, parent, parents, prepend, prependTo, prev, prevAll, prop, remove, removeAttr, removeClass, removeData, resize, scroll, scrollLeft, scrollTo, scrollTop, show, siblings, stop, styles, submit, text, toggleClass, touchend, touchmove, touchstart, transform, transition, transitionEnd, trigger, val, value, width */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

/* harmony default export */ __webpack_exports__["default"] = ($);



/***/ }),

/***/ "3vra":
/*!**************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.esm.js ***!
  \**************************************************/
/*! exports provided: Swiper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esm/components/core/core-class */ "bTu8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esm/components/virtual/virtual */ "drdV");
/* harmony import */ var _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esm/components/keyboard/keyboard */ "h2/A");
/* harmony import */ var _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esm/components/mousewheel/mousewheel */ "tC+P");
/* harmony import */ var _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./esm/components/navigation/navigation */ "g0Ox");
/* harmony import */ var _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esm/components/pagination/pagination */ "Xchd");
/* harmony import */ var _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esm/components/scrollbar/scrollbar */ "Ap4+");
/* harmony import */ var _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./esm/components/parallax/parallax */ "6N1L");
/* harmony import */ var _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./esm/components/zoom/zoom */ "S6t5");
/* harmony import */ var _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./esm/components/lazy/lazy */ "fMrl");
/* harmony import */ var _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./esm/components/controller/controller */ "c0r8");
/* harmony import */ var _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./esm/components/a11y/a11y */ "ZXcA");
/* harmony import */ var _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esm/components/history/history */ "tQmk");
/* harmony import */ var _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./esm/components/hash-navigation/hash-navigation */ "9cj4");
/* harmony import */ var _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./esm/components/autoplay/autoplay */ "0Xqd");
/* harmony import */ var _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./esm/components/effect-fade/effect-fade */ "42op");
/* harmony import */ var _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./esm/components/effect-cube/effect-cube */ "1VCM");
/* harmony import */ var _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./esm/components/effect-flip/effect-flip */ "mK+M");
/* harmony import */ var _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./esm/components/effect-coverflow/effect-coverflow */ "daxC");
/* harmony import */ var _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./esm/components/thumbs/thumbs */ "zITX");
/**
 * Swiper 6.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 18, 2020
 */























// Swiper Class
var components = [_esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__["default"], _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__["default"], _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__["default"], _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__["default"], _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"], _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__["default"], _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__["default"], _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__["default"], _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__["default"], _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__["default"], _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__["default"], _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__["default"], _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__["default"], _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__["default"], _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__["default"], _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__["default"], _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__["default"], _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__["default"]];
_esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"].use(components);


/***/ }),

/***/ "42op":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-fade/effect-fade.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "4g6d":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSize.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSize; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "6N1L":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/parallax/parallax.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + "%";
    } else {
      x = x * progress * rtlFactor + "px";
    }

    if (y.indexOf('%') >= 0) {
      y = parseInt(y, 10) * progress + "%";
    } else {
      y = y * progress + "px";
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(" + x + ", " + y + ", 0px)");
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideEl, slideIndex) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition(duration) {
    if (duration === void 0) {
      duration = this.params.speed;
    }

    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
      var $parallaxEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      parallax: _extends({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "78qI":
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeAllSlides; });
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "87oN":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlidesClasses; });
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "9QBS":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/appendSlide.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendSlide; });
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}

/***/ }),

/***/ "9cj4":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    swiper.emit('hashChange');
    var newHash = document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || false);
      swiper.emit('hashSet');
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      swiper.emit('hashSet');
    }
  },
  init: function init() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = document.location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (swiper.params.hashNavigation.watchState) {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      hashNavigation: _extends({
        initialized: false
      }, HashNavigation)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    }
  }
});

/***/ }),

/***/ "AUG5":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/check-overflow/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  checkOverflow: checkOverflow
});

/***/ }),

/***/ "Ap4+":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/scrollbar/scrollbar.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
      $dragEl[0].style.width = newSize + "px";
    } else {
      $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
      $dragEl[0].style.height = newSize + "px";
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition: function getPointerPosition(e) {
    var swiper = this;

    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        dragStartPos = scrollbar.dragStartPos;
    var positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

    if ($dragEl.length === 0) {
      $dragEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
      $el.append($dragEl);
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      scrollbar: _extends({
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update(swiper) {
      swiper.scrollbar.updateSize();
    },
    resize: function resize(swiper) {
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(swiper) {
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(swiper) {
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy(swiper) {
      swiper.scrollbar.destroy();
    }
  }
});

/***/ }),

/***/ "BYqR":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClosest.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideToClosest; });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "C7JN":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onScroll; });
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "CK30":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appendSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendSlide */ "9QBS");
/* harmony import */ var _prependSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prependSlide */ "0me/");
/* harmony import */ var _addSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addSlide */ "dtSe");
/* harmony import */ var _removeSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeSlide */ "/WHX");
/* harmony import */ var _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAllSlides */ "78qI");





/* harmony default export */ __webpack_exports__["default"] = ({
  appendSlide: _appendSlide__WEBPACK_IMPORTED_MODULE_0__["default"],
  prependSlide: _prependSlide__WEBPACK_IMPORTED_MODULE_1__["default"],
  addSlide: _addSlide__WEBPACK_IMPORTED_MODULE_2__["default"],
  removeSlide: _removeSlide__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeAllSlides: _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "D3OB":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onResize.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onResize; });
function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "DXbN":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unsetGrabCursor; });
function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}

/***/ }),

/***/ "E51R":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor */ "zZCW");
/* harmony import */ var _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor */ "DXbN");


/* harmony default export */ __webpack_exports__["default"] = ({
  setGrabCursor: _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "EJt4":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/setTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTranslate; });
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "Fsl0":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateActiveIndex.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateActiveIndex; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "IBc5":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/minTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minTranslate; });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "IDX/":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo */ "/Rr7");
/* harmony import */ var _slideToLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop */ "U+t4");
/* harmony import */ var _slideNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext */ "w1YM");
/* harmony import */ var _slidePrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev */ "YGmK");
/* harmony import */ var _slideReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset */ "gtyG");
/* harmony import */ var _slideToClosest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest */ "BYqR");
/* harmony import */ var _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide */ "l9MX");







/* harmony default export */ __webpack_exports__["default"] = ({
  slideTo: _slideTo__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "IoKV":
/*!****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateAutoHeight.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateAutoHeight; });
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) break;
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}

/***/ }),

/***/ "Jq2x":
/*!**********************************************!*\
  !*** ./node_modules/swiper/esm/utils/dom.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "3PNi");

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__["addClass"],
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__["attr"],
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__["transform"],
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__["transition"],
  on: dom7__WEBPACK_IMPORTED_MODULE_0__["on"],
  off: dom7__WEBPACK_IMPORTED_MODULE_0__["off"],
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__["trigger"],
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__["styles"],
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__["offset"],
  css: dom7__WEBPACK_IMPORTED_MODULE_0__["css"],
  each: dom7__WEBPACK_IMPORTED_MODULE_0__["each"],
  html: dom7__WEBPACK_IMPORTED_MODULE_0__["html"],
  text: dom7__WEBPACK_IMPORTED_MODULE_0__["text"],
  is: dom7__WEBPACK_IMPORTED_MODULE_0__["is"],
  index: dom7__WEBPACK_IMPORTED_MODULE_0__["index"],
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__["eq"],
  append: dom7__WEBPACK_IMPORTED_MODULE_0__["append"],
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__["prepend"],
  next: dom7__WEBPACK_IMPORTED_MODULE_0__["next"],
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__["prev"],
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__["parent"],
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__["parents"],
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__["closest"],
  find: dom7__WEBPACK_IMPORTED_MODULE_0__["find"],
  children: dom7__WEBPACK_IMPORTED_MODULE_0__["children"],
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__["filter"],
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__["remove"]
};
Object.keys(Methods).forEach(function (methodName) {
  dom7__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] = Methods[methodName];
});
/* harmony default export */ __webpack_exports__["default"] = (dom7__WEBPACK_IMPORTED_MODULE_0__["$"]);

/***/ }),

/***/ "KcmN":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopFix.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loopFix; });
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "N2wq":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage */ "z+Ea");
/* harmony import */ var _preloadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages */ "eCvj");


/* harmony default export */ __webpack_exports__["default"] = ({
  loadImage: _loadImage__WEBPACK_IMPORTED_MODULE_0__["default"],
  preloadImages: _preloadImages__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "NDSe":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-browser.js ***!
  \******************************************************/
/*! exports provided: getBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");

var browser;

function calcBrowser() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "Ojvb":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBreakpoints; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");

function getBreakpoints(breakpoints) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(); // Get breakpoint for window width

  if (!breakpoints) return undefined;
  var breakpoint = false;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = window.innerHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (value <= window.innerWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "OsfX":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-support.js ***!
  \******************************************************/
/*! exports provided: getSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupport", function() { return getSupport; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");

var support;

function calcSupport() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "OvF9":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopDestroy.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loopDestroy; });
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "QCkE":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/addClasses.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClasses; });
function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device;
  var suffixes = [];
  suffixes.push('initialized');
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }

  if (params.autoHeight) {
    suffixes.push('autoheight');
  }

  if (rtl) {
    suffixes.push('rtl');
  }

  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');

    if (params.slidesPerColumnFill === 'column') {
      suffixes.push('multirow-column');
    }
  }

  if (device.android) {
    suffixes.push('android');
  }

  if (device.ios) {
    suffixes.push('ios');
  }

  if (params.cssMode) {
    suffixes.push('css-mode');
  }

  suffixes.forEach(function (suffix) {
    classNames.push(params.containerModifierClass + suffix);
  });
  $el.addClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "S6t5":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/zoom/zoom.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + swiper.params.slideClass);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') zoom.onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var device = swiper.device;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var device = swiper.device;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTranslate"])(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTranslate"])(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);

      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("" + params.zoomedSlideClass);
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
    gesture.$slideEl = undefined;
  },
  toggleGestures: function toggleGestures(method) {
    var swiper = this;
    var zoom = swiper.zoom;
    var selector = zoom.slideSelector,
        passive = zoom.passiveListener;
    swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
    swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
    swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
  },
  enableGestures: function enableGestures() {
    if (this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = true;
    this.zoom.toggleGestures('on');
  },
  disableGestures: function disableGestures() {
    if (!this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = false;
    this.zoom.toggleGestures('off');
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var support = swiper.support;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass;
    swiper.zoom.passiveListener = passiveListener;
    swiper.zoom.slideSelector = slideSelector; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    var support = swiper.support;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      zoom: _extends({
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined
        }
      }, Zoom)
    });
    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }

        scale = value;
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy(swiper) {
      swiper.zoom.disable();
    },
    touchStart: function touchStart(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(swiper, e) {
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
});

/***/ }),

/***/ "U+t4":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToLoop.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideToLoop; });
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "VBoe":
/*!*********************************************************!*\
  !*** ./src/app/services/testimonial-service.service.ts ***!
  \*********************************************************/
/*! exports provided: TestimonialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialService", function() { return TestimonialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TestimonialService {
    constructor() {
        this.clients = [
            {
                name: 'Milan Lee',
                des: 'He is a gold mine. He is an excellent communicator. I will be using his services for days to come. '
            },
            {
                name: 'Sukanta Purkayasta',
                des: 'Habibur Rahman is a creative frontend developer. Highly skilled with different frontend technology. I worked with him in the same project thats why i was able to complete the backened of the project too fast.I wish your best luck Habibur Rahman.'
            },
            {
                name: 'Amimul Ihsan',
                des: 'Habib is a very good goal-oriented professional web developer. His experience in front-end technologies is excellent and he manages time accurately. Always recommended.'
            },
            {
                name: 'Hasan Misbah',
                des: 'Habib is a true professional and talented web Designer. He is well organized, diligent, and a fast learner. I’m sure he will be an asset to the next organization he joins. I am happy to call him my friend instead of telling my teammate. I have a chance to work with him and Its my pleasure to get an opportunity to work with him.'
            }
        ];
    }
}
TestimonialService.ɵfac = function TestimonialService_Factory(t) { return new (t || TestimonialService)(); };
TestimonialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TestimonialService, factory: TestimonialService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "VjSb":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchEnd.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onTouchEnd; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "VlRc":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses */ "QCkE");
/* harmony import */ var _removeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses */ "00qV");


/* harmony default export */ __webpack_exports__["default"] = ({
  addClasses: _addClasses__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "VyJC":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionEnd.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transitionEnd; });
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

/***/ }),

/***/ "WpX9":
/*!***************************************************************!*\
  !*** ./src/app/modules/main-view/homepage/homepage.module.ts ***!
  \***************************************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "pQlZ");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage-routing.module */ "lSlw");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage.component */ "ZoiA");
/* harmony import */ var _hero_slider_hero_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-slider/hero-slider.component */ "+3b4");
/* harmony import */ var _testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonial-slider/testimonial-slider.component */ "zLju");










const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
class HomepageModule {
    constructor() {
        // console.log("Hompage Module Loaded");
    }
}
HomepageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomepageModule });
HomepageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomepageModule_Factory(t) { return new (t || HomepageModule)(); }, providers: [
        {
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SWIPER_CONFIG"],
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomepageRoutingModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomepageModule, { declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _hero_slider_hero_slider_component__WEBPACK_IMPORTED_MODULE_6__["HeroSliderComponent"], _testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_7__["TestimonialSliderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomepageRoutingModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomepageRoutingModule"],
                    ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]
                ],
                providers: [
                    {
                        provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SWIPER_CONFIG"],
                        useValue: DEFAULT_SWIPER_CONFIG
                    }
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XGUr":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchStart.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onTouchStart; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");



function onTouchStart(event) {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(event.path[0]);
  }

  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    return;
  }

  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.formElements)) preventDefault = false;

    if (document.activeElement && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "Xchd":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/pagination/pagination.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
      $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find("." + params.bulletClass.replace(/ /g, '.'));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', "." + params.bulletClass.replace(/ /g, '.'), function onClick(e) {
        e.preventDefault();
        var index = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', "." + params.bulletClass.replace(/ /g, '.'));
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    click: function click(swiper, e) {
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).hasClass(swiper.params.pagination.bulletClass)) {
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
});

/***/ }),

/***/ "YGmK":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slidePrev.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slidePrev; });
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "Yi0i":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint */ "wCrk");
/* harmony import */ var _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint */ "Ojvb");


/* harmony default export */ __webpack_exports__["default"] = ({
  setBreakpoint: _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "Z67w":
/*!************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/modular.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");

/* harmony default export */ __webpack_exports__["default"] = ({
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
});

/***/ }),

/***/ "ZXcA":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/a11y/a11y.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var A11y = {
  getRandomNumber: function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }

    var randomChar = function randomChar() {
      return Math.round(16 * Math.random()).toString(16);
    };

    return 'x'.repeat(size).replace(/x/g, randomChar);
  },
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  makeElNotFocusable: function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElRoleDescription: function addElRoleDescription($el, description) {
    $el.attr('aria-role-description', description);
    return $el;
  },
  addElControls: function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  addElId: function addElId($el, id) {
    $el.attr('id', id);
    return $el;
  },
  addElLive: function addElLive($el, live) {
    $el.attr('aria-live', live);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    var $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass.replace(/ /g, '.'))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop || !swiper.navigation) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
        swiper.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
        swiper.a11y.makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
        swiper.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
        swiper.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletEl) {
        var $bulletEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      });
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.a11y;
    swiper.$el.append(swiper.a11y.liveRegion); // Container

    var $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      swiper.a11y.addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    var $wrapperEl = swiper.$wrapperEl;
    var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
    var live;
    swiper.a11y.addElId($wrapperEl, wrapperId);

    if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
      live = 'off';
    } else {
      live = 'polite';
    }

    swiper.a11y.addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), params.itemRoleDescriptionMessage);
    }

    swiper.a11y.addElRole(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), 'group');
    swiper.slides.each(function (slideEl) {
      var $slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl);
      swiper.a11y.addElLabel($slideEl, $slideEl.index() + 1 + " / " + swiper.slides.length);
    }); // Navigation

    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      swiper.a11y.makeElFocusable($nextEl);

      if ($nextEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($nextEl, 'button');
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }

      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      swiper.a11y.addElControls($nextEl, wrapperId);
    }

    if ($prevEl && $prevEl.length) {
      swiper.a11y.makeElFocusable($prevEl);

      if ($prevEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($prevEl, 'button');
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      swiper.a11y.addElControls($prevEl, wrapperId);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterKey);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      a11y: _extends({}, A11y, {
        liveRegion: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
      })
    });
  },
  on: {
    afterInit: function afterInit(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
});

/***/ }),

/***/ "ZoiA":
/*!******************************************************************!*\
  !*** ./src/app/modules/main-view/homepage/homepage.component.ts ***!
  \******************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hero_slider_hero_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-slider/hero-slider.component */ "+3b4");
/* harmony import */ var _testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-slider/testimonial-slider.component */ "zLju");




class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 354, vars: 0, consts: [[1, "hero"], [1, "container", "h-100"], [1, "row", "align-center", "h-100"], [1, "col-lg-6"], [1, "hero-content"], [1, "hero-title"], [1, "hero-des"], [1, "hero-social"], ["href", "https://twitter.com/DevHabib", "target", "_blank"], [1, "fab", "fa-twitter"], ["href", "https://github.com/DevHabib", "target", "_blank"], [1, "fab", "fa-github-alt"], ["href", "https://www.linkedin.com/in/devhabib/"], ["target", "_blank", 1, "fab", "fa-linkedin-in"], ["href", "https://www.fiverr.com/habib013"], ["src", "./assets/img/fiverr.svg", "alt", "", "target", "_blank"], [1, "hero-slider"], ["id", "portfolio", 1, "workflow"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title"], [1, "section-title-mini"], [1, "section-title-big"], [1, "workflow-wrapper"], [1, "workflow-item"], [1, "workflow-item-1", "workflow-item-single"], ["href", "https://www.thegeministudio.com/"], [1, "workflow-item-2", "workflow-item-single"], ["href", "https://www.devhabib.com/projects/restaurant/"], [1, "workflow-item-3", "workflow-item-single"], ["href", "https://www.devhabib.com/projects/musician/"], [1, "workflow-item-4", "workflow-item-single"], ["href", "#"], [1, "workflow-item-5", "workflow-item-single"], [1, "workflow-item-6", "workflow-item-single"], [1, "testimonial"], [1, "technologies"], [1, "row", "no-gutters"], [1, "col-lg-3", "col-sm-6"], [1, "technologies-single", "html"], [1, "devicon-html5-plain"], [1, "technologies-single", "css"], [1, "devicon-css3-plain"], [1, "technologies-single", "angular"], [1, "devicon-angularjs-plain"], [1, "technologies-single", "js"], [1, "devicon-javascript-plain"], [1, "technologies-single", "bootstrap"], [1, "devicon-bootstrap-plain"], [1, "technologies-single", "jquery"], [1, "devicon-jquery-plain"], [1, "technologies-single", "sass"], [1, "devicon-sass-original"], [1, "technologies-single", "git"], [1, "devicon-git-plain"], ["id", "services", 1, "services"], [1, "col-lg-4", "col-md-6"], [1, "services-box"], [1, "services-box-top"], [1, "services-title"], ["src", "../../../../assets/img/design.svg", "alt", "Web Design"], [1, "services-content"], ["src", "../../../../assets/img/development.svg", "alt", "Web Development"], [1, "col-lg-4"], ["src", "../../../../assets/img/bug.svg", "alt", "Bug Fixing"], [1, "experience"], [1, "experience-entries"], [1, "experience-entries-single"], [1, "experience-entries-title"], [1, "experience-entries-date"], [1, "experience-entries-des"], [1, "experience-entries-title", "big"], [1, "certification"], [1, "certification-wrapper"], [1, "certification-single"], [1, "certification-single-left"], [1, "fas", "fa-school"], [1, "certification-single-right"], [1, "institute"], [1, "fas", "fa-graduation-cap"], [1, "fas", "fa-university"], [1, "fas", "fa-medal"], [1, "contact"], [1, "contact-wrapper"], [1, "contact-title"], [1, "contact-content"], [1, "contact-button"], ["href", "mailto:contact@devhabib.com", 1, "primary-btn"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hey, I'm Habibur Rahman.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I am a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "frontend developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Freelance Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Learner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Web Design Expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " currently living in Sylhet, Bangladesh. My interests range from technology to design. I love to develop web application, learn new technologies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Find me on : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hero-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "workflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Some of my latest projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Testimonial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "What my people says about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "testimonial-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "I love to play with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "HTML 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "CSS 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Sass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "section", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Here are my Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "I do web design as one of my hobby. I improve my design process with code, data and a bit of a good copy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "These days anyone can develop a website. But I focus on the technological trends which is really important to develop a website nowdays. I get the requirement for the website, choose the technology (based on clients requirements) start the work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Bug Fixing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "When people design and develop a website, bug becomes a pain in the back. I try to keep my code simple and avoid bugs and if there is any bugs in the code I fix them ASAP.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "section", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Experiencce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Where I've worked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Infinity Flames Soft.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "2018 - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Started my career as a Frontend Designer. This is where I learnt design & development. Worked on a few projects for their clients. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "B-cause Bangladesh LTD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "On July 2019 Started my career as a Frontend engineer at B-cause Inc Bangladesh branch. While I was working there, mostly I my responsibility was to make the design and implement necessary JavaScript for their product \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "HIWORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "YoTech Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "2019 - [Present]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "On February I joined at YoTech Limited as a Web Developer. My responsibility is here to converting XD design to HTML5. After finishing the design make the app on Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Here I worked on several projects. Most of the time I worked with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Food Delivery PWA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "(YoFoodie Version 2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "PWA Richpanel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "(YoDesk)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "PWA Richpanel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "(YoHub)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "PWA Messenger App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "(Chit-Czat)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "PWA Admin Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "(YoOwner)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "HR Management System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "(TRACK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "E-Commerce Frontend Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "(Juoom)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Tech Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "(Valt)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Payment Gateway Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "(Spent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Official Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Yotech.ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " and other projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "section", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "My educational history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Year:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " 2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Swarup chandra gov't high school");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Higher Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Year:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Madan Mohan College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "B.Sc in CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Year:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Leading University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Front End Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Year:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "freeCodeCamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "section", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Finally, Here we are!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "I'm open for new opportunities and learn new things, my inbox is always open. If you have a question or just want to say hi, I'll try my best to get back to you ASAP!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Say Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_hero_slider_hero_slider_component__WEBPACK_IMPORTED_MODULE_1__["HeroSliderComponent"], _testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_2__["TestimonialSliderComponent"]], styles: [".technologies-single[_ngcontent-%COMP%], .testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%], .hero-social[_ngcontent-%COMP%], .hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.technologies-single[_ngcontent-%COMP%], .hero-social[_ngcontent-%COMP%], .hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.technologies-single[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.workflow-item-single[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.technologies-single[_ngcontent-%COMP%], .testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%], .hero-social[_ngcontent-%COMP%], .hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.technologies-single[_ngcontent-%COMP%], .hero-social[_ngcontent-%COMP%], .hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.technologies-single[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.workflow-item-single[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 1199px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n.hero[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n@media (max-width: 1199px) {\n  .hero[_ngcontent-%COMP%] {\n    height: 80vh;\n  }\n}\n\n@media (max-width: 991px) {\n  .hero[_ngcontent-%COMP%] {\n    height: 55vh;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-top: 40px;\n  }\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 40px;\n  font-family: \"Gilroy\";\n  margin-bottom: 20px;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n\n@media (max-width: 991px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n@media (max-width: 575px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n\n.hero-des[_ngcontent-%COMP%] {\n  color: #8892b0;\n  line-height: 1.5;\n  font-size: 22px;\n  margin-bottom: 25px;\n  font-family: \"Muli\";\n}\n\n.hero-des[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n@media (max-width: 991px) {\n  .hero-des[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .hero-des[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-des[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .hero-des[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n\n.hero-des[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #66ffdb;\n}\n\n.hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n  column-gap: 20px;\n  margin-bottom: 0;\n}\n\n.hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-size: 30px;\n  width: 30px;\n  height: 33px;\n  display: block;\n  transform-origin: center;\n}\n\n@media (max-width: 991px) {\n  .hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n    width: 25px;\n    height: 28px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 20px;\n    height: 22px;\n  }\n}\n\n@media (max-width: 575px) {\n  .hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 17px;\n    width: 17px;\n    height: 19px;\n  }\n}\n\n.hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: bottom;\n  display: block;\n}\n\n.hero-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-left: -5px;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-family: \"Gilroy\";\n  font-weight: 600;\n  column-gap: 1rem;\n}\n\n.hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  border-bottom: 1px solid #8892b0;\n  margin-right: 10px;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n}\n\n@media (max-width: 991px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 575px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n\n.hero-slider[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 991px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.hero-slider[_ngcontent-%COMP%]   .hero-slide-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  overflow: hidden;\n}\n\n.hero-slider[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  width: 250px;\n  height: 200px;\n}\n\n.workflow[_ngcontent-%COMP%] {\n  padding: 80px 0 0;\n  overflow: hidden;\n}\n\n@media (max-width: 767px) {\n  .workflow[_ngcontent-%COMP%] {\n    padding: 60px 0 0;\n  }\n}\n\n.workflow[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .workflow[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.workflow-wrapper[_ngcontent-%COMP%] {\n  margin: -100px 0 -3em;\n  transform: rotateX(60deg) rotateY(0deg) rotate(-45deg) scale(1.125);\n  transform-style: preserve-3d;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  position: -webkit-sticky;\n  position: relative;\n  top: 0;\n}\n\n@media (max-width: 767px) {\n  .workflow-wrapper[_ngcontent-%COMP%] {\n    margin: 0px;\n    transform: rotate(0);\n    column-gap: 30px;\n    row-gap: 30px;\n  }\n}\n\n.workflow-item[_ngcontent-%COMP%] {\n  max-width: 842px;\n  position: relative;\n  transition-property: transform;\n  margin: 16px;\n  width: calc(50% - 32px);\n  transform-origin: center center;\n  transition-duration: 294ms;\n}\n\n@media (max-width: 767px) {\n  .workflow-item[_ngcontent-%COMP%] {\n    margin: 0;\n    overflow: hidden;\n    width: 47%;\n  }\n}\n\n@media (max-width: 575px) {\n  .workflow-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.workflow-item[_ngcontent-%COMP%]:nth-child(2n) {\n  top: 60px;\n}\n\n@media (max-width: 767px) {\n  .workflow-item[_ngcontent-%COMP%]:nth-child(2n) {\n    top: 0;\n  }\n}\n\n.workflow-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.workflow-item-single[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-size: cover;\n  padding-top: 62.5%;\n  border-radius: 0.5vw;\n}\n\n.workflow-item-single[_ngcontent-%COMP%]:hover {\n  transform: translateZ(24px) scale(1.05);\n  z-index: 2;\n}\n\n.workflow-item-1[_ngcontent-%COMP%] {\n  background-image: url('project1.jpeg');\n}\n\n.workflow-item-2[_ngcontent-%COMP%] {\n  background-image: url('project2.jpeg');\n}\n\n.workflow-item-3[_ngcontent-%COMP%] {\n  background-image: url('project3.jpeg');\n}\n\n.workflow-item-4[_ngcontent-%COMP%] {\n  background-image: url('workflow4.jpg');\n}\n\n.workflow-item-5[_ngcontent-%COMP%] {\n  background-image: url('workflow5.jpg');\n}\n\n.workflow-item-6[_ngcontent-%COMP%] {\n  background-image: url('workflow6.png');\n}\n\n.testimonial[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n\n.testimonial-single[_ngcontent-%COMP%] {\n  background-color: #0c1d37;\n  padding: 26px 20px;\n  border-radius: 15px;\n  transition: 0.3s;\n  margin: 0 5px;\n  height: 235px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n\n.testimonial-single[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px #0e2444;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img-single[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img-single[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   .right-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color: rgba(136, 146, 176, 0.3);\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy\";\n  color: #ccd6f6;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #8892b0;\n  font-family: \"Muli\";\n  font-weight: 400;\n  font-size: 17px;\n}\n\n.technologies[_ngcontent-%COMP%] {\n  padding: 40px 0 80px;\n  display: block;\n}\n\n.technologies-single[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  height: 250px;\n  flex-flow: column;\n  row-gap: 20px;\n}\n\n@media (max-width: 767px) {\n  .technologies-single[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}\n\n.technologies-single[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #fff;\n}\n\n@media (max-width: 767px) {\n  .technologies-single[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n}\n\n.technologies-single[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0;\n  line-height: 20px;\n  position: relative;\n  font-family: \"Gilroy\";\n  font-weight: 600;\n  font-size: 20px;\n}\n\n@media (max-width: 767px) {\n  .technologies-single[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.technologies-single[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  background-color: #fff;\n  width: 100%;\n  height: 2px;\n  border-radius: 2px;\n  bottom: 27px;\n}\n\n.technologies-single.html[_ngcontent-%COMP%] {\n  background-color: #e54d26;\n}\n\n.technologies-single.css[_ngcontent-%COMP%] {\n  background-color: #3d8fc6;\n}\n\n.technologies-single.js[_ngcontent-%COMP%] {\n  background-color: #e7be08;\n}\n\n.technologies-single.angular[_ngcontent-%COMP%] {\n  background-color: #c4473a;\n}\n\n.technologies-single.sass[_ngcontent-%COMP%] {\n  background-color: #c69;\n}\n\n.technologies-single.git[_ngcontent-%COMP%] {\n  background-color: #f34f29;\n}\n\n.technologies-single.bootstrap[_ngcontent-%COMP%] {\n  background-color: #59407f;\n}\n\n.technologies-single.jquery[_ngcontent-%COMP%] {\n  background-color: #0769ad;\n}\n\n.services[_ngcontent-%COMP%] {\n  padding: 40px 0 80px;\n  display: block;\n}\n\n.services-box[_ngcontent-%COMP%] {\n  background-color: #0c1d37;\n  padding: 26px 20px;\n  border-radius: 15px;\n  position: relative;\n  min-height: 200px;\n  height: 100%;\n  z-index: 1;\n}\n\n@media (max-width: 991px) {\n  .services-box[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    height: calc(100% - 30px);\n  }\n}\n\n.services-box[_ngcontent-%COMP%]:hover   .services-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  -webkit-line-clamp: inherit;\n}\n\n.services-box-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #c5cad9;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 28px;\n}\n\n.services-box-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.05;\n  z-index: -1;\n  width: 70px;\n  height: 70px;\n  object-fit: contain;\n  right: 20px;\n  top: 20px;\n}\n\n.services-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999999;\n  font-family: \"Muli\";\n  font-weight: 300;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n\n@media (max-width: 767px) {\n  .services-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    -webkit-line-clamp: inherit;\n  }\n}\n\n.experience[_ngcontent-%COMP%] {\n  padding: 40px 0 80px;\n}\n\n.experience-entries[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 50px;\n}\n\n.experience-entries[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  background-color: #ccd6f6;\n  width: 3px;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media (max-width: 991px) {\n  .experience-entries[_ngcontent-%COMP%]::before {\n    left: -20px;\n  }\n}\n\n@media (max-width: 575px) {\n  .experience-entries[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.experience-entries-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.experience-entries-title[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border: 2px solid #66ffdb;\n  border-radius: 50%;\n  right: -12%;\n  top: 50%;\n  transform: translate(23%, -50%);\n  background-color: #0a192f;\n}\n\n@media (max-width: 1199px) {\n  .experience-entries-title[_ngcontent-%COMP%]::before {\n    right: -13%;\n    transform: translate(40%, -50%);\n  }\n}\n\n@media (max-width: 991px) {\n  .experience-entries-title[_ngcontent-%COMP%]::before {\n    right: 0;\n    left: -64px;\n  }\n}\n\n@media (max-width: 575px) {\n  .experience-entries-title[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.experience-entries-title.big[_ngcontent-%COMP%]::before {\n  width: 25px;\n  height: 25px;\n  right: -13%;\n  top: 50%;\n  transform: translate(14%, -40%);\n}\n\n@media (max-width: 1199px) {\n  .experience-entries-title.big[_ngcontent-%COMP%]::before {\n    left: -17%;\n    top: 50%;\n    transform: translate(20%, -40%);\n  }\n}\n\n@media (max-width: 991px) {\n  .experience-entries-title.big[_ngcontent-%COMP%]::before {\n    right: 0;\n    left: -64px;\n  }\n}\n\n@media (max-width: 575px) {\n  .experience-entries-title.big[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.experience-entries-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-weight: 800;\n  margin-bottom: 0;\n  font-family: \"Gilroy\";\n}\n\n.experience-entries-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-weight: 500;\n  font-family: \"Gilroy\";\n  margin: 0;\n}\n\n@media (max-width: 767px) {\n  .experience-entries-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    line-height: 1;\n  }\n}\n\n.experience-entries-single[_ngcontent-%COMP%] {\n  width: 48%;\n  margin-right: auto;\n  text-align: right;\n  padding: 30px;\n  background-color: #0c1d37;\n  border-radius: 15px;\n}\n\n@media (max-width: 991px) {\n  .experience-entries-single[_ngcontent-%COMP%] {\n    margin-right: 0;\n    width: 100%;\n    margin-bottom: 30px;\n    text-align: left;\n  }\n}\n\n.experience-entries-single[_ngcontent-%COMP%]:nth-child(2n) {\n  margin-left: auto;\n  margin-right: 0;\n  text-align: left;\n}\n\n.experience-entries-single[_ngcontent-%COMP%]:nth-child(2n)   .experience-entries-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.experience-entries-single[_ngcontent-%COMP%]:nth-child(2n)   .experience-entries-title[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border: 2px solid #66ffdb;\n  border-radius: 50%;\n  left: -13%;\n  transform: translateX(16%);\n}\n\n.experience-entries-single[_ngcontent-%COMP%]:nth-child(2n)   .experience-entries-title.big[_ngcontent-%COMP%]::before {\n  width: 25px;\n  height: 25px;\n  left: -15%;\n  top: 50%;\n  transform: translate(25%, -40%);\n}\n\n@media (max-width: 1199px) {\n  .experience-entries-single[_ngcontent-%COMP%]:nth-child(2n)   .experience-entries-title.big[_ngcontent-%COMP%]::before {\n    left: -17%;\n    top: 50%;\n    transform: translate(20%, -40%);\n  }\n}\n\n@media (max-width: 991px) {\n  .experience-entries-single[_ngcontent-%COMP%]:nth-child(2n)   .experience-entries-title.big[_ngcontent-%COMP%]::before {\n    right: 0;\n    left: -68px;\n    transform: translateX(5px);\n  }\n}\n\n.experience-entries-des[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #8892b0;\n  font-weight: 400;\n  font-family: \"Muli\";\n}\n\n.certification[_ngcontent-%COMP%] {\n  padding: 40px 0 80px;\n}\n\n.certification-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 30px;\n  row-gap: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\n.certification-single[_ngcontent-%COMP%] {\n  display: flex;\n  column-gap: 30px;\n  align-items: center;\n  flex-direction: row-reverse;\n  text-align: right;\n  flex: 1 48%;\n  padding: 20px;\n  background-color: #0c1d37;\n  border-radius: 10px;\n  height: 160px;\n}\n\n@media (max-width: 991px) {\n  .certification-single[_ngcontent-%COMP%] {\n    flex-direction: initial;\n    text-align: left;\n  }\n}\n\n@media (max-width: 575px) {\n  .certification-single[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n\n.certification-single[_ngcontent-%COMP%]:nth-child(2n) {\n  flex-direction: initial;\n  text-align: left;\n}\n\n.certification-single-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 55px;\n  color: #8892b0;\n  opacity: 0.4;\n}\n\n.certification-single-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  row-gap: 5px;\n}\n\n.certification-single-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  margin-bottom: 0;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n}\n\n.certification-single-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 500;\n  font-family: \"Muli\" !important;\n}\n\n.certification-single[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-family: \"Gilroy\";\n}\n\n.certification-single[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-family: \"Muli\";\n}\n\n.contact[_ngcontent-%COMP%] {\n  padding: 40px 0 100px;\n  text-align: center;\n}\n\n.contact-wrapper[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: auto;\n  padding: 0 15px;\n}\n\n.contact-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  font-family: \"Muli\";\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.contact-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #ccd6f6;\n  font-family: \"Gilroy\";\n  font-size: clamp(40px, 5vw, 60px);\n  margin-bottom: 25px;\n  text-transform: capitalize;\n  line-height: 1;\n}\n\n@media (max-width: 575px) {\n  .contact-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n.contact-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n.contact-button[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n@media (max-width: 991px) {\n  .contact-button[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n\n.contact-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-weight: 500;\n  font-family: \"Muli\";\n}\n\n@media (max-width: 991px) {\n  .contact-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 25px;\n  }\n}\n\n.contact-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9kb2NzL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX3ZhcmlhYmxlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzaGVldC9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzaGVldC9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0VqRGE7RUZrRGIscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCRXBETztFRnFEUCxtQkVsRGU7RUZtRGYsNkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FFOUNFO0VIaUNGO0lBY0ksZUFBQTtJQUNBLGtCQUFBO0VDR0Y7QUFDRjs7QURGRTtFQUNFLDBDQUFBO0FDSUo7O0FEQUE7RUFDRSxtQkFBQTtBQ0dGOztBRXZFRTtFSG1FRjtJQUlJLGtCQUFBO0VDSUY7QUFDRjs7QURGRTtFQUNFLGtCQUFBO0FDSUo7O0FFekVFO0VIb0VBO0lBSUksZ0JBQUE7RUNLSjtBQUNGOztBRXBGRTtFSDBFQTtJQVFJLG1CQUFBO0VDTUo7QUFDRjs7QURKSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRWhHUztFRmlHVCwyQkFBQTtBQ01OOztBRTlGRTtFSCtFRTtJQVlJLGFBQUE7RUNPTjtBQUNGOztBREpJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0U3R1U7RUY4R1YsbUJFcEdXO0VGcUdYLGdCRXhHRztBRDhHVDs7QUVoSEU7RUhxR0U7SUFRSSxlQUFBO0VDT047QUFDRjs7QURGSTtFQUNFLGdCQUFBO0VBQ0EsY0V4SFM7RUZ5SFQscUJFbEhTO0VGbUhULGdCRXhIQztFRnlIRCxlQUFBO0FDSU47O0FFdEhFO0VINkdFO0lBUUksZUFBQTtFQ0tOO0FBQ0Y7O0FFM0hFO0VINkdFO0lBWUksZUFBQTtFQ01OO0FBQ0Y7O0FFdElFO0VIbUhFO0lBZ0JJLGVBQUE7RUNPTjtBQUNGOztBRGxKQTtFQUNFLGFBQUE7QUNxSkY7O0FEbEpBO0VBQ0UsbUJBQUE7QUNxSkY7O0FEbEpBO0VBQ0UsOEJBQUE7QUNxSkY7O0FEbEpBO0VBQ0UsdUJBQUE7QUNxSkY7O0FEbEpBO0VBQ0UsZ0JBQUE7QUNxSkY7O0FEbEpBO0VBQ0UsOEJBQUE7QUNxSkY7O0FEbEpBO0VBQ0UseUNBQUE7QUNxSkY7O0FEbEpBO0VBQ0Usa0NBQUE7QUNxSkY7O0FEbEpBO0VBQ0UsWUFBQTtBQ3FKRjs7QURsSkE7RUFDRSxjQUFBO0FDcUpGOztBRGxKQTtFQUNFLHlCQUFBO0FDcUpGOztBRGxKQTtFQUNFLGdDQUFBO0FDcUpGOztBRGxKQTtFQUNFLFdBQUE7QUNxSkY7O0FEbEpBO0VBQ0UsY0VqRGE7RUZrRGIscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCRXBETztFRnFEUCxtQkVsRGU7RUZtRGYsNkJBQUE7RUFDQSxjQUFBO0FDcUpGOztBRWxNRTtFSGlDRjtJQWNJLGVBQUE7SUFDQSxrQkFBQTtFQ3VKRjtBQUNGOztBRHRKRTtFQUNFLDBDQUFBO0FDd0pKOztBRHBKQTtFQUNFLG1CQUFBO0FDdUpGOztBRTNORTtFSG1FRjtJQUlJLGtCQUFBO0VDd0pGO0FBQ0Y7O0FEdEpFO0VBQ0Usa0JBQUE7QUN3Sko7O0FFN05FO0VIb0VBO0lBSUksZ0JBQUE7RUN5Sko7QUFDRjs7QUV4T0U7RUgwRUE7SUFRSSxtQkFBQTtFQzBKSjtBQUNGOztBRHhKSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRWhHUztFRmlHVCwyQkFBQTtBQzBKTjs7QUVsUEU7RUgrRUU7SUFZSSxhQUFBO0VDMkpOO0FBQ0Y7O0FEeEpJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0U3R1U7RUY4R1YsbUJFcEdXO0VGcUdYLGdCRXhHRztBRGtRVDs7QUVwUUU7RUhxR0U7SUFRSSxlQUFBO0VDMkpOO0FBQ0Y7O0FEdEpJO0VBQ0UsZ0JBQUE7RUFDQSxjRXhIUztFRnlIVCxxQkVsSFM7RUZtSFQsZ0JFeEhDO0VGeUhELGVBQUE7QUN3Sk47O0FFMVFFO0VINkdFO0lBUUksZUFBQTtFQ3lKTjtBQUNGOztBRS9RRTtFSDZHRTtJQVlJLGVBQUE7RUMwSk47QUFDRjs7QUUxUkU7RUhtSEU7SUFnQkksZUFBQTtFQzJKTjtBQUNGOztBRTdRRTtFQ2pCSTtJQUNFLGVBQUE7RUhrU047QUFDRjs7QUF4U0E7RUFDRSxZQUFBO0FBMFNGOztBRXRSRTtFRnJCRjtJQUlJLFlBQUE7RUEyU0Y7QUFDRjs7QUVqU0U7RUZmRjtJQVFJLFlBQUE7RUE0U0Y7QUFDRjs7QUU1U0U7RUZURjtJQVlJLFlBQUE7SUFDQSxnQkFBQTtFQTZTRjtBQUNGOztBQTNTRTtFQUNFLGNDbkJZO0VEb0JaLGVBQUE7RUFDQSxxQkNaVztFRGFYLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTZTSjs7QUVwVEU7RUZDQTtJQVNJLGVBQUE7RUE4U0o7QUFDRjs7QUUvVEU7RUZPQTtJQWFJLGVBQUE7RUErU0o7QUFDRjs7QUUxVUU7RUZhQTtJQWlCSSxlQUFBO0VBZ1RKO0FBQ0Y7O0FBN1NFO0VBQ0UsY0N2Q2M7RUR3Q2QsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkNsQ2E7QURpVmpCOztBQTlTSTtFQUNFLGVBQUE7QUFnVE47O0FFN1VFO0VGc0JBO0lBVUksZUFBQTtFQWlUSjtFQWhUSTtJQUNFLGVBQUE7RUFrVE47QUFDRjs7QUUzVkU7RUY0QkE7SUFpQkksZUFBQTtFQWtUSjtFQWpUSTtJQUNFLGVBQUE7RUFtVE47QUFDRjs7QUFoVEk7RUFDRSxnQ0FBQTtBQWtUTjs7QUE3U0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBOFNOOztBQTNTUTtFQUNFLGNDNUVRO0VENkVSLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQTZTVjs7QUU5V0U7RUYyRE07SUFTSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUE4U1Y7QUFDRjs7QUUzWEU7RUZpRU07SUFlSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUErU1Y7QUFDRjs7QUV4WUU7RUZ1RU07SUFxQkksZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBZ1RWO0FBQ0Y7O0FBOVNVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWdUWjs7QUE1U1E7RUFDRSxpQkFBQTtBQThTVjs7QUF4U0U7RUFFRSxjQ3hIWTtFRHlIWixxQkNoSFc7RURpSFgsZ0JDbEhRO0VEbUhSLGdCQUFBO0FBeVNKOztBQXZTSTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJDeEhTO0VEeUhULGdCQzlIQztBRHVhUDs7QUUxWkU7RUY0R0U7SUFRSSxlQUFBO0VBMFNOO0FBQ0Y7O0FFcmFFO0VGa0hFO0lBWUksZUFBQTtFQTJTTjtBQUNGOztBRWhiRTtFRndIRTtJQWdCSSxlQUFBO0VBNFNOO0FBQ0Y7O0FBeFNFO0VBQ0Usa0JBQUE7QUEwU0o7O0FFNWFFO0VGaUlBO0lBSUksYUFBQTtFQTJTSjtBQUNGOztBQXpTSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUEyU047O0FBeFNJO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBMFNOOztBQXBTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUF1U0Y7O0FFeGNFO0VGK0pGO0lBS0ksaUJBQUE7RUF3U0Y7QUFDRjs7QUF0U0U7RUFDRSxhQUFBO0FBd1NKOztBRWhkRTtFRnVLQTtJQUlJLGNBQUE7RUF5U0o7QUFDRjs7QUF0U0U7RUFDRSxxQkFBQTtFQUNBLG1FQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUF3U0o7O0FFaGVFO0VGK0tBO0lBWUksV0FBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBeVNKO0FBQ0Y7O0FBdFNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQXdTSjs7QUVqZkU7RUZrTUE7SUFVSSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VBeVNKO0FBQ0Y7O0FFOWZFO0VGd01BO0lBZ0JJLFdBQUE7RUEwU0o7QUFDRjs7QUF4U0k7RUFDRSxTQUFBO0FBMFNOOztBRWhnQkU7RUZxTkU7SUFJSSxNQUFBO0VBMlNOO0FBQ0Y7O0FBeFNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTBTTjs7QUF2U0k7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQXlTTjs7QUFyU007RUFDRSx1Q0FBQTtFQUNBLFVBQUE7QUF1U1I7O0FBblNJO0VBQ0Usc0NBQUE7QUFxU047O0FBbFNJO0VBQ0Usc0NBQUE7QUFvU047O0FBalNJO0VBQ0Usc0NBQUE7QUFtU047O0FBaFNJO0VBQ0Usc0NBQUE7QUFrU047O0FBL1JJO0VBQ0Usc0NBQUE7QUFpU047O0FBOVJJO0VBQ0Usc0NBQUE7QUFnU047O0FBMVJBO0VBQ0UsZUFBQTtBQTZSRjs7QUEzUkU7RUFDRSx5QkMvUlU7RURnU1Ysa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQTZSSjs7QUE1Ukk7RUFDRSxnQ0FBQTtBQThSTjs7QUExUk07RUFDRSxtQkFBQTtBQTRSUjs7QUF6UlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUEyUlY7O0FBelJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTJSWjs7QUF0UlU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUF3Ulo7O0FBbFJRO0VBQ0UscUJDOVRLO0VEK1RMLGNDeFVNO0VEeVVOLGdCQ2xVRDtFRG1VQyxlQUFBO0VBQ0EsbUJBQUE7QUFvUlY7O0FBL1FRO0VBQ0UsZ0JBQUE7RUFDQSxjQ2pWUTtFRGtWUixtQkN6VU87RUQwVVAsZ0JDL1VBO0VEZ1ZBLGVBQUE7QUFpUlY7O0FBelFBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBNFFGOztBQTFRRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGFBQUE7QUEyUUo7O0FFdm1CRTtFRnNWQTtJQVNJLGFBQUE7RUE0UUo7QUFDRjs7QUExUUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQTRRTjs7QUVobkJFO0VGa1dFO0lBS0ksZUFBQTtFQTZRTjtBQUNGOztBQTFRSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkNsWFM7RURtWFQsZ0JDcFhNO0VEcVhOLGVBQUE7QUE0UU47O0FFOW5CRTtFRjJXRTtJQVVJLGVBQUE7RUE2UU47QUFDRjs7QUEzUU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBNlFSOztBQXpRSTtFQUNFLHlCQUFBO0FBMlFOOztBQXhRSTtFQUNFLHlCQUFBO0FBMFFOOztBQXZRSTtFQUNFLHlCQUFBO0FBeVFOOztBQXRRSTtFQUNFLHlCQUFBO0FBd1FOOztBQXJRSTtFQUNFLHNCQUFBO0FBdVFOOztBQXBRSTtFQUNFLHlCQUFBO0FBc1FOOztBQW5RSTtFQUNFLHlCQUFBO0FBcVFOOztBQWxRSTtFQUNFLHlCQUFBO0FBb1FOOztBQTlQQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQWlRRjs7QUEvUEU7RUFDRSx5QkN2YlU7RUR3YlYsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWlRSjs7QUU1cUJFO0VGb2FBO0lBU0ksbUJBQUE7SUFDQSx5QkFBQTtFQW1RSjtBQUNGOztBQS9QUTtFQUNFLDJCQUFBO0FBaVFWOztBQTNQTTtFQUNFLGNBQUE7RUFDQSxxQkNwY087RURxY1AsZ0JDMWNEO0VEMmNDLGVBQUE7QUE2UFI7O0FBMVBNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQTRQUjs7QUF0UEk7RUFDRSxjQUFBO0VBQ0EsbUJDeGRXO0VEeWRYLGdCQzdkRTtFRDhkRixvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBd1BOOztBRXJ0QkU7RUZxZEU7SUFVSSwyQkFBQTtFQTBQTjtBQUNGOztBQXBQQTtFQUNFLG9CQUFBO0FBdVBGOztBQXJQRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF1UEo7O0FBclBJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJDM2ZVO0VENGZWLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQXVQTjs7QUV0dUJFO0VGdWVFO0lBV0ksV0FBQTtFQXdQTjtBQUNGOztBRXZ2QkU7RUZtZkU7SUFlSSxhQUFBO0VBeVBOO0FBQ0Y7O0FBdFBJO0VBQ0Usa0JBQUE7QUF3UE47O0FBdFBNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQzFoQks7QURreEJiOztBRXp2QkU7RUZ1Zkk7SUFhSSxXQUFBO0lBQ0EsK0JBQUE7RUF5UFI7QUFDRjs7QUVyd0JFO0VGNmZJO0lBa0JJLFFBQUE7SUFDQSxXQUFBO0VBMFBSO0FBQ0Y7O0FFdnhCRTtFRnlnQkk7SUF1QkksYUFBQTtFQTJQUjtBQUNGOztBQXZQUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQXlQVjs7QUVqeEJFO0VGbWhCTTtJQVFJLFVBQUE7SUFDQSxRQUFBO0lBQ0EsK0JBQUE7RUEwUFY7QUFDRjs7QUU5eEJFO0VGeWhCTTtJQWNJLFFBQUE7SUFDQSxXQUFBO0VBMlBWO0FBQ0Y7O0FFaHpCRTtFRnFpQk07SUFtQkksYUFBQTtFQTRQVjtBQUNGOztBQXhQTTtFQUNFLGNDbmtCUTtFRG9rQlIsZ0JDaGtCRDtFRGlrQkMsZ0JBQUE7RUFDQSxxQkM3akJPO0FEdXpCZjs7QUFyUE07RUFDRSxjQzNrQlU7RUQ0a0JWLGdCQ3RrQkM7RUR1a0JELHFCQ3JrQk87RURza0JQLFNBQUE7QUF1UFI7O0FFM3pCRTtFRmdrQkk7SUFNSSxjQUFBO0lBQ0EsY0FBQTtFQXlQUjtBQUNGOztBQXJQSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUF1UE47O0FFbjBCRTtFRnNrQkU7SUFVSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUF1UE47QUFDRjs7QUFyUE07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXVQUjs7QUFwUFE7RUFDRSxrQkFBQTtBQXNQVjs7QUFwUFU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFzUFo7O0FBbFBZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBb1BkOztBRTkxQkU7RUZxbUJVO0lBUUksVUFBQTtJQUNBLFFBQUE7SUFDQSwrQkFBQTtFQXFQZDtBQUNGOztBRTMyQkU7RUYybUJVO0lBY0ksUUFBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtFQXNQZDtBQUNGOztBQTlPTTtFQUNFLGdCQUFBO0VBQ0EsY0N0cEJVO0VEdXBCVixnQkNucEJFO0VEb3BCRixtQkMvb0JTO0FEKzNCakI7O0FBek9BO0VBQ0Usb0JBQUE7QUE0T0Y7O0FBMU9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE0T0o7O0FBek9FO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQTJPSjs7QUVqNUJFO0VGNHBCQTtJQWFJLHVCQUFBO0lBQ0EsZ0JBQUE7RUE0T0o7QUFDRjs7QUVuNkJFO0VGd3FCQTtJQWtCSSxZQUFBO0VBNk9KO0FBQ0Y7O0FBM09JO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQTZPTjs7QUF6T007RUFDRSxlQUFBO0VBQ0EsY0N6c0JVO0VEMHNCVixZQUFBO0FBMk9SOztBQXZPSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUF5T047O0FBdk9NO0VBQ0UsY0NydEJRO0VEc3RCUixnQkFBQTtFQUNBLHFCQzlzQk87RUQrc0JQLGdCQ3B0QkQ7QUQ2N0JQOztBQW5PTTtFQUNFLGdCQUFBO0VBQ0EsZ0JDenRCQztFRDB0QkQsOEJBQUE7QUFxT1I7O0FBak9JO0VBQ0UsY0N0dUJVO0VEdXVCVixxQkM5dEJTO0FEaThCZjs7QUFqT007RUFDRSxjQ3p1QlU7RUQwdUJWLG1CQ2p1QlM7QURvOEJqQjs7QUE1TkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBK05GOztBQTdORTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUErTko7O0FBM05JO0VBQ0UsY0M1dkJTO0VENnZCVCxtQkNydkJXO0VEc3ZCWCxnQkN4dkJNO0VEeXZCTixjQUFBO0FBNk5OOztBQTFOSTtFQUNFLGdCQ2p3QkM7RURrd0JELGNDdHdCVTtFRHV3QlYscUJDOXZCUztFRCt2QlQsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQTROTjs7QUVsK0JFO0VGK3ZCRTtJQVVJLG1CQUFBO0VBNk5OO0FBQ0Y7O0FBeE5JO0VBQ0UsY0NweEJZO0VEcXhCWixtQkM1d0JXO0VENndCWCxnQkNoeEJHO0FEMCtCVDs7QUF0TkU7RUFDRSxnQkFBQTtBQXdOSjs7QUVuK0JFO0VGMHdCQTtJQUdJLGdCQUFBO0VBME5KO0FBQ0Y7O0FBek5JO0VBQ0UsY0MveEJTO0VEZ3lCVCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkNqeUJHO0VEa3lCSCxtQkMveEJXO0FEMC9CakI7O0FFbi9CRTtFRit3QkU7SUFXSSxrQkFBQTtFQTZOTjtBQUNGOztBQTVOTTtFQUNFLDBDQUFBO0FBOE5SIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiVhbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiVqdXN0aWZ5LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuJWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuJXRyYW5zaXRpb24ge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5teC1hdXRvIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJpbWFyeS1idG4ge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogc2l6ZSgyKSBzaXplKDMuNSk7XHJcbiAgYm9yZGVyOiBzaXplKDAuMSkgc29saWQgJHByaW1hcnktbGluaztcclxuICBib3JkZXItcmFkaXVzOiBzaXplKDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBmb250LXNpemU6IHNpemUoMS42KTtcclxuICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogc2l6ZSgyKSAwO1xyXG4gIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJHByaW1hcnktbGluaywgMC45KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi1taW5pIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGluaztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBmb250LXNpemU6IHNpemUoMS44KTtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDEuNik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtYmlnIHtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgzLjUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi43KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC92YXJpYWJsZVwiLCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvbWl4aW5zXCIsIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9mdW5jdGlvbnNcIixcbiAgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L21pc2NcIiwgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L3Jlc3BvbnNpdmVcIjtcblxuLy8gSGVyb1xuLmhlcm8ge1xuICBoZWlnaHQ6IGF1dG87XG5cbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG5cbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBoZWlnaHQ6IDU1dmg7XG4gIH1cblxuICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuXG4gICYtdGl0bGUge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBmb250LXNpemU6IHNpemUoNCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogc2l6ZSgyKTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgZm9udC1zaXplOiBzaXplKDMpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgZm9udC1zaXplOiBzaXplKDIuNSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjMpO1xuICAgIH1cbiAgfVxuXG4gICYtZGVzIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjIpO1xuICAgIG1hcmdpbi1ib3R0b206IHNpemUoMi41KTtcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiBzaXplKDIuMik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBmb250LXNpemU6IHNpemUoMik7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgZm9udC1zaXplOiBzaXplKDEuNyk7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDEuNyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBib3JkZXItYm90dG9tOiBzaXplKDAuMSkgc29saWQgJHByaW1hcnktbGluaztcbiAgICB9XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBAZXh0ZW5kICVmbGV4LCAlYWxpZ24tY2VudGVyO1xuICAgICAgY29sdW1uLWdhcDogc2l6ZSgyKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzNweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG5cbiAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiBzaXplKDIuNSk7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyKTtcbiAgICAgICAgICAgIHdpZHRoOiBzaXplKDIpO1xuICAgICAgICAgICAgaGVpZ2h0OiBzaXplKDIuMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjcpO1xuICAgICAgICAgICAgd2lkdGg6IHNpemUoMS43KTtcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSgxLjkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLXNvY2lhbCB7XG4gICAgQGV4dGVuZCAlZmxleCwgJWFsaWduLWNlbnRlcjtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6ICRzZW1pLWJvbGQ7XG4gICAgY29sdW1uLWdhcDogMXJlbTtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHNpemUoMSk7XG4gICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkYm9sZDtcblxuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDIuNSk7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBmb250LXNpemU6IHNpemUoMik7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGVyby1zbGlkZS1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyB3b3JrZmxvd1xuLndvcmtmbG93IHtcbiAgcGFkZGluZzogc2l6ZSg4KSAwIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgcGFkZGluZzogc2l6ZSg2KSAwIDA7XG4gIH1cblxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgJi13cmFwcGVyIHtcbiAgICBtYXJnaW46IHNpemUoLTEwKSAwIC0zZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDYwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEuMTI1KTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgICAgcm93LWdhcDogMzBweDtcbiAgICB9XG4gIH1cblxuICAmLWl0ZW0ge1xuICAgIG1heC13aWR0aDogODQycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMzJweCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyOTRtcztcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiA0NyU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICB0b3A6IHNpemUoNik7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmLXNpbmdsZSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgcGFkZGluZy10b3A6IDYyLjUlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC41dnc7XG4gICAgICAvLyBib3gtc2hhZG93OiAwIDJ2aCA1dncgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgQGV4dGVuZCAldHJhbnNpdGlvbjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyNHB4KSBzY2FsZSgxLjA1KTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLTEge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wcm9qZWN0MS5qcGVnXCIpO1xuICAgIH1cblxuICAgICYtMiB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Byb2plY3QyLmpwZWdcIik7XG4gICAgfVxuXG4gICAgJi0zIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcHJvamVjdDMuanBlZ1wiKTtcbiAgICB9XG5cbiAgICAmLTQge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy93b3JrZmxvdzQuanBnXCIpO1xuICAgIH1cblxuICAgICYtNSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3dvcmtmbG93NS5qcGdcIik7XG4gICAgfVxuXG4gICAgJi02IHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvd29ya2Zsb3c2LnBuZ1wiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gdGVzdGltb25pYWxcbi50ZXN0aW1vbmlhbCB7XG4gIHBhZGRpbmc6IDgwcHggMDtcblxuICAmLXNpbmdsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQyO1xuICAgIHBhZGRpbmc6IDI2cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBoZWlnaHQ6IHNpemUoMjMuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBsaWdodGVuKCRjb2xvcjogJGJhY2tncm91bmQsICRhbW91bnQ6IDUpO1xuICAgIH1cblxuICAgIC5jbGllbnQge1xuICAgICAgJi1pbWcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBAZXh0ZW5kICVmbGV4LCAlanVzdGlmeS1iZXR3ZWVuO1xuXG4gICAgICAgICYtc2luZ2xlIHtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtaWNvbiB7XG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkY29sb3I6ICRzZWNvbmRhcnktY29sb3IsICRhbHBoYTogMC4zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi1uYW1lIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkbWVkaXVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtY29tbWVudCB7XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgICAgICAgICBmb250LXdlaWdodDogJHJlZ3VsYXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRlY2hub2xvZ2llc1xuLnRlY2hub2xvZ2llcyB7XG4gIHBhZGRpbmc6IDQwcHggMCA4MHB4O1xuICBkaXNwbGF5OiBibG9jaztcblxuICAmLXNpbmdsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgQGV4dGVuZCAlZmxleCwgJWFsaWduLWNlbnRlciwgJWp1c3RpZnktY2VudGVyO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHJvdy1nYXA6IDIwcHg7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgICBmb250LXdlaWdodDogJHNlbWktYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyKTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjgpO1xuICAgICAgfVxuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3R0b206IDI3cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5odG1sIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTRkMjY7XG4gICAgfVxuXG4gICAgJi5jc3Mge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkOGZjNjtcbiAgICB9XG5cbiAgICAmLmpzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICNmOWRjNWMsICRhbW91bnQ6IDIwKTtcbiAgICB9XG5cbiAgICAmLmFuZ3VsYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0NDczYTtcbiAgICB9XG5cbiAgICAmLnNhc3Mge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M2OTtcbiAgICB9XG5cbiAgICAmLmdpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM0ZjI5O1xuICAgIH1cblxuICAgICYuYm9vdHN0cmFwIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTQwN2Y7XG4gICAgfVxuXG4gICAgJi5qcXVlcnkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3NjlhZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gc2VydmljZXNcbi5zZXJ2aWNlcyB7XG4gIHBhZGRpbmc6IDQwcHggMCA4MHB4O1xuICBkaXNwbGF5OiBibG9jaztcblxuICAmLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQyO1xuICAgIHBhZGRpbmc6IDI2cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiBzaXplKDIwKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogc2l6ZSgzKTtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAuc2VydmljZXMtY29udGVudCB7XG4gICAgICAgIHAge1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtdG9wIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yLCAkYW1vdW50OiAyMCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgICAgICBmb250LXdlaWdodDogJGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjgpO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDAuMDU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB3aWR0aDogc2l6ZSg3KTtcbiAgICAgICAgaGVpZ2h0OiBzaXplKDcpO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtY29udGVudCB7XG4gICAgcCB7XG4gICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogI2ZmZiwgJGFtb3VudDogNDApO1xuICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkbGlnaHQ7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEV4cGVyaWVuY2Vcbi5leHBlcmllbmNlIHtcbiAgcGFkZGluZzogc2l6ZSg0KSAwIHNpemUoOCk7XG5cbiAgJi1lbnRyaWVzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogc2l6ZSg1KTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICB3aWR0aDogc2l6ZSgwLjMpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1saW5rO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAtMTIlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjMlLCAtNTAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG5cbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgcmlnaHQ6IC0xMyU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgbGVmdDogLTY0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5iaWcge1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICByaWdodDogLTEzJTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNCUsIC00MCUpO1xuXG4gICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgICBsZWZ0OiAtMTclO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIC00MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IC02NHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWRhdGUge1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNpbmdsZSB7XG4gICAgICB3aWR0aDogNDglO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMWQzNztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAvLyBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggNXB4IHJnYigxNCAzNiA2OCAvIDM2JSk7XG5cbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHNpemUoMyk7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCBsaWdodGVuKCRjb2xvcjogJGJhY2tncm91bmQsICRhbW91bnQ6IDUpO1xuXG4gICAgICAgIC5leHBlcmllbmNlLWVudHJpZXMtdGl0bGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1saW5rO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbGVmdDogLTEzJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNiUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYmlnIHtcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBzaXplKDIuNSk7XG4gICAgICAgICAgICAgIGhlaWdodDogc2l6ZSgyLjUpO1xuICAgICAgICAgICAgICBsZWZ0OiAtMTUlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCAtNDAlKTtcblxuICAgICAgICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTclO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgLTQwJSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC02OHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1kZXMge1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBmb250LXdlaWdodDogJHJlZ3VsYXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGNlcnRpZmljYXRpb25cbi5jZXJ0aWZpY2F0aW9uIHtcbiAgcGFkZGluZzogc2l6ZSg0KSAwIHNpemUoOCk7XG5cbiAgJi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgY29sdW1uLWdhcDogc2l6ZSgzKTtcbiAgICByb3ctZ2FwOiBzaXplKDMpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmLXNpbmdsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiBzaXplKDMpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZsZXg6IDEgNDglO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMWQzNztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogc2l6ZSgxNik7XG5cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBpbml0aWFsO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAmLWxlZnQge1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSg1LjUpO1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtcmlnaHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgcm93LWdhcDogNXB4O1xuXG4gICAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkYm9sZDtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG5cbiAgICAgIGIge1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udGFjdFxuLmNvbnRhY3Qge1xuICBwYWRkaW5nOiBzaXplKDQpIDAgc2l6ZSgxMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmLXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogc2l6ZSg2MCk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuXG4gICYtdGl0bGUge1xuICAgIHAge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWxpbms7XG4gICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICAgICAgZm9udC13ZWlnaHQ6ICRzZW1pLWJvbGQ7XG4gICAgICBtYXJnaW46IHNpemUoMSkgMDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogJGJvbGQ7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgNXZ3LCA2MHB4KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IHNpemUoMi41KTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHNpemUoMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1jb250ZW50IHtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkbWVkaXVtO1xuICAgIH1cbiAgfVxuXG4gICYtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiBzaXplKDQpO1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBtYXJnaW4tdG9wOiBzaXplKDEuNSk7XG4gICAgfVxuICAgIGEge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWxpbms7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiBzaXplKDIpIHNpemUoMy41KTtcbiAgICAgIGJvcmRlcjogc2l6ZSgwLjEpIHNvbGlkICRwcmltYXJ5LWxpbms7XG4gICAgICBib3JkZXItcmFkaXVzOiBzaXplKDAuNSk7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgZm9udC13ZWlnaHQ6ICRtZWRpdW07XG4gICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgcGFkZGluZzogc2l6ZSgxLjUpIHNpemUoMi41KTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkcHJpbWFyeS1saW5rLCAwLjkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGJhY2tncm91bmQ6ICMwYTE5MmY7XHJcbiRiYWNrZ3JvdW5kMjogIzBjMWQzNztcclxuJHByaW1hcnktY29sb3I6ICNjY2Q2ZjY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM4ODkyYjA7XHJcbiRwcmltYXJ5LWxpbms6ICM2NmZmZGI7XHJcbiRleHRyYS1jb2xvcjogI2QxNGU0ZTtcclxuJGJvbGQ6IDgwMDtcclxuJHJlZ3VsYXI6IDQwMDtcclxuJGxpZ2h0OiAzMDA7XHJcbiRtZWRpdW06IDUwMDtcclxuJHNlbWktYm9sZDogNjAwO1xyXG4kcHJpbWFyeS1mb250OiBcIkdpbHJveVwiO1xyXG4kc2Vjb25kYXJ5LWZvbnQ6IFwiTXVsaVwiO1xyXG4iLCJAbWl4aW4gbW9iaWxlLXNtYWxsIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZScsXG4nbWl4aW5zJyxcbidmdW5jdGlvbnMnLFxuJ21pc2MnO1xuXG5AaW5jbHVkZSBkZXNrdG9wIHtcbiAgaGVhZGVyIHtcbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "akMW":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateProgress.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateProgress; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "bTu8":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/core-class.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
/* harmony import */ var _utils_get_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/get-support */ "OsfX");
/* harmony import */ var _utils_get_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/get-device */ "ngAh");
/* harmony import */ var _utils_get_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/get-browser */ "NDSe");
/* harmony import */ var _modules_resize_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/resize/resize */ "0t0F");
/* harmony import */ var _modules_observer_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/observer/observer */ "f9ef");
/* harmony import */ var _modular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modular */ "Z67w");
/* harmony import */ var _events_emitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter */ "xW1W");
/* harmony import */ var _update_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index */ "rTk1");
/* harmony import */ var _translate_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index */ "0roy");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index */ "wvNA");
/* harmony import */ var _slide_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index */ "IDX/");
/* harmony import */ var _loop_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index */ "ju4L");
/* harmony import */ var _grab_cursor_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index */ "E51R");
/* harmony import */ var _manipulation_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manipulation/index */ "CK30");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./events/index */ "nyww");
/* harmony import */ var _breakpoints_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./breakpoints/index */ "Yi0i");
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classes/index */ "VlRc");
/* harmony import */ var _images_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/index */ "N2wq");
/* harmony import */ var _check_overflow_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./check-overflow/index */ "AUG5");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./defaults */ "nyfm");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-param-reassign: "off" */






















var prototypes = {
  modular: _modular__WEBPACK_IMPORTED_MODULE_7__["default"],
  eventsEmitter: _events_emitter__WEBPACK_IMPORTED_MODULE_8__["default"],
  update: _update_index__WEBPACK_IMPORTED_MODULE_9__["default"],
  translate: _translate_index__WEBPACK_IMPORTED_MODULE_10__["default"],
  transition: _transition_index__WEBPACK_IMPORTED_MODULE_11__["default"],
  slide: _slide_index__WEBPACK_IMPORTED_MODULE_12__["default"],
  loop: _loop_index__WEBPACK_IMPORTED_MODULE_13__["default"],
  grabCursor: _grab_cursor_index__WEBPACK_IMPORTED_MODULE_14__["default"],
  manipulation: _manipulation_index__WEBPACK_IMPORTED_MODULE_15__["default"],
  events: _events_index__WEBPACK_IMPORTED_MODULE_16__["default"],
  breakpoints: _breakpoints_index__WEBPACK_IMPORTED_MODULE_17__["default"],
  checkOverflow: _check_overflow_index__WEBPACK_IMPORTED_MODULE_20__["default"],
  classes: _classes_index__WEBPACK_IMPORTED_MODULE_18__["default"],
  images: _images_index__WEBPACK_IMPORTED_MODULE_19__["default"]
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, params);
    if (el && !params.el) params.el = el; // Swiper Instance

    var swiper = this;
    swiper.support = Object(_utils_get_support__WEBPACK_IMPORTED_MODULE_2__["getSupport"])();
    swiper.device = Object(_utils_get_device__WEBPACK_IMPORTED_MODULE_3__["getDevice"])({
      userAgent: params.userAgent
    });
    swiper.browser = Object(_utils_get_browser__WEBPACK_IMPORTED_MODULE_4__["getBrowser"])();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, _defaults__WEBPACK_IMPORTED_MODULE_21__["default"]);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, swiper.params);
    swiper.passedParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"]; // Find el

    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return undefined;
    }

    if ($el.length > 1) {
      var swipers = [];
      $el.each(function (containerEl) {
        var newParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }

    el.swiper = swiper; // Find Wrapper

    var $wrapperEl;

    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
      $wrapperEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

      $wrapperEl.children = function (options) {
        return $el.children(options);
      };
    } else {
      $wrapperEl = $el.children("." + swiper.params.wrapperClass);
    } // Extend Swiper


    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      // Classes
      classNames: [],
      // Slides
      slides: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video, label',
        // Last click time
        lastClickTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      swiper.emit('_slideClass', slideEl, classNames);
    });
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.init = function init() {
    var swiper = this;
    if (swiper.initialized) return;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["deleteProps"])(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults__WEBPACK_IMPORTED_MODULE_21__["default"];
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_observer_observer__WEBPACK_IMPORTED_MODULE_6__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "c0r8":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/controller/controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var Swiper = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      controller: _extends({
        control: swiper.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(swiper, translate, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(swiper, duration, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
});

/***/ }),

/***/ "cKS0":
/*!************************************************!*\
  !*** ./node_modules/swiper/esm/utils/utils.js ***!
  \************************************************/
/*! exports provided: deleteProps, nextTick, now, getTranslate, isObject, extend, bindModuleMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProps", function() { return deleteProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslate", function() { return getTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindModuleMethods", function() { return bindModuleMethods; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");


function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = window.getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null) {
      var keysArray = Object.keys(Object(nextSource));

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}



/***/ }),

/***/ "daxC":
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      coverflowEffect: _extends({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "drdV":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/virtual/virtual.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, offset + "px");
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }

      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
        }
      }
    }

    for (var _i = 0; _i < slides.length; _i += 1) {
      if (_i >= from && _i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i);
        } else {
          if (_i > previousTo) appendIndexes.push(_i);
          if (_i < previousFrom) prependIndexes.push(_i);
        }
      }
    }

    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    var $slideEl = params.renderSlide ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slides) {
    var swiper = this;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slides) {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        var $cachedEl = cache[cachedIndex];
        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide: function removeSlide(slidesIndexes) {
    var swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides: function removeAllSlides() {
    var swiper = this;
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      virtual: _extends({}, Virtual, {
        slides: swiper.params.virtual.slides,
        cache: {}
      })
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
      var overwriteParams = {
        watchSlidesProgress: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
});

/***/ }),

/***/ "dtSe":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/addSlide.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSlide; });
function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "eCvj":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/preloadImages.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preloadImages; });
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "ej0c":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlides.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlides; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");


function updateSlides() {
  var swiper = this;
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];

  function slidesForMargin(slideEl, slideIndex) {
    if (!params.cssMode) return true;

    if (slideIndex === slides.length - 1) {
      return false;
    }

    return true;
  }

  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = window.getComputedStyle(slide[0], null);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
          var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
          var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
          var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
          var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
          var boxSizing = slideStyles.getPropertyValue('box-sizing');

          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide$ = slide[0],
                clientWidth = _slide$.clientWidth,
                offsetWidth = _slide$.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        } else {
          var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
          var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
          var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
          var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
          var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);

          var _boxSizing = slideStyles.getPropertyValue('box-sizing');

          if (_boxSizing && _boxSizing === 'border-box') {
            slideSize = height + marginTop + marginBottom;
          } else {
            var _slide$2 = slide[0],
                clientHeight = _slide$2.clientHeight,
                offsetHeight = _slide$2.offsetHeight;
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom + (offsetHeight - clientHeight);
          }
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = slideSize + "px";
        } else {
          slides[i].style.height = slideSize + "px";
        }
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });else $wrapperEl.css({
      height: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });else $wrapperEl.css({
      height: swiper.virtualSize + params.spaceBetween + "px"
    });

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.filter(slidesForMargin).css({
        marginLeft: spaceBetween + "px"
      });else slides.filter(slidesForMargin).css({
        marginRight: spaceBetween + "px"
      });
    } else slides.filter(slidesForMargin).css({
      marginBottom: spaceBetween + "px"
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ "f9ef":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/esm/modules/observer/observer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
});

/***/ }),

/***/ "fFnh":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopCreate.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loopCreate; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "Jq2x");


function loopCreate() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "fMrl":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/lazy/lazy.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }

    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
    var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageEl) {
      var $imageEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      var $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"" + background + "\")");
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(function (sourceEl) {
              var $source = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find("." + params.preloaderClass).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index');
      }

      return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
        var index = isVirtual ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index') : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
        } // Prev Slides


        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
  checkInViewOnLoad: function checkInViewOnLoad() {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var $scrollElement = swiper.params.lazy.scrollingElement ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.lazy.scrollingElement) : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window);
    var isWindow = $scrollElement[0] === window;
    var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    var swiperOffset = swiper.$el.offset();
    var rtl = swiper.rtlTranslate;
    var inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (var i = 0; i < swiperCoord.length; i += 1) {
      var point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    if (inView) {
      swiper.lazy.load();
      $scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad);
    } else if (!swiper.lazy.scrollHandlerAttached) {
      swiper.lazy.scrollHandlerAttached = true;
      $scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'lazy',
  params: {
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      lazy: _extends({
        initialImageLoaded: false
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        if (swiper.params.lazy.checkInView) {
          swiper.lazy.checkInViewOnLoad();
        } else {
          swiper.lazy.load();
        }
      }
    },
    scroll: function scroll(swiper) {
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart(swiper) {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
        swiper.lazy.load();
      }
    }
  }
});

/***/ }),

/***/ "g0Ox":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/navigation/navigation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }

      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }

      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    click: function click(swiper, e) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if (swiper.params.navigation.hideOnClick && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).is($prevEl) && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).is($nextEl)) {
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
});

/***/ }),

/***/ "g1JZ":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchMove.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onTouchMove; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");



function onTouchMove(event) {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "gtyG":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideReset.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideReset; });
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "h2/A":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/keyboard/keyboard.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
        return undefined;
      }

      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (swiper.keyboard.enabled) return;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (!swiper.keyboard.enabled) return;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      keyboard: _extends({
        enabled: false
      }, Keyboard)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
});

/***/ }),

/***/ "jQP/":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/getTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSwiperTranslate; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getTranslate"])($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "ju4L":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loopCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate */ "fFnh");
/* harmony import */ var _loopFix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix */ "KcmN");
/* harmony import */ var _loopDestroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy */ "OvF9");



/* harmony default export */ __webpack_exports__["default"] = ({
  loopCreate: _loopCreate__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "l9MX":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideToClickedSlide; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "l9qo":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onClick.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onClick; });
function onClick(e) {
  var swiper = this;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "lSlw":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main-view/homepage/homepage-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.component */ "ZoiA");





const routes = [
    {
        path: '',
        component: _homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    }
];
class HomepageRoutingModule {
}
HomepageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomepageRoutingModule });
HomepageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomepageRoutingModule_Factory(t) { return new (t || HomepageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomepageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mK+M":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-flip/effect-flip.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      flipEffect: _extends({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "flip");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "ngAh":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-device.js ***!
  \*****************************************************/
/*! exports provided: getDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevice", function() { return getDevice; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support */ "OsfX");


var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = Object(_get_support__WEBPACK_IMPORTED_MODULE_1__["getSupport"])();
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}



/***/ }),

/***/ "nhfI":
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js ***!
  \*************************************************************************************/
/*! exports provided: SWIPER_CONFIG, SwiperComponent, SwiperConfig, SwiperDirective, SwiperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWIPER_CONFIG", function() { return SWIPER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperComponent", function() { return SwiperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperConfig", function() { return SwiperConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperDirective", function() { return SwiperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperModule", function() { return SwiperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/bundle */ "3vra");






const _c0 = ["swiperSlides"];
const _c1 = ["*"];
const SWIPER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SWIPER_CONFIG');
const SwiperEventNames = [
    'init',
    'beforeDestroy',
    'scroll',
    'progress',
    'keyPress',
    'resize',
    'loopFix',
    'breakpoint',
    'zoomChange',
    'beforeResize',
    'beforeLoopFix',
    'sliderMove',
    'slideChange',
    'setTranslate',
    'setTransition',
    'fromEdge',
    'reachEnd',
    'reachBeginning',
    'autoplay',
    'autoplayStop',
    'autoplayStart',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'scrollbarDragEnd',
    'scrollbarDragMove',
    'scrollbarDragStart',
    'navigationHide',
    'navigationShow',
    'paginationRender',
    'paginationUpdate',
    'paginationHide',
    'paginationShow',
    'swiperTap',
    'swiperClick',
    'swiperDoubleTap',
    'swiperTouchEnd',
    'swiperTouchMove',
    'swiperTouchStart',
    'swiperTouchMoveOpposite',
    'swiperTransitionEnd',
    'swiperTransitionStart',
    'slideNextTransitionEnd',
    'slideNextTransitionStart',
    'slidePrevTransitionEnd',
    'slidePrevTransitionStart',
    'slideChangeTransitionEnd',
    'slideChangeTransitionStart',
    'toEdge',
    'observerUpdate'
];
class SwiperConfig {
    constructor(config = {}) {
        this.assign(config);
    }
    assign(config = {}, target) {
        target = target || this;
        for (const key in config) {
            if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' &&
                (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
                target[key] = {};
                this.assign(config[key], target[key]);
            }
            else {
                target[key] = config[key];
            }
        }
    }
}

class SwiperDirective {
    constructor(platformId, zone, elementRef, differs, defaults) {
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.initialIndex = null;
        this.configDiff = null;
        this.disabled = false;
        this.performance = false;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_ZOOMCHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AFTERRESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFORELOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_NAVIGATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_NAVIGATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONRENDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_OBSERVERUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set index(index) {
        if (index != null) {
            this.setIndex(index);
        }
    }
    ngAfterViewInit() {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        const params = new SwiperConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        if (params.scrollbar === true) {
            params.scrollbar = {
                el: '.swiper-scrollbar'
            };
        }
        if (params.pagination === true) {
            params.pagination = {
                el: '.swiper-pagination'
            };
        }
        if (params.navigation === true) {
            params.navigation = {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            };
        }
        if (this.disabled) {
            params.allowSlidePrev = false;
            params.allowSlideNext = false;
        }
        if (this.initialIndex != null) {
            params.initialSlide = this.initialIndex;
            this.initialIndex = null;
        }
        params.on = {
            slideChange: () => {
                if (this.instance && this.indexChange.observers.length) {
                    this.emit(this.indexChange, this.instance.realIndex);
                }
            }
        };
        this.zone.runOutsideAngular(() => {
            this.instance = new swiper_bundle__WEBPACK_IMPORTED_MODULE_2__["default"](this.elementRef.nativeElement, params);
        });
        if (params.init !== false && this.S_INIT.observers.length) {
            this.emit(this.S_INIT, this.instance);
        }
        // Add native Swiper event handling
        SwiperEventNames.forEach((eventName) => {
            let swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            this.instance.on(swiperEvent, (...args) => {
                if (args.length === 1) {
                    args = args[0];
                }
                const output = `S_${swiperEvent.toUpperCase()}`;
                const emitter = this[output];
                if (emitter.observers.length) {
                    this.emit(emitter, args);
                }
            });
        });
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create();
            this.configDiff.diff(this.config || {});
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance.destroy(true, this.instance.initialized || false);
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (this.configDiff) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.initialIndex = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    }
    ngOnChanges(changes) {
        if (this.instance && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(() => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    });
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(() => {
                        this.ngOnDestroy();
                        this.ngAfterViewInit();
                    });
                }
            }
        }
    }
    emit(emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run(() => emitter.emit(value));
        }
    }
    swiper() {
        return this.instance;
    }
    init() {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance.init();
            });
        }
    }
    update() {
        setTimeout(() => {
            if (this.instance) {
                this.zone.runOutsideAngular(() => {
                    this.instance.update();
                });
            }
        }, 0);
    }
    getIndex(real) {
        if (!this.instance) {
            return this.initialIndex || 0;
        }
        else {
            return real ? this.instance.realIndex : this.instance.activeIndex;
        }
    }
    setIndex(index, speed, silent) {
        if (!this.instance) {
            this.initialIndex = index;
        }
        else {
            let realIndex = index * this.instance.params.slidesPerGroup;
            if (this.instance.params.loop) {
                realIndex += this.instance.loopedSlides;
            }
            this.zone.runOutsideAngular(() => {
                this.instance.slideTo(realIndex, speed, !silent);
            });
        }
    }
    prevSlide(speed, silent) {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance.slidePrev(speed, !silent);
            });
        }
    }
    nextSlide(speed, silent) {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance.slideNext(speed, !silent);
            });
        }
    }
    stopAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(() => {
                this.instance.autoplay.stop();
            });
        }
    }
    startAutoplay(reset) {
        if (reset) {
            this.setIndex(0);
        }
        if (this.instance && this.instance.autoplay) {
            this.zone.runOutsideAngular(() => {
                this.instance.autoplay.start();
            });
        }
    }
}
SwiperDirective.ɵfac = function SwiperDirective_Factory(t) { return new (t || SwiperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SWIPER_CONFIG, 8)); };
SwiperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SwiperDirective, selectors: [["", "swiper", ""]], inputs: { disabled: "disabled", performance: "performance", index: "index", config: ["swiper", "config"] }, outputs: { indexChange: "indexChange", S_INIT: "init", S_BEFOREDESTROY: "beforeDestroy", S_SCROLL: "scroll", S_PROGRESS: "progress", S_KEYPRESS: "keyPress", S_RESIZE: "resize", S_BREAKPOINT: "breakpoint", S_ZOOMCHANGE: "zoomChange", S_AFTERRESIZE: "afterResize", S_BEFORERESIZE: "beforeResize", S_LOOPFIX: "loopFix", S_BEFORELOOPFIX: "beforeLoopFix", S_SLIDERMOVE: "sliderMove", S_SLIDECHANGE: "slideChange", S_SETTRANSLATE: "setTranslate", S_SETTRANSITION: "setTransition", S_FROMEDGE: "fromEdge", S_TOEDGE: "toEdge", S_REACHEND: "reachEnd", S_REACHBEGINNING: "reachBeginning", S_AUTOPLAY: "autoplay", S_AUTOPLAYSTART: "autoplayStart", S_AUTOPLAYSTOP: "autoplayStop", S_IMAGESREADY: "imagesReady", S_LAZYIMAGELOAD: "lazyImageLoad", S_LAZYIMAGEREADY: "lazyImageReady", S_SCROLLDRAGEND: "scrollDragEnd", S_SCROLLDRAGMOVE: "scrollDragMove", S_SCROLLDRAGSTART: "scrollDragStart", S_NAVIGATIONHIDE: "navigationHide", S_NAVIGATIONSHOW: "navigationShow", S_PAGINATIONRENDER: "paginationRender", S_PAGINATIONUPDATE: "paginationUpdate", S_PAGINATIONHIDE: "paginationHide", S_PAGINATIONSHOW: "paginationShow", S_TAP: "swiperTap", S_CLICK: "swiperClick", S_DOUBLETAP: "swiperDoubleTap", S_TOUCHEND: "swiperTouchEnd", S_TOUCHMOVE: "swiperTouchMove", S_TOUCHSTART: "swiperTouchStart", S_TOUCHMOVEOPPOSITE: "swiperTouchMoveOpposite", S_TRANSITIONEND: "swiperTransitionEnd", S_TRANSITIONSTART: "swiperTransitionStart", S_SLIDEPREVTRANSITIONEND: "slidePrevTransitionEnd", S_SLIDEPREVTRANSITIONSTART: "slidePrevTransitionStart", S_SLIDENEXTTRANSITIONEND: "slideNextTransitionEnd", S_SLIDENEXTTRANSITIONSTART: "slideNextTransitionStart", S_SLIDECHANGETRANSITIONEND: "slideChangeTransitionEnd", S_SLIDECHANGETRANSITIONSTART: "slideChangeTransitionStart", S_OBSERVERUPDATE: "observerUpdate" }, exportAs: ["ngxSwiper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
SwiperDirective.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SWIPER_CONFIG,] }] }
];
SwiperDirective.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    performance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['swiper',] }],
    indexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    S_INIT: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['init',] }],
    S_BEFOREDESTROY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeDestroy',] }],
    S_SCROLL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] }],
    S_PROGRESS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['progress',] }],
    S_KEYPRESS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['keyPress',] }],
    S_RESIZE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['resize',] }],
    S_BREAKPOINT: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['breakpoint',] }],
    S_ZOOMCHANGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['zoomChange',] }],
    S_AFTERRESIZE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['afterResize',] }],
    S_BEFORERESIZE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeResize',] }],
    S_LOOPFIX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['loopFix',] }],
    S_BEFORELOOPFIX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeLoopFix',] }],
    S_SLIDERMOVE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['sliderMove',] }],
    S_SLIDECHANGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChange',] }],
    S_SETTRANSLATE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTranslate',] }],
    S_SETTRANSITION: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTransition',] }],
    S_FROMEDGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['fromEdge',] }],
    S_TOEDGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['toEdge',] }],
    S_REACHEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachEnd',] }],
    S_REACHBEGINNING: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachBeginning',] }],
    S_AUTOPLAY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplay',] }],
    S_AUTOPLAYSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStart',] }],
    S_AUTOPLAYSTOP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStop',] }],
    S_IMAGESREADY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['imagesReady',] }],
    S_LAZYIMAGELOAD: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageLoad',] }],
    S_LAZYIMAGEREADY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageReady',] }],
    S_SCROLLDRAGEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragEnd',] }],
    S_SCROLLDRAGMOVE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragMove',] }],
    S_SCROLLDRAGSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragStart',] }],
    S_NAVIGATIONHIDE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['navigationHide',] }],
    S_NAVIGATIONSHOW: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['navigationShow',] }],
    S_PAGINATIONRENDER: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationRender',] }],
    S_PAGINATIONUPDATE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationUpdate',] }],
    S_PAGINATIONHIDE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationHide',] }],
    S_PAGINATIONSHOW: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationShow',] }],
    S_TAP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTap',] }],
    S_CLICK: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperClick',] }],
    S_DOUBLETAP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperDoubleTap',] }],
    S_TOUCHEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchEnd',] }],
    S_TOUCHMOVE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMove',] }],
    S_TOUCHSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchStart',] }],
    S_TOUCHMOVEOPPOSITE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMoveOpposite',] }],
    S_TRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionEnd',] }],
    S_TRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionStart',] }],
    S_SLIDEPREVTRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionEnd',] }],
    S_SLIDEPREVTRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionStart',] }],
    S_SLIDENEXTTRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionEnd',] }],
    S_SLIDENEXTTRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionStart',] }],
    S_SLIDECHANGETRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionEnd',] }],
    S_SLIDECHANGETRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionStart',] }],
    S_OBSERVERUPDATE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['observerUpdate',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwiperDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[swiper]',
                exportAs: 'ngxSwiper'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SWIPER_CONFIG]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], performance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], S_INIT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['init']
        }], S_BEFOREDESTROY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['beforeDestroy']
        }], S_SCROLL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scroll']
        }], S_PROGRESS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['progress']
        }], S_KEYPRESS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['keyPress']
        }], S_RESIZE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['resize']
        }], S_BREAKPOINT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['breakpoint']
        }], S_ZOOMCHANGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['zoomChange']
        }], S_AFTERRESIZE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['afterResize']
        }], S_BEFORERESIZE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['beforeResize']
        }], S_LOOPFIX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['loopFix']
        }], S_BEFORELOOPFIX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['beforeLoopFix']
        }], S_SLIDERMOVE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['sliderMove']
        }], S_SLIDECHANGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideChange']
        }], S_SETTRANSLATE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['setTranslate']
        }], S_SETTRANSITION: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['setTransition']
        }], S_FROMEDGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['fromEdge']
        }], S_TOEDGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['toEdge']
        }], S_REACHEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['reachEnd']
        }], S_REACHBEGINNING: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['reachBeginning']
        }], S_AUTOPLAY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['autoplay']
        }], S_AUTOPLAYSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['autoplayStart']
        }], S_AUTOPLAYSTOP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['autoplayStop']
        }], S_IMAGESREADY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['imagesReady']
        }], S_LAZYIMAGELOAD: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['lazyImageLoad']
        }], S_LAZYIMAGEREADY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['lazyImageReady']
        }], S_SCROLLDRAGEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollDragEnd']
        }], S_SCROLLDRAGMOVE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollDragMove']
        }], S_SCROLLDRAGSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollDragStart']
        }], S_NAVIGATIONHIDE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['navigationHide']
        }], S_NAVIGATIONSHOW: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['navigationShow']
        }], S_PAGINATIONRENDER: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationRender']
        }], S_PAGINATIONUPDATE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationUpdate']
        }], S_PAGINATIONHIDE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationHide']
        }], S_PAGINATIONSHOW: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationShow']
        }], S_TAP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTap']
        }], S_CLICK: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperClick']
        }], S_DOUBLETAP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperDoubleTap']
        }], S_TOUCHEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchEnd']
        }], S_TOUCHMOVE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchMove']
        }], S_TOUCHSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchStart']
        }], S_TOUCHMOVEOPPOSITE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchMoveOpposite']
        }], S_TRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTransitionEnd']
        }], S_TRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTransitionStart']
        }], S_SLIDEPREVTRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slidePrevTransitionEnd']
        }], S_SLIDEPREVTRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slidePrevTransitionStart']
        }], S_SLIDENEXTTRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideNextTransitionEnd']
        }], S_SLIDENEXTTRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideNextTransitionStart']
        }], S_SLIDECHANGETRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideChangeTransitionEnd']
        }], S_SLIDECHANGETRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideChangeTransitionStart']
        }], S_OBSERVERUPDATE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['observerUpdate']
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['swiper']
        }] }); })();

class SwiperComponent {
    constructor(zone, cdRef, platformId, defaults) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.mo = null;
        this.swiperConfig = null;
        this.paginationBackup = null;
        this.paginationConfig = null;
        this.index = null;
        this.disabled = false;
        this.performance = false;
        this.useSwiperClass = true;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_ZOOMCHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AFTERRESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_BEFORELOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_NAVIGATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_NAVIGATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONRENDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_PAGINATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.S_OBSERVERUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isAtLast() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isEnd'];
    }
    get isAtFirst() {
        return (!this.directiveRef || !this.directiveRef.swiper()) ?
            false : this.directiveRef.swiper()['isBeginning'];
    }
    ngAfterViewInit() {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(() => {
            this.updateClasses();
            if (this.swiperSlides && typeof MutationObserver !== 'undefined') {
                this.mo = new MutationObserver(() => {
                    this.updateClasses();
                });
                this.mo.observe(this.swiperSlides.nativeElement, { childList: true });
            }
        });
        window.setTimeout(() => {
            if (this.directiveRef) {
                this.S_INIT.emit();
                this.directiveRef.indexChange = this.indexChange;
                SwiperEventNames.forEach((eventName) => {
                    if (this.directiveRef) {
                        const output = `S_${eventName.replace('swiper', '').toUpperCase()}`;
                        const directiveOutput = output;
                        const componentOutput = output;
                        this.directiveRef[directiveOutput] = this[componentOutput];
                    }
                });
            }
        }, 0);
    }
    ngOnDestroy() {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    }
    getConfig() {
        this.swiperConfig = new SwiperConfig(this.defaults);
        this.swiperConfig.assign(this.config); // Custom configuration
        if (this.swiperSlides && (this.swiperConfig.pagination === true ||
            (this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' &&
                (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') &&
                !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination'))) {
            this.config = this.config || {};
            if (!this.paginationConfig) {
                this.paginationBackup = this.config.pagination;
                this.paginationConfig = {
                    el: '.swiper-pagination',
                    renderBullet: (index, className) => {
                        let children = this.swiperSlides ? Array.from(this.swiperSlides.nativeElement.children) : [];
                        children = children.filter((child) => child.classList.contains('swiper-slide'));
                        let bullet = `<span class="${className} ${className}-middle" index="${index}"></span>`;
                        if (index === 0) {
                            bullet = `<span class="${className} ${className}-first" index="${index}"></span>`;
                        }
                        else if (index === (children.length - 1)) {
                            bullet = `<span class="${className} ${className}-last" index="${index}"></span>`;
                        }
                        return `<span class="swiper-pagination-handle" index="${index}">${bullet}</span>`;
                    }
                };
            }
            if (this.swiperConfig.pagination === true) {
                this.config.pagination = this.paginationConfig;
            }
            else {
                this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
            }
        }
        return this.config;
    }
    updateClasses() {
        if (this.swiperSlides) {
            let updateNeeded = false;
            const children = this.swiperSlides.nativeElement.children;
            for (let i = 0; i < children.length; i++) {
                if (/swiper-.*/.test(children[i].className) === false) {
                    updateNeeded = true;
                    children[i].classList.add('swiper-slide');
                }
            }
            if (updateNeeded && this.directiveRef) {
                this.directiveRef.update();
            }
        }
        this.cdRef.detectChanges();
    }
    onPaginationClick(index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    }
}
SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SWIPER_CONFIG, 8)); };
SwiperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwiperComponent, selectors: [["swiper"]], viewQuery: function SwiperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](SwiperDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.swiperSlides = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    } }, inputs: { index: "index", disabled: "disabled", performance: "performance", useSwiperClass: "useSwiperClass", config: "config" }, outputs: { indexChange: "indexChange", S_INIT: "init", S_BEFOREDESTROY: "beforeDestroy", S_SCROLL: "scroll", S_PROGRESS: "progress", S_KEYPRESS: "keyPress", S_RESIZE: "resize", S_BREAKPOINT: "breakpoint", S_ZOOMCHANGE: "zoomChange", S_AFTERRESIZE: "afterResize", S_BEFORERESIZE: "beforeResize", S_BEFORELOOPFIX: "beforeLoopFix", S_LOOPFIX: "loopFix", S_SLIDERMOVE: "sliderMove", S_SLIDECHANGE: "slideChange", S_SETTRANSLATE: "setTranslate", S_SETTRANSITION: "setTransition", S_FROMEDGE: "fromEdge", S_TOEDGE: "toEdge", S_REACHEND: "reachEnd", S_REACHBEGINNING: "reachBeginning", S_AUTOPLAY: "autoplay", S_AUTOPLAYSTART: "autoplayStart", S_AUTOPLAYSTOP: "autoplayStop", S_IMAGESREADY: "imagesReady", S_LAZYIMAGELOAD: "lazyImageLoad", S_LAZYIMAGEREADY: "lazyImageReady", S_SCROLLDRAGEND: "scrollDragEnd", S_SCROLLDRAGMOVE: "scrollDragMove", S_SCROLLDRAGSTART: "scrollDragStart", S_NAVIGATIONHIDE: "navigationHide", S_NAVIGATIONSHOW: "navigationShow", S_PAGINATIONRENDER: "paginationRender", S_PAGINATIONUPDATE: "paginationUpdate", S_PAGINATIONHIDE: "paginationHide", S_PAGINATIONSHOW: "paginationShow", S_TAP: "swiperTap", S_CLICK: "swiperClick", S_DOUBLETAP: "swiperDoubleTap", S_TOUCHEND: "swiperTouchEnd", S_TOUCHMOVE: "swiperTouchMove", S_TOUCHSTART: "swiperTouchStart", S_TOUCHMOVEOPPOSITE: "swiperTouchMoveOpposite", S_TRANSITIONEND: "swiperTransitionEnd", S_TRANSITIONSTART: "swiperTransitionStart", S_SLIDEPREVTRANSITIONEND: "slidePrevTransitionEnd", S_SLIDEPREVTRANSITIONSTART: "slidePrevTransitionStart", S_SLIDENEXTTRANSITIONEND: "slideNextTransitionEnd", S_SLIDENEXTTRANSITIONSTART: "slideNextTransitionStart", S_SLIDECHANGETRANSITIONEND: "slideChangeTransitionEnd", S_SLIDECHANGETRANSITIONSTART: "slideChangeTransitionStart", S_OBSERVERUPDATE: "observerUpdate" }, exportAs: ["ngxSwiper"], ngContentSelectors: _c1, decls: 9, vars: 14, consts: [[1, "s-wrapper", 3, "swiper", "index", "disabled", "performance"], ["swiper", ""], [1, "swiper-wrapper"], ["swiperSlides", ""], [1, "swiper-scrollbar", 3, "hidden"], [1, "swiper-button-prev", 3, "hidden"], [1, "swiper-button-next", 3, "hidden"], [1, "swiper-pagination", 3, "hidden", "click", "keyup.enter"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwiperComponent_Template_div_click_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); })("keyup.enter", function SwiperComponent_Template_div_keyup_enter_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("swiper", ctx.useSwiperClass)("swiper-container", ctx.useSwiperClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.getConfig())("index", ctx.index)("disabled", ctx.disabled)("performance", ctx.performance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) !== ".swiper-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) !== ".swiper-button-prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isAtFirst || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) !== ".swiper-button-next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isAtLast || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) !== ".swiper-pagination");
    } }, directives: [SwiperDirective], styles: ["swiper[fxflex]{display:flex;flex-direction:inherit;min-height:0;min-width:0}swiper[fxflex]>.swiper.s-wrapper{-webkit-box-flex:1;flex:1 1 auto;min-height:0;min-width:0}swiper>.swiper.s-wrapper{height:100%;width:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{height:100%;max-height:100%;max-width:100%;overflow:auto;width:100%;will-change:transform}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{cursor:pointer;display:inline-block;margin:2px;padding:4px;pointer-events:all;position:relative}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{left:50%;margin-left:-13px;margin-top:0;top:10px;transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{bottom:10px;left:50%;margin-left:-13px;margin-top:0;top:auto;transform:rotate(90deg)}.swiper-button-next[hidden]:after,.swiper-button-prev[hidden]:after{display:none}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{transition:width .25s ease-in-out;width:8px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;transition:height .25s ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}", "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\")}:root{--swiper-theme-color:#007aff}.swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-slide{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(-1*var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important;text-transform:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:#000;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px}button.swiper-pagination-bullet{-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:1}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;left:0;top:0;width:100%}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{-ms-touch-action:none;background:rgba(0,0,0,.1);border-radius:10px;position:relative}.swiper-container-horizontal>.swiper-scrollbar{bottom:3px;height:5px;left:1%;position:absolute;width:98%;z-index:50}.swiper-container-vertical>.swiper-scrollbar{height:98%;position:absolute;right:3px;top:1%;width:5px;z-index:50}.swiper-scrollbar-drag{background:rgba(0,0,0,.5);border-radius:10px;height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{-o-object-fit:contain;max-height:100%;max-width:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}.swiper-container-cube .swiper-cube-shadow{background:#000;bottom:0;filter:blur(50px);height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}"], encapsulation: 2 });
SwiperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SWIPER_CONFIG,] }] }
];
SwiperComponent.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    performance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useSwiperClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    swiperSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['swiperSlides', { static: false },] }],
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [SwiperDirective, { static: false },] }],
    S_INIT: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['init',] }],
    S_BEFOREDESTROY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeDestroy',] }],
    S_SCROLL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] }],
    S_PROGRESS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['progress',] }],
    S_KEYPRESS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['keyPress',] }],
    S_RESIZE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['resize',] }],
    S_BREAKPOINT: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['breakpoint',] }],
    S_ZOOMCHANGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['zoomChange',] }],
    S_AFTERRESIZE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['afterResize',] }],
    S_BEFORERESIZE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeResize',] }],
    S_BEFORELOOPFIX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['beforeLoopFix',] }],
    S_LOOPFIX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['loopFix',] }],
    S_SLIDERMOVE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['sliderMove',] }],
    S_SLIDECHANGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChange',] }],
    S_SETTRANSLATE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTranslate',] }],
    S_SETTRANSITION: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['setTransition',] }],
    S_FROMEDGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['fromEdge',] }],
    S_TOEDGE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['toEdge',] }],
    S_REACHEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachEnd',] }],
    S_REACHBEGINNING: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['reachBeginning',] }],
    S_AUTOPLAY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplay',] }],
    S_AUTOPLAYSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStart',] }],
    S_AUTOPLAYSTOP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['autoplayStop',] }],
    S_IMAGESREADY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['imagesReady',] }],
    S_LAZYIMAGELOAD: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageLoad',] }],
    S_LAZYIMAGEREADY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['lazyImageReady',] }],
    S_SCROLLDRAGEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragEnd',] }],
    S_SCROLLDRAGMOVE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragMove',] }],
    S_SCROLLDRAGSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollDragStart',] }],
    S_NAVIGATIONHIDE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['navigationHide',] }],
    S_NAVIGATIONSHOW: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['navigationShow',] }],
    S_PAGINATIONRENDER: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationRender',] }],
    S_PAGINATIONUPDATE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationUpdate',] }],
    S_PAGINATIONHIDE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationHide',] }],
    S_PAGINATIONSHOW: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['paginationShow',] }],
    S_TAP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTap',] }],
    S_CLICK: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperClick',] }],
    S_DOUBLETAP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperDoubleTap',] }],
    S_TOUCHEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchEnd',] }],
    S_TOUCHMOVE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMove',] }],
    S_TOUCHSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchStart',] }],
    S_TOUCHMOVEOPPOSITE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTouchMoveOpposite',] }],
    S_TRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionEnd',] }],
    S_TRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['swiperTransitionStart',] }],
    S_SLIDEPREVTRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionEnd',] }],
    S_SLIDEPREVTRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slidePrevTransitionStart',] }],
    S_SLIDENEXTTRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionEnd',] }],
    S_SLIDENEXTTRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideNextTransitionStart',] }],
    S_SLIDECHANGETRANSITIONEND: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionEnd',] }],
    S_SLIDECHANGETRANSITIONSTART: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['slideChangeTransitionStart',] }],
    S_OBSERVERUPDATE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['observerUpdate',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwiperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'swiper',
                exportAs: 'ngxSwiper',
                template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\n  <div #swiperSlides class=\"swiper-wrapper\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\n\n  <div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\n  <div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\n\n  <div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: ["swiper[fxflex]{display:flex;flex-direction:inherit;min-height:0;min-width:0}swiper[fxflex]>.swiper.s-wrapper{-webkit-box-flex:1;flex:1 1 auto;min-height:0;min-width:0}swiper>.swiper.s-wrapper{height:100%;width:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{height:100%;max-height:100%;max-width:100%;overflow:auto;width:100%;will-change:transform}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{cursor:pointer;display:inline-block;margin:2px;padding:4px;pointer-events:all;position:relative}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{left:50%;margin-left:-13px;margin-top:0;top:10px;transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{bottom:10px;left:50%;margin-left:-13px;margin-top:0;top:auto;transform:rotate(90deg)}.swiper-button-next[hidden]:after,.swiper-button-prev[hidden]:after{display:none}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{transition:width .25s ease-in-out;width:8px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;transition:height .25s ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}", "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\")}:root{--swiper-theme-color:#007aff}.swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-slide{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(-1*var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important;text-transform:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:#000;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px}button.swiper-pagination-bullet{-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:1}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;left:0;top:0;width:100%}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{-ms-touch-action:none;background:rgba(0,0,0,.1);border-radius:10px;position:relative}.swiper-container-horizontal>.swiper-scrollbar{bottom:3px;height:5px;left:1%;position:absolute;width:98%;z-index:50}.swiper-container-vertical>.swiper-scrollbar{height:98%;position:absolute;right:3px;top:1%;width:5px;z-index:50}.swiper-scrollbar-drag{background:rgba(0,0,0,.5);border-radius:10px;height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{-o-object-fit:contain;max-height:100%;max-width:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}.swiper-container-cube .swiper-cube-shadow{background:#000;bottom:0;filter:blur(50px);height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SWIPER_CONFIG]
            }] }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], performance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useSwiperClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], S_INIT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['init']
        }], S_BEFOREDESTROY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['beforeDestroy']
        }], S_SCROLL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scroll']
        }], S_PROGRESS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['progress']
        }], S_KEYPRESS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['keyPress']
        }], S_RESIZE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['resize']
        }], S_BREAKPOINT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['breakpoint']
        }], S_ZOOMCHANGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['zoomChange']
        }], S_AFTERRESIZE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['afterResize']
        }], S_BEFORERESIZE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['beforeResize']
        }], S_BEFORELOOPFIX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['beforeLoopFix']
        }], S_LOOPFIX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['loopFix']
        }], S_SLIDERMOVE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['sliderMove']
        }], S_SLIDECHANGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideChange']
        }], S_SETTRANSLATE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['setTranslate']
        }], S_SETTRANSITION: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['setTransition']
        }], S_FROMEDGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['fromEdge']
        }], S_TOEDGE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['toEdge']
        }], S_REACHEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['reachEnd']
        }], S_REACHBEGINNING: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['reachBeginning']
        }], S_AUTOPLAY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['autoplay']
        }], S_AUTOPLAYSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['autoplayStart']
        }], S_AUTOPLAYSTOP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['autoplayStop']
        }], S_IMAGESREADY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['imagesReady']
        }], S_LAZYIMAGELOAD: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['lazyImageLoad']
        }], S_LAZYIMAGEREADY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['lazyImageReady']
        }], S_SCROLLDRAGEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollDragEnd']
        }], S_SCROLLDRAGMOVE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollDragMove']
        }], S_SCROLLDRAGSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollDragStart']
        }], S_NAVIGATIONHIDE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['navigationHide']
        }], S_NAVIGATIONSHOW: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['navigationShow']
        }], S_PAGINATIONRENDER: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationRender']
        }], S_PAGINATIONUPDATE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationUpdate']
        }], S_PAGINATIONHIDE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationHide']
        }], S_PAGINATIONSHOW: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['paginationShow']
        }], S_TAP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTap']
        }], S_CLICK: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperClick']
        }], S_DOUBLETAP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperDoubleTap']
        }], S_TOUCHEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchEnd']
        }], S_TOUCHMOVE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchMove']
        }], S_TOUCHSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchStart']
        }], S_TOUCHMOVEOPPOSITE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTouchMoveOpposite']
        }], S_TRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTransitionEnd']
        }], S_TRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['swiperTransitionStart']
        }], S_SLIDEPREVTRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slidePrevTransitionEnd']
        }], S_SLIDEPREVTRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slidePrevTransitionStart']
        }], S_SLIDENEXTTRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideNextTransitionEnd']
        }], S_SLIDENEXTTRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideNextTransitionStart']
        }], S_SLIDECHANGETRANSITIONEND: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideChangeTransitionEnd']
        }], S_SLIDECHANGETRANSITIONSTART: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['slideChangeTransitionStart']
        }], S_OBSERVERUPDATE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['observerUpdate']
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], swiperSlides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['swiperSlides', { static: false }]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [SwiperDirective, { static: false }]
        }] }); })();

class SwiperModule {
}
SwiperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SwiperModule });
SwiperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SwiperModule_Factory(t) { return new (t || SwiperModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SwiperModule, { declarations: function () { return [SwiperComponent, SwiperDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], SwiperComponent, SwiperDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwiperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [SwiperComponent, SwiperDirective],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], SwiperComponent, SwiperDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-swiper-wrapper.js.map

/***/ }),

/***/ "nyfm":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/defaults.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  nested: false,
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "nyww":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _onTouchStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart */ "XGUr");
/* harmony import */ var _onTouchMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove */ "g1JZ");
/* harmony import */ var _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd */ "VjSb");
/* harmony import */ var _onResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize */ "D3OB");
/* harmony import */ var _onClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick */ "l9qo");
/* harmony import */ var _onScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll */ "C7JN");







var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);
  }

  swiper.onClick = _onClick__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  } else {
    swiper.on('observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});

/***/ }),

/***/ "pQlZ":
/*!*****************************************************!*\
  !*** ./src/app/modules/main-view/homepage/index.ts ***!
  \*****************************************************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony import */ var _hero_slider_hero_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-slider/hero-slider.component */ "+3b4");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component */ "ZoiA");
/* harmony import */ var _testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-slider/testimonial-slider.component */ "zLju");



const component = [
    _homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"],
    _hero_slider_hero_slider_component__WEBPACK_IMPORTED_MODULE_0__["HeroSliderComponent"],
    _testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_2__["TestimonialSliderComponent"]
];


/***/ }),

/***/ "rJb+":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/setTransition.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTransition; });
function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "rM28":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateClickedSlide.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateClickedSlide; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "Jq2x");

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "rTk1":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize */ "4g6d");
/* harmony import */ var _updateSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides */ "ej0c");
/* harmony import */ var _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight */ "IoKV");
/* harmony import */ var _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset */ "xwuM");
/* harmony import */ var _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress */ "wJFT");
/* harmony import */ var _updateProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress */ "akMW");
/* harmony import */ var _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses */ "87oN");
/* harmony import */ var _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex */ "Fsl0");
/* harmony import */ var _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide */ "rM28");









/* harmony default export */ __webpack_exports__["default"] = ({
  updateSize: _updateSize__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "s/PY":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/translateTo.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return translateTo; });
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "tC+P":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/mousewheel/mousewheel.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");




function isEventSupported() {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var eventName = 'onwheel';
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event: function event() {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var disableParentSwiper = true;
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    var positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      var newEvent = {
        time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      var _newEvent = {
        time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (_recentWheelEvents.length >= 15) {
            _recentWheelEvents.shift(); // only store the last N events

          }

          var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

          var firstEvent = _recentWheelEvents[0];

          _recentWheelEvents.push(_newEvent);

          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            _recentWheelEvents.splice(0);
          } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

            _recentWheelEvents.splice(0);

            swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
              var snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  animateSlider: function animateSlider(newEvent) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (this.params.mousewheel.thresholdTime && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  },
  releaseScroll: function releaseScroll(newEvent) {
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  },
  enable: function enable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      mousewheel: {
        enabled: false,
        lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }

      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy(swiper) {
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }

      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
});

/***/ }),

/***/ "tQmk":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/history/history.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var History = {
  init: function init() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues(swiper.params.url);
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues(swiper.params.url);
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues(urlOverride) {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));

    if (!location.pathname.includes(key)) {
      value = key + "/" + value;
    }

    var currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value: value
      }, null, value);
    } else {
      window.history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = History.slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      history: _extends({}, History)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
});

/***/ }),

/***/ "vPLx":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionStart.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transitionStart; });
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

/***/ }),

/***/ "w1YM":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideNext.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideNext; });
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "wCrk":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setBreakpoint; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "cKS0");

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;

        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;

    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(params.containerModifierClass + "multirow");

      if (breakpointParams.slidesPerColumnFill === 'column') {
        $el.addClass(params.containerModifierClass + "multirow-column");
      }

      swiper.emitContainerClasses();
    }

    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.params, breakpointParams);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

/***/ }),

/***/ "wJFT":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlidesProgress; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "Jq2x");

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

/***/ }),

/***/ "wvNA":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition */ "rJb+");
/* harmony import */ var _transitionStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart */ "vPLx");
/* harmony import */ var _transitionEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd */ "VyJC");



/* harmony default export */ __webpack_exports__["default"] = ({
  setTransition: _setTransition__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "xW1W":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events-emitter.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-underscore-dangle */
/* harmony default export */ __webpack_exports__["default"] = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ "xwuM":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlidesOffset; });
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "z+Ea":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/loadImage.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadImage; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "/xfr");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "Jq2x");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "zITX":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/thumbs/thumbs.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "cKS0");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "Jq2x");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    if (swiper.thumbs.initialized) return false;
    swiper.thumbs.initialized = true;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    return true;
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      thumbs: _extends({
        swiper: null,
        initialized: false
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(swiper, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy(swiper) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
});

/***/ }),

/***/ "zLju":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main-view/homepage/testimonial-slider/testimonial-slider.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TestimonialSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialSliderComponent", function() { return TestimonialSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_testimonial_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/testimonial-service.service */ "VBoe");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TestimonialSliderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.des);
} }
class TestimonialSliderComponent {
    constructor(TestimonialService) {
        this.config2 = {
            loop: true,
            speed: 1600,
            autoplay: true,
            grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            slidesPerView: 2,
            spaceBetween: 15,
            // centeredSlides: false,
            breakpoints: {
                992: { slidesPerView: 2 },
                280: {
                    slidesPerView: 1
                }
            }
        };
        this.clients = TestimonialService['clients'];
    }
    ngOnInit() {
    }
}
TestimonialSliderComponent.ɵfac = function TestimonialSliderComponent_Factory(t) { return new (t || TestimonialSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_testimonial_service_service__WEBPACK_IMPORTED_MODULE_1__["TestimonialService"])); };
TestimonialSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialSliderComponent, selectors: [["testimonial-slider"]], decls: 3, vars: 2, consts: [[1, "swiper-container"], [1, "swiper-wrapper", 3, "config"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-slide"], [1, "testimonial-single"], [1, "client-img"], [1, "client-img-single"], ["src", "./assets/img/user.png", "alt", "Milan Lee"], [1, "right-icon"], [1, "fas", "fa-quote-right"], [1, "client-name"], [1, "client-comment"]], template: function TestimonialSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestimonialSliderComponent_div_2_Template, 13, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clients);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 1199px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n.testimonial-single[_ngcontent-%COMP%] {\n  background-color: #0c1d37;\n  padding: 26px 20px;\n  border-radius: 15px;\n  transition: 0.3s;\n  margin: 0 5px;\n  height: 265px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n\n@media (max-width: 575px) {\n  .testimonial-single[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 10px 15px;\n  }\n}\n\n.testimonial-single[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px #0e2444;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n@media (max-width: 575px) {\n  .testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img-single[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n@media (max-width: 575px) {\n  .testimonial-single[_ngcontent-%COMP%]   .client-img-single[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img-single[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   .right-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color: rgba(136, 146, 176, 0.3);\n}\n\n@media (max-width: 575px) {\n  .testimonial-single[_ngcontent-%COMP%]   .client-img[_ngcontent-%COMP%]   .right-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family: \"Gilroy\";\n  color: #ccd6f6;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n@media (max-width: 575px) {\n  .testimonial-single[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.testimonial-single[_ngcontent-%COMP%]   .client-comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #8892b0;\n  font-family: \"Muli\";\n  font-weight: 400;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n@media (max-width: 575px) {\n  .testimonial-single[_ngcontent-%COMP%]   .client-comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9kb2NzL3Rlc3RpbW9uaWFsLXNsaWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURNQTtFQUNFLDhCQUFBO0FDSEY7O0FEY0E7RUFDRSw4QkFBQTtBQ1hGOztBRGNBO0VBQ0UseUNBQUE7QUNYRjs7QURjQTtFQUNFLGtDQUFBO0FDWEY7O0FEY0E7RUFDRSxZQUFBO0FDWEY7O0FEY0E7RUFDRSxjQUFBO0FDWEY7O0FEY0E7RUFDRSx5QkFBQTtBQ1hGOztBRGNBO0VBQ0UsZ0NBQUE7QUNYRjs7QURjQTtFQUNFLFdBQUE7QUNYRjs7QURjQTtFQUNFLGNFakRhO0VGa0RiLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkVwRE87RUZxRFAsbUJFbERlO0VGbURmLDZCQUFBO0VBQ0EsY0FBQTtBQ1hGOztBRWxDRTtFSGlDRjtJQWNJLGVBQUE7SUFDQSxrQkFBQTtFQ1RGO0FBQ0Y7O0FEVUU7RUFDRSwwQ0FBQTtBQ1JKOztBRFlBO0VBQ0UsbUJBQUE7QUNURjs7QUUzREU7RUhtRUY7SUFJSSxrQkFBQTtFQ1JGO0FBQ0Y7O0FEVUU7RUFDRSxrQkFBQTtBQ1JKOztBRTdERTtFSG9FQTtJQUlJLGdCQUFBO0VDUEo7QUFDRjs7QUV4RUU7RUgwRUE7SUFRSSxtQkFBQTtFQ05KO0FBQ0Y7O0FEUUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVoR1M7RUZpR1QsMkJBQUE7QUNOTjs7QUVsRkU7RUgrRUU7SUFZSSxhQUFBO0VDTE47QUFDRjs7QURRSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFN0dVO0VGOEdWLG1CRXBHVztFRnFHWCxnQkV4R0c7QURrR1Q7O0FFcEdFO0VIcUdFO0lBUUksZUFBQTtFQ0xOO0FBQ0Y7O0FEVUk7RUFDRSxnQkFBQTtFQUNBLGNFeEhTO0VGeUhULHFCRWxIUztFRm1IVCxnQkV4SEM7RUZ5SEQsZUFBQTtBQ1JOOztBRTFHRTtFSDZHRTtJQVFJLGVBQUE7RUNQTjtBQUNGOztBRS9HRTtFSDZHRTtJQVlJLGVBQUE7RUNOTjtBQUNGOztBRTFIRTtFSG1IRTtJQWdCSSxlQUFBO0VDTE47QUFDRjs7QUR0SUE7RUFDRSxhQUFBO0FDeUlGOztBRGxJQTtFQUNFLDhCQUFBO0FDcUlGOztBRDFIQTtFQUNFLDhCQUFBO0FDNkhGOztBRDFIQTtFQUNFLHlDQUFBO0FDNkhGOztBRDFIQTtFQUNFLGtDQUFBO0FDNkhGOztBRDFIQTtFQUNFLFlBQUE7QUM2SEY7O0FEMUhBO0VBQ0UsY0FBQTtBQzZIRjs7QUQxSEE7RUFDRSx5QkFBQTtBQzZIRjs7QUQxSEE7RUFDRSxnQ0FBQTtBQzZIRjs7QUQxSEE7RUFDRSxXQUFBO0FDNkhGOztBRDFIQTtFQUNFLGNFakRhO0VGa0RiLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkVwRE87RUZxRFAsbUJFbERlO0VGbURmLDZCQUFBO0VBQ0EsY0FBQTtBQzZIRjs7QUUxS0U7RUhpQ0Y7SUFjSSxlQUFBO0lBQ0Esa0JBQUE7RUMrSEY7QUFDRjs7QUQ5SEU7RUFDRSwwQ0FBQTtBQ2dJSjs7QUQ1SEE7RUFDRSxtQkFBQTtBQytIRjs7QUVuTUU7RUhtRUY7SUFJSSxrQkFBQTtFQ2dJRjtBQUNGOztBRDlIRTtFQUNFLGtCQUFBO0FDZ0lKOztBRXJNRTtFSG9FQTtJQUlJLGdCQUFBO0VDaUlKO0FBQ0Y7O0FFaE5FO0VIMEVBO0lBUUksbUJBQUE7RUNrSUo7QUFDRjs7QURoSUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVoR1M7RUZpR1QsMkJBQUE7QUNrSU47O0FFMU5FO0VIK0VFO0lBWUksYUFBQTtFQ21JTjtBQUNGOztBRGhJSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFN0dVO0VGOEdWLG1CRXBHVztFRnFHWCxnQkV4R0c7QUQwT1Q7O0FFNU9FO0VIcUdFO0lBUUksZUFBQTtFQ21JTjtBQUNGOztBRDlISTtFQUNFLGdCQUFBO0VBQ0EsY0V4SFM7RUZ5SFQscUJFbEhTO0VGbUhULGdCRXhIQztFRnlIRCxlQUFBO0FDZ0lOOztBRWxQRTtFSDZHRTtJQVFJLGVBQUE7RUNpSU47QUFDRjs7QUV2UEU7RUg2R0U7SUFZSSxlQUFBO0VDa0lOO0FBQ0Y7O0FFbFFFO0VIbUhFO0lBZ0JJLGVBQUE7RUNtSU47QUFDRjs7QUVyUEU7RUNqQkk7SUFDRSxlQUFBO0VIMFFOO0FBQ0Y7O0FBN1FFO0VBQ0UseUJDUFU7RURRVixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBK1FKOztBRXhSRTtFRkFBO0lBWUksWUFBQTtJQUNBLGtCQUFBO0VBZ1JKO0FBQ0Y7O0FBOVFJO0VBQ0UsZ0NBQUE7QUFnUk47O0FBNVFNO0VBQ0UsbUJBQUE7QUE4UVI7O0FFcFNFO0VGcUJJO0lBTUksa0JBQUE7RUE2UVI7QUFDRjs7QUEzUVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE2UVY7O0FFL1NFO0VGOEJNO0lBT0ksV0FBQTtJQUNBLFlBQUE7RUE4UVY7QUFDRjs7QUE1UVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBOFFaOztBQXpRVTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQTJRWjs7QUU5VEU7RUZpRFE7SUFLSSxlQUFBO0VBNFFaO0FBQ0Y7O0FBdFFRO0VBQ0UscUJDMURLO0VEMkRMLGNDcEVNO0VEcUVOLGdCQzdERTtFRDhERixtQkFBQTtBQXdRVjs7QUV6VUU7RUY2RE07SUFPSSxlQUFBO0VBeVFWO0FBQ0Y7O0FBcFFRO0VBQ0UsZ0JBQUE7RUFDQSxjQ2hGUTtFRGlGUixtQkN4RU87RUR5RVAsZ0JDOUVBO0VEK0VBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBc1FWOztBRXhWRTtFRjBFTTtJQVVJLGVBQUE7RUF3UVY7QUFDRiIsImZpbGUiOiJ0ZXN0aW1vbmlhbC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuJWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJWp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4lanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ldHJhbnNpdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaC0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm14LWF1dG8ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ0biB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiBzaXplKDIpIHNpemUoMy41KTtcclxuICBib3JkZXI6IHNpemUoMC4xKSBzb2xpZCAkcHJpbWFyeS1saW5rO1xyXG4gIGJvcmRlci1yYWRpdXM6IHNpemUoMC41KTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGZvbnQtc2l6ZTogc2l6ZSgxLjYpO1xyXG4gIGZvbnQtd2VpZ2h0OiAkbWVkaXVtO1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiBzaXplKDIpIDA7XHJcbiAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkcHJpbWFyeS1saW5rLCAwLjkpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmLW1pbmkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjgpO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkbWVkaXVtO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMS42KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1iaWcge1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktbGluaztcclxuICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkYm9sZDtcclxuICAgICAgZm9udC1zaXplOiBzaXplKDMuNSk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvdmFyaWFibGUnLFxuJy9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvbWl4aW5zJyxcbicvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L2Z1bmN0aW9ucycsXG4nL3NyYy9hc3NldHMvc3R5bGVzaGVldC9taXNjJyxcbicvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L3Jlc3BvbnNpdmUnO1xuXG4udGVzdGltb25pYWwge1xuICAmLXNpbmdsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQyO1xuICAgIHBhZGRpbmc6IDI2cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBoZWlnaHQ6IHNpemUoMjYuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggbGlnaHRlbigkY29sb3I6ICRiYWNrZ3JvdW5kLCAkYW1vdW50OiA1KTtcbiAgICB9XG5cbiAgICAuY2xpZW50IHtcbiAgICAgICYtaW1nIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgQGV4dGVuZCAlZmxleCxcbiAgICAgICAgJWp1c3RpZnktYmV0d2VlbjtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2luZ2xlIHtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgd2lkdGg6IHNpemUoMy41KTtcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSgzLjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodC1pY29uIHtcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogJHNlY29uZGFyeS1jb2xvciwgJGFscGhhOiAwLjMpO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHNpemUoNC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi1uYW1lIHtcbiAgICAgICAgaDUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICBmb250LXdlaWdodDogJHNlbWktYm9sZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWNvbW1lbnQge1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6ICRyZWd1bGFyO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNTtcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiBzaXplKDEuNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkYmFja2dyb3VuZDogIzBhMTkyZjtcclxuJGJhY2tncm91bmQyOiAjMGMxZDM3O1xyXG4kcHJpbWFyeS1jb2xvcjogI2NjZDZmNjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzg4OTJiMDtcclxuJHByaW1hcnktbGluazogIzY2ZmZkYjtcclxuJGV4dHJhLWNvbG9yOiAjZDE0ZTRlO1xyXG4kYm9sZDogODAwO1xyXG4kcmVndWxhcjogNDAwO1xyXG4kbGlnaHQ6IDMwMDtcclxuJG1lZGl1bTogNTAwO1xyXG4kc2VtaS1ib2xkOiA2MDA7XHJcbiRwcmltYXJ5LWZvbnQ6IFwiR2lscm95XCI7XHJcbiRzZWNvbmRhcnktZm9udDogXCJNdWxpXCI7XHJcbiIsIkBtaXhpbiBtb2JpbGUtc21hbGwge1xuICBAbWVkaWEgKG1heC13aWR0aDogMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1sYW5kc2NhcGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlJyxcbidtaXhpbnMnLFxuJ2Z1bmN0aW9ucycsXG4nbWlzYyc7XG5cbkBpbmNsdWRlIGRlc2t0b3Age1xuICBoZWFkZXIge1xuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'testimonial-slider',
                templateUrl: './testimonial-slider.component.html',
                styleUrls: ['./testimonial-slider.component.scss'],
            }]
    }], function () { return [{ type: _services_testimonial_service_service__WEBPACK_IMPORTED_MODULE_1__["TestimonialService"] }]; }, null); })();


/***/ }),

/***/ "zZCW":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setGrabCursor; });
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ })

}]);
//# sourceMappingURL=main-view-homepage-homepage-module.js.map