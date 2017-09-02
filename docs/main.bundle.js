webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/lazy/lazy.module": [
		"../../../../../src/app/lazy/lazy.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n<router-outlet name=\"modal\"></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.routes = {
            'components': [
                'intro',
                'templates',
                'change-detection'
            ],
            'reactive-forms': [
                'comparison-with-template-forms',
                'example'
            ],
            'routing': [
                'configuration',
                'auxiliary-routes',
                'lazy-load'
            ],
            'tooling': [
                'ng-cli',
                'language-services'
            ]
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(document, 'keyup')
            .pluck('key')
            .filter(function (key) { return key === 'ArrowRight' || key === 'ArrowLeft'; })
            .map(function (key) { return [key, _this.router.url.split('/').filter(function (x) { return x.length > 0; })]; })
            .subscribe(function (_a) {
            var direction = _a[0], location = _a[1];
            var section = _this.routes[(location[0])];
            if (!section) {
                return;
            }
            var currentIndex = section.indexOf(location[1]);
            if (currentIndex < 0) {
                return;
            }
            var newIndex = direction === 'ArrowLeft' ? (currentIndex - 1) : (currentIndex + 1);
            if (newIndex > (section.length - 1) || newIndex < 0) {
                return _this.router.navigateByUrl('/');
            }
            _this.router.navigateByUrl([location[0], section[newIndex]].join('/'));
        });
        this.router.events.map(function (ev) { return ev instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (_) { return document.body.scrollTop = 0; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_list_overview_grid_list_overview_component__ = __webpack_require__("../../../../../src/app/grid-list-overview/grid-list-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_overview_components_overview_component__ = __webpack_require__("../../../../../src/app/components-overview/components-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_overview_helloworld_helloworld_component__ = __webpack_require__("../../../../../src/app/components-overview/helloworld/helloworld.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_overview_intro_intro_component__ = __webpack_require__("../../../../../src/app/components-overview/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_overview_templates_templates_component__ = __webpack_require__("../../../../../src/app/components-overview/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_overview_change_detection_change_detection_component__ = __webpack_require__("../../../../../src/app/components-overview/change-detection/change-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reactive_forms_overview_reactive_forms_overview_component__ = __webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-forms-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reactive_forms_overview_comparison_comparison_component__ = __webpack_require__("../../../../../src/app/reactive-forms-overview/comparison/comparison.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reactive_forms_overview_reactive_example_reactive_example_component__ = __webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-example/reactive-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reactive_forms_overview_reactive_example_form_service_service__ = __webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-example/form-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reactive_forms_overview_reactive_example_fake_api_service__ = __webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-example/fake-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__router_overview_router_overview_component__ = __webpack_require__("../../../../../src/app/router-overview/router-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__router_overview_router_configuration_router_configuration_component__ = __webpack_require__("../../../../../src/app/router-overview/router-configuration/router-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__router_overview_auxiliary_routes_auxiliary_routes_component__ = __webpack_require__("../../../../../src/app/router-overview/auxiliary-routes/auxiliary-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__router_overview_auxiliary_routes_my_modal_my_modal_component__ = __webpack_require__("../../../../../src/app/router-overview/auxiliary-routes/my-modal/my-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tooling_overview_tooling_overview_component__ = __webpack_require__("../../../../../src/app/tooling-overview/tooling-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tooling_overview_ng_cli_ng_cli_component__ = __webpack_require__("../../../../../src/app/tooling-overview/ng-cli/ng-cli.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tooling_overview_language_services_language_services_component__ = __webpack_require__("../../../../../src/app/tooling-overview/language-services/language-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tooling_overview_language_services_example_gif_example_gif_component__ = __webpack_require__("../../../../../src/app/tooling-overview/language-services/example-gif/example-gif.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_overview_templates_property_binding_property_binding_component__ = __webpack_require__("../../../../../src/app/components-overview/templates/property-binding/property-binding.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: 'modal', outlet: 'modal', component: __WEBPACK_IMPORTED_MODULE_24__router_overview_auxiliary_routes_my_modal_my_modal_component__["a" /* MyModalComponent */] },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__grid_list_overview_grid_list_overview_component__["a" /* GridListOverviewComponent */],
        pathMatch: 'full',
    },
    {
        path: 'components',
        component: __WEBPACK_IMPORTED_MODULE_11__components_overview_components_overview_component__["a" /* ComponentsOverviewComponent */],
        children: [
            { path: 'intro', component: __WEBPACK_IMPORTED_MODULE_13__components_overview_intro_intro_component__["a" /* IntroComponent */] },
            { path: 'templates', component: __WEBPACK_IMPORTED_MODULE_14__components_overview_templates_templates_component__["a" /* TemplatesComponent */] },
            { path: 'change-detection', component: __WEBPACK_IMPORTED_MODULE_15__components_overview_change_detection_change_detection_component__["a" /* ChangeDetectionComponent */] }
        ]
    },
    {
        path: 'reactive-forms',
        component: __WEBPACK_IMPORTED_MODULE_16__reactive_forms_overview_reactive_forms_overview_component__["a" /* ReactiveFormsOverviewComponent */],
        children: [
            { path: 'comparison-with-template-forms', component: __WEBPACK_IMPORTED_MODULE_17__reactive_forms_overview_comparison_comparison_component__["a" /* ComparisonComponent */] },
            { path: 'example', component: __WEBPACK_IMPORTED_MODULE_18__reactive_forms_overview_reactive_example_reactive_example_component__["a" /* ReactiveExampleComponent */] }
        ]
    },
    {
        path: 'routing',
        component: __WEBPACK_IMPORTED_MODULE_21__router_overview_router_overview_component__["a" /* RouterOverviewComponent */],
        children: [
            { path: 'configuration', component: __WEBPACK_IMPORTED_MODULE_22__router_overview_router_configuration_router_configuration_component__["a" /* RouterConfigurationComponent */] },
            { path: 'auxiliary-routes', component: __WEBPACK_IMPORTED_MODULE_23__router_overview_auxiliary_routes_auxiliary_routes_component__["a" /* AuxiliaryRoutesComponent */] },
            { path: 'lazy-load', loadChildren: 'app/lazy/lazy.module#LazyModule' },
        ]
    },
    {
        path: 'tooling',
        component: __WEBPACK_IMPORTED_MODULE_26__tooling_overview_tooling_overview_component__["a" /* ToolingOverviewComponent */],
        children: [
            { path: 'ng-cli', component: __WEBPACK_IMPORTED_MODULE_27__tooling_overview_ng_cli_ng_cli_component__["a" /* NgCliComponent */] },
            { path: 'language-services', component: __WEBPACK_IMPORTED_MODULE_28__tooling_overview_language_services_language_services_component__["a" /* LanguageServicesComponent */] }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__grid_list_overview_grid_list_overview_component__["a" /* GridListOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_overview_components_overview_component__["a" /* ComponentsOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_overview_helloworld_helloworld_component__["a" /* HelloworldComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_overview_intro_intro_component__["a" /* IntroComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_overview_templates_templates_component__["a" /* TemplatesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_overview_change_detection_change_detection_component__["a" /* ChangeDetectionComponent */],
            __WEBPACK_IMPORTED_MODULE_16__reactive_forms_overview_reactive_forms_overview_component__["a" /* ReactiveFormsOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__reactive_forms_overview_comparison_comparison_component__["a" /* ComparisonComponent */],
            __WEBPACK_IMPORTED_MODULE_18__reactive_forms_overview_reactive_example_reactive_example_component__["a" /* ReactiveExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_21__router_overview_router_overview_component__["a" /* RouterOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__router_overview_router_configuration_router_configuration_component__["a" /* RouterConfigurationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__router_overview_auxiliary_routes_auxiliary_routes_component__["a" /* AuxiliaryRoutesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__router_overview_auxiliary_routes_my_modal_my_modal_component__["a" /* MyModalComponent */],
            __WEBPACK_IMPORTED_MODULE_24__router_overview_auxiliary_routes_my_modal_my_modal_component__["b" /* MyModalDialog */],
            __WEBPACK_IMPORTED_MODULE_26__tooling_overview_tooling_overview_component__["a" /* ToolingOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__tooling_overview_ng_cli_ng_cli_component__["a" /* NgCliComponent */],
            __WEBPACK_IMPORTED_MODULE_28__tooling_overview_language_services_language_services_component__["a" /* LanguageServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_29__tooling_overview_language_services_example_gif_example_gif_component__["a" /* ExampleGifComponent */],
            __WEBPACK_IMPORTED_MODULE_29__tooling_overview_language_services_example_gif_example_gif_component__["b" /* AlsGifComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_overview_templates_property_binding_property_binding_component__["a" /* PropertyBindingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_25__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__reactive_forms_overview_reactive_example_form_service_service__["a" /* FormServiceService */], __WEBPACK_IMPORTED_MODULE_20__reactive_forms_overview_reactive_example_fake_api_service__["a" /* FakeApiService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_24__router_overview_auxiliary_routes_my_modal_my_modal_component__["b" /* MyModalDialog */], __WEBPACK_IMPORTED_MODULE_29__tooling_overview_language_services_example_gif_example_gif_component__["b" /* AlsGifComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components-overview/change-detection/change-detection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components-overview/change-detection/change-detection.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"/components/templates\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Change Detection </h1>\n\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n\n        <li>\n          There is no more <code>$digest cycle</code>. *hoo-rah I hear the crowd cheer*\n        </li>\n\n        <li>\n          Angular runs in a <code>Zone</code>. This is an area of the <code>DOM</code> in which async methods are intercepted and managed by <code>Zone.js</code>.\n        </li>\n\n        <li>\n          This means that change detection is ran only when asynchronous code could have altered our data.\n        </li>\n      </ul>\n    </section>\n\n    <h1 class=\"title\"> > Turn off \"data binding\" (misnomer?)</h1>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"onPush\" language=\"typescript\"></prism-block>\n    </section>\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n\n        <li>\n          One can set the component meta-data such that change detection for this component is only ran <code>OnPush</code>\n        </li>\n\n        <li>\n          This will also effect components further down the component tree.\n        </li>\n\n      </ul>\n    </section>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components-overview/change-detection/change-detection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDetectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangeDetectionComponent = (function () {
    function ChangeDetectionComponent() {
        this.onPush = "\n  @Component({\n    ...\n    changeDetection: ChangeDetectionStrategy.OnPush\n  })\n  ...\n";
    }
    ChangeDetectionComponent.prototype.ngOnInit = function () {
    };
    return ChangeDetectionComponent;
}());
ChangeDetectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-change-detection',
        template: __webpack_require__("../../../../../src/app/components-overview/change-detection/change-detection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components-overview/change-detection/change-detection.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], ChangeDetectionComponent);

//# sourceMappingURL=change-detection.component.js.map

/***/ }),

/***/ "../../../../../src/app/components-overview/components-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsOverviewComponent = (function () {
    function ComponentsOverviewComponent() {
    }
    return ComponentsOverviewComponent;
}());
ComponentsOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-components-overview',
        template: "<router-outlet></router-outlet>",
    })
], ComponentsOverviewComponent);

//# sourceMappingURL=components-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components-overview/helloworld/helloworld.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloworldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelloworldComponent = (function () {
    function HelloworldComponent() {
        this.message = 'world';
    }
    return HelloworldComponent;
}());
HelloworldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-hello-world',
        template: "<span> Hello {{ message }}</span>",
        styles: ['span { color: purple; font-size: larger; font-weight: bolder; border: solid 2px red; padding: 1em; }']
    })
], HelloworldComponent);

