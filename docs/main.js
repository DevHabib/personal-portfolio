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
    } }, styles: [".hero-social[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 1199px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n.underbuild[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.underbuild-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.underbuild-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 40px;\n  margin-bottom: 0;\n  color: #ccd6f6;\n  font-family: \"Gilroy\";\n}\n\n.hero-social[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-family: \"Gilroy\";\n  font-weight: 600;\n  column-gap: 1rem;\n}\n\n.hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  border-bottom: 1px solid #8892b0;\n  margin-right: 10px;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 575px) {\n  .hero-social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n\n.hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  column-gap: 20px;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-size: 30px;\n  width: 30px;\n  height: 33px;\n  display: block;\n  transform-origin: center;\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n    width: 25px;\n    height: 28px;\n  }\n}\n\n@media (max-width: 767px) {\n  .hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 20px;\n    height: 22px;\n  }\n}\n\n@media (max-width: 575px) {\n  .hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 17px;\n    width: 17px;\n    height: 19px;\n  }\n}\n\n.hero-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: bottom;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi91bmRlci1idWlsZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXQvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FETUE7RUFDRSx1QkFBQTtBQ0hGOztBRFVBO0VBQ0UsOEJBQUE7QUNQRjs7QURVQTtFQUNFLHlDQUFBO0FDUEY7O0FEVUE7RUFDRSxrQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7QUNQRjs7QURVQTtFQUNFLGdDQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0FDUEY7O0FEVUE7RUFDRSxjRWpEYTtFRmtEYixxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JFcERPO0VGcURQLG1CRWxEZTtFRm1EZiw2QkFBQTtFQUNBLGNBQUE7QUNQRjs7QUV0Q0U7RUhpQ0Y7SUFjSSxlQUFBO0lBQ0Esa0JBQUE7RUNMRjtBQUNGOztBRE1FO0VBQ0UsMENBQUE7QUNKSjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FFL0RFO0VIbUVGO0lBSUksa0JBQUE7RUNKRjtBQUNGOztBRE1FO0VBQ0Usa0JBQUE7QUNKSjs7QUVqRUU7RUhvRUE7SUFJSSxnQkFBQTtFQ0hKO0FBQ0Y7O0FF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QUFDRjs7QUUvU0U7RUZhQTtJQVlJLGVBQUE7RUEwUko7QUFDRjs7QUUxVEU7RUZtQkE7SUFnQkksZUFBQTtFQTJSSjtBQUNGOztBQXhSRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEwUko7O0FBdlJNO0VBQ0UsY0NyRFU7RURzRFYsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBeVJSOztBRXpVRTtFRjBDSTtJQVNJLGVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQTBSUjtBQUNGOztBRWhWRTtFRjBDSTtJQWVJLGVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQTJSUjtBQUNGOztBRTdWRTtFRmdESTtJQXFCSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUE0UlI7QUFDRjs7QUExUlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBNFJWIiwiZmlsZSI6InVuZGVyLWJ1aWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiVhbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiVqdXN0aWZ5LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuJWp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuJXRyYW5zaXRpb24ge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5teC1hdXRvIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJpbWFyeS1idG4ge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogc2l6ZSgyKSBzaXplKDMuNSk7XHJcbiAgYm9yZGVyOiBzaXplKDAuMSkgc29saWQgJHByaW1hcnktbGluaztcclxuICBib3JkZXItcmFkaXVzOiBzaXplKDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBmb250LXNpemU6IHNpemUoMS42KTtcclxuICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogc2l6ZSgyKSAwO1xyXG4gIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJHByaW1hcnktbGluaywgMC45KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi1taW5pIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGluaztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBmb250LXNpemU6IHNpemUoMS44KTtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDEuNik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtYmlnIHtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xyXG4gICAgICBmb250LXdlaWdodDogJGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgzLjUpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi43KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBmb250LXNpemU6IHNpemUoMi4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC92YXJpYWJsZVwiLCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvbWl4aW5zXCIsIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9mdW5jdGlvbnNcIixcbiAgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L21pc2NcIiwgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L3Jlc3BvbnNpdmVcIjtcblxuLnVuZGVyYnVpbGQge1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gICYtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDEge1xuICAgICAgZm9udC13ZWlnaHQ6ICRib2xkO1xuICAgICAgZm9udC1zaXplOiBzaXplKDQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgIH1cbiAgfVxufVxuXG4uaGVyby1zb2NpYWwge1xuICBAZXh0ZW5kICVmbGV4LCAlYWxpZ24tY2VudGVyLCAlanVzdGlmeS1jZW50ZXI7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiAkc2VtaS1ib2xkO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICBtYXJnaW4tcmlnaHQ6IHNpemUoMSk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6ICRib2xkO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICBmb250LXNpemU6IHNpemUoMi41KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogc2l6ZSgyKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgZm9udC1zaXplOiBzaXplKDEuNyk7XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IHNpemUoMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICBsaSB7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzNweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgICBmb250LXNpemU6IHNpemUoMi41KTtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgICBmb250LXNpemU6IHNpemUoMik7XG4gICAgICAgICAgd2lkdGg6IHNpemUoMik7XG4gICAgICAgICAgaGVpZ2h0OiBzaXplKDIuMik7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjcpO1xuICAgICAgICAgIHdpZHRoOiBzaXplKDEuNyk7XG4gICAgICAgICAgaGVpZ2h0OiBzaXplKDEuOSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkYmFja2dyb3VuZDogIzBhMTkyZjtcclxuJGJhY2tncm91bmQyOiAjMGMxZDM3O1xyXG4kcHJpbWFyeS1jb2xvcjogI2NjZDZmNjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzg4OTJiMDtcclxuJHByaW1hcnktbGluazogIzY2ZmZkYjtcclxuJGV4dHJhLWNvbG9yOiAjZDE0ZTRlO1xyXG4kYm9sZDogODAwO1xyXG4kcmVndWxhcjogNDAwO1xyXG4kbGlnaHQ6IDMwMDtcclxuJG1lZGl1bTogNTAwO1xyXG4kc2VtaS1ib2xkOiA2MDA7XHJcbiRwcmltYXJ5LWZvbnQ6IFwiR2lscm95XCI7XHJcbiRzZWNvbmRhcnktZm9udDogXCJNdWxpXCI7XHJcbiIsIkBtaXhpbiBtb2JpbGUtc21hbGwge1xuICBAbWVkaWEgKG1heC13aWR0aDogMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1sYW5kc2NhcGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlJyxcbidtaXhpbnMnLFxuJ2Z1bmN0aW9ucycsXG4nbWlzYyc7XG5cbkBpbmNsdWRlIGRlc2t0b3Age1xuICBoZWFkZXIge1xuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%] {\n    background-color: #0c1d37;\n    padding: 10px 0;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  line-height: 3.5;\n  transition: all 0.3s ease-in-out;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    display: block;\n    line-height: 1;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 15px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 10px;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n}\n\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .transparent-btn[_ngcontent-%COMP%] {\n  display: none;\n  background-color: transparent;\n  color: #fff;\n  border: none;\n  outline: none;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .transparent-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .transparent-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 15px;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n    max-height: 0;\n    transition: max-height 0.15s ease-out;\n    overflow: hidden;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  column-gap: 20px;\n  margin-bottom: 0;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    padding-left: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-family: \"Muli\";\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ccd6f6;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n\nheader[_ngcontent-%COMP%]   .navbar-social[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .navbar-social[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\nheader.active[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n  border-top: 1px solid #8892b0;\n  margin: 0 -15px;\n  padding: 0 15px;\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzaGVldC9fdmFyaWFibGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURjQTtFQUNFLGdCQUFBO0FDWEY7O0FEY0E7RUFDRSw4QkFBQTtBQ1hGOztBRGNBO0VBQ0UseUNBQUE7QUNYRjs7QURjQTtFQUNFLGtDQUFBO0FDWEY7O0FEY0E7RUFDRSxZQUFBO0FDWEY7O0FEY0E7RUFDRSxjQUFBO0FDWEY7O0FEY0E7RUFDRSx5QkFBQTtBQ1hGOztBRGNBO0VBQ0UsZ0NBQUE7QUNYRjs7QURjQTtFQUNFLFdBQUE7QUNYRjs7QURjQTtFQUNFLGNFakRhO0VGa0RiLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkVwRE87RUZxRFAsbUJFbERlO0VGbURmLDZCQUFBO0VBQ0EsY0FBQTtBQ1hGOztBRWxDRTtFSGlDRjtJQWNJLGVBQUE7SUFDQSxrQkFBQTtFQ1RGO0FBQ0Y7O0FEVUU7RUFDRSwwQ0FBQTtBQ1JKOztBRFlBO0VBQ0UsbUJBQUE7QUNURjs7QUUzREU7RUhtRUY7SUFJSSxrQkFBQTtFQ1JGO0FBQ0Y7O0FEVUU7RUFDRSxrQkFBQTtBQ1JKOztBRTdERTtFSG9FQTtJQUlJLGdCQUFBO0VDUEo7QUFDRjs7QUV4RUU7RUgwRUE7SUFRSSxtQkFBQTtFQ05KO0FBQ0Y7O0FEUUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVoR1M7RUZpR1QsMkJBQUE7QUNOTjs7QUVsRkU7RUgrRUU7SUFZSSxhQUFBO0VDTE47QUFDRjs7QURRSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFN0dVO0VGOEdWLG1CRXBHVztFRnFHWCxnQkV4R0c7QURrR1Q7O0FFcEdFO0VIcUdFO0lBUUksZUFBQTtFQ0xOO0FBQ0Y7O0FEVUk7RUFDRSxnQkFBQTtFQUNBLGNFeEhTO0VGeUhULHFCRWxIUztFRm1IVCxnQkV4SEM7RUZ5SEQsZUFBQTtBQ1JOOztBRTFHRTtFSDZHRTtJQVFJLGVBQUE7RUNQTjtBQUNGOztBRS9HRTtFSDZHRTtJQVlJLGVBQUE7RUNOTjtBQUNGOztBRTFIRTtFSG1IRTtJQWdCSSxlQUFBO0VDTE47QUFDRjs7QUV6SEU7RUZWRjtJQUVJLHlCQ0pVO0lES1YsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsTUFBQTtJQUNBLFlBQUE7RUFzSUY7QUFDRjs7QUFwSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBc0lKOztBRXpJRTtFRkRBO0lBT0ksY0FBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBdUlKO0FBQ0Y7O0FFcEpFO0VGZUU7SUFFSSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxvQkFBQTtFQXVJTjtBQUNGOztBQXJJTTtFQUNFLGVBQUE7RUFDQSxnQkMvQkQ7RURnQ0MsY0NsQ087RURtQ1AscUJDNUJPO0FEbUtmOztBQXBJTTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQXNJUjs7QUFwSVE7RUFDRSxhQUFBO0FBc0lWOztBRTNLRTtFRjZCSTtJQVlJLGNBQUE7RUFzSVI7QUFDRjs7QUFsSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW9JTjs7QUVyTEU7RUY4Q0U7SUFNSSxhQUFBO0lBQ0EscUNBQUE7SUFDQSxnQkFBQTtFQXFJTjtBQUNGOztBQW5JTTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQW9JUjs7QUVqTUU7RUZ5REk7SUFPSSxjQUFBO0lBQ0EsZUFBQTtFQXFJUjtBQUNGOztBRXZNRTtFRm9FTTtJQUVJLGVBQUE7RUFxSVY7QUFDRjs7QUFuSVU7RUFDRSxjQ3BGTTtFRHNGTixtQkM3RUs7QURpTmpCOztBQWxJWTtFQUNFLGNDMUZFO0FEOE5oQjs7QUFqSVk7RUFDRSxjQzlGRTtBRGlPaEI7O0FBNUhJO0VBQ0UsZUFBQTtBQThITjs7QUV6TkU7RUYwRkU7SUFJSSx3QkFBQTtFQStITjtBQUNGOztBQTFISTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FBNEhOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVmbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4lYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4lanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiVqdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiV0cmFuc2l0aW9uIHtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oLTEwMCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubXgtYXV0byB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByaW1hcnktYnRuIHtcclxuICBjb2xvcjogJHByaW1hcnktbGluaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IHNpemUoMikgc2l6ZSgzLjUpO1xyXG4gIGJvcmRlcjogc2l6ZSgwLjEpIHNvbGlkICRwcmltYXJ5LWxpbms7XHJcbiAgYm9yZGVyLXJhZGl1czogc2l6ZSgwLjUpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgZm9udC1zaXplOiBzaXplKDEuNik7XHJcbiAgZm9udC13ZWlnaHQ6ICRtZWRpdW07XHJcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IHNpemUoMikgMDtcclxuICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRwcmltYXJ5LWxpbmssIDAuOSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYtbWluaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgZm9udC1zaXplOiBzaXplKDEuOCk7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRtZWRpdW07XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWJpZyB7XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRib2xkO1xyXG4gICAgICBmb250LXNpemU6IHNpemUoMy41KTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDIuNyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDIuMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvdmFyaWFibGVcIiwgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L21peGluc1wiLCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvZnVuY3Rpb25zXCIsXG4gIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9taXNjXCI7XG5cbmhlYWRlciB7XG4gIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kMjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG5cbiAgLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbGluZS1oZWlnaHQ6IDMuNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuXG4gICAgJi1icmFuZCB7XG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgzKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRib2xkO1xuICAgICAgICBjb2xvcjogJHByaW1hcnktbGluaztcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgICB9XG5cbiAgICAgIC50cmFuc3BhcmVudC1idG4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2x1bW4tZ2FwOiBzaXplKDEuNSk7XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMTVzIGVhc2Utb3V0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIEBleHRlbmQgJWZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGNvbHVtbi1nYXA6IHNpemUoMik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBAZXh0ZW5kICV0cmFuc2l0aW9uO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1zb2NpYWwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICAubmF2YmFyLW1lbnUge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBtYXJnaW46IDAgLTE1cHg7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgICB9XG4gIH1cbn1cbiIsIiRiYWNrZ3JvdW5kOiAjMGExOTJmO1xyXG4kYmFja2dyb3VuZDI6ICMwYzFkMzc7XHJcbiRwcmltYXJ5LWNvbG9yOiAjY2NkNmY2O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjODg5MmIwO1xyXG4kcHJpbWFyeS1saW5rOiAjNjZmZmRiO1xyXG4kZXh0cmEtY29sb3I6ICNkMTRlNGU7XHJcbiRib2xkOiA4MDA7XHJcbiRyZWd1bGFyOiA0MDA7XHJcbiRsaWdodDogMzAwO1xyXG4kbWVkaXVtOiA1MDA7XHJcbiRzZW1pLWJvbGQ6IDYwMDtcclxuJHByaW1hcnktZm9udDogXCJHaWxyb3lcIjtcclxuJHNlY29uZGFyeS1mb250OiBcIk11bGlcIjtcclxuIiwiQG1peGluIG1vYmlsZS1zbWFsbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWxhbmRzY2FwZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"] });
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
    } }, styles: [".footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  color: #66ffdb;\n  text-decoration: none;\n  display: inline-block;\n  padding: 20px 35px;\n  border: 1px solid #66ffdb;\n  border-radius: 5px;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Muli\";\n  background-color: transparent;\n  margin: 20px 0;\n}\n\n@media (max-width: 991px) {\n  .primary-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px 20px;\n  }\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(102, 255, 219, 0.1);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n@media (max-width: 575px) {\n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -50px;\n  top: 50%;\n  width: 40px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #66ffdb;\n  transform: translateY(-50%);\n}\n\n@media (max-width: 767px) {\n  .section-title-mini[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 18px;\n  color: #ccd6f6;\n  font-family: \"Muli\";\n  font-weight: 500;\n}\n\n@media (max-width: 575px) {\n  .section-title-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #66ffdb;\n  font-family: \"Gilroy\";\n  font-weight: 800;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n@media (max-width: 575px) {\n  .section-title-big[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 1199px) {\n  header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #ccd6f6;\n  background-color: #0c1d37;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n@media (max-width: 575px) {\n  .footer-bottom[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n  }\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 400;\n  font-family: \"Muli\";\n  color: #8892b0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 15px;\n  margin-bottom: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  column-gap: 25px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #8892b0;\n  font-weight: 500;\n  font-family: \"Muli\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXNjLnNjc3MiLCIuLi8uLi8uLi8uLi9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzaGVldC9fdmFyaWFibGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0L19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURVQTtFQUNFLDhCQUFBO0FDUEY7O0FEVUE7RUFDRSx5Q0FBQTtBQ1BGOztBRFVBO0VBQ0Usa0NBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSxnQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtBQ1BGOztBRFVBO0VBQ0UsY0VqRGE7RUZrRGIscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCRXBETztFRnFEUCxtQkVsRGU7RUZtRGYsNkJBQUE7RUFDQSxjQUFBO0FDUEY7O0FFdENFO0VIaUNGO0lBY0ksZUFBQTtJQUNBLGtCQUFBO0VDTEY7QUFDRjs7QURNRTtFQUNFLDBDQUFBO0FDSko7O0FEUUE7RUFDRSxtQkFBQTtBQ0xGOztBRS9ERTtFSG1FRjtJQUlJLGtCQUFBO0VDSkY7QUFDRjs7QURNRTtFQUNFLGtCQUFBO0FDSko7O0FFakVFO0VIb0VBO0lBSUksZ0JBQUE7RUNISjtBQUNGOztBRTVFRTtFSDBFQTtJQVFJLG1CQUFBO0VDRko7QUFDRjs7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QkFBQTtBQXlSSjs7QUF2Ukk7RUFDRSxnQkFBQTtBQXlSTjs7QUF2Uk07RUFDRSxrQkFBQTtFQUNBLGNDekNVO0VEMENWLGdCQ3BDQztFRHFDRCxtQkNsQ1M7QUQyVGpCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVmbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4lYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4lanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiVqdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiV0cmFuc2l0aW9uIHtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oLTEwMCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubXgtYXV0byB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByaW1hcnktYnRuIHtcclxuICBjb2xvcjogJHByaW1hcnktbGluaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IHNpemUoMikgc2l6ZSgzLjUpO1xyXG4gIGJvcmRlcjogc2l6ZSgwLjEpIHNvbGlkICRwcmltYXJ5LWxpbms7XHJcbiAgYm9yZGVyLXJhZGl1czogc2l6ZSgwLjUpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgZm9udC1zaXplOiBzaXplKDEuNik7XHJcbiAgZm9udC13ZWlnaHQ6ICRtZWRpdW07XHJcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IHNpemUoMikgMDtcclxuICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRwcmltYXJ5LWxpbmssIDAuOSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYtbWluaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpbms7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgZm9udC1zaXplOiBzaXplKDEuOCk7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRtZWRpdW07XHJcblxyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgxLjYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWJpZyB7XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1saW5rO1xyXG4gICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRib2xkO1xyXG4gICAgICBmb250LXNpemU6IHNpemUoMy41KTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc2l6ZSgzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGluY2x1ZGUgbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDIuNyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzaXplKDIuMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvdmFyaWFibGVcIiwgXCIvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0L21peGluc1wiLCBcIi9zcmMvYXNzZXRzL3N0eWxlc2hlZXQvZnVuY3Rpb25zXCIsXG4gIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9taXNjXCIsIFwiL3NyYy9hc3NldHMvc3R5bGVzaGVldC9yZXNwb25zaXZlXCI7XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kMjtcblxuICAmLWJvdHRvbSB7XG4gICAgQGV4dGVuZCAlZmxleCwgJWp1c3RpZnktYmV0d2VlbiwgJWFsaWduLWNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogJHJlZ3VsYXI7XG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogc2l6ZSgxLjUpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICBsaSB7XG4gICAgICBjb2x1bW4tZ2FwOiBzaXplKDIuNSk7XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBmb250LXdlaWdodDogJG1lZGl1bTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRiYWNrZ3JvdW5kOiAjMGExOTJmO1xyXG4kYmFja2dyb3VuZDI6ICMwYzFkMzc7XHJcbiRwcmltYXJ5LWNvbG9yOiAjY2NkNmY2O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjODg5MmIwO1xyXG4kcHJpbWFyeS1saW5rOiAjNjZmZmRiO1xyXG4kZXh0cmEtY29sb3I6ICNkMTRlNGU7XHJcbiRib2xkOiA4MDA7XHJcbiRyZWd1bGFyOiA0MDA7XHJcbiRsaWdodDogMzAwO1xyXG4kbWVkaXVtOiA1MDA7XHJcbiRzZW1pLWJvbGQ6IDYwMDtcclxuJHByaW1hcnktZm9udDogXCJHaWxyb3lcIjtcclxuJHNlY29uZGFyeS1mb250OiBcIk11bGlcIjtcclxuIiwiQG1peGluIG1vYmlsZS1zbWFsbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLWxhbmRzY2FwZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGUnLFxuJ21peGlucycsXG4nZnVuY3Rpb25zJyxcbidtaXNjJztcblxuQGluY2x1ZGUgZGVza3RvcCB7XG4gIGhlYWRlciB7XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
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