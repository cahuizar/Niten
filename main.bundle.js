webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\" visible-lg visible-md aboutImage\">\n    <img width=\"300\" height=\"650\" src=\"assets/images/cleaningLady.png\" alt=\"cleaning lady\"/>\n  </div>\n  <div class=\"col-xs-12 col-md-offset-1 col-md-6\">\n    <h2>Get To Know Us</h2>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-offset-1 col-md-6\">\n    <p class=\"motto\">\n      <span class=\"typesServices\">\"</span>Our goal is to <span class=\"typesServices\">service</span> you<span class=\"typesServices\">\"</span>\n    </p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-offset-2 col-md-6\">\n  <p class=\"aboutP\">\n    Life is too short to clean your own home! Our team at Niten is here for you.\n    We provide elite cleaning services designed to keep your home sparkling and beautiful so that\n    you can focus on things that matter more, like your family and friends.\n  </p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-offset-2 col-md-6\">\n    <div class=\"estimate\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 \">\n        <h4>Free Consultation</h4>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-offset-1 col-xs-10 \">\n          <a href=\"mailto:contact@nitencleaning.com?subject=Free-Estimate\" class=\"aboutEstLink\">Email us to see what we are all about</a>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-offset-2 col-md-6\">\n  <p class=\"aboutP\">\n    Not only do we provide our customers with clean homes and offices, but we do our part to keep the earth clean, too.\n    We focus on using green cleaning materials that are environmentally responsible or sustainable.\n    We are one of the few cleaning services in America to do this, if not the only company.\n  </p>\n  </div>\n</div>\n<!--\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-offset-1 col-md-6\">\n    <h2 style=\"margin-bottom:50px;\">Still Don't Believe Us?</h2>\n  </div>\n</div>\n<div class=\"cards\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-offset-2 col-md-offset-1 col-xs-8 col-md-3\">\n      <md-card style=\"background-color: #8C489F;\">\n        <md-card-header>\n          <img md-card-avatar src=\"assets/images/female.png\">\n          <md-card-title>Maira Gomez</md-card-title>\n          <md-card-subtitle>Gurnee, IL</md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n          <md-card-title>Amazing</md-card-title>\n          <p>\n            This team is absolutely the best, I cannot recommend them enough.\n            They have been cleaning my house for well over 2 years. I have\n            not had any problems with the cleaning crew. They are completely\n            reliable and flexible, I really wish I would have found their\n            services sooner.\n          </p>\n        </md-card-content>\n      </md-card>\n    </div>\n    <div class=\"col-xs-offset-2 col-md-offset-0 col-xs-8 col-md-3\">\n      <md-card style=\"background-color: #FF665B;\">\n        <md-card-header>\n          <img md-card-avatar src=\"assets/images/male.png\">\n          <md-card-title>Tyler Foster</md-card-title>\n          <md-card-subtitle>Waukegan, IL</md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n          <md-card-title>Recommended</md-card-title>\n          <p>\n            Brenda has been cleaning my home for almost 3 years.\n            I have tried many different cleaning crews, and none can\n            compare to the great service that is provided by this team. Go\n            ahead and try them out for yourself, you will not be disappointed\n            on their work.\n          </p>\n        </md-card-content>\n      </md-card>\n    </div>\n    <div class=\"col-xs-offset-2 col-md-offset-0 col-xs-8 col-md-3\">\n      <md-card style=\"background-color: #4EB29A;\">\n        <md-card-header>\n          <img md-card-avatar src=\"assets/images/female2.png\">\n          <md-card-title>Anna Pence</md-card-title>\n          <md-card-subtitle>Great Lakes, IL</md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n          <md-card-title>Professional</md-card-title>\n          <p>\n            This team have done a great job cleaing my home on a weekly basis.\n            They have been cleaning my home for a little less than 1 year. They\n            have not cancelled at all! Not even when I have asked them to\n            reschedule to a different time. They provide profesional cleaning\n            service.\n          </p>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

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