//# sourceMappingURL=helloworld.component.js.map

/***/ }),

/***/ "../../../../../src/app/components-overview/intro/intro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section > app-hello-world {\n  margin: 100% 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components-overview/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/components/templates\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Basic Component </h1>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"typescriptCode\" language=\"typescript\"></prism-block>\n      <app-hello-world></app-hello-world>\n      <span style=\"margin-left: 2em;\"> Hello world</span>\n    </section>\n\n\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n\n        <li>\n          <code> @ </code> stuff is a <a href=\"https://www.typescriptlang.org/docs/handbook/decorators.html\" target=\"_blank\"> decorator </a>\n          This applies the meta-data to the component. There are many\n          <a href=\"https://angular.io/api/core/Component#metadata-overview\" target=\"_blank\">optional values.</a>\n        </li>\n\n        <li>\n          Interpolated values do not require namspacing. Compare with Angular 1.x\n          <a href=\"https://toddmotto.com/digging-into-angulars-controller-as-syntax/#controllers-as-classes\" target=\"_blank\">\n            Controller As syntax\n          </a>\n        </li>\n\n        <li>\n          Angular has an optional\n          <a href=\"https://angular.io/api/core/Component#encapsulation\" target=\"_blank\">view encapulation</a>\n          that by default compiles the styles to a css shim. This means that by default styles do not leak outside the\n          component.\n        </li>\n\n      </ul>\n    </section>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components-overview/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = (function () {
    function IntroComponent() {
        this.typescriptCode = "import { Component } from '@angular/core';\n@Component({\n  selector: 'hello-world',\n  template: '<span> Hello {{ message }} </span>',\n  styles: ['span { color: purple; font-size: larger; font-weight: bolder; border: solid 2px red; padding: 1em; }']  \n})\nexport class HelloworldComponent{ message = 'world'; }";
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    return IntroComponent;
}());
IntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-intro',
        template: __webpack_require__("../../../../../src/app/components-overview/intro/intro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components-overview/intro/intro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IntroComponent);

//# sourceMappingURL=intro.component.js.map

/***/ }),

