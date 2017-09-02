webpackJsonp([0],{

/***/ "../../../../../src/app/lazy/lazy-content/lazy-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy/lazy-content/lazy-content.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"/routing/auxiliary-routes/\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Lazily Loaded Content </h1>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"lazyloadDeclaration\" language=\"typescript\"></prism-block>\n    </section>\n\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n        <li>\n          The <code>loadChildren</code> property takes a relative url to an <code>ngModule</code> with the <code>#moduleName</code> suffix.\n          The compiler will create a bundle a separate bundle...\n        </li>\n      </ul>\n    </section>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/lazy/lazy-content/lazy-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyContentComponent = (function () {
    function LazyContentComponent() {
        this.lazyloadDeclaration = "\n{\n    path: 'lazy-load',\n    loadChildren: 'app/lazy/lazy.module#LazyModule'\n}\n";
    }
    LazyContentComponent.prototype.ngOnInit = function () {
    };
    return LazyContentComponent;
}());
LazyContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-lazy-content',
        template: __webpack_require__("../../../../../src/app/lazy/lazy-content/lazy-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lazy/lazy-content/lazy-content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LazyContentComponent);

//# sourceMappingURL=lazy-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/lazy/lazy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_content_lazy_content_component__ = __webpack_require__("../../../../../src/app/lazy/lazy-content/lazy-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var lazyRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__lazy_content_lazy_content_component__["a" /* LazyContentComponent */] }
];
var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
LazyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(lazyRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__lazy_content_lazy_content_component__["a" /* LazyContentComponent */]
        ]
    })
], LazyModule);

//# sourceMappingURL=lazy.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map