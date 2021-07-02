(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/habib/New Volume/CodeMistry/habib-ng/src/main.ts */"zUnb");


/***/ }),

/***/ "5wG6":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "7vlg");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "OPNc");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "iIrt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class LayoutsModule {
}
LayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"]
                ],
                exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KkAL":
/*!***************************************************************!*\
  !*** ./src/app/modules/main-view/main-view-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MainViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewRoutingModule", function() { return MainViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-view.component */ "XpFX");
/* harmony import */ var _under_build_under_build_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./under-build/under-build.component */ "LoGT");






const routes = [
    {
        path: '',
        component: _main_view_component__WEBPACK_IMPORTED_MODULE_2__["MainViewComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | main-view-homepage-homepage-module */ "main-view-homepage-homepage-module").then(__webpack_require__.bind(null, /*! ../main-view/homepage/homepage.module */ "WpX9")).then(m => m.HomepageModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() | main-view-about-about-module */ "main-view-about-about-module").then(__webpack_require__.bind(null, /*! ../main-view/about/about.module */ "yVK1")).then(m => m.AboutModule)
            },
        ]
    },
    {
        path: 'underbuild',
        component: _under_build_under_build_component__WEBPACK_IMPORTED_MODULE_3__["UnderBuildComponent"],
    }
];
class MainViewRoutingModule {
}
MainViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainViewRoutingModule });
MainViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainViewRoutingModule_Factory(t) { return new (t || MainViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LoGT":
/*!************************************************************************!*\
  !*** ./src/app/modules/main-view/under-build/under-build.component.ts ***!
  \************************************************************************/
/*! exports provided: UnderBuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderBuildComponent", function() { return UnderBuildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UnderBuildComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnderBuildComponent.ɵfac = function UnderBuildComponent_Factory(t) { return new (t || UnderBuildComponent)(); };
UnderBuildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnderBuildComponent, selectors: [["app-under-build"]], decls: 26, vars: 0, consts: [[1, "underbuild"], [1, "container", "h-100"], [1, "row", "h-100", "justify-center", "align-center"], [1, "col-lg-12"], [1, "underbuild-content"], [1, "go-back"], ["href", "#", 1, "primary-btn"], [1, "hero-social"], ["href", "#"], [1, "fab", "fa-twitter"], [1, "fab", "fa-github-alt"], [1, "fab", "fa-linkedin-in"], ["src", "./assets/img/fiverr.svg", "alt", ""]], template: function UnderBuildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page is still building");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Find me on : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".hero-social[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 1199px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n.underbuild[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.underbuild-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.underbuild-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 40px;\n  margin-bottom: 0;\n  color: #ccd6f6;\n  font-family: \"Gilroy\";\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-family: \"Gilroy\";\n  font-weight: 600;\n  column-gap: 1rem;\n}\n\n.hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  border-bottom: 1px solid #8892b0;\n  margin-right: 10px;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 575px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n\n.hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  column-gap: 20px;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-size: 30px;\n  width: 30px;\n  height: 33px;\n  display: block;\n  transform-origin: center;\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n    width: 25px;\n    height: 28px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 20px;\n    height: 22px;\n  }\n}\n\n@media (max-width: 575px) {\n  .hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 17px;\n    width: 17px;\n    height: 19px;\n  }\n}\n\n.hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: bottom;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9kb2NzL3VuZGVyLWJ1aWxkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX3ZhcmlhYmxlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzaGVldC9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzaGVldC9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURNQTtFQUNFLHVCQUFBO0FDSEY7O0FEVUE7RUFDRSw4QkFBQTtBQ1BGOztBRFVBO0VBQ0UseUNBQUE7QUNQRjs7QURVQTtFQUNFLGtDQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxjQUFBO0FDUEY7O0FEVUE7RUFDRSx5QkFBQTtBQ1BGOztBRFVBO0VBQ0UsZ0NBQUE7QUNQRjs7QURVQTtFQUNFLFdBQUE7QUNQRjs7QURVQTtFQUNFLGNFakRhO0VGa0RiLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkVwRE87RUZxRFAsbUJFbERlO0VGbURmLDZCQUFBO0VBQ0EsY0FBQTtBQ1BGOztBRXRDRTtFSGlDRjtJQWNJLGVBQUE7SUFDQSxrQkFBQTtFQ0xGO0FBQ0Y7O0FETUU7RUFDRSwwQ0FBQTtBQ0pKOztBRFFBO0VBQ0UsbUJBQUE7QUNMRjs7QUUvREU7RUhtRUY7SUFJSSxrQkFBQTtFQ0pGO0FBQ0Y7O0FETUU7RUFDRSxrQkFBQTtBQ0pKOztBRWpFRTtFSG9FQTtJQUlJLGdCQUFBO0VDSEo7QUFDRjs7QUU1RUU7RUgw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RS9TRTtFRmFBO0lBWUksZUFBQTtFQTBSSjtBQUNGOztBRTFURTtFRm1CQTtJQWdCSSxlQUFBO0VBMlJKO0FBQ0Y7O0FBeFJFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTBSSjs7QUF2Uk07RUFDRSxjQ3JEVTtFRHNEVixlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUF5UlI7O0FFelVFO0VGMENJO0lBU0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBMFJSO0FBQ0Y7O0FFaFZFO0VGMENJO0lBZUksZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBMlJSO0FBQ0Y7O0FFN1ZFO0VGZ0RJO0lBcUJJLGVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQTRSUjtBQUNGOztBQTFSUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUE0UlYiLCJmaWxlIjoidW5kZXItYnVpbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuJWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJWp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4lanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ldHJhbnNpdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaC0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm14LWF1dG8ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ0biB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiBzaXplKDIpIHNpemUoMy41KTtcclxuICBib3JkZXI6IHNpemUoMC4xKSBzb2xpZCAkcHJpbWFyeS1saW5rO1xyXG4gIGJvcmRlci1yYWRpdXM6IHNpemUoMC41KTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGZvbnQtc2l6ZTogc2l6ZSgxLjYpO1xyXG4gIGZvbnQtd2VpZ2h0OiAkbWVkaXVtO1xyXG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiBzaXplKDIpIDA7XHJcbiAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkcHJpbWFyeS1saW5rLCAwLjkpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmLW1pbmkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjgpO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkbWVkaXVtO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMS42KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1iaWcge1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktbGluaztcclxuICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkYm9sZDtcclxuICAgICAgZm9udC1zaXplOiBzaXplKDMuNSk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L3ZhcmlhYmxlXCIsIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9taXhpbnNcIiwgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L2Z1bmN0aW9uc1wiLFxuICBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvbWlzY1wiLCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvcmVzcG9uc2l2ZVwiO1xuXG4udW5kZXJidWlsZCB7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgJi1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMSB7XG4gICAgICBmb250LXdlaWdodDogJGJvbGQ7XG4gICAgICBmb250LXNpemU6IHNpemUoNCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgfVxuICB9XG59XG5cbi5oZXJvLXNvY2lhbCB7XG4gIEBleHRlbmQgJWZsZXgsICVhbGlnbi1jZW50ZXIsICVqdXN0aWZ5LWNlbnRlcjtcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgZm9udC13ZWlnaHQ6ICRzZW1pLWJvbGQ7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIG1hcmdpbi1yaWdodDogc2l6ZSgxKTtcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICBmb250LXdlaWdodDogJGJvbGQ7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjUpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgZm9udC1zaXplOiBzaXplKDIpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBmb250LXNpemU6IHNpemUoMS43KTtcbiAgICB9XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogc2l6ZSgyKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgIGxpIHtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyLjUpO1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyKTtcbiAgICAgICAgICB3aWR0aDogc2l6ZSgyKTtcbiAgICAgICAgICBoZWlnaHQ6IHNpemUoMi4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiBzaXplKDEuNyk7XG4gICAgICAgICAgd2lkdGg6IHNpemUoMS43KTtcbiAgICAgICAgICBoZWlnaHQ6IHNpemUoMS45KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRiYWNrZ3JvdW5kOiAjMGExOTJmO1xyXG4kYmFja2dyb3VuZDI6ICMwYzFkMzc7XHJcbiRwcmltYXJ5LWNvbG9yOiAjY2NkNmY2O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjODg5MmIwO1xyXG4kcHJpbWFyeS1saW5rOiAjNjZmZmRiO1xyXG4kZXh0cmEtY29sb3I6ICNkMTRlNGU7XHJcbiRib2xkOiA4MDA7XHJcbiRyZWd1bGFyOiA0MDA7XHJcbiRsaWdodDogMzAwO1xyXG4kbWVkaXVtOiA1MDA7XHJcbiRzZW1pLWJvbGQ6IDYwMDtcclxuJHByaW1hcnktZm9udDogXCJHaWxyb3lcIjtcclxuJHNlY29uZGFyeS1mb250OiBcIk11bGlcIjtcclxuIiwiQG1peGluIG1vYmlsZS1zbWFsbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWxhbmRzY2FwZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGUnLFxuJ21peGlucycsXG4nZnVuY3Rpb25zJyxcbidtaXNjJztcblxuQGluY2x1ZGUgZGVza3RvcCB7XG4gIGhlYWRlciB7XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderBuildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-under-build',
                templateUrl: './under-build.component.html',
                styleUrls: ['./under-build.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OPNc":
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function () { return ["about"]; };
const _c4 = function () { return ["underbuild"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    menu() {
        var menu = document.getElementById("menu").classList.toggle('active');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 28, vars: 18, consts: [["id", "menu"], [1, "navbar", "container"], [1, "navbar-brand"], [3, "routerLink"], [1, "transparent-btn", 3, "click"], [1, "fas", "fa-bars"], [1, "navbar-menu"], [3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], [1, "navbar-social"], ["target", "_blank", "href", "https://www.linkedin.com/in/devhabib/"], [1, "fab", "fa-linkedin-in"], ["target", "_blank", "href", "https://github.com/DevHabib"], [1, "fab", "fa-github"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Habib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() { return ctx.menu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%] {\n    background-color: #0c1d37;\n    padding: 10px 0;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  line-height: 3.5;\n  transition: all 0.3s ease-in-out;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    display: block;\n    line-height: 1;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 15px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 10px;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n}\n\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .transparent-btn[_ngcontent-%COMP%] {\n  display: none;\n  background-color: transparent;\n  color: #fff;\n  border: none;\n  outline: none;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .transparent-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .transparent-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 15px;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n    max-height: 0;\n    transition: max-height 0.15s ease-out;\n    overflow: hidden;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  column-gap: 20px;\n  margin-bottom: 0;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    padding-left: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-family: \"Muli\";\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ccd6f6;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-social[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-social[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\nheader.active[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n  border-top: 1px solid #8892b0;\n  margin: 0 -15px;\n  padding: 0 15px;\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi9kb2NzL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRGNBO0VBQ0UsZ0JBQUE7QUNYRjs7QURjQTtFQUNFLDhCQUFBO0FDWEY7O0FEY0E7RUFDRSx5Q0FBQTtBQ1hGOztBRGNBO0VBQ0Usa0NBQUE7QUNYRjs7QURjQTtFQUNFLFlBQUE7QUNYRjs7QURjQTtFQUNFLGNBQUE7QUNYRjs7QURjQTtFQUNFLHlCQUFBO0FDWEY7O0FEY0E7RUFDRSxnQ0FBQTtBQ1hGOztBRGNBO0VBQ0UsV0FBQTtBQ1hGOztBRGNBO0VBQ0UsY0VqRGE7RUZrRGIscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCRXBETztFRnFEUCxtQkVsRGU7RUZtRGYsNkJBQUE7RUFDQSxjQUFBO0FDWEY7O0FFbENFO0VIaUNGO0lBY0ksZUFBQTtJQUNBLGtCQUFBO0VDVEY7QUFDRjs7QURVRTtFQUNFLDBDQUFBO0FDUko7O0FEWUE7RUFDRSxtQkFBQTtBQ1RGOztBRTNERTtFSG1FRjtJQUlJLGtCQUFBO0VDUkY7QUFDRjs7QURVRTtFQUNFLGtCQUFBO0FDUko7O0FFN0RFO0VIb0VBO0lBSUksZ0JBQUE7RUNQSjtBQUNGOztBRXhFRTtFSDBFQTtJQVFJLG1CQUFBO0VDTko7QUFDRjs7QURRSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRWhHUztFRmlHVCwyQkFBQTtBQ05OOztBRWxGRTtFSCtFRTtJQVlJLGFBQUE7RUNMTjtBQUNGOztBRFFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0U3R1U7RUY4R1YsbUJFcEdXO0VGcUdYLGdCRXhHRztBRGtHVDs7QUVwR0U7RUhxR0U7SUFRSSxlQUFBO0VDTE47QUFDRjs7QURVSTtFQUNFLGdCQUFBO0VBQ0EsY0V4SFM7RUZ5SFQscUJFbEhTO0VGbUhULGdCRXhIQztFRnlIRCxlQUFBO0FDUk47O0FFMUdFO0VINkdFO0lBUUksZUFBQTtFQ1BOO0FBQ0Y7O0FFL0dFO0VINkdFO0lBWUksZUFBQTtFQ05OO0FBQ0Y7O0FFMUhFO0VIbUhFO0lBZ0JJLGVBQUE7RUNMTjtBQUNGOztBRXpIRTtFRlZGO0lBRUkseUJDSlU7SURLVixlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtFQXNJRjtBQUNGOztBQXBJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFzSUo7O0FFeklFO0VGREE7SUFPSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUF1SUo7QUFDRjs7QUVwSkU7RUZlRTtJQUVJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG9CQUFBO0VBdUlOO0FBQ0Y7O0FBcklNO0VBQ0UsZUFBQTtFQUNBLGdCQy9CRDtFRGdDQyxjQ2xDTztFRG1DUCxxQkM1Qk87QURtS2Y7O0FBcElNO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBc0lSOztBQXBJUTtFQUNFLGFBQUE7QUFzSVY7O0FFM0tFO0VGNkJJO0lBWUksY0FBQTtFQXNJUjtBQUNGOztBQWxJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBb0lOOztBRXJMRTtFRjhDRTtJQU1JLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLGdCQUFBO0VBcUlOO0FBQ0Y7O0FBbklNO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBb0lSOztBRWpNRTtFRnlESTtJQU9JLGNBQUE7SUFDQSxlQUFBO0VBcUlSO0FBQ0Y7O0FFdk1FO0VGb0VNO0lBRUksZUFBQTtFQXFJVjtBQUNGOztBQW5JVTtFQUNFLGNDcEZNO0VEc0ZOLG1CQzdFSztBRGlOakI7O0FBbElZO0VBQ0UsY0MxRkU7QUQ4TmhCOztBQWpJWTtFQUNFLGNDOUZFO0FEaU9oQjs7QUE1SEk7RUFDRSxlQUFBO0FBOEhOOztBRXpORTtFRjBGRTtJQUlJLHdCQUFBO0VBK0hOO0FBQ0Y7O0FBMUhJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUE0SE4iLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiVhbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiVqdXN0aWZ5LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuJWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuJXRyYW5zaXRpb24ge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5teC1hdXRvIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJpbWFyeS1idG4ge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogc2l6ZSgyKSBzaXplKDMuNSk7XHJcbiAgYm9yZGVyOiBzaXplKDAuMSkgc29saWQgJHByaW1hcnktbGluaztcclxuICBib3JkZXItcmFkaXVzOiBzaXplKDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBmb250LXNpemU6IHNpemUoMS42KTtcclxuICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogc2l6ZSgyKSAwO1xyXG4gIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJHByaW1hcnktbGluaywgMC45KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi1taW5pIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGluaztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBmb250LXNpemU6IHNpemUoMS44KTtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDEuNik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtYmlnIHtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgzLjUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi43KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC92YXJpYWJsZVwiLCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvbWl4aW5zXCIsIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9mdW5jdGlvbnNcIixcbiAgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L21pc2NcIjtcblxuaGVhZGVyIHtcbiAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQyO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBsaW5lLWhlaWdodDogMy41O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG5cbiAgICAmLWJyYW5kIHtcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDMpO1xuICAgICAgICBmb250LXdlaWdodDogJGJvbGQ7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saW5rO1xuICAgICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICAgIH1cblxuICAgICAgLnRyYW5zcGFyZW50LWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbHVtbi1nYXA6IHNpemUoMS41KTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xNXMgZWFzZS1vdXQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgQGV4dGVuZCAlZmxleDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgY29sdW1uLWdhcDogc2l6ZSgyKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgIEBleHRlbmQgJXRyYW5zaXRpb247XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNvY2lhbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIC5uYXZiYXItbWVudSB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgIG1hcmdpbjogMCAtMTVweDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAgIH1cbiAgfVxufVxuIiwiJGJhY2tncm91bmQ6ICMwYTE5MmY7XHJcbiRiYWNrZ3JvdW5kMjogIzBjMWQzNztcclxuJHByaW1hcnktY29sb3I6ICNjY2Q2ZjY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM4ODkyYjA7XHJcbiRwcmltYXJ5LWxpbms6ICM2NmZmZGI7XHJcbiRleHRyYS1jb2xvcjogI2QxNGU0ZTtcclxuJGJvbGQ6IDgwMDtcclxuJHJlZ3VsYXI6IDQwMDtcclxuJGxpZ2h0OiAzMDA7XHJcbiRtZWRpdW06IDUwMDtcclxuJHNlbWktYm9sZDogNjAwO1xyXG4kcHJpbWFyeS1mb250OiBcIkdpbHJveVwiO1xyXG4kc2Vjb25kYXJ5LWZvbnQ6IFwiTXVsaVwiO1xyXG4iLCJAbWl4aW4gbW9iaWxlLXNtYWxsIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.title = 'habib-ng';
    }
    ngAfterViewInit() {
        let loader = this.renderer.selectRootElement('#loader');
        this.renderer.setStyle(loader, 'display', 'none');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "XpFX":
/*!**********************************************************!*\
  !*** ./src/app/modules/main-view/main-view.component.ts ***!
  \**********************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/header/header.component */ "OPNc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ "iIrt");





class MainViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainViewComponent.ɵfac = function MainViewComponent_Factory(t) { return new (t || MainViewComponent)(); };
MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainViewComponent, selectors: [["app-main-view"]], decls: 3, vars: 0, template: function MainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-view',
                templateUrl: './main-view.component.html',
                styleUrls: ['./main-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_main_view_main_view_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/main-view/main-view.module */ "xDf+");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _modules_main_view_main_view_module__WEBPACK_IMPORTED_MODULE_4__["MainViewModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _modules_main_view_main_view_module__WEBPACK_IMPORTED_MODULE_4__["MainViewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _modules_main_view_main_view_module__WEBPACK_IMPORTED_MODULE_4__["MainViewModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iIrt":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 20, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "footer-bottom"], [1, "footer-menu"], ["href", "https://github.com/DevHabib"], ["href", "https://twitter.com/DevHabib"], ["href", "https://www.instagram.com/dev_habib/"], ["href", "https://www.linkedin.com/in/devhabib/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Copyright \u00A9 Habib Rahman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 1199px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #ccd6f6;\n  background-color: #0c1d37;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n@media (max-width: 575px) {\n  .footer-bottom[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n  }\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 400;\n  font-family: \"Muli\";\n  color: #8892b0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 15px;\n  margin-bottom: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  column-gap: 25px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #8892b0;\n  font-weight: 500;\n  font-family: \"Muli\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi9kb2NzL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBRFVBO0VBQ0UsOEJBQUE7QUNQRjs7QURVQTtFQUNFLHlDQUFBO0FDUEY7O0FEVUE7RUFDRSxrQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7QUNQRjs7QURVQTtFQUNFLGdDQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0FDUEY7O0FEVUE7RUFDRSxjRWpEYTtFRmtEYixxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JFcERPO0VGcURQLG1CRWxEZTtFRm1EZiw2QkFBQTtFQUNBLGNBQUE7QUNQRjs7QUV0Q0U7RUhpQ0Y7SUFjSSxlQUFBO0lBQ0Esa0JBQUE7RUNMRjtBQUNGOztBRE1FO0VBQ0UsMENBQUE7QUNKSjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FFL0RFO0VIbUVGO0lBSUksa0JBQUE7RUNKRjtBQUNGOztBRE1FO0VBQ0Usa0JBQUE7QUNKSjs7QUVqRUU7RUhvRUE7SUFJSSxnQkFBQTtFQ0hKO0FBQ0Y7O0FFNUVFO0VIMEVBO0lBUUksbUJBQUE7RUNGSjtBQUNGOztBRElJO0VB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eVJKOztBQXZSSTtFQUNFLGdCQUFBO0FBeVJOOztBQXZSTTtFQUNFLGtCQUFBO0VBQ0EsY0N6Q1U7RUQwQ1YsZ0JDcENDO0VEcUNELG1CQ2xDUztBRDJUakIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiVhbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiVqdXN0aWZ5LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuJWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuJXRyYW5zaXRpb24ge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5teC1hdXRvIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJpbWFyeS1idG4ge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogc2l6ZSgyKSBzaXplKDMuNSk7XHJcbiAgYm9yZGVyOiBzaXplKDAuMSkgc29saWQgJHByaW1hcnktbGluaztcclxuICBib3JkZXItcmFkaXVzOiBzaXplKDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBmb250LXNpemU6IHNpemUoMS42KTtcclxuICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogc2l6ZSgyKSAwO1xyXG4gIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJHByaW1hcnktbGluaywgMC45KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi1taW5pIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGluaztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBmb250LXNpemU6IHNpemUoMS44KTtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDEuNik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtYmlnIHtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgzLjUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi43KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC92YXJpYWJsZVwiLCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvbWl4aW5zXCIsIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9mdW5jdGlvbnNcIixcbiAgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L21pc2NcIiwgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L3Jlc3BvbnNpdmVcIjtcblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQyO1xuXG4gICYtYm90dG9tIHtcbiAgICBAZXh0ZW5kICVmbGV4LCAlanVzdGlmeS1iZXR3ZWVuLCAlYWxpZ24tY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAkcmVndWxhcjtcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiBzaXplKDEuNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIGxpIHtcbiAgICAgIGNvbHVtbi1nYXA6IHNpemUoMi41KTtcblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkbWVkaXVtO1xuICAgICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGJhY2tncm91bmQ6ICMwYTE5MmY7XHJcbiRiYWNrZ3JvdW5kMjogIzBjMWQzNztcclxuJHByaW1hcnktY29sb3I6ICNjY2Q2ZjY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM4ODkyYjA7XHJcbiRwcmltYXJ5LWxpbms6ICM2NmZmZGI7XHJcbiRleHRyYS1jb2xvcjogI2QxNGU0ZTtcclxuJGJvbGQ6IDgwMDtcclxuJHJlZ3VsYXI6IDQwMDtcclxuJGxpZ2h0OiAzMDA7XHJcbiRtZWRpdW06IDUwMDtcclxuJHNlbWktYm9sZDogNjAwO1xyXG4kcHJpbWFyeS1mb250OiBcIkdpbHJveVwiO1xyXG4kc2Vjb25kYXJ5LWZvbnQ6IFwiTXVsaVwiO1xyXG4iLCJAbWl4aW4gbW9iaWxlLXNtYWxsIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZScsXG4nbWl4aW5zJyxcbidmdW5jdGlvbnMnLFxuJ21pc2MnO1xuXG5AaW5jbHVkZSBkZXNrdG9wIHtcbiAgaGVhZGVyIHtcbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../app/modules/main-view/main-view.module */ "xDf+")).then(m => m.MainViewModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xDf+":
/*!*******************************************************!*\
  !*** ./src/app/modules/main-view/main-view.module.ts ***!
  \*******************************************************/
/*! exports provided: MainViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewModule", function() { return MainViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-view-routing.module */ "KkAL");
/* harmony import */ var _main_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-view.component */ "XpFX");
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/layouts/layouts.module */ "5wG6");






class MainViewModule {
}
MainViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainViewModule });
MainViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainViewModule_Factory(t) { return new (t || MainViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainViewRoutingModule"],
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__["LayoutsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainViewModule, { declarations: [_main_view_component__WEBPACK_IMPORTED_MODULE_3__["MainViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainViewRoutingModule"],
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__["LayoutsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_view_component__WEBPACK_IMPORTED_MODULE_3__["MainViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainViewRoutingModule"],
                    src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__["LayoutsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map