/***/ "../../../../../src/app/components-overview/templates/property-binding/property-binding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components-overview/templates/property-binding/property-binding.component.html":
/***/ (function(module, exports) {

module.exports = "<span>\n  num in child = {{ num }}\n  <button md-button (click)=\"update.emit()\">update</button>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/components-overview/templates/property-binding/property-binding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyBindingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyBindingComponent = (function () {
    function PropertyBindingComponent() {
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    PropertyBindingComponent.prototype.ngOnInit = function () {
        this.num++;
    };
    return PropertyBindingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], PropertyBindingComponent.prototype, "num", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
    __metadata("design:type", Object)
], PropertyBindingComponent.prototype, "update", void 0);
PropertyBindingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-property-binding',
        template: __webpack_require__("../../../../../src/app/components-overview/templates/property-binding/property-binding.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components-overview/templates/property-binding/property-binding.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PropertyBindingComponent);

//# sourceMappingURL=property-binding.component.js.map

/***/ }),

/***/ "../../../../../src/app/components-overview/templates/templates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components-overview/templates/templates.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/components/change-detection\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"/components/intro\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Component Binding </h1>\n    <section class=\"code-block\">\n      <prism-block [code]=\"templateBindings\" language=\"html\"></prism-block>\n    </section>\n    <section class=\"code-block\">\n      <prism-block [code]=\"componentBindings\" language=\"typescript\"></prism-block>\n    </section>\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n        <li>\n          attributes wrapped in <code> [] </code> denote property bindings while those wrapped in <code> () </code>  represent event bindings.\n        </li>\n      </ul>\n    </section>\n\n    <h1 class=\"title\"> > Directives </h1>\n    <section class=\"code-block\">\n      <prism-block [code]=\"directives\" language=\"html\"></prism-block>\n    </section>\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n        <li>\n          directives marked with <code> * </code> are called structural directives and will make changes to the <code> DOM </code>\n        </li>\n\n        <li>\n          <code> * </code> desugars (at some level) to an HTML5 template.\n        </li>\n\n        <li>\n          directives without this prefix are called attribute directives and are used to change the appearance or behavior of a  <code> DOM </code>  element.\n        </li>\n\n      </ul>\n    </section>\n\n    <h1 class=\"title\"> > Pipes </h1>\n    <section class=\"code-block\">\n      <prism-block [code]=\"pipes\" language=\"html\"></prism-block>\n    </section>\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n\n        <li>\n          The <code>|</code> operator feeds input through a pipe. Analogous to AngularJS filter.\n        </li>\n\n        <li>\n          The <code> async pipe </code> will resolve a promise or manage an Observable such that the value is available\n          in the template.\n        </li>\n\n        <li>\n          <code> ng-template </code>is a wrapper around native <code>DOM</code> template. The <code># attribute</code>  is akin to an <code>id</code>.\n        </li>\n\n      </ul>\n    </section>\n\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components-overview/templates/templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplatesComponent = (function () {
    function TemplatesComponent() {
        this.templateBindings = "\n<!-- parent.component.html -->\n<app-property-binding [num]=\"num\" (update)=\"num = num + 2\"></app-property-binding>";
        this.componentBindings = "\n//property-binding.component.ts\nexport class PropertyBindingComponent {\n  @Input() num: number;\n  @Output() update = new EventEmitter();\n}";
        this.directives = "<my-other-component *ngFor=\"let item of items\" highlight></my-other-component>";
        this.pipes = "<div *ngIf=\"asyncBook$ | async as book; else loading\">\n   Id: {{book.id}}, Name: {{book.name}}\n</div>   \n<ng-template #loading>Loading Data...</ng-template>";
        this.num = 0;
    }
    TemplatesComponent.prototype.ngOnInit = function () {
    };
    return TemplatesComponent;
}());
TemplatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-templates',
        template: __webpack_require__("../../../../../src/app/components-overview/templates/templates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components-overview/templates/templates.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TemplatesComponent);

//# sourceMappingURL=templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/grid-list-overview/grid-list-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-grid-list {\n  width: 75vw;\n  margin: 1vh auto;\n  cursor: pointer;\n}\n\nmd-grid-tile {\n  background-color: whitesmoke;\n  border: solid lightgrey 3px;\n}\n\nmd-grid-tile:hover {\n  background-color: lightgreen;\n}\n\n.material-icons {\n  font-size: 96px;\n  color: darkslategrey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grid-list-overview/grid-list-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <md-grid-tile (click)=\"router.navigateByUrl('/components/intro')\" mdTooltip=\"Components\" mdTooltipPosition=\"left\">\n\n    <i class=\"material-icons\">extension</i>\n\n  </md-grid-tile>\n  <md-grid-tile\n    (click)=\"router.navigateByUrl('/reactive-forms/comparison-with-template-forms')\"\n    mdTooltip=\"Reactive Forms\"\n    mdTooltipPosition=\"right\">\n\n    <i class=\"material-icons\">dashboard</i>\n\n  </md-grid-tile>\n  <md-grid-tile (click)=\"router.navigateByUrl('/routing/configuration')\" mdTooltip=\"Router\" mdTooltipPosition=\"left\">\n\n    <i class=\"material-icons\">repeat</i>\n\n  </md-grid-tile>\n  <md-grid-tile (click)=\"router.navigateByUrl('/tooling/ng-cli')\" mdTooltip=\"Tooling\" mdTooltipPosition=\"right\">\n\n    <i class=\"material-icons\">build</i>\n\n  </md-grid-tile>\n</md-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/grid-list-overview/grid-list-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridListOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridListOverviewComponent = (function () {
    function GridListOverviewComponent(router) {
        this.router = router;
    }
    return GridListOverviewComponent;
}());
GridListOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-grid-list-overview',
        template: __webpack_require__("../../../../../src/app/grid-list-overview/grid-list-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grid-list-overview/grid-list-overview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], GridListOverviewComponent);

var _a;
//# sourceMappingURL=grid-list-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/comparison/comparison.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bullet-points > form {\n  width: 50%;\n  margin: 2em auto;\n  padding: 1em;\n  background-color: lightskyblue;\n}\n\nsection > p {\n  line-height: 180%;\n  font-size: 180%;\n}\n\nform {\n  line-height: 180%;\n  font-size: 180%;\n}\n\nform > button {\n  line-height: 100%;\n  font-size: 100%;\n}\n\nform > * > input {\n  line-height: 100%;\n  font-size: 100%;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/comparison/comparison.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/reactive-forms/example\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Template Driven Form </h1>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"templateExample\" language=\"html\"></prism-block>\n    </section>\n    <section class=\"code-block\">\n      <prism-block [code]=\"templateComponent\" language=\"typescript\"></prism-block>\n    </section>\n\n    <section class=\"bullet-points\">\n      <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n        <span> <input placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\" required /> </span>\n        <span> <input placeholder=\"age\" [(ngModel)]=\"age\" name=\"age\" pattern=\"[0-9]+\" required /> </span>\n        <button type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n      </form>\n      <ul title=\"overview points\">\n        <li>\n          This is a <code>template</code> driven form`. Very similar to an AngularJS form.\n        </li>\n\n        <li>\n          How to get a reference to the form variable? How to manipulate programmatically?\n        </li>\n      </ul>\n    </section>\n\n    <h1 class=\"title\"> > Reactive Form </h1>\n    <section class=\"code-block\">\n      <prism-block [code]=\"reactiveExample\" language=\"html\"></prism-block>\n    </section>\n    <section class=\"code-block\">\n      <prism-block [code]=\"reactiveComponent\" language=\"typescript\"></prism-block>\n    </section>\n    <section class=\"bullet-points\">\n      <p> Async validation ran: {{count}} times.</p>\n      <form class=\"reactive-form\" [ngStyle]=\"{'border': myForm.valid ? 'green dashed 5px' : 'red solid 5px'}\"  novalidate (ngSubmit)=\"submit(myForm)\" [formGroup]=\"myForm\">\n        <span> <input placeholder=\"name\" formControlName=\"name\"/> </span>\n        <span> <input placeholder=\"age\" formControlName=\"age\"/> </span>\n        <button type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\n      </form>\n      <ul title=\"overview points\">\n\n        <li>\n          Data structure so you can reference <code>FormGroup</code> as a property.\n        </li>\n\n        <li>\n          <code>FormGroup#valueChanges</code> exposes an <code>Observable</code>.\n        </li>\n\n        <li>\n          Allows for easily modifying validators and Async validation -- Async validator will only run after the sync validators are valid.\n        </li>\n\n      </ul>\n    </section>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/comparison/comparison.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparisonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComparisonComponent = (function () {
    function ComparisonComponent() {
        this.templateExample = "\n<form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n  <span> <input placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\" required/> </span>\n  <span> <input placeholder=\"age\" [(ngModel)]=\"age\" name=\"age\" pattern=\"[0-9]+\" required/> </span>\n  <button type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n</form>\n";
        this.templateComponent = "\nexport class SomeComponent {\n  submit(f) {\n    console.log(f);\n    alert(JSON.stringify(f.value));\n  }\n}\n";
        this.reactiveExample = "\n<div> Async validation ran: {{asyncValidationRun}}</div>\n<form \n    class=\"reactive-form\" \n    [ngStyle]=\"{'border': myForm.valid ? 'blue solid 1px' : 'red solid 1px'}\" \n    novalidate \n    (ngSubmit)=\"submit(myForm)\" \n    [formGroup]=\"myForm\"> \n  <span> <input placeholder=\"name\" formControlName=\"name\"/> </span>\n  <span> <input placeholder=\"age\" formControlName=\"age\"/> </span>\n  <button type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\n</form>\n";
        this.reactiveComponent = "\nmyForm: FormGroup;\ncount = 0;\nngOnInit() {\n  this.myForm = new FormGroup({\n    name: new FormControl('', Validators.required),\n    age: new FormControl('', Validators.compose([Validators.pattern('[0-9]+$'), Validators.required]))\n  }, null, this.validateAsync.bind(this));\n}\nvalidateAsync(c: FormControl) {\n    return new Promise( (resolve, reject) => {\n      const name = c.value.name;\n      const age = c.value.age;\n      const valid = ( name.toLowerCase().trim() === 'john' && age === '23' );\n      this.count++;\n\n      setTimeout( () => {\n        if (valid) {\n          resolve(null);\n        } else {\n          reject({'invalid-name': name});\n        }\n      }, 200);\n\n    });\n  }\n";
        this.count = 0;
    }
    ComparisonComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].pattern('[0-9]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]))
        }, null, this.validateAsync.bind(this));
    };
    ComparisonComponent.prototype.submit = function (f) {
        console.log(f);
        alert(JSON.stringify(f.value));
    };
    ComparisonComponent.prototype.validateAsync = function (c) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var name = c.value.name;
            var age = c.value.age;
            var valid = (name.toLowerCase().trim() === 'john' && age === '23');
            _this.count++;
            setTimeout(function () {
                if (valid) {
                    resolve(null);
                }
                else {
                    reject({ 'invalid-name': name });
                }
            }, 200);
        });
    };
    return ComparisonComponent;
}());
ComparisonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-comparison',
        template: __webpack_require__("../../../../../src/app/reactive-forms-overview/comparison/comparison.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reactive-forms-overview/comparison/comparison.component.css")]
    })
], ComparisonComponent);

//# sourceMappingURL=comparison.component.js.map

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/reactive-example/fake-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FakeApiService = (function () {
    function FakeApiService() {
        this.colorMap = new Map();
        this.manufactureMap = new Map();
        this.colorMap.set('red', [
            { name: 'car one', color: 'red', manufacturer: 'ford' },
            { name: 'car two', color: 'red', manufacturer: 'ford' },
            { name: 'truck three', color: 'red', manufacturer: 'chevrolet' },
        ]);
        this.colorMap.set('black', [
            { name: 'car four', color: 'black', manufacturer: 'honda' },
            { name: 'truck five', color: 'black', manufacturer: 'honda' },
            { name: 'car six', color: 'black', manufacturer: 'ford' },
        ]);
        this.colorMap.set('green', [
            { name: 'car seven', color: 'green', manufacturer: 'hondai' },
            { name: 'truck eight', color: 'green', manufacturer: 'honda' },
            { name: 'car nine', color: 'green', manufacturer: 'chevrolet' },
        ]);
        this.manufactureMap.set('ford', [
            { name: 'car one', color: 'red', manufacturer: 'ford' },
            { name: 'car two', color: 'red', manufacturer: 'ford' },
            { name: 'car six', color: 'black', manufacturer: 'ford' },
        ]);
        this.manufactureMap.set('chevrolet', [
            { name: 'truck three', color: 'red', manufacturer: 'chevrolet' },
            { name: 'car nine', color: 'green', manufacturer: 'chevrolet' },
        ]);
        this.manufactureMap.set('honda', [
            { name: 'car four', color: 'black', manufacturer: 'honda' },
            { name: 'truck five', color: 'black', manufacturer: 'honda' },
            { name: 'truck eight', color: 'green', manufacturer: 'honda' },
        ]);
        this.manufactureMap.set('hondai', [
            { name: 'car seven', color: 'green', manufacturer: 'hondai' },
        ]);
    }
    FakeApiService.prototype.getByManufacturer = function (name) {
        return Promise.resolve(this.manufactureMap.get(name));
    };
    FakeApiService.prototype.getByColor = function (color) {
        return Promise.resolve(this.colorMap.get(color));
    };
    FakeApiService.prototype.getByBoth = function (name, color) {
        var manufacturer = this.manufactureMap.get(name);
        if (!manufacturer)
            return this.resolveValueWithDelay([], 200);
        var items = manufacturer.filter(function (i) { return i.color === color; });
        return this.resolveValueWithDelay(items, 200);
    };
    FakeApiService.prototype.resolveValueWithDelay = function (val, delay) {
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(val); }, delay);
        });
    };
    return FakeApiService;
}());
FakeApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FakeApiService);