module.exports = "<app-navigation-menu></app-navigation-menu>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_menu_navigation_menu_component__ = __webpack_require__("../../../../../src/app/navigation-menu/navigation-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navigation_menu_navigation_menu_component__["a" /* NavigationMenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-distributed\">\n\t\t\t<div class=\"footer-left\">\n\t\t\t\t<img width=\"100\" height=\"60\" src=\"assets/images/logo.png\">\n        <br />\n        <p class=\"footer-company-about\">\n\t\t\t\t\t<span class=\"abut_the_company_span\">About the company</span>\n\t\t\t\t\tNiten Cleaning Service provides general and customized cleaning for<br  /> homes\n\t\t\t\t\tand offices. We\tprovide professional\tand<br />  affordable services to our customers.\n\t\t\t\t</p>\n        <br />\n\t\t\t\t<p class=\"footer-company-name\">Niten Cleaning Service © 2016</p>\n\t\t\t</div>\n\t\t\t<div class=\"footer-right\">\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-phone glyphicon glyphicon-earphone \"></i>\n\t\t\t\t\t<p style=\"font-size:15px;\"><span>Brenda Huizar </span><a href=\"tel:1-847-293-9361\"> +1-(847)-293-9361</a></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-envelope glyphicon glyphicon-envelope  \"></i>\n\t\t\t\t\t<p class=\"email_span\"><a style=\"color:white\" href=\"mailto:contact@nitencleaning.com?subject=Free-Estimate\">contact<span style=\"color:white;\">@</span>nitencleaning.com</a></p>\n\n\t\t\t\t</div>\n        <div>\n\t\t\t\t\t<br />\n          <p>\n            Follow us on Facebook: <a target=\"_blank\" href=\"https://www.facebook.com/Niten-cleaning-service-113994459283382/\"><i class=\"fa fa-facebook-square glyphicon\"></i></a>\n          </p>\n        </div>\n\n\t\t\t</div>\n\n\t\t</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-md-offset-1 col-md-5\">\n    <h2 class=\"mainHeader\" style=\"margin-bottom:30px;\">Niten Cleaning Service</h2>\n    <p class=\"companyDesc\">\n      Niten Cleaning Service provides general and customized cleaning for both commercial and residential. We provide professional and affordable services to our customers. We offer services\n      <span class=\"typesServices\">weekly</span>,\n      <span class=\"typesServices\">bi-weekly</span>,\n      <span class=\"typesServices\">once a month</span>,and\n      <span class=\"typesServices\">one time</span> cleaning services. We provide our own supplies and equipement. We also guarantee the highest quality.\n    </p>\n    <p class=\"motto\">\n      <span class=\"typesServices\">\"</span>Our goal is to <span class=\"typesServices\">service</span> you<span class=\"typesServices\">\"</span>\n    </p>\n    <p class=\"companyDesc\">\n      We are currently serving the following cities:\n      <span class=\"typesServices\">Vernon Hills</span>,\n      <span class=\"typesServices\"> Gurnee</span>,\n      <span class=\"typesServices\"> Great Lakes</span>,\n      <span class=\"typesServices\"> Highland Park</span>,\n      <span class=\"typesServices\"> Wauconda</span>,\n      <span class=\"typesServices\"> Lake Forest</span>,\n      <span class=\"typesServices\"> Lake Bluff</span>,\n      <span class=\"typesServices\"> Libertyville</span>, and\n      <span class=\"typesServices\"> Evanston</span>.\n    </p>\n  </div>\n  <div class=\"col-xs-12 col-md-6\">\n    <div style=\"padding-bottom:50px;\" class=\"visible-xs visible-sm\"></div>\n    <div class=\" col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 box\">\n          <div class=\"col-xs-12 contact-title\">\n            <md-toolbar color=\"primary\">Get a Free Estimate</md-toolbar>\n          </div>\n          <div class=\"col-xs-12 col-sm-4 contact-label\">\n            <md-toolbar color=\"primary\">Give us a call: </md-toolbar>\n          </div>\n          <div class=\"col-xs-offset-1 col-xs-11 col-sm-offset-0 col-sm-8 contact-txtbox\">\n            <a class=\"contact-links\" href=\"tel:1-847-293-9361\">+1-(847)-293-9361</a>\n          </div>\n          <div class=\"col-xs-12 col-sm-4 contact-label\">\n            <md-toolbar color=\"primary\">Email us at: </md-toolbar>\n          </div>\n          <div class=\"col-xs-offset-1 col-xs-11 col-sm-offset-0 col-sm-8 contact-txtbox\">\n            <a class=\"contact-links\" href=\"mailto:contact@nitencleaning.com?subject=Free-Estimate\">contact@nitencleaning.com</a>\n          </div>\n    </div>\n  </div>\n</div>\n<div style=\"padding-bottom:80px;\" class=\"\">\n\n</div>\n<!--\n<div style=\"padding-bottom:50px;\" class=\"visible-xs visible-sm\">\n\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-offset-1 col-md-6\">\n    <h2 style=\"margin-bottom:50px;\">What We Offer for Houses:</h2>\n  </div>\n</div>\n<div class=\"row no-gutter\">\n  <div class=\"col-xs-offset-2 col-md-offset-3 col-xs-8 col-md-3\">\n    <md-card style=\"background-color: #8C489F;\" class=\"home\">\n      <md-card-content>\n        <md-card-title class=\"cleanHeader\">Bathrooms</md-card-title>\n        <ul class=\"cleanList\">\n          <li>Bathtubs</li>\n          <li>Showers</li>\n          <li>Vanity</li>\n          <li>Sink</li>\n          <li>Mirrors</li>\n          <li>Floors mopped</li>\n          <li>General dusting</li>\n        </ul>\n      </md-card-content>\n    </md-card>\n  </div>\n  <div class=\"col-xs-offset-2 col-md-offset-0 col-xs-8 col-md-3\">\n    <md-card style=\"background-color: #F5403F;\" class=\"home\">\n      <md-card-content>\n        <md-card-title class=\"cleanHeader\">Kitchen</md-card-title>\n        <ul class=\"cleanList\">\n          <li>Counter tops</li>\n          <li>Outside of cabinets</li>\n          <li>Appliances</li>\n          <li>Vacuum floors </li>\n          <li>Microwave</li>\n          <li>Sinks cleaned</li>\n          <li>General dusting</li>\n        </ul>\n      </md-card-content>\n    </md-card>\n  </div>\n</div>\n<div class=\"row no-gutter\">\n  <div class=\"col-xs-offset-2 col-md-offset-3 col-xs-8 col-md-3\">\n    <md-card style=\"background-color: #FF665B;\">\n      <md-card-content>\n        <md-card-title class=\"cleanHeader\">Living Room</md-card-title>\n        <ul class=\"cleanList\">\n          <li>Picture frames</li>\n          <li>Ceiling fans</li>\n          <li>Floors vacuumed</li>\n          <li>Mopped floors</li>\n          <li>Stairs mopped</li>\n          <li>Flat areas wiped</li>\n        </ul>\n      </md-card-content>\n    </md-card>\n  </div>\n  <div class=\"col-xs-offset-2 col-md-offset-0 col-xs-8 col-md-3\">\n    <md-card style=\"background-color: #4EB29A;\" class=\"home\">\n      <md-card-content>\n        <md-card-title class=\"cleanHeader\">Extra Fee</md-card-title>\n        <ul class=\"cleanList\">\n          <li>Inside fridge</li>\n          <li>Oven</li>\n          <li>Wash dishes</li>\n          <li>Windows</li>\n          <li>Wash clothes</li>\n          <li>Baseboard clean</li>\n        </ul>\n      </md-card-content>\n    </md-card>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation-menu/navigation-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-menu/navigation-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" uiSref=\"main\"><img width=\"100\" height=\"60\" src=\"assets/images/logo.png\"></a>\n      </div>\n      <div class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\"><i class=\"fa fa-home\"></i> Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/about\"><i class=\"fa fa-user\"></i> About</a></li>\n          <li class = \"visible-lg visible-md visible-xs\"><a><i class=\"fa fa-phone\"></i> Call Now:  <a style =\"color:white\" href=\"tel:1-847-293-9361\">+1-(847)-293-9361</a></a></li>\n          <li class=\"visible-lg visible-xs\"><a><i class=\"fa fa-envelope\"></i> Email:  <a style =\"color:white\"href=\"mailto:contact@nitencleaning.com?subject=Free-Estimate\">contact<span style=\"color:black\">@</span>nitencleaning.com</a></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/navigation-menu/navigation-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationMenuComponent = (function () {
    function NavigationMenuComponent() {
    }
    NavigationMenuComponent.prototype.ngOnInit = function () {
    };
    return NavigationMenuComponent;
}());
NavigationMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation-menu',
        template: __webpack_require__("../../../../../src/app/navigation-menu/navigation-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation-menu/navigation-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationMenuComponent);

//# sourceMappingURL=navigation-menu.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map