//# sourceMappingURL=fake-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/reactive-example/form-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fake_api_service__ = __webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-example/fake-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FormServiceService = FormServiceService_1 = (function () {
    function FormServiceService(fb, api) {
        this.fb = fb;
        this.api = api;
        this.form = fb.group({
            'color': [''],
            'brand': ['']
        }, {
            'validator': FormServiceService_1.validateSync,
            'asyncValidator': this.validateAsync.bind(this)
        });
        this.content$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    FormServiceService.validateSync = function (c) {
        var color = c.get('color').value;
        var brand = c.get('brand').value;
        return (color === '' || brand === '') ? { emptyField: true } : null;
    };
    FormServiceService.prototype.validateAsync = function (c) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(c.value)
            .mergeMap(function (val) { return _this.api.getByBoth(val.brand, val.color); })
            .do(function (content) { return _this.content$.next(content); })
            .map(function (content) { return content.length > 0 ? null : { emptyResponse: true }; });
    };
    return FormServiceService;
}());
FormServiceService = FormServiceService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__fake_api_service__["a" /* FakeApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__fake_api_service__["a" /* FakeApiService */]) === "function" && _b || Object])
], FormServiceService);

var FormServiceService_1, _a, _b;
//# sourceMappingURL=form-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/reactive-example/reactive-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bullet-points > form {\n  width: 50%;\n  margin: 0 auto;\n}\n\n\nsection.example {\n  width: 100%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: x-large;\n  padding: 2em;\n}\n\nmd-option > span {\n  border-left: 5px solid;\n  padding-left: 8px;\n}\n\nmd-select {\n  font-size: x-large;\n  border-left: 10px solid;\n  margin-right: 2em;\n}\n\n.centered {\n  width: 75%;\n  margin: 0 auto;\n}\n\n.spacer {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  width: 100%;\n}\n\nmd-list-item {\n  border-left: black solid 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/reactive-example/reactive-example.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"/reactive-forms/comparison-with-template-forms\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Contrived(?) Reactive Example </h1>\n\n    <section class=\"bullet-points\" [style.padding]=\"'2em 0'\">\n      <section class=\"example\" [formGroup]=\"form\">\n\n        <md-select formControlName=\"color\" placeholder=\"Select Color\" [style.border-left-color]=\"form.value.color\">\n          <md-option *ngFor=\"let option of options\" [value]=\"option\">\n            <span [style.border-left-color]=\"option\"> {{ option }}</span>\n          </md-option>\n        </md-select>\n\n        <md-input-container>\n          <input type=\"text\" placeholder=\"brand\" mdInput formControlName=\"brand\" [mdAutocomplete]=\"auto\">\n        </md-input-container>\n\n        <md-autocomplete #auto=\"mdAutocomplete\">\n          <md-option *ngFor=\"let option of brands | async\" [value]=\"option\">\n            {{ option }}\n          </md-option>\n        </md-autocomplete>\n\n      </section>\n\n      <section class=\"centered\">\n        <md-divider></md-divider>\n\n        <md-list *ngIf=\"!form.errors; else noContent\">\n          <md-list-item *ngFor=\"let item of content$ | async\">\n            <h3 md-line> {{item.name}} </h3>\n            <p md-line> {{item.color}} </p>\n            <p md-line class=\"demo-2\"> {{item.manufacturer}} </p>\n          </md-list-item>\n        </md-list>\n\n        <ng-template #noContent>No Content</ng-template>\n      </section>\n\n    </section>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"componentTemplateDescription\" language=\"html\"></prism-block>\n    </section>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"componentClassDescription\" language=\"typescript\"></prism-block>\n    </section>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"formServiceDescription\" language=\"typescript\"></prism-block>\n    </section>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/reactive-example/reactive-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service_service__ = __webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-example/form-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReactiveExampleComponent = (function () {
    function ReactiveExampleComponent(fs) {
        this.fs = fs;
        this.options = [
            'red',
            'green',
            'black'
        ].sort(function (a, b) { return a.localeCompare(b); });
        this.brandOptions = [
            'ford',
            'honda',
            'hondai',
            'hondiaia',
            'chevrolet'
        ].sort(function (a, b) { return a.localeCompare(b); });
        this.componentClassDescription = "\nconstructor(private fs: FormServiceService ) { }\n\n  ngOnInit() {\n    this.form = this.fs.form;\n\n    this.brands = this.form.get('brand').valueChanges\n      .startWith(null)\n      .map(val => val ? this.filter(val) : this.brandOptions);\n\n    this.content$ = this.fs.content$.asObservable();\n  }\n\n  filter(val): string[] {\n    return this.brandOptions.filter(option => new RegExp('^' + val, 'gi').test(option));\n  }\n}";
        this.formServiceDescription = "\nexport class FormService {\n  form: FormGroup;\n  content$: Subject<any>;\n\n  constructor(private fb: FormBuilder, private api: FakeApiService) {\n\n    this.form = fb.group({\n      'color': [''],\n      'brand': ['']\n    }, {\n      'validator': FormServiceService.validateSync,\n      'asyncValidator': this.validateAsync.bind(this)\n    });\n\n    this.content$ = new Subject();\n  }\n\n  static validateSync(c: FormControl) {\n    const color = c.get('color').value;\n    const brand = c.get('brand').value;\n    return (color === '' || brand === '') ? { emptyField: true } : null;\n  }\n\n  validateAsync(c: FormControl) {\n    return Observable.of(c.value)\n      .mergeMap( val => this.api.getByBoth(val.brand, val.color) )\n      .do( content => this.content$.next(content) )\n      .map( (content: any[]) => content.length > 0 ? null : { emptyResponse: true } );\n  }\n}\n";
        this.componentTemplateDescription = "\n<section class=\"example\" [formGroup]=\"form\">\n\n      <md-select formControlName=\"color\" placeholder=\"Select Color\" [style.border-left-color]=\"form.value.color\">\n        <md-option *ngFor=\"let option of options\" [value]=\"option\">\n          <span [style.border-left-color]=\"option\"> {{ option }}</span>\n        </md-option>\n      </md-select>\n\n      <md-input-container>\n        <input type=\"text\" placeholder=\"brand\" mdInput formControlName=\"brand\" [mdAutocomplete]=\"auto\">\n      </md-input-container>\n\n      <md-autocomplete #auto=\"mdAutocomplete\">\n        <md-option *ngFor=\"let option of brands | async\" [value]=\"option\">\n          {{ option }}\n        </md-option>\n      </md-autocomplete>\n\n</section>\n\n<section class=\"centered\">\n    <md-divider></md-divider>\n\n    <md-list *ngIf=\"!form.errors; else noContent\">\n      <md-list-item *ngFor=\"let item of content$ | async\">\n        <h3 md-line> {{item.name}} </h3>\n        <p md-line> {{item.color}} </p>\n        <p md-line class=\"demo-2\"> {{item.manufacturer}} </p>\n      </md-list-item>\n    </md-list>\n\n    <ng-template #noContent>No Content</ng-template>\n</section>\n";
    }
    ReactiveExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fs.form;
        this.brands = this.form.get('brand').valueChanges
            .startWith(null)
            .map(function (val) { return val ? _this.filter(val) : _this.brandOptions; });
        this.content$ = this.fs.content$.asObservable();
    };
    ReactiveExampleComponent.prototype.filter = function (val) {
        return this.brandOptions.filter(function (option) { return new RegExp('^' + val, 'gi').test(option); });
    };
    return ReactiveExampleComponent;
}());
ReactiveExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-reactive-example',
        template: __webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-example/reactive-example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reactive-forms-overview/reactive-example/reactive-example.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__form_service_service__["a" /* FormServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__form_service_service__["a" /* FormServiceService */]) === "function" && _a || Object])
], ReactiveExampleComponent);

var _a;
//# sourceMappingURL=reactive-example.component.js.map

/***/ }),

/***/ "../../../../../src/app/reactive-forms-overview/reactive-forms-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFormsOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReactiveFormsOverviewComponent = (function () {
    function ReactiveFormsOverviewComponent() {
    }
    ReactiveFormsOverviewComponent.prototype.ngOnInit = function () {
    };
    return ReactiveFormsOverviewComponent;
}());
ReactiveFormsOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-reactive-forms-overview',
        template: "<router-outlet></router-outlet>",
    }),
    __metadata("design:paramtypes", [])
], ReactiveFormsOverviewComponent);

//# sourceMappingURL=reactive-forms-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/router-overview/auxiliary-routes/auxiliary-routes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/router-overview/auxiliary-routes/auxiliary-routes.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/routing/lazy-load\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"/routing/configuration/\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Named Outlets </h1>\n    <p> </p>\n    <section class=\"code-block\">\n      <prism-block [code]=\"auxRoute\" language=\"typescript\"></prism-block>\n    </section>\n    <section class=\"code-block\">\n      <prism-block [code]=\"auxMarkup\" language=\"html\"></prism-block>\n    </section>\n\n\n    <a [routerLink]=\"[ '', {outlets: { modal: 'modal' } } ]\"><button md-button>Open Modal</button></a>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/router-overview/auxiliary-routes/auxiliary-routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuxiliaryRoutesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuxiliaryRoutesComponent = (function () {
    function AuxiliaryRoutesComponent() {
        this.auxRoute = "\nconst appRoutes: Routes = [\n  ...,\n  {\n    path: 'modal',\n    outlet: 'modal',\n    component: MyModalComponent\n  }\n];  \n";
        this.auxMarkup = "\n  <!-- app.component.html -->\n  <router-outlet name=\"modal\"></router-outlet>\n  <!-- router-overview/auxiliary-routes/auxiliary-routes.component.html -->\n  <a [routerLink]=\"[ {outlets: { modal: 'modal' } } ]\"><button md-button>Open Modal</button></a>\n";
    }
    AuxiliaryRoutesComponent.prototype.ngOnInit = function () {
    };
    return AuxiliaryRoutesComponent;
}());
AuxiliaryRoutesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-auxiliary-routes',
        template: __webpack_require__("../../../../../src/app/router-overview/auxiliary-routes/auxiliary-routes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/router-overview/auxiliary-routes/auxiliary-routes.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuxiliaryRoutesComponent);

//# sourceMappingURL=auxiliary-routes.component.js.map

/***/ }),

/***/ "../../../../../src/app/router-overview/auxiliary-routes/my-modal/my-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/router-overview/auxiliary-routes/my-modal/my-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  my-modal works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/router-overview/auxiliary-routes/my-modal/my-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyModalDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable */



var MyModalComponent = (function () {
    function MyModalComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    MyModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.dialog.open(MyModalDialog); });
        this.sub = this.dialog.afterAllClosed.subscribe(function (_) {
            _this.router.navigate(['/', { outlets: { modal: null } }]);
        });
    };
    MyModalComponent.prototype.ngOnDestroy = function () {
        this.dialog.closeAll();
        if (!this.sub.closed) {
            this.sub.unsubscribe();
        }
    };
    return MyModalComponent;
}());
MyModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-my-modal',
        template: __webpack_require__("../../../../../src/app/router-overview/auxiliary-routes/my-modal/my-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/router-overview/auxiliary-routes/my-modal/my-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MyModalComponent);

var MyModalDialog = (function () {
    function MyModalDialog(router) {
        this.router = router;
        this.activeRoute = '';
    }
    MyModalDialog.prototype.ngOnInit = function () {
        this.activeRoute = this.router.routerState.snapshot.url;
    };
    return MyModalDialog;
}());
MyModalDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-my-modal-dialog',
        template: "\n    <h2 md-dialog-title>Hi I'm a modal with a route: {{activeRoute}}</h2>\n    <md-dialog-content>Do you like kittens?</md-dialog-content>\n    <md-dialog-actions>\n      <button md-button md-dialog-close>No, I'm horrible</button>\n      <!-- Can optionally provide a result for the closing dialog. -->\n      <button md-button [md-dialog-close]=\"true\">Yes of course</button>\n    </md-dialog-actions>\n  \n  "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MyModalDialog);

var _a, _b, _c;
//# sourceMappingURL=my-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/router-overview/router-configuration/router-configuration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-output {\n  border: solid 1px lightgrey;\n  padding: 1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  line-height: 180%;\n  font-size: 180%;\n}\n\n.color-output > div {\n  border: solid 2px transparent;\n  padding: 2em;\n}\n\n.active-link {\n  padding: 1px;\n  border: dashed 1px burlywood;\n}\n\n.inactive {\n  text-decoration: none;\n}\n\n.active-link::after {\n  font-family: \"Material Icons\";\n  content: \"\\E885\";\n  color: black;\n}\n\n/* <i class=\"material-icons\">&#xE885;</i> */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/router-overview/router-configuration/router-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/routing/auxiliary-routes/\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n    <h1 class=\"title\"> > Configuration is just an Array of Objects </h1>\n    <section class=\"code-block\">\n      <prism-block [code]=\"routerConfiguration\" language=\"typescript\"></prism-block>\n    </section>\n    Taken from <a href=\"https://angular.io/guide/router#configuration\" target=\"_blank\">here</a>.\n\n\n    <h1 class=\"title\"> > Routes are reactive </h1>\n    <p> what isn't? 'namsayin </p>\n    <p> let's talk about Hot vs Cold Observable while we're here. <a href=\"https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339\" target=\"_blank\">More Info via Ben Lesh</a> </p>\n\n    <ul>\n      <li *ngFor=\"let choice of colors\">\n        <a\n          routerLinkActive=\"active-link\"\n          [routerLink]=\"['./']\"\n          [queryParams]=\"{ color: choice.color}\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">{{ choice.color }} </a>\n      </li>\n      <li>\n        <a routerLinkActive=\"active-link\" [routerLink]=\"['./']\" [routerLinkActiveOptions]=\"{ exact: true }\"> none </a>\n      </li>\n    </ul>\n\n\n    <div class=\"color-output\">\n      <div *ngFor=\"let choice of colors\" [ngStyle]=\"{'border-color': (color | async) === choice.color ? choice.color : null }\"> {{ choice.color }}</div>\n    </div>\n\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\" [style.color]=\"color | async\">\n        <li> The number of executions is: {{ count }}</li>\n        <li> This color is {{ color | async }} </li>\n      </ul>\n    </section>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"componentCode\" language=\"typescript\"></prism-block>\n    </section>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"templateCode\" language=\"html\"></prism-block>\n    </section>\n\n    <hr/>\n\n    <h1 class=\"title\"> > Share the <code>Observable</code> </h1>\n\n    <ul>\n      <li *ngFor=\"let choice of colors\">\n        <a\n          routerLinkActive=\"active-link\"\n          [routerLink]=\"['./']\"\n          [queryParams]=\"{ color: choice.color}\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">{{ choice.color }} </a>\n      </li>\n      <li>\n        <a routerLinkActive=\"active-link\" [routerLink]=\"['./']\" [routerLinkActiveOptions]=\"{ exact: true }\"> none </a>\n      </li>\n    </ul>\n\n\n    <div class=\"color-output\">\n      <div *ngFor=\"let choice of colors\" [ngStyle]=\"{'border-color': (_color | async) === choice.color ? choice.color : null }\"> {{ choice.color }}</div>\n    </div>\n\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\" [style.color]=\"_color | async\">\n        <li> The number of executions is: {{ _count }}</li>\n        <li> This color is {{ _color | async }} </li>\n      </ul>\n    </section>\n\n    <section class=\"code-block\">\n      <prism-block [code]=\"_componentCode\" language=\"typescript\"></prism-block>\n    </section>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/router-overview/router-configuration/router-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterConfigurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable */




var RouterConfigurationComponent = (function () {
    function RouterConfigurationComponent(route) {
        this.route = route;
        this.routerConfiguration = "\nconst appRoutes: Routes = [\n  { path: 'crisis-center', component: CrisisListComponent },\n  { path: 'hero/:id',      component: HeroDetailComponent },\n  {\n    path: 'heroes',\n    component: HeroListComponent,\n    data: { title: 'Heroes List' }\n  },\n  { path: '',\n    redirectTo: '/heroes',\n    pathMatch: 'full'\n  },\n  { path: '**', component: PageNotFoundComponent }\n];\n\n@NgModule({\n  imports: [\n    RouterModule.forRoot(\n      appRoutes,\n      { enableTracing: true } // <-- debugging purposes only\n    )\n    // other imports here\n  ],\n  ...\n})\nexport class AppModule { }\n";
        this.componentCode = "\n...\n  colors = [\n    { color: 'red' },\n    { color: 'green' },\n    { color: 'blue' }\n  ];\n\n  color: Observable<string>;\n  count = 0;\n\n  constructor(private route: ActivatedRoute) { }\n\n  ngOnInit() {\n    this.color = this.route.queryParamMap\n      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')\n      .do(_ => ++this.count);\n  }\n...\n";
        this.templateCode = "\n<ul>\n  <li *ngFor=\"let choice of colors\">\n    <a\n      routerLinkActive=\"active-link\"\n      [routerLink]=\"['./']\"\n      [queryParams]=\"{ color: choice.color}\"\n      [routerLinkActiveOptions]=\"{ exact: true }\">\n      {{ choice.color }} \n    </a>\n  </li>\n  <li>\n    <a routerLinkActive=\"active-link\" [routerLink]=\"['./']\" [routerLinkActiveOptions]=\"{ exact: true }\"> none </a>\n  </li>\n</ul>\n\n<div class=\"color-output\">\n  <div \n    *ngFor=\"let choice of colors\" \n    [ngStyle]=\"{'border-color': (color | async) === choice.color ? choice.color : null }\"> \n    {{ choice.color }}\n  </div>\n</div>\n\n<section class=\"bullet-points\">\n  <ul title=\"overview points\" [style.color]=\"color | async\">\n    <li> The number of executions is: {{ count }}</li>\n    <li> This color is {{ color | async }} </li>\n  </ul>\n</section>\n";
        this._componentCode = "\n  _color: Observable<string>;\n  _count = 0;\n  \n  ngOnInit() {\n    this._color = this.route.queryParamMap\n      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')\n      .do(_ => ++this._count)\n      .share();\n  }\n";
        this.colors = [
            { color: 'red' },
            { color: 'green' },
            { color: 'blue' }
        ];
        this.count = 0;
        this._count = 0;
    }
    RouterConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.color = this.route.queryParamMap
            .map(function (obj) { return obj.params.color ? obj.params.color : 'inherit'; })
            .do(function (_) { return ++_this.count; });
        this._color = this.route.queryParamMap
            .map(function (obj) { return obj.params.color ? obj.params.color : 'inherit'; })
            .do(function (_) { return ++_this._count; })
            .share();
    };
    return RouterConfigurationComponent;
}());
RouterConfigurationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-router-configuration',
        template: __webpack_require__("../../../../../src/app/router-overview/router-configuration/router-configuration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/router-overview/router-configuration/router-configuration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object])
], RouterConfigurationComponent);

var _a;
//# sourceMappingURL=router-configuration.component.js.map

/***/ }),

/***/ "../../../../../src/app/router-overview/router-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterOverviewComponent = (function () {
    function RouterOverviewComponent() {
    }
    RouterOverviewComponent.prototype.ngOnInit = function () {
    };
    return RouterOverviewComponent;
}());
RouterOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-router-overview',
        template: "    \n    <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [])
], RouterOverviewComponent);

//# sourceMappingURL=router-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/arrow-navigation/arrow-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrowNavigationComponent = (function () {
    function ArrowNavigationComponent() {
    }
    return ArrowNavigationComponent;
}());
ArrowNavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-arrow-navigation',
        template: "\n    <span>\n      <ng-content></ng-content>\n    </span>",
        styles: []
    })
], ArrowNavigationComponent);

//# sourceMappingURL=arrow-navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrow_navigation_arrow_navigation_component__ = __webpack_require__("../../../../../src/app/shared/arrow-navigation/arrow-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_prism_src_prism_component__ = __webpack_require__("../../../../angular-prism/src/prism.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__arrow_navigation_arrow_navigation_component__["a" /* ArrowNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_3_angular_prism_src_prism_component__["a" /* PrismComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__arrow_navigation_arrow_navigation_component__["a" /* ArrowNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_3_angular_prism_src_prism_component__["a" /* PrismComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-toolbar {\n  background-color: whitesmoke;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.link-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.link-container > * {\n  margin-left: 0.5em;\n}\n\n.material-icons {\n  margin-top: 0.2em;\n}\n\n.over {\n  color: red;\n}\n\n.under {\n  color: green;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <span class=\"link-container\">\n    <a routerLink=\"\"> <i class=\"material-icons\">home</i> </a>\n    <span> Angular Overview by <a target=\"_blank\" href=\"https://twitter.com/slmyers11\"> Steven Myers </a> </span>\n  </span>\n  <span class=\"example-spacer\"></span>\n  <span [ngClass]=\"time\">Time used &nbsp; {{ elapsedMins }} mins</span>\n</md-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.elapsedTime = 0;
        this.elapsedMins = 0;
        this.elapsedSecs = 0;
        this.time = {
            over: false,
            under: true
        };
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.elapsedTime += 1;
            _this.elapsedMins = Math.floor(_this.elapsedTime / 60);
            _this.elapsedSecs = _this.elapsedTime % 60;
            if (_this.elapsedMins >= 20) {
                _this.time = {
                    over: true,
                    under: false
                };
            }
        }, 1000);
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/tooling-overview/language-services/example-gif/example-gif.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tooling-overview/language-services/example-gif/example-gif.component.html":
/***/ (function(module, exports) {

module.exports = "<img src =\"/assets/angular-language-service-example.gif\" mdTooltip=\"click to expand\" mdTooltipPosition=\"above\"/>\n"

/***/ }),

/***/ "../../../../../src/app/tooling-overview/language-services/example-gif/example-gif.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleGifComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AlsGifComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleGifComponent = (function () {
    function ExampleGifComponent(dialog) {
        this.dialog = dialog;
        this.src = 'assets/angular-language-service-example.gif';
    }
    ExampleGifComponent.prototype.show = function () {
        this.dialog.open(AlsGifComponent, {
            width: '90%',
        });
    };
    ExampleGifComponent.prototype.ngOnInit = function () {
    };
    return ExampleGifComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleGifComponent.prototype, "show", null);
ExampleGifComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-example-gif',
        template: __webpack_require__("../../../../../src/app/tooling-overview/language-services/example-gif/example-gif.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tooling-overview/language-services/example-gif/example-gif.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */]) === "function" && _a || Object])
], ExampleGifComponent);

var AlsGifComponent = (function () {
    function AlsGifComponent() {
    }
    return AlsGifComponent;
}());
AlsGifComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-als-gif',
        template: "<img src =\"/assets/angular-language-service-example.gif\" />",
        styles: [
            "\n      img {\n        width: 100%;\n      }\n    "
        ]
    })
], AlsGifComponent);

var _a;
//# sourceMappingURL=example-gif.component.js.map

/***/ }),

/***/ "../../../../../src/app/tooling-overview/language-services/language-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-example-gif {\n  margin-left: 18%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tooling-overview/language-services/language-services.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"/tooling/ng-cli\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Angular Language Services </h1>\n\n    <app-example-gif></app-example-gif>\n\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n        <li> Angular's language service provides <code> intellisense </code> in your templates </li>\n        <li> It will also show variables that are only used in your templates as used (webstorm). </li>\n      </ul>\n    </section>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/tooling-overview/language-services/language-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageServicesComponent = (function () {
    function LanguageServicesComponent(dialog) {
        this.dialog = dialog;
    }
    LanguageServicesComponent.prototype.ngOnInit = function () {
    };
    return LanguageServicesComponent;
}());
LanguageServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-language-services',
        template: __webpack_require__("../../../../../src/app/tooling-overview/language-services/language-services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tooling-overview/language-services/language-services.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */]) === "function" && _a || Object])
], LanguageServicesComponent);

var _a;
//# sourceMappingURL=language-services.component.js.map

/***/ }),

/***/ "../../../../../src/app/tooling-overview/ng-cli/ng-cli.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tooling-overview/ng-cli/ng-cli.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <section class=\"content\">\n    <app-arrow-navigation id=\"right\"><a routerLink=\"/tooling/language-services\"><i class=\"material-icons\">keyboard_arrow_right</i></a></app-arrow-navigation>\n    <app-arrow-navigation id=\"left\"><a routerLink=\"/\"><i class=\"material-icons\">keyboard_arrow_left</i></a></app-arrow-navigation>\n\n    <h1 class=\"title\"> > Angular <code>CLI</code> (Command Line Interface)</h1>\n\n    <img src=\"assets/cli-logo.svg\" width=\"60%\"/>\n\n    <section class=\"bullet-points\">\n      <ul title=\"overview points\">\n\n        <li>The <a href=\"https://cli.angular.io/\" target=\"_blank\">Angular CLI</a> is an official Angular package that allows for easily bootstraping an application</li>\n        <li>Abstracts away Webpack and allows for \"app ejection\" -- which is short for give me my config and set up my npm scripts</li>\n        <li>Has support for service workers and server side rendering -- undoubtedly each come with associated headaches.</li>\n        <li>Not ideal for creating consumable libraries. Designed more for application development. Look into\n          <a href=\"https://www.npmjs.com/package/ng-packagr\" target=\"_blank\">ng-packagr</a> for more info.</li>\n      </ul>\n    </section>\n\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/tooling-overview/ng-cli/ng-cli.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgCliComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgCliComponent = (function () {
    function NgCliComponent() {
    }
    NgCliComponent.prototype.ngOnInit = function () {
    };
    return NgCliComponent;
}());
NgCliComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-ng-cli',
        template: __webpack_require__("../../../../../src/app/tooling-overview/ng-cli/ng-cli.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tooling-overview/ng-cli/ng-cli.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NgCliComponent);

//# sourceMappingURL=ng-cli.component.js.map

/***/ }),

/***/ "../../../../../src/app/tooling-overview/tooling-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolingOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolingOverviewComponent = (function () {
    function ToolingOverviewComponent() {
    }
    ToolingOverviewComponent.prototype.ngOnInit = function () { };
    return ToolingOverviewComponent;
}());
ToolingOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-tooling-overview',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], ToolingOverviewComponent);

//# sourceMappingURL=tooling-overview.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map