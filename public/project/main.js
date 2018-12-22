(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authencation.service */ "./src/app/authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ats) {
        this.ats = ats;
        this.title = 'photophia';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.ats.checkAuthStatus().subscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_authencation_service__WEBPACK_IMPORTED_MODULE_1__["AuthencationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _p_profile_p_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./p-profile/p-profile.component */ "./src/app/p-profile/p-profile.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reserve/reserve.component */ "./src/app/reserve/reserve.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./places/places.component */ "./src/app/places/places.component.ts");
/* harmony import */ var _place_details_place_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./place-details/place-details.component */ "./src/app/place-details/place-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rate_rate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rate/rate.component */ "./src/app/rate/rate.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _gift_gift_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./gift/gift.component */ "./src/app/gift/gift.component.ts");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                _p_profile_p_profile_component__WEBPACK_IMPORTED_MODULE_12__["PProfileComponent"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_13__["PhotosComponent"],
                _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_16__["ReserveComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_18__["EventsComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_20__["EditComponent"],
                _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_21__["CreateEventComponent"],
                _places_places_component__WEBPACK_IMPORTED_MODULE_22__["PlacesComponent"],
                _place_details_place_details_component__WEBPACK_IMPORTED_MODULE_23__["PlaceDetailsComponent"],
                _rate_rate_component__WEBPACK_IMPORTED_MODULE_25__["RateComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_26__["ReviewComponent"],
                _gift_gift_component__WEBPACK_IMPORTED_MODULE_27__["GiftComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_29__["StatisticsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_19__["TimepickerModule"].forRoot(),
            ],
            providers: [
                _authencation_service__WEBPACK_IMPORTED_MODULE_3__["AuthencationService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"],
                angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_28__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authencation.service.ts":
/*!*****************************************!*\
  !*** ./src/app/authencation.service.ts ***!
  \*****************************************/
/*! exports provided: AuthencationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthencationService", function() { return AuthencationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthencationService = /** @class */ (function () {
    function AuthencationService(router, http, cookie) {
        this.router = router;
        this.http = http;
        this.cookie = cookie;
        this.date = new Date();
        this.currentUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
        this.prev = 1; // 1 for photographer
        this.is_Auth = true;
        this.currentUser.firstname = 'khaled moataz';
        this.currentUser.email = this.env.email;
        this.currentUser.email = this.cookie.get('email');
    }
    AuthencationService.prototype.canActivate = function () {
        if (!this.is_Auth) {
            this.router.navigate(['/sign']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthencationService.prototype.login = function (log) {
        var _this = this;
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('/api/login', log, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            _this.currentUser = data['user'];
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    };
    AuthencationService.prototype.checkAuthStatus = function () {
        var _this = this;
        return this.http.get('/api/currentStatus').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data instanceof Object) {
                _this.currentUser = data;
            }
        }));
    };
    AuthencationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], typeof (_a = typeof angular2_cookie__WEBPACK_IMPORTED_MODULE_7__["CookieService"] !== "undefined" && angular2_cookie__WEBPACK_IMPORTED_MODULE_7__["CookieService"]) === "function" && _a || Object])
    ], AuthencationService);
    return AuthencationService;
    var _a;
}());



/***/ }),

/***/ "./src/app/create-event/create-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-event/create-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-event/create-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-event/create-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <h3>Create Event</h3>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <form autocomplete=\"off\" #form=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"eventName\">Event Name:</label>\r\n      <input required name=\"name\" [(ngModel)]=\"_event.eventName\" id=\"eventName\" type=\"text\" class=\"form-control\" placeholder=\"event name...\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label >Cities:</label>\r\n      <select required class=\"form-control\" name=\"location\" [(ngModel)]=\"_event.eventLocation\">\r\n        <option *ngFor=\"let city of cities \" > {{city}} </option>\r\n        <option> ay tahbeeed </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    <label > date & time:</label>\r\n    <input required class=\"form-control\" type=\"datetime-local\" name=\"dt\" [(ngModel)]=\"_event.date\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label >description:</label>\r\n      <textarea required id=\"desciption\" rows=3 class=\"form-control\" placeholder=\"my event...\" name = \"description\" [(ngModel)]=\"_event.description\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" (click)=\"createEvent()\"  class=\"btn btn-primary\">create event</button>\r\n  </form>\r\n\r\n\r\n  \r\n\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/create-event/create-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-event/create-event.component.ts ***!
  \********************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _models_Event_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Event.model */ "./src/app/models/Event.model.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(es, at, router) {
        this.es = es;
        this.at = at;
        this.router = router;
        this._event = new _models_Event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]();
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getCities().subscribe(function (cit) { _this.cities = cit; });
    };
    CreateEventComponent.prototype.createEvent = function () {
        this.es.createEvent(this.at.currentUser.email, this._event).subscribe();
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/create-event/create-event.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _authencation_service__WEBPACK_IMPORTED_MODULE_3__["AuthencationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\r\n{\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n  .logo\r\n  {\r\n      height: 60px;\r\n      top:20px;\r\n      margin-bottom: 20px;\r\n  }\r\n  .row\r\n{\r\n    padding-top:20px;\r\n}\r\n  select{\r\n    margin-left: 20px;\r\n}\r\n  .back\r\n{\r\n    background:radial-gradient(#FFF,#000);\r\n    width:100%;\r\n    height: 850px;\r\n    overflow: hidden;\r\n}\r\n  .btn-group>.btn-group:not(:last-child)>.btn, .btn-group>.btn:not(:last-child):not(.dropdown-toggle)\r\n{\r\n    margin-left: 20px;\r\n}\r\n  .btn-primary {\r\n    color: grey;\r\n    background-color: #999999;\r\n    border-color: #999999;\r\n}\r\n  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle\r\n{\r\n    color:white;\r\n    background-color: #999999;\r\n    border:none;\r\n}\r\n  .btn-primary.focus, .btn-primary:focus\r\n{\r\n    box-shadow: 0 0 0 0.2rem rgba(100,123,255,.25);\r\n\r\n}\r\n  .btn-primary:not(:disabled):not(.disabled).active:before\r\n{\r\n    content:'';\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    background-color: #008eff;\r\n    z-index: -1;\r\n    -webkit-filter:blur(10px);\r\n            filter:blur(10px);\r\n}\r\n  .set\r\n{\r\n    position: absolute;\r\n    width:100%;\r\n    height: 100%;\r\n    top:0;\r\n    left:0;\r\n}\r\n  .set2\r\n{\r\n    -webkit-transform: scale(0.2) rotateX(180deg);\r\n            transform: scale(0.2) rotateX(180deg);\r\n    -webkit-filter:blur(2px);\r\n            filter:blur(2px);\r\n}\r\n  .set2\r\n{\r\n    -webkit-transform: scale(0.8) rotateY(180deg);\r\n            transform: scale(0.8) rotateY(180deg);\r\n    -webkit-filter : blur(4px);\r\n            filter : blur(4px);\r\n}\r\n  .set div\r\n{\r\n    position:absolute;\r\n    display:block;\r\n}\r\n  img[_ngcontent-c1]\r\n{\r\n    height: 200px;\r\n}\r\n  .set div:nth-child(1)\r\n{\r\n    left:20%;\r\n    -webkit-animation: animate  17s linear  infinite;\r\n            animation: animate  17s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n  .set div:nth-child(2)\r\n{\r\n    left:0%;\r\n    -webkit-animation: animate  24s linear  infinite;\r\n            animation: animate  24s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n  .set div:nth-child(3)\r\n{\r\n    left:80%;\r\n    -webkit-animation: animate  11s linear  infinite;\r\n            animation: animate  11s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n  .set div:nth-child(4)\r\n{\r\n    left:10%;\r\n    -webkit-animation: animate  18s linear  infinite;\r\n            animation: animate  18s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n  .set div:nth-child(5)\r\n{\r\n    left:90%;\r\n    -webkit-animation: animate  13s linear  infinite;\r\n            animation: animate  13s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n  .set div:nth-child(6)\r\n{\r\n    left:50%;\r\n    -webkit-animation: animate  8s linear  infinite;\r\n            animation: animate  8s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n  .set div:nth-child(7)\r\n{\r\n    left:60%;\r\n    -webkit-animation: animate  20s linear  infinite;\r\n            animation: animate  20s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n  .set div:nth-child(8)\r\n{\r\n    left:70%;\r\n    -webkit-animation: animate  15s linear  infinite;\r\n            animation: animate  15s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n  @-webkit-keyframes animate \r\n{\r\n    0%\r\n    {\r\n        opacity: 0;\r\n        top:-10%;\r\n        -webkit-transform: translate(20px) rotate(0deg);\r\n                transform: translate(20px) rotate(0deg)\r\n    }\r\n    10%\r\n    {\r\n        opacity: 1;\r\n    }\r\n    20%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(45deg);\r\n                transform: translatex(-20px) rotate(45deg);\r\n    }\r\n    40%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(90deg);\r\n                transform: translatex(-20px) rotate(90deg);\r\n    }\r\n    60%\r\n    {\r\n        -webkit-transform: translatex(20px) rotate(135deg);\r\n                transform: translatex(20px) rotate(135deg);\r\n    }\r\n    80%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(180deg);\r\n                transform: translatex(-20px) rotate(180deg);\r\n    }\r\n    100%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(225deg);\r\n                transform: translatex(-20px) rotate(225deg);\r\n        top:70%;\r\n    }\r\n}\r\n  @keyframes animate \r\n{\r\n    0%\r\n    {\r\n        opacity: 0;\r\n        top:-10%;\r\n        -webkit-transform: translate(20px) rotate(0deg);\r\n                transform: translate(20px) rotate(0deg)\r\n    }\r\n    10%\r\n    {\r\n        opacity: 1;\r\n    }\r\n    20%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(45deg);\r\n                transform: translatex(-20px) rotate(45deg);\r\n    }\r\n    40%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(90deg);\r\n                transform: translatex(-20px) rotate(90deg);\r\n    }\r\n    60%\r\n    {\r\n        -webkit-transform: translatex(20px) rotate(135deg);\r\n                transform: translatex(20px) rotate(135deg);\r\n    }\r\n    80%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(180deg);\r\n                transform: translatex(-20px) rotate(180deg);\r\n    }\r\n    100%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(225deg);\r\n                transform: translatex(-20px) rotate(225deg);\r\n        top:70%;\r\n    }\r\n}\r\n  .main\r\n{\r\n    position: absolute;\r\n    top:20%;\r\n    right: 0%;\r\n}\r\n  .btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show>.btn-secondary.dropdown-toggle\r\n{\r\n    background-color: blue;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\r\n    <div class=\"set\">\r\n        <div ><img src=\"../../assets/images/leaves1.png\"></div>\r\n        <div ><img src=\"../../assets/images/leaves2.png\"></div>\r\n        <div ><img src=\"../../assets/images/leaves3.png\"></div>\r\n        <div ><img src=\"../../assets/images/leaves4.png\"></div>\r\n        <div ><img src=\"../../assets/images/leaves1.png\"></div>\r\n        <div ><img src=\"../../assets/images/leaves2.png\"></div>\r\n        <div ><img src=\"../../assets/images/leaves3.png\"></div>\r\n        <div ><img src=\"../../assets/images/leaves4.png\"></div>\r\n    </div>\r\n    <div class=\"set set2\">\r\n            <div ><img src=\"../../assets/images/leaves1.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves2.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves3.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves4.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves1.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves2.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves3.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves4.png\"></div>\r\n    </div>\r\n    <div class=\"set set3\">\r\n            <div ><img src=\"../../assets/images/leaves1.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves2.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves3.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves4.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves1.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves2.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves3.png\"></div>\r\n            <div ><img src=\"../../assets/images/leaves4.png\"></div>\r\n    </div>\r\n</div>\r\n   <div class=\"container main\">\r\n       <form #form=\"ngForm\" (submit)=\"submitForm(form)\" novalidate >\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\" col-lg-4 \">\r\n                        <input #firstName=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"firstName\" required [(ngModel)]=\"model.firstname\">\r\n                    </div>\r\n                </div>\r\n                    <div *ngIf=\"firstName.invalid && firstName.dirty\" class=\"alert alert-danger col-lg-4\">\r\n                      First name is required.\r\n                    </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 \">\r\n                        <input #email=\"ngModel\" type=\"email\" class=\"form-control\" name=\"userEmanil\" placeholder=\"User email\"  required [(ngModel)]=\"model.email\">\r\n                    </div>\r\n                    <div *ngIf=\"email.invalid && email.dirty \" class=\"alert alert-danger col-lg-4 \">\r\n                            email is required.\r\n                          </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\" col-lg-4 \">\r\n                        <input #phone=\"ngModel\"type=\"number\" class=\"form-control\" name=\"phoneNumber\" placeholder=\"01********\"  required [(ngModel)]=\"model.phone\">\r\n                    </div>\r\n                    <div *ngIf=\"phone.invalid && phone.dirty \" class=\"alert alert-danger col-lg-2 \">\r\n                            phone is required.\r\n                          </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\" col-lg-6 \">\r\n                        <input #pass=\"ngModel\"type=\"password\" class=\"form-control\" name=\"Pass\" placeholder=\"password\"  required [(ngModel)]=\"model.pass\">\r\n                    </div>\r\n                    <div *ngIf=\"pass.invalid && pass.dirty \" class=\"alert alert-danger col-lg-2 \">\r\n                            password is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"btn-group\">\r\n                        <label class=\"btn btn-primary\" [(ngModel)]=\"model.gender\" name=\"gender\"\r\n                               btnRadio=\"male\" tabindex=\"0\" role=\"button\">male</label>\r\n                        <label class=\"btn btn-primary\" [(ngModel)]=\"model.gender\" name=\"gender\"\r\n                               btnRadio=\"female\" tabindex=\"0\" role=\"button\">female</label>\r\n                      </div>\r\n                    </div>\r\n                <div class=\"row\">\r\n                <select class=\"custom-select col-lg-4\" name=\"city\" [(ngModel)]=\"model.city\" placeholder=\"city\">\r\n                        <option *ngFor=\"let city of cities\"> {{city}} </option>\r\n                </select>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"btn-group\">\r\n                        <label class=\"btn btn-primary\" [(ngModel)]=\"model.customer\" name=\"customer\"\r\n                               btnRadio=\"customer\" tabindex=\"0\" role=\"button\">customer</label>\r\n                        <label class=\"btn btn-primary\" [(ngModel)]=\"model.customer\" name=\"customer\"\r\n                               btnRadio=\"photographer\" tabindex=\"0\" role=\"button\">photographer</label>\r\n                      </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-12 col-md-4 form-group\">\r\n                      <input type=\"text\" placeholder=\"Birth Date\" name =\"bd\" [(ngModel)]=\"model.bd\" class=\"form-control\" bsDatepicker >\r\n                    </div>\r\n                </div>\r\n                <button (click)=\"submitForm(form)\" type=\"submit\" class=\"btn-success btn \" [disabled]=\"form.invalid\">\r\n                        Sign up\r\n                    </button>\r\n            </div>\r\n       </form>\r\n   </div>\r\n   "

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = /** @class */ (function () {
    function CreateComponent(es, router, a) {
        this.es = es;
        this.router = router;
        this.a = a;
        this.bd = new Date('jan 1 2017');
        this.model = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    CreateComponent.prototype.submitForm = function () {
        var _this = this;
        this.es.saveform(this.model).subscribe(function () {
            _this.router.navigate(['/home']);
        });
    };
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getCities().subscribe(function (cities) { _this.cities = cities; });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _authencation_service__WEBPACK_IMPORTED_MODULE_4__["AuthencationService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\nbody{\r\n    background-color: #f9f9f9;\r\n}\r\nh4\r\n{\r\n    text-align: center;\r\n}\r\n.fl\r\n{\r\n    margin-right: 20px;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n\r\n    border-radius: 50px;\r\n}\r\n.pp\r\n{\r\n   width:100px;\r\n   height:100px;\r\n   border-radius: 100%;\r\n}\r\n.full\r\n{\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    right:10%;\r\n    top:100px;\r\n    height: 800px;\r\n    border:solid 0.1px;\r\n}\r\n.about\r\n{\r\n    width: 220px;\r\n    border-bottom-style:inset;\r\n    padding-bottom: 50px;\r\n    border-right-style: solid;\r\n    \r\n}\r\nh3{\r\n    margin-top: 0px;\r\n}\r\n.na\r\n{\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n}\r\n.des\r\n{\r\n    position: absolute;\r\n    left:140px;\r\n    top:80px;\r\n    font-size:14px;\r\n    font-family: \"acumin-pro\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    word-wrap: break-word;\r\n    max-width: 95px;\r\n}\r\n.nn\r\n{\r\n    position: absolute;\r\n    left:120px;\r\n    top:80px;\r\n}\r\n.b1\r\n{\r\n    position: absolute;\r\n    top:160px;\r\n    left:30px;\r\n}\r\n.b2\r\n{\r\n    position: absolute;\r\n    top:160px;\r\n    left:120px;\r\n}\r\n.fa-thumbs-up\r\n{\r\n    color:#00cccc;\r\n    margin: 10px;\r\n    margin-top: 30px;\r\n}\r\n.fa-address-book\r\n{\r\n    color:#00e600;\r\n    margin: 10px;\r\n}\r\n.fa-location-arrow\r\n{\r\n    color:#ff471a;\r\n    margin:10px;\r\n}\r\n.bio{\r\n    word-wrap: break-word;\r\n    max-width: 250px; ;\r\n    font-family: \"Raleway\"\r\n}\r\n@media only screen and (max-width:1000px) {\r\n    .about {\r\n      display:none;\r\n    }\r\n    .screen[_ngcontent-c1] {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 20px;\r\n    }\r\n  }\r\n.screen\r\n  {\r\n      position: absolute;\r\n      left:220px;\r\n      top:20px;\r\n  }\r\nul {\r\n    list-style-type: none;\r\n    margin: auto;\r\n    width: 90%;\r\n  }\r\n.filt{\r\n    float: left;\r\n    margin-right: 50px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt2{\r\n    float: left;\r\n    margin-right: 20px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt:hover\r\n  {\r\n      border-bottom: solid;\r\n  }\r\n.filter_by\r\n  {\r\n      width: 80%;\r\n      height: 30px;\r\n      border-bottom: inset;\r\n  }\r\nli{\r\n    display:inline-block;\r\n  }\r\n.nav-item\r\n  {\r\n      padding-right: 50px;\r\n  }\r\nbody\r\n{\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.logo\r\n  {\r\n      height: 60px;\r\n      top:20px;\r\n      margin-bottom: 20px;\r\n  }\r\n.row\r\n{\r\n    padding-top:20px;\r\n}\r\nselect{\r\n    margin-left: 20px;\r\n}\r\n.back\r\n{\r\n    background:radial-gradient(#FFF,#000);\r\n    width:100%;\r\n    height: 850px;\r\n    overflow: hidden;\r\n}\r\n.btn-group>.btn-group:not(:last-child)>.btn, .btn-group>.btn:not(:last-child):not(.dropdown-toggle)\r\n{\r\n    margin-left: 20px;\r\n}\r\n.btn-primary {\r\n    color: grey;\r\n    background-color: #999999;\r\n    border-color: #999999;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle\r\n{\r\n    color:white;\r\n    background-color: #999999;\r\n    border:none;\r\n}\r\n.btn-primary.focus, .btn-primary:focus\r\n{\r\n    box-shadow: 0 0 0 0.2rem rgba(100,123,255,.25);\r\n\r\n}\r\n.btn-primary:not(:disabled):not(.disabled).active:before\r\n{\r\n    content:'';\r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n    background-color: #008eff;\r\n    z-index: -1;\r\n    -webkit-filter:blur(10px);\r\n            filter:blur(10px);\r\n}\r\n.set\r\n{\r\n    position: absolute;\r\n    width:100%;\r\n    height: 100%;\r\n    top:0;\r\n    left:0;\r\n}\r\n.set2\r\n{\r\n    -webkit-transform: scale(0.2) rotateX(180deg);\r\n            transform: scale(0.2) rotateX(180deg);\r\n    -webkit-filter:blur(2px);\r\n            filter:blur(2px);\r\n}\r\n.set2\r\n{\r\n    -webkit-transform: scale(0.8) rotateY(180deg);\r\n            transform: scale(0.8) rotateY(180deg);\r\n    -webkit-filter : blur(4px);\r\n            filter : blur(4px);\r\n}\r\n.set div\r\n{\r\n    position:absolute;\r\n    display:block;\r\n}\r\nimg[_ngcontent-c1]\r\n{\r\n    height: 200px;\r\n}\r\n.set div:nth-child(1)\r\n{\r\n    left:20%;\r\n    -webkit-animation: animate  17s linear  infinite;\r\n            animation: animate  17s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n.set div:nth-child(2)\r\n{\r\n    left:0%;\r\n    -webkit-animation: animate  24s linear  infinite;\r\n            animation: animate  24s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n.set div:nth-child(3)\r\n{\r\n    left:80%;\r\n    -webkit-animation: animate  11s linear  infinite;\r\n            animation: animate  11s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n.set div:nth-child(4)\r\n{\r\n    left:10%;\r\n    -webkit-animation: animate  18s linear  infinite;\r\n            animation: animate  18s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n.set div:nth-child(5)\r\n{\r\n    left:90%;\r\n    -webkit-animation: animate  13s linear  infinite;\r\n            animation: animate  13s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n.set div:nth-child(6)\r\n{\r\n    left:50%;\r\n    -webkit-animation: animate  8s linear  infinite;\r\n            animation: animate  8s linear  infinite;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n.set div:nth-child(7)\r\n{\r\n    left:60%;\r\n    -webkit-animation: animate  20s linear  infinite;\r\n            animation: animate  20s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n.set div:nth-child(8)\r\n{\r\n    left:70%;\r\n    -webkit-animation: animate  15s linear  infinite;\r\n            animation: animate  15s linear  infinite;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n@-webkit-keyframes animate \r\n{\r\n    0%\r\n    {\r\n        opacity: 0;\r\n        top:-10%;\r\n        -webkit-transform: translate(20px) rotate(0deg);\r\n                transform: translate(20px) rotate(0deg)\r\n    }\r\n    10%\r\n    {\r\n        opacity: 1;\r\n    }\r\n    20%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(45deg);\r\n                transform: translatex(-20px) rotate(45deg);\r\n    }\r\n    40%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(90deg);\r\n                transform: translatex(-20px) rotate(90deg);\r\n    }\r\n    60%\r\n    {\r\n        -webkit-transform: translatex(20px) rotate(135deg);\r\n                transform: translatex(20px) rotate(135deg);\r\n    }\r\n    80%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(180deg);\r\n                transform: translatex(-20px) rotate(180deg);\r\n    }\r\n    100%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(225deg);\r\n                transform: translatex(-20px) rotate(225deg);\r\n        top:70%;\r\n    }\r\n}\r\n@keyframes animate \r\n{\r\n    0%\r\n    {\r\n        opacity: 0;\r\n        top:-10%;\r\n        -webkit-transform: translate(20px) rotate(0deg);\r\n                transform: translate(20px) rotate(0deg)\r\n    }\r\n    10%\r\n    {\r\n        opacity: 1;\r\n    }\r\n    20%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(45deg);\r\n                transform: translatex(-20px) rotate(45deg);\r\n    }\r\n    40%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(90deg);\r\n                transform: translatex(-20px) rotate(90deg);\r\n    }\r\n    60%\r\n    {\r\n        -webkit-transform: translatex(20px) rotate(135deg);\r\n                transform: translatex(20px) rotate(135deg);\r\n    }\r\n    80%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(180deg);\r\n                transform: translatex(-20px) rotate(180deg);\r\n    }\r\n    100%\r\n    {\r\n        -webkit-transform: translatex(-20px) rotate(225deg);\r\n                transform: translatex(-20px) rotate(225deg);\r\n        top:70%;\r\n    }\r\n}\r\n.main\r\n{\r\n    position: absolute;\r\n    top:20%;\r\n    right: 0%;\r\n}\r\n.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show>.btn-secondary.dropdown-toggle\r\n{\r\n    background-color: blue;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen container\">\r\n  <form #form=\"ngForm\"  novalidate >\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\" col-lg-4 \">\r\n                <input #firstName=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"name\" name=\"firstName\" required [(ngModel)]=\"model.username\">\r\n            </div>\r\n        </div>\r\n            <div *ngIf=\"firstName.invalid && firstName.dirty\" class=\"alert alert-danger col-lg-4\">\r\n              First name is required.\r\n            </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 \">\r\n                <input #email=\"ngModel\" type=\"email\" class=\"form-control\" name=\"userEmanil\" placeholder=\"User email\"  required [(ngModel)]=\"model.userEmail\">\r\n            </div>\r\n            <div *ngIf=\"email.invalid && email.dirty \" class=\"alert alert-danger col-lg-4 \">\r\n                    email is required.\r\n                  </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\" col-lg-4 \">\r\n                <input #phone=\"ngModel\"type=\"number\" class=\"form-control\" name=\"phoneNumber\" placeholder=\"01********\"  required [(ngModel)]=\"model.userPhone\">\r\n            </div>\r\n            <div *ngIf=\"phone.invalid && phone.dirty \" class=\"alert alert-danger col-lg-2 \">\r\n                    phone is required.\r\n                  </div>\r\n        </div>\r\n        <div  *ngIf=\"privilege === 1\" class=\"row\">\r\n          <div class=\" col-lg-4 \">\r\n              <input  #avgPrice=\"ngModel\" type=\"number\" class=\"form-control\" name=\"avgPrice\" placeholder=\" average price\"  required [(ngModel)]=\"model.avgPrice\">\r\n            </div>\r\n      </div>\r\n      <div *ngIf=\"privilege === 1\" class=\"row\">\r\n          <div class=\" col-lg-4 \">\r\n              <input  #bio=\"ngModel\"  class=\"form-control\" name=\"bio\" placeholder=\" bio\"  required [(ngModel)]=\"model.bio\">\r\n            </div>\r\n      </div>\r\n      <div *ngIf=\"privilege === 1\" class=\"row\">\r\n            <div class=\" col-lg-4 \">\r\n                <input  #qualifcations=\"ngModel\"  class=\"form-control\" name=\"qualifications\" placeholder=\" qualifications\"  required [(ngModel)]=\"model.qualifications\">\r\n              </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\" col-lg-6 \">\r\n                <input #pass=\"ngModel\"type=\"password\" class=\"form-control\" name=\"Pass\" placeholder=\"password\"  required [(ngModel)]=\"model.password\">\r\n            </div>\r\n            <div *ngIf=\"pass.invalid && pass.dirty \" class=\"alert alert-danger col-lg-2 \">\r\n                    password is required.\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"btn-group\">\r\n                <label class=\"btn btn-primary\" [(ngModel)]=\"model.gender\" name=\"gender\"\r\n                            value=\"true\"   btnRadio=\"male\" tabindex=\"0\" role=\"button\">male</label>\r\n                <label class=\"btn btn-primary\" [(ngModel)]=\"model.gender\" name=\"gender\"\r\n                          value=\"false\"     btnRadio=\"female\" tabindex=\"0\" role=\"button\">female</label>\r\n              </div>\r\n            </div>\r\n        <div class=\"row\">\r\n        <select class=\"custom-select col-lg-4\" name=\"city\" [(ngModel)]=\"model.userAddress\" placeholder=\"city\">\r\n                <option *ngFor=\"let city of places\">{{city}}</option>\r\n        </select>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-12 col-md-4 form-group\">\r\n              <input type=\"text\" placeholder=\"Birth Date\" name =\"bd\" [(ngModel)]=\"model.birthDate\" class=\"form-control\" bsDatepicker >\r\n            </div>\r\n        </div>\r\n        <button (click)=\"update()\"  class=\"btn-success btn \" [disabled]=\"form.invalid\">\r\n                update\r\n            </button>\r\n            {{response}}\r\n    </div>\r\n</form>\r\n</div>\r\n{{model|json}}"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _models_photographer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/photographer */ "./src/app/models/photographer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(es, route, as) {
        this.es = es;
        this.route = route;
        this.as = as;
        this.privilege = 1;
        this.model = new _models_photographer__WEBPACK_IMPORTED_MODULE_4__["Photographer"]();
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getCities().subscribe(function (cities) {
            _this.places = cities;
        });
        this.es.getprev(this.route.snapshot.params['id']).subscribe(function (prev) {
            _this.privilege = prev;
            if (_this.privilege === 1) {
                _this.es.getphotographer(_this.route.snapshot.params['id']).subscribe(function (ph) { return _this.model = ph; });
            }
            else {
                _this.es.getCustomer(_this.route.snapshot.params['id']).subscribe(function (cs) {
                    _this.model.username = cs.userName;
                    _this.model.birthDate = cs.birthDate;
                    _this.model.gender = cs.gender;
                    _this.model.userAddress = cs.userAddress;
                    _this.model.userPhone = cs.userPhone;
                });
            }
        });
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        this.es.updateProfile(this.route.snapshot.params['id'], this.model).subscribe(function (resp) { _this.response = resp.toString(); });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _authencation_service__WEBPACK_IMPORTED_MODULE_3__["AuthencationService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item\r\n{\r\n    padding-right: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">Photofia</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile/'+this.at.currentUser.email]\">profile</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#\" [routerLink]=\"['/events']\">events</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cities']\">places</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/gifts']\">Gifts</a>\r\n              </li>\r\n        <li class=\"nav-item dropdown \">\r\n          <a (click)=\"getNotification()\" class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Notification\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a *ngFor=\"let notification1 of noti1\" class=\"dropdown-item\"  style=\"background-color:beige\">\r\n              {{notification1.username}} applies to your event <button (click)=\"respondEvent(notification1.id,notification1.userEmail,1)\"> yes </button> <button (click)=\"respondEvent(notification1.id,notification1.userEmail,0)\">no</button>\r\n            </a>\r\n            <a *ngFor=\"let notification2 of noti2\" class=\"dropdown-item\" href=\"#\" style=\"background-color:cyan\">\r\n                {{notification2.username}}\r\n              </a>\r\n            <a *ngFor=\"let notification3 of noti3\" class=\"dropdown-item\" href=\"#\" style=\"background-color:red\">\r\n                {{notification3.username}}\r\n              </a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" (click)=\"signout()\" href=\"#\" [routerLink]=\"['/sign']\">sign out</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n<div *ngIf=\"view === 1\"class=\"container\">\r\n    <button type=\"button\" class=\"btn btn-warning offset-md-10\"(click)=\"switchView()\">create event</button>\r\n  <div *ngFor=\"let _event of ev \" class=\"card col-md-10\" style=\"margin-top:20px;\" >\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\"> {{_event.name}} </h5>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\"> {{_event.date}} </h6>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\"> {{_event.location}} </h6>\r\n      <p class=\"card-text\"> {{_event.description}} </p>\r\n      <a href=\"#\" class=\"card-link\" *ngIf=\"priv === 1\" (click)=\"apply(_event.id)\">Apply </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"view === 2\" class=\"container\">\r\n    <button type=\"button\" class=\"btn btn-warning offset-md-10\"(click)=\"switchView()\">back </button>\r\n    <app-create-event></app-create-event>\r\n</div>"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsComponent = /** @class */ (function () {
    function EventsComponent(es, at) {
        this.es = es;
        this.at = at;
        this.view = 1;
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getEvents(this.at.currentUser.email).subscribe(function (_events) { _this.ev = _events; });
        this.es.getprev(this.at.currentUser.email).subscribe(function (prev) { _this.priv = prev; });
    };
    EventsComponent.prototype.switchView = function () {
        if (this.view === 1) {
            this.view = 2;
        }
        else {
            this.view = 1;
        }
    };
    EventsComponent.prototype.getNotification = function () {
        var _this = this;
        this.es.customerReserve(this.at.currentUser.email).subscribe(function (noti2) { return _this.noti2 = noti2; });
        this.es.EventsApplications(this.at.currentUser.email).subscribe(function (noti1) { return _this.noti1 = noti1; });
        this.es.customerFollowers(this.at.currentUser.email).subscribe(function (noti3) { return _this.noti3 = noti3; });
    };
    EventsComponent.prototype.apply = function (eventId) {
        this.es.applyEvent(eventId, this.at.currentUser.email).subscribe();
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _authencation_service__WEBPACK_IMPORTED_MODULE_2__["AuthencationService"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/gift/gift.component.css":
/*!*****************************************!*\
  !*** ./src/app/gift/gift.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item\r\n{\r\n    padding-right: 50px;\r\n}"

/***/ }),

/***/ "./src/app/gift/gift.component.html":
/*!******************************************!*\
  !*** ./src/app/gift/gift.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Photofia</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile/2']\">profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/events']\">events</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cities']\">places</a>\r\n          </li>\r\n          <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/gifts']\">Gifts</a>\r\n            </li>\r\n      <li class=\"nav-item dropdown \">\r\n        <a (click)=\"getNotification()\" class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Notifications\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a *ngFor=\"let notification1 of noti1\" class=\"dropdown-item\"  style=\"background-color:beige\">\r\n            {{notification1.username}} applies to your event <button (click)=\"respondEvent(notification1.id,notification1.userEmail,1)\"> yes </button> <button (click)=\"respondEvent(notification1.id,notification1.userEmail,0)\">no</button>\r\n          </a>\r\n          <a *ngFor=\"let notification2 of noti2\" class=\"dropdown-item\" href=\"#\" style=\"background-color:cyan\">\r\n              {{notification2.username}}\r\n            </a>\r\n          <a *ngFor=\"let notification3 of noti3\" class=\"dropdown-item\" href=\"#\" style=\"background-color:red\">\r\n              {{notification3.username}}\r\n            </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" (click)=\"signout()\" href=\"#\" [routerLink]=\"['/sign']\">sign out</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <h1>your points:{{points}}</h1>\r\n  <br>\r\n<select class=\"custom-select col-lg-3\" #gift name=\"selectedGift\" [(ngModel)]=\"selectedGift.giftName\" placeholder=\"cgift\">\r\n  <option *ngFor=\" let gif of gifts \" >{{gif.giftName}}</option>\r\n</select>\r\n\r\n<button (click)=\" redeem()\" class=\"btn btn-primary\">redeem</button>\r\n{{response}}\r\n</div>"

/***/ }),

/***/ "./src/app/gift/gift.component.ts":
/*!****************************************!*\
  !*** ./src/app/gift/gift.component.ts ***!
  \****************************************/
/*! exports provided: GiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftComponent", function() { return GiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _models_Gift_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Gift.model */ "./src/app/models/Gift.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GiftComponent = /** @class */ (function () {
    function GiftComponent(es, at) {
        this.es = es;
        this.at = at;
        this.selectedGift = new _models_Gift_model__WEBPACK_IMPORTED_MODULE_3__["Gift"]();
    }
    GiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getCustomerPoints(this.at.currentUser.email).subscribe(function (point) { _this.points = point; });
        this.es.getGifts().subscribe(function (Gif) { _this.gifts = Gif; });
    };
    GiftComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.es.getCustomerPoints(this.at.currentUser.email).subscribe(function (point) { _this.points = point; });
    };
    GiftComponent.prototype.redeem = function () {
        var _this = this;
        this.es.redeem(this.at.currentUser.email, this.selectedGift).subscribe(function (resp) { _this.response = resp; });
    };
    GiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gift',
            template: __webpack_require__(/*! ./gift.component.html */ "./src/app/gift/gift.component.html"),
            styles: [__webpack_require__(/*! ./gift.component.css */ "./src/app/gift/gift.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _authencation_service__WEBPACK_IMPORTED_MODULE_2__["AuthencationService"]])
    ], GiftComponent);
    return GiftComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-control-next-icon, .carousel-control-prev-icon\r\n{\r\n    height: 500px;\r\n}\r\n.nav-item\r\n{\r\n    padding-right: 50px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <body>\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n          <a class=\"navbar-brand\" href=\"#\">Photofia</a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n        \r\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile/'+this.at.currentUser.email]\">profile</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/events']\">events</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cities']\">places</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/gifts']\">Gifts</a>\r\n                    </li>\r\n              <li class=\"nav-item dropdown \">\r\n                <a *ngIf=\"at.prev == 1\" class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  Notifications\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" (click)=\"getpended()\">\r\n                  <a *ngFor=\"let req of requests\" class=\"dropdown-item\" href=\"#\"></a>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link \" (click)=\"signout()\" href=\"#\" [routerLink]=\"['/sign']\">sign out</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </nav>\r\n      <!-- Page Content -->\r\n      <div class=\"container\">\r\n  \r\n        <!-- Heading Row -->\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" >\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"d-block w-100\" src=\"../../assets/images/work2.jpg\" alt=\"First slide\">\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"d-block w-100\" src=\"../../assets/images/work1.jpg\" alt=\"Second slide\">\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"d-block w-100\" src=\"../../assets/images/work3.jpg\" alt=\"Third slide\">\r\n            </div>\r\n          </div>\r\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </div>\r\n        <!-- /.row -->\r\n  \r\n        <!-- Call to Action Well -->\r\n        <div class=\"card text-white bg-secondary my-4 text-center\">\r\n          <div class=\"card-body\">\r\n            <p class=\"text-white m-0\">Last works by our photographers !!</p>\r\n          </div>\r\n        </div>\r\n  \r\n        <!-- Content Row -->\r\n  \r\n          <!-- /.col-md-4 -->\r\n  \r\n        <!-- /.row -->\r\n  \r\n            \r\n      <!-- /.container -->\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let img of images\" class=\"card col-md-3 \" style=\"padding:0px; margin-left: 10px;\">\r\n                <img class=\"card-img-top \" [src]= \" base+ img.path+'jpg'\" (click)=\"openModal(template)\" style=\"cursor: pointer;\"alt=\"Card image cap\">\r\n                <a [routerLink]=\"['/profile/'+img.photographerEmail]\">{{img.photographerName}}</a>\r\n                <p> {{img.date}}</p>\r\n                <p> {{img.imageLocation}}</p>\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">{{img.type}}</h5>\r\n                  <p class=\"card-text\">{{img.description}}</p>\r\n                  <p class=\"car-text\">{{image.rate}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      <!-- Footer -->\r\n      <footer class=\"py-5 bg-dark\">\r\n        <div class=\"container\">\r\n          <p class=\"m-0 text-center text-white\">Copyright &copy; Cmp 2021</p>\r\n        </div>\r\n        <!-- /.container -->\r\n</footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _models_Images_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Images.model */ "./src/app/models/Images.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(at, es, route) {
        this.at = at;
        this.es = es;
        this.route = route;
        this.d = new Date();
        this.il = new _models_Images_model__WEBPACK_IMPORTED_MODULE_3__["Images"]('sad', 'asd', 123, 'asd', this.d, 'asdsa', 'adsa', 'asdas');
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getPhotosHome(this.at.currentUser.email).subscribe(function (img) { _this.images = img; });
    };
    HomeComponent.prototype.signout = function () {
        this.at.currentUser.email = '';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_authencation_service__WEBPACK_IMPORTED_MODULE_1__["AuthencationService"], _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/Customer.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/Customer.model.ts ***!
  \******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/models/Event.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/Event.model.ts ***!
  \***************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/models/Gift.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/Gift.model.ts ***!
  \**************************************/
/*! exports provided: Gift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gift", function() { return Gift; });
var Gift = /** @class */ (function () {
    function Gift() {
    }
    return Gift;
}());



/***/ }),

/***/ "./src/app/models/Images.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/Images.model.ts ***!
  \****************************************/
/*! exports provided: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
var Images = /** @class */ (function () {
    function Images(path, type, rate, description, date, photographerEmail, imageLocation, photographerName) {
        this.path = path;
        this.type = type;
        this.rate = rate;
        this.description = description;
        this.date = date;
        this.photographerEmail = photographerEmail;
        this.imageLocation = imageLocation;
        this.photographerName = photographerName;
    }
    return Images;
}());



/***/ }),

/***/ "./src/app/models/logIn.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/logIn.model.ts ***!
  \***************************************/
/*! exports provided: LogIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return LogIn; });
var LogIn = /** @class */ (function () {
    function LogIn(email, pass) {
        this.email = email;
        this.pass = pass;
    }
    return LogIn;
}());



/***/ }),

/***/ "./src/app/models/photographer.ts":
/*!****************************************!*\
  !*** ./src/app/models/photographer.ts ***!
  \****************************************/
/*! exports provided: Photographer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photographer", function() { return Photographer; });
var Photographer = /** @class */ (function () {
    function Photographer() {
    }
    return Photographer;
}());



/***/ }),

/***/ "./src/app/models/place.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/place.model.ts ***!
  \***************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
var Place = /** @class */ (function () {
    function Place() {
    }
    return Place;
}());



/***/ }),

/***/ "./src/app/models/review.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/review.model.ts ***!
  \****************************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/p-profile/p-profile.component.css":
/*!***************************************************!*\
  !*** ./src/app/p-profile/p-profile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\nbody{\r\n    background-color: #f9f9f9;\r\n}\r\nh4\r\n{\r\n    text-align: center;\r\n}\r\n.fl\r\n{\r\n    margin-right: 20px;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n\r\n    border-radius: 50px;\r\n}\r\n.pp\r\n{\r\n   width:100px;\r\n   height:100px;\r\n   border-radius: 100%;\r\n}\r\n.full\r\n{\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    right:10%;\r\n    top:100px;\r\n    height: 800px;\r\n    border:solid 0.1px;\r\n}\r\n.about\r\n{\r\n    width: 220px;\r\n    border-bottom-style:inset;\r\n    padding-bottom: 50px;\r\n    border-right-style: solid;\r\n    \r\n}\r\nh3{\r\n    margin-top: 0px;\r\n}\r\n.na\r\n{\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n}\r\n.des\r\n{\r\n    position: absolute;\r\n    left:140px;\r\n    top:80px;\r\n    font-size:14px;\r\n    font-family: \"acumin-pro\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    word-wrap: break-word;\r\n    max-width: 95px;\r\n}\r\n.nn\r\n{\r\n    position: absolute;\r\n    left:120px;\r\n    top:80px;\r\n}\r\n.b1\r\n{\r\n    position: absolute;\r\n    top:190px;\r\n    left:30px;\r\n}\r\n.b2\r\n{\r\n    position: absolute;\r\n    top:190px;\r\n    left:120px;\r\n}\r\n.fa-thumbs-up\r\n{\r\n    color:#00cccc;\r\n    margin: 10px;\r\n    margin-top: 30px;\r\n}\r\n.fa-address-book\r\n{\r\n    color:#00e600;\r\n    margin: 10px;\r\n}\r\n.fa-location-arrow\r\n{\r\n    color:#ff471a;\r\n    margin:10px;\r\n}\r\n.bio{\r\n    word-wrap: break-word;\r\n    max-width: 250px; ;\r\n    font-family: \"Raleway\"\r\n}\r\n@media only screen and (max-width:1000px) {\r\n    .about {\r\n      display:none;\r\n    }\r\n    .screen[_ngcontent-c1] {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 20px;\r\n    }\r\n  }\r\n.screen\r\n  {\r\n      position: absolute;\r\n      left:220px;\r\n      top:20px;\r\n  }\r\nul {\r\n    list-style-type: none;\r\n    margin: auto;\r\n    width: 90%;\r\n  }\r\n.filt{\r\n    float: left;\r\n    margin-right: 50px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt2{\r\n    float: left;\r\n    margin-right: 20px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt:hover\r\n  {\r\n      border-bottom: solid;\r\n  }\r\n.filter_by\r\n  {\r\n      width: 80%;\r\n      height: 30px;\r\n      border-bottom: inset;\r\n  }\r\nli{\r\n    display:inline-block;\r\n  }\r\n.nav-item\r\n  {\r\n      padding-right: 50px;\r\n  }"

/***/ }),

/***/ "./src/app/p-profile/p-profile.component.html":
/*!****************************************************!*\
  !*** ./src/app/p-profile/p-profile.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">Photofia</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile/2']\">profile</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/events']\">events</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cities']\">places</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"privilege === 0\">\r\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/gifts']\">Gifts</a>\r\n              </li>\r\n        <li class=\"nav-item dropdown \">\r\n          <a (click)=\"getNotification()\" class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Notifications\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a *ngFor=\"let notification1 of noti1\" class=\"dropdown-item\"  style=\"background-color:beige\">\r\n              {{notification1.username}} applies to your event <button (click)=\"respondEvent(notification1.id,notification1.userEmail,1)\"> yes </button> <button (click)=\"respondEvent(notification1.id,notification1.userEmail,0)\">no</button>\r\n            </a>\r\n            <a *ngFor=\"let notification2 of noti2\" class=\"dropdown-item\" href=\"#\" style=\"background-color:cyan\">\r\n                {{notification2.username}}\r\n              </a>\r\n            <a *ngFor=\"let notification3 of noti3\" class=\"dropdown-item\" href=\"#\" style=\"background-color:red\">\r\n                {{notification3.username}}\r\n            </a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" (click)=\"signout()\" href=\"#\" [routerLink]=\"['/sign']\">sign out</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n<div  *ngIf=\"privilege === 1\"  class=\"container full\">\r\n  <div class=\"about\">\r\n    <h3 class=\"na\"><i class=\"fas fa-map-marker-alt nn \"></i><b *ngIf=\"privilege == 1\">{{ owner1?.username}}</b></h3>\r\n    <img  *ngIf=\"privilege == 1\" [src]=\"owner1?.profilePicture\" class=\"pp\">\r\n  <form #form action='http://localhost/api/profile/profilePicture/ayman@yahoo.com' method='post'>\r\n    Select image to upload:\r\n    <input  type=\"file\" name=\"image\" id=\"fileToUpload\">\r\n     <button type=\"submit\" class=\"btn btn-success\" (click)=\"form.submit()\">Submit</button>\r\n  </form>\r\n    <p class=\"des\" *ngIf=\"privilege == 1\">{{ owner1?.userAddress}} </p>\r\n    <button  *ngIf=\"follow === 0 && edit === true \"  type=\"button\" class=\"btn btn-info b1\" (click)=\"togglefollow()\">follow</button>\r\n    <button *ngIf=\"edit === true && follow ===1 \" type=\"button\" class=\"btn btn-info b1\" (click)=\"togglefollow()\">unfollow</button>\r\n    <button type=\"button\" class=\"btn btn-danger b2\" (click)=\"togglesessions()\"> {{ session }} </button>\r\n    <button  type=\"button\" class=\"btn btn-danger b2\" (click)=\"togglesessions2(3)\" style=\"top:700px;\"> rate </button>\r\n    <button   type=\"button\" class=\"btn btn-danger b2\" (click)=\"togglesessions2(4)\" style=\"top:700px; left:1px;\"> reviews </button>\r\n  </div>\r\n  <div class=\"about me\">\r\n    rate: {{owner1.rate}}\r\n    <br>\r\n    avg price : {{owner1.avgPrice}}\r\n    <br>\r\n    phone: {{owner1.userPhone}}\r\n  </div>\r\n  <div class=\"about\" >\r\n    <h3>about</h3>\r\n    <p class=\"bio\"> {{owner1.bio}}</p>\r\n  </div>\r\n  <div class=\"about\" >\r\n    <h3>Cameras</h3>\r\n    <p class=\"bio\" *ngFor=\"let cam of cameras\">{{cam.cameraName}} : {{cam.brand}}</p>\r\n  </div>\r\n  <div class=\"about\" >\r\n    <h3>Lenses</h3>\r\n    <p class=\"bio\" *ngFor=\"let lens of lenses\">{{lens.lensName}} : {{lens.lensType}}</p>\r\n  </div>\r\n  <div class=\"about\">\r\n    <button *ngIf=\"edit\" (click)=\"toggleEdit()\">{{edit2String}}</button>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <app-photos *ngIf =\"sessions === 1 && edit2 === false\"></app-photos>\r\n  <app-reserve *ngIf =\"sessions === 2 && edit2 === false \"></app-reserve>\r\n  <app-rate *ngIf=\"edit2 === false && sessions === 3\" > </app-rate>\r\n  <app-review *ngIf=\"edit2 === false && sessions === 4 \" > </app-review>\r\n  <app-edit *ngIf=\"edit2=== true\"></app-edit>\r\n</div>\r\n\r\n<div  *ngIf=\"privilege === 0\"  class=\"container full\">\r\n  <div *ngIf=\"edit2=== false\">\r\n    <h3><i class=\"fas fa-map-marker-alt nn \"></i><b *ngIf=\"privilege == 0\">{{owner0?.username }}</b></h3>\r\n    <img *ngIf=\"privilege == 0\" [src]=\"owner0?.profilePicture\" class=\"pp\">\r\n    <form #form action='hls.php' method='post'>\r\n        Select image to upload:\r\n        <input  type=\"file\" name=\"image\" id=\"fileToUpload\">\r\n         <button type=\"submit\" class=\"btn btn-success\" (click)=\"form.submit()\">Submit</button>\r\n      </form>\r\n      <p class=\"des\" *ngIf=\"privilege == 0\">{{owner0?.userAddress }} </p>\r\n      <button *ngIf=\"edit\" (click)=\"toggleEdit()\">{{edit2String}}</button>\r\n      </div>\r\n      <app-edit *ngIf=\"edit2=== true\"></app-edit>\r\n</div>\r\n\r\n\r\n\r\n  \r\n"

/***/ }),

/***/ "./src/app/p-profile/p-profile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/p-profile/p-profile.component.ts ***!
  \**************************************************/
/*! exports provided: PProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PProfileComponent", function() { return PProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/photographer */ "./src/app/models/photographer.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _models_Customer_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Customer.model */ "./src/app/models/Customer.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PProfileComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function PProfileComponent(modalService, es, route, at) {
        this.modalService = modalService;
        this.es = es;
        this.route = route;
        this.at = at;
        this.bd = new Date('jan 1 2017');
        this.owner1 = new _models_photographer__WEBPACK_IMPORTED_MODULE_1__["Photographer"]();
        this.owner0 = new _models_Customer_model__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.base = ' photophia/api/images/';
        this.edit2 = false;
        this.edit2String = 'edit';
        this.sessions = 1;
        this.followstring = 'follow';
        this.session = 'reserve';
        this.privilege = 1;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"];
        this.send = 'http://169.254.137.164/api/profile/profilePicture/' + this.at.currentUser.email;
        this.selectedFile = null;
    }
    PProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getprev(this.route.snapshot.params['id']).subscribe(function (priv) { return _this.privilege = priv; });
        if (this.privilege === 1) {
            this.es.getphotographer(this.route.snapshot.params['id']).subscribe(function (ph) {
                _this.owner1 = ph;
            });
            this.getCameras();
            this.getLenses();
        }
        else if (this.privilege === 0) {
            this.es.getCustomer(this.route.snapshot.params['id']).subscribe(function (ph) {
                _this.owner0 = ph;
            });
        }
        this.getFollowStatus();
        if (this.at.currentUser.email === this.route.snapshot.params['id']) {
            this.edit = true;
        }
    };
    PProfileComponent.prototype.load = function () {
        var _this = this;
        if (this.privilege === 1) {
            this.es.getphotographer(this.route.snapshot.params['id']).subscribe(function (ph) {
                _this.owner1 = ph;
            });
        }
        else if (this.privilege === 0) {
            this.es.getCustomer(this.route.snapshot.params['id']).subscribe(function (ph) {
                _this.owner0 = ph;
            });
        }
    };
    PProfileComponent.prototype.ngOnChange = function () {
        this.load();
    };
    PProfileComponent.prototype.getphotographer = function () {
        var _this = this;
        this.es.getphotographer(this.route.snapshot.params['id']).subscribe(function (owner) {
            _this.owner1 = owner;
        });
    };
    PProfileComponent.prototype.getCustomer = function () {
        var _this = this;
        this.es.getCustomer(this.route.snapshot.params['id']).subscribe(function (owner) {
            _this.owner0 = owner;
        });
    };
    PProfileComponent.prototype.getFollowStatus = function () {
        var _this = this;
        this.es.getFollowStatus(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe(function (bool) { _this.follow = bool; });
    };
    PProfileComponent.prototype.getNotification = function () {
        var _this = this;
        this.es.customerReserve(this.at.currentUser.email).subscribe(function (noti2) { return _this.noti2 = noti2; });
        this.es.EventsApplications(this.at.currentUser.email).subscribe(function (noti1) { return _this.noti1 = noti1; });
        this.es.customerFollowers(this.at.currentUser.email).subscribe(function (noti3) { return _this.noti3 = noti3; });
    };
    PProfileComponent.prototype.respondEvent = function (id, userEmail, accept) {
        this.es.respondEvent(id, userEmail, accept).subscribe();
    };
    PProfileComponent.prototype.togglesessions = function () {
        if (this.sessions === 1) {
            this.sessions = 2;
            this.session = 'photos';
        }
        else if (this.sessions === 2 || this.sessions === 3) {
            this.sessions = 1;
            this.session = 'reserve';
        }
    };
    PProfileComponent.prototype.togglesessions2 = function (x) {
        if (this.sessions === 1 || this.sessions === 2) {
            this.sessions = x;
        }
        else {
            this.sessions = 1;
            this.session = 'reserve';
        }
    };
    PProfileComponent.prototype.toggleEdit = function () {
        if (this.edit2 === true) {
            this.edit2 = false;
            this.edit2String = 'back';
        }
        else {
            this.edit2 = true;
            this.edit2String = 'edit';
        }
    };
    PProfileComponent.prototype.togglefollow = function () {
        if (this.follow === 1) {
            this.es.unfollow(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe();
            this.follow = 0;
        }
        else {
            this.es.follow(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe();
            this.follow = 1;
        }
    };
    PProfileComponent.prototype.getCameras = function () {
        var _this = this;
        this.es.getPhotographerCameras(this.route.snapshot.params['id']).subscribe(function (cams) { _this.cameras = cams; });
    };
    PProfileComponent.prototype.getLenses = function () {
        var _this = this;
        this.es.getPhotographerLenses(this.route.snapshot.params['id']).subscribe(function (len) { _this.lenses = len; });
    };
    PProfileComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.onUpload();
    };
    PProfileComponent.prototype.onUpload = function () {
        this.es.uploadProfilePicture(this.at.currentUser.email, this.selectedFile).subscribe();
    };
    PProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-p-profile',
            template: __webpack_require__(/*! ./p-profile.component.html */ "./src/app/p-profile/p-profile.component.html"),
            styles: [__webpack_require__(/*! ./p-profile.component.css */ "./src/app/p-profile/p-profile.component.css")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _authencation_service__WEBPACK_IMPORTED_MODULE_5__["AuthencationService"]])
    ], PProfileComponent);
    return PProfileComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.css":
/*!*********************************************!*\
  !*** ./src/app/photos/photos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\nbody{\r\n    background-color: #f9f9f9;\r\n}\r\nh4\r\n{\r\n    text-align: center;\r\n}\r\n.fl\r\n{\r\n    margin-right: 20px;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n\r\n    border-radius: 50px;\r\n}\r\n.pp\r\n{\r\n   width:100px;\r\n   height:100px;\r\n   border-radius: 100%;\r\n}\r\n.full\r\n{\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    right:10%;\r\n    top:100px;\r\n    height: 800px;\r\n    border:solid 0.1px;\r\n}\r\n.about\r\n{\r\n    width: 220px;\r\n    border-bottom-style:inset;\r\n    padding-bottom: 50px;\r\n    border-right-style: solid;\r\n    \r\n}\r\nh3{\r\n    margin-top: 0px;\r\n}\r\n.na\r\n{\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n}\r\n.des\r\n{\r\n    position: absolute;\r\n    left:140px;\r\n    top:80px;\r\n    font-size:14px;\r\n    font-family: \"acumin-pro\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    word-wrap: break-word;\r\n    max-width: 95px;\r\n}\r\n.nn\r\n{\r\n    position: absolute;\r\n    left:120px;\r\n    top:80px;\r\n}\r\n.b1\r\n{\r\n    position: absolute;\r\n    top:160px;\r\n    left:30px;\r\n}\r\n.b2\r\n{\r\n    position: absolute;\r\n    top:160px;\r\n    left:120px;\r\n}\r\n.fa-thumbs-up\r\n{\r\n    color:#00cccc;\r\n    margin: 10px;\r\n    margin-top: 30px;\r\n}\r\n.fa-address-book\r\n{\r\n    color:#00e600;\r\n    margin: 10px;\r\n}\r\n.fa-location-arrow\r\n{\r\n    color:#ff471a;\r\n    margin:10px;\r\n}\r\n.bio{\r\n    word-wrap: break-word;\r\n    max-width: 250px; ;\r\n    font-family: \"Raleway\"\r\n}\r\n@media only screen and (max-width:1000px) {\r\n    .about {\r\n      display:none;\r\n    }\r\n    .screen[_ngcontent-c1] {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 20px;\r\n    }\r\n  }\r\n.screen\r\n  {\r\n      position: absolute;\r\n      left:220px;\r\n      top:20px;\r\n  }\r\nul {\r\n    list-style-type: none;\r\n    margin: auto;\r\n    width: 90%;\r\n  }\r\n.filt{\r\n    float: left;\r\n    margin-right: 50px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt2{\r\n    float: left;\r\n    margin-right: 20px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt:hover\r\n  {\r\n      border-bottom: solid;\r\n  }\r\n.filter_by\r\n  {\r\n      width: 80%;\r\n      height: 30px;\r\n      border-bottom: inset;\r\n  }\r\nli{\r\n    display:inline-block;\r\n  }\r\n.nav-item\r\n  {\r\n      padding-right: 50px;\r\n  }\r\n.checked {\r\n    color:yellow;\r\n}\r\n.yel{\r\n    color:yellow;\r\n}\r\na{\r\n    cursor: pointer;\r\n}\r\ntextarea.form-control{\r\n    width:500px;\r\n}"

/***/ }),

/***/ "./src/app/photos/photos.component.html":
/*!**********************************************!*\
  !*** ./src/app/photos/photos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen container\">\r\n        <div class=\"filter_by\">\r\n          <ul>\r\n            <li>\r\n              <button class=\"filt\" (click)=\"setOrderBy(1)\">\r\n                date\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"filt\" (click)=\"setOrderBy(2)\">\r\n                popular\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"filt2\" (click)=\"setPageNumber(1)\">\r\n                1\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"filt2\" (click)=\"setPageNumber(2)\">\r\n                2\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"filt2\" (click)=\"setPageNumber(3)\">\r\n                3\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"work\" style=\"margin-top:20px;\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div *ngFor=\"let img of images\" class=\"card col-md-3 \" style=\"padding:0px; margin-left: 10px;\">\r\n                  <img class=\"card-img-top \" [src]= \" base+ img?.path+'.jpg'\" (click)=\"openModal(template,img?.path)\" style=\"cursor: pointer;\"alt=\"Card image cap\">\r\n                  <p> {{img?.date}}</p>\r\n                  <p> {{img?.imageLocation}}</p>\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{img?.type}}</h5>\r\n                    <p class=\"card-text\">{{img?.description}}</p>\r\n                    <p class=\"card-text\" >rate:{{img?.rate}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template #template>\r\n        <img [src]=\"imagePath\" style=\" max-height:400px; \">\r\n        <div class=\"row\">\r\n        <a ><span class=\"fa fa-star fa-3x\" (click)=\"selected[0]=true;selected[1]=false;selected[2]=false;selected[3]=false;selected[4]=false;\" [ngClass]=\"{'yel': selected[0] === true || selected[1] === true || selected[2] === true || selected[3] === true || selected[4] === true}\"></span></a>\r\n        <a ><span class=\"fa fa-star fa-3x\" (click)=\"selected[1]=true ;selected[2]=false;selected[3]=false;selected[4]=false;\"  [ngClass]=\"{'yel':  selected[1] === true || selected[2] === true || selected[3] === true || selected[4] === true}\" ></span></a>\r\n        <a ><span class=\"fa fa-star fa-3x \" (click)=\"selected[2]=true;selected[3]=false;selected[4]=false;\" [ngClass]=\"{'yel': selected[2] === true || selected[3] === true || selected[4] === true}\"></span></a>\r\n        <a ><span class=\"fa fa-star fa-3x \"   (click)=\"selected[3]=true;selected[4]=false;\" [ngClass]=\"{'yel': selected[3] === true || selected[4] === true}\"></span></a>\r\n        <a ><span class=\"fa fa-star fa-3x \"  (click)=\"selected[4]=true\"  [ngClass]=\"{'yel': selected[4] === true }\"></span></a>\r\n        </div>\r\n        <br>\r\n        <textarea  required id=\"desciption\" rows=3 class=\"form-control\" placeholder=\"my event...\" name = \"description\" [(ngModel)]=\"rev.comment\"></textarea>\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"rate()\"> submit rate</button>\r\n        \r\n        <div *ngFor=\"let review of reviews \" class=\"card col-md-10\" style=\"margin-top:20px;\" >\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\"> {{review.userName}} </h5>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\"> {{review.rate}} </h6>\r\n            <p class=\"card-text\"> {{review.comment}} </p>\r\n          </div>\r\n        </div>\r\n        </ng-template>"

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _models_review_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/review.model */ "./src/app/models/review.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhotosComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function PhotosComponent(modalService, es, route, at) {
        this.modalService = modalService;
        this.es = es;
        this.route = route;
        this.at = at;
        this.base = 'http://169.254.137.164/images/';
        this.pageNumber = 1;
        this.orderBy = '/time/';
        this.images = [];
        this.selected = new Array(5);
        this.rev = new _models_review_model__WEBPACK_IMPORTED_MODULE_5__["Review"]();
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    PhotosComponent.prototype.openModal = function (template, path) {
        var _this = this;
        this.modalRef = this.modalService.show(template);
        this.imagePath = this.base + path + '.jpg';
        this.es.getPhotoReviews(this.route.snapshot.params['id'], path).subscribe(function (rev) { _this.reviews = rev; });
        this.es.getCurrentPhotoReview(this.route.snapshot.params['id'], this.at.currentUser.email, path).subscribe(function (review) { _this.rev = review; _this.setreview(); });
    };
    PhotosComponent.prototype.respond = function () {
        var _this = this;
        this.es.getImagesPhotographer(this.route.snapshot.params['id'], this.at.currentUser.email, this.orderBy, this.pageNumber).subscribe(function (images) { return _this.images = images; });
    };
    PhotosComponent.prototype.setOrderBy = function (n) {
        if (n === 1) {
            this.orderBy = '/time/';
            this.respond();
        }
        else {
            this.orderBy = '/mostPopular/';
            this.respond();
        }
    };
    PhotosComponent.prototype.setPageNumber = function (n) {
        this.pageNumber = n;
        this.respond();
    };
    PhotosComponent.prototype.rate = function () {
        for (var i = 0; i < 5; i++) {
            if (this.selected[i] === true) {
                this.rev.rate = i + 1;
            }
        }
        if (this.firstTime === true) {
            this.es.reviewPhoto(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev).subscribe();
        }
        else {
            this.es.updateReviewPhoto(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev).subscribe();
        }
    };
    PhotosComponent.prototype.setreview = function () {
        if (this.rev.comment == null) {
            this.firstTime = true;
        }
        else {
            this.firstTime = false;
            this.selected[this.rev.rate - 1] = true;
        }
    };
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/photos/photos.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _authencation_service__WEBPACK_IMPORTED_MODULE_4__["AuthencationService"]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/place-details/place-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/place-details/place-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/place-details/place-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/place-details/place-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"card col-md-10\" style=\"margin-top:20px;\" >\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\"> {{selectedPlace.name}} </h5>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\"> {{selectedPlace.rate}} </h6>\r\n      <p class=\"card-text\"> {{selectedPlace.description}} </p>\r\n      <button href=\"#\" class=\"card-link\" > Rate </button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let img of images\" class=\"card col-md-3 \" style=\"padding:0px; margin-left: 10px;\">\r\n            <img class=\"card-img-top \" [src]= \" base+ img.path+'jpg'\" (click)=\"openModal(template)\" style=\"cursor: pointer;\"alt=\"Card image cap\">\r\n            <a [routerLink]=\"['/profile/'+img.photographerEmail]\">{{img.photographerEmail}}</a>\r\n            <p> {{img.date}}</p>\r\n            <p> {{img.imageLocation}}</p>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{img.type}}</h5>\r\n              <p class=\"card-text\">{{img.description}}</p>\r\n              <p class=\"car-text\">{{image.rate}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/place-details/place-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/place-details/place-details.component.ts ***!
  \**********************************************************/
/*! exports provided: PlaceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailsComponent", function() { return PlaceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_place_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/place.model */ "./src/app/models/place.model.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceDetailsComponent = /** @class */ (function () {
    function PlaceDetailsComponent(es, at) {
        this.es = es;
        this.at = at;
    }
    PlaceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getImagesOfPlace(this.selectedPlace.placeName).subscribe(function (photos) { _this.images = photos; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedPlace'),
        __metadata("design:type", _models_place_model__WEBPACK_IMPORTED_MODULE_1__["Place"])
    ], PlaceDetailsComponent.prototype, "selectedPlace", void 0);
    PlaceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-place-details',
            template: __webpack_require__(/*! ./place-details.component.html */ "./src/app/place-details/place-details.component.html"),
            styles: [__webpack_require__(/*! ./place-details.component.css */ "./src/app/place-details/place-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _authencation_service__WEBPACK_IMPORTED_MODULE_3__["AuthencationService"]])
    ], PlaceDetailsComponent);
    return PlaceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/places/places.component.css":
/*!*********************************************!*\
  !*** ./src/app/places/places.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item\r\n{\r\n    padding-right: 50px;\r\n}"

/***/ }),

/***/ "./src/app/places/places.component.html":
/*!**********************************************!*\
  !*** ./src/app/places/places.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">Photofia</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile/'+this.at.currentUser.email]\">profile</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/events']\">events</a>\r\n          </li>\r\n          <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/cities']\">places</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/gifts']\">Gifts</a>\r\n            </li>\r\n        <li class=\"nav-item dropdown \">\r\n          <a (click)=\"getNotification()\" class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Notifications\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a *ngFor=\"let notification1 of noti1\" class=\"dropdown-item\"  style=\"background-color:beige\">\r\n              {{notification1.username}} applies to your event <button (click)=\"respondEvent(notification1.id,notification1.userEmail,1)\"> yes </button> <button (click)=\"respondEvent(notification1.id,notification1.userEmail,0)\">no</button>\r\n            </a>\r\n            <a *ngFor=\"let notification2 of noti2\" class=\"dropdown-item\" href=\"#\" style=\"background-color:cyan\">\r\n                {{notification2.username}}\r\n              </a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" (click)=\"signout()\" href=\"#\" [routerLink]=\"['/sign']\">sign out</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n\r\n<div *ngFor=\"let _place of places \" class=\"card col-md-10\" style=\"margin-top:20px;\" (click)=\"toggleDetails(_place)\">\r\n    <div class=\"card-body\" *ngIf=\"allPlaces === true\">\r\n      <h5 class=\"card-title\"> {{_place.placeName}} </h5>\r\n      <p class=\"card-text\"> {{ _place.description}} </p>\r\n    </div>\r\n  </div>\r\n  <app-place-details *ngIf=\"allPlaces === false\" [selectedPlace]=\"selectedPlace\"></app-place-details>"

/***/ }),

/***/ "./src/app/places/places.component.ts":
/*!********************************************!*\
  !*** ./src/app/places/places.component.ts ***!
  \********************************************/
/*! exports provided: PlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesComponent", function() { return PlacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacesComponent = /** @class */ (function () {
    function PlacesComponent(es, at) {
        this.es = es;
        this.at = at;
        this.allPlaces = true;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    PlacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getPlaces().subscribe(function (cit) { _this.places = cit; });
    };
    PlacesComponent.prototype.toggleDetails = function (_place) {
        if (this.allPlaces === true) {
            this.allPlaces = false;
            this.selectedPlace = _place;
        }
        else {
            this.allPlaces = true;
        }
    };
    PlacesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-places',
            template: __webpack_require__(/*! ./places.component.html */ "./src/app/places/places.component.html"),
            styles: [__webpack_require__(/*! ./places.component.css */ "./src/app/places/places.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _authencation_service__WEBPACK_IMPORTED_MODULE_3__["AuthencationService"]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "./src/app/rate/rate.component.css":
/*!*****************************************!*\
  !*** ./src/app/rate/rate.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screen\r\n{\r\n    position: absolute;\r\n    left:420px;\r\n    top:200px;\r\n}\r\n.checked {\r\n    color:yellow;\r\n}\r\n.yel{\r\n    color:yellow;\r\n}\r\na{\r\n    cursor: pointer;\r\n}\r\ntextarea.form-control{\r\n    width:600px;\r\n}"

/***/ }),

/***/ "./src/app/rate/rate.component.html":
/*!******************************************!*\
  !*** ./src/app/rate/rate.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container screen\">\r\n <h2> Rate : </h2>\r\n<a ><span class=\"fa fa-star fa-3x\" (click)=\"selected[0]=true;selected[1]=false;selected[2]=false;selected[3]=false;selected[4]=false;\" [ngClass]=\"{'yel': selected[0] === true || selected[1] === true || selected[2] === true || selected[3] === true || selected[4] === true}\"></span></a>\r\n<a ><span class=\"fa fa-star fa-3x\" (click)=\"selected[1]=true ;selected[2]=false;selected[3]=false;selected[4]=false;\"  [ngClass]=\"{'yel':  selected[1] === true || selected[2] === true || selected[3] === true || selected[4] === true}\" ></span></a>\r\n<a ><span class=\"fa fa-star fa-3x \" (click)=\"selected[2]=true;selected[3]=false;selected[4]=false;\" [ngClass]=\"{'yel': selected[2] === true || selected[3] === true || selected[4] === true}\"></span></a>\r\n<a ><span class=\"fa fa-star fa-3x \"   (click)=\"selected[3]=true;selected[4]=false;\" [ngClass]=\"{'yel': selected[3] === true || selected[4] === true}\"></span></a>\r\n<a ><span class=\"fa fa-star fa-3x \"  (click)=\"selected[4]=true\"  [ngClass]=\"{'yel': selected[4] === true }\"></span></a>\r\n<br>\r\n<textarea  required id=\"desciption\" rows=3 class=\"form-control\" placeholder=\"my event...\" name = \"description\" [(ngModel)]=\"rev.comment\"></textarea>\r\n<br>\r\n<button class=\"btn btn-primary\" (click)=\"rate()\"> submit rate</button>\r\n</div>\r\n{{rev|json}}\r\n{{rev2|json}}"

/***/ }),

/***/ "./src/app/rate/rate.component.ts":
/*!****************************************!*\
  !*** ./src/app/rate/rate.component.ts ***!
  \****************************************/
/*! exports provided: RateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateComponent", function() { return RateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_review_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/review.model */ "./src/app/models/review.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateComponent = /** @class */ (function () {
    function RateComponent(es, at, route) {
        this.es = es;
        this.at = at;
        this.route = route;
        this.selected = new Array(5);
        this.rev = new _models_review_model__WEBPACK_IMPORTED_MODULE_4__["Review"]();
    }
    RateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getCurrentReview(this.route.snapshot.params['id'], this.at.currentUser.email).subscribe(function (review) { _this.rev = review; _this.setreview(); });
    };
    RateComponent.prototype.rate = function () {
        for (var i = 0; i < 5; i++) {
            if (this.selected[i] === true) {
                this.rev.rate = i + 1;
            }
        }
        if (this.firstTime === true) {
            this.es.reviewPhotographer(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev).subscribe();
        }
        else {
            this.es.updateReviewPhotographer(this.route.snapshot.params['id'], this.at.currentUser.email, this.rev).subscribe();
        }
    };
    RateComponent.prototype.setreview = function () {
        if (this.rev == null) {
            this.firstTime = true;
        }
        else {
            this.firstTime = false;
            this.selected[this.rev.rate - 1] = true;
        }
    };
    RateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate',
            template: __webpack_require__(/*! ./rate.component.html */ "./src/app/rate/rate.component.html"),
            styles: [__webpack_require__(/*! ./rate.component.css */ "./src/app/rate/rate.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _authencation_service__WEBPACK_IMPORTED_MODULE_2__["AuthencationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RateComponent);
    return RateComponent;
}());



/***/ }),

/***/ "./src/app/reserve/reserve.component.css":
/*!***********************************************!*\
  !*** ./src/app/reserve/reserve.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\nbody{\r\n    background-color: #f9f9f9;\r\n}\r\nh4\r\n{\r\n    text-align: center;\r\n}\r\n.fl\r\n{\r\n    margin-right: 20px;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n\r\n    border-radius: 50px;\r\n}\r\n.pp\r\n{\r\n   width:100px;\r\n   height:100px;\r\n   border-radius: 100%;\r\n}\r\n.full\r\n{\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    right:10%;\r\n    top:100px;\r\n    height: 800px;\r\n    border:solid 0.1px;\r\n}\r\n.about\r\n{\r\n    width: 220px;\r\n    border-bottom-style:inset;\r\n    padding-bottom: 50px;\r\n    border-right-style: solid;\r\n    \r\n}\r\nh3{\r\n    margin-top: 0px;\r\n}\r\n.na\r\n{\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n}\r\n.des\r\n{\r\n    position: absolute;\r\n    left:140px;\r\n    top:80px;\r\n    font-size:14px;\r\n    font-family: \"acumin-pro\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    word-wrap: break-word;\r\n    max-width: 95px;\r\n}\r\n.nn\r\n{\r\n    position: absolute;\r\n    left:120px;\r\n    top:80px;\r\n}\r\n.b1\r\n{\r\n    position: absolute;\r\n    top:160px;\r\n    left:30px;\r\n}\r\n.b2\r\n{\r\n    position: absolute;\r\n    top:160px;\r\n    left:120px;\r\n}\r\n.fa-thumbs-up\r\n{\r\n    color:#00cccc;\r\n    margin: 10px;\r\n    margin-top: 30px;\r\n}\r\n.fa-address-book\r\n{\r\n    color:#00e600;\r\n    margin: 10px;\r\n}\r\n.fa-location-arrow\r\n{\r\n    color:#ff471a;\r\n    margin:10px;\r\n}\r\n.bio{\r\n    word-wrap: break-word;\r\n    max-width: 250px; ;\r\n    font-family: \"Raleway\"\r\n}\r\n@media only screen and (max-width:1000px) {\r\n    .about {\r\n      display:none;\r\n    }\r\n    .screen[_ngcontent-c1] {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 20px;\r\n    }\r\n  }\r\n.screen\r\n  {\r\n      position: absolute;\r\n      left:220px;\r\n      top:300px;\r\n  }\r\nul {\r\n    list-style-type: none;\r\n    margin: auto;\r\n    width: 90%;\r\n  }\r\n.filt{\r\n    float: left;\r\n    margin-right: 50px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt2{\r\n    float: left;\r\n    margin-right: 20px;\r\n    border: none;\r\n    background: none;\r\n    cursor:pointer;\r\n  }\r\n.filt:hover\r\n  {\r\n      border-bottom: solid;\r\n  }\r\n.filter_by\r\n  {\r\n      width: 80%;\r\n      height: 30px;\r\n      border-bottom: inset;\r\n  }\r\nli{\r\n    display:inline-block;\r\n  }\r\n.nav-item\r\n  {\r\n      padding-right: 50px;\r\n  }\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n  }\r\nth, td {\r\n    padding: 13px;\r\n  }\r\n "

/***/ }),

/***/ "./src/app/reserve/reserve.component.html":
/*!************************************************!*\
  !*** ./src/app/reserve/reserve.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen container\">\r\n    <form #form=\"ngForm\" novalidate >\r\n  <div class=\"row\" >\r\n    <div class=\"col-xs-4 col-4 col-md-4 form-group\" onload=\"dp.show()\">\r\n      <input placeholder=\"choose date\" name=\"reserDate\" class=\"form-control\"#dp=\"bsDatepicker\"  bsDatepicker [(ngModel)]=\"reserveTime\">\r\n    </div>\r\n      <button (click)=\"getHours()\" class=\"btn-success btn \" >check</button>\r\n  </div>\r\n  <table style=\"width:20%\">\r\n    <tr>\r\n        <th></th>\r\n        <th *ngFor=\"let k of counter\"> {{k}}:00</th>\r\n    </tr>\r\n    <tr>\r\n          <th>AM</th>\r\n          <th *ngFor=\"let k of checkBoxes1 ;let i=index\" ><input type=\"checkbox\" [checked]=\"false\" [disabled]=\"k\" (click)=\"deleteAdd(i)\"></th>\r\n        </tr>  \r\n    <tr>\r\n        <th>PM</th> \r\n        <th *ngFor=\"let k of checkBoxes2 ;let i=index\"><input type=\"checkbox\" [checked]=\"false\" [disabled]=\"k\" (click)=\"deleteAdd(i+12)\"></th>\r\n      </tr>\r\n    </table>\r\n  <br>\r\n  <button (click)=\"request()\" [routerLink]=\"['/home' ]\"  type=\"submit\" class=\"btn-success btn \" > request </button>\r\n  </form>\r\n  </div>\r\n{{selectedHour|json}}"

/***/ }),

/***/ "./src/app/reserve/reserve.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reserve/reserve.component.ts ***!
  \**********************************************/
/*! exports provided: ReserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveComponent", function() { return ReserveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReserveComponent = /** @class */ (function () {
    function ReserveComponent(es, route, at, datepipe) {
        this.es = es;
        this.route = route;
        this.at = at;
        this.datepipe = datepipe;
        this.reserveTime = new Date('oct 1 2018 0:00 am');
        this.selectedHour = new Array(24);
        this.counter = new Array(12);
        this.checkBoxes1 = new Array(12);
        this.checkBoxes2 = new Array(12);
        this.flag = false;
    }
    ReserveComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 12; i++) {
            this.counter[i] = i + 1;
        }
        for (var i = 0; i < 24; i++) {
            this.selectedHour[i] = -1;
        }
    };
    ReserveComponent.prototype.request = function () {
        // tslint:disable-next-line:max-line-length
        this.es.requesttime(this.route.snapshot.params['id'], this.at.currentUser.email, this.datepipe.transform(this.reserveTime, 'yyyy-MM-dd'), this.selectedHour).subscribe();
    };
    ReserveComponent.prototype.getHours = function () {
        var _this = this;
        // this.reserveTime | date: 'yyyy-MM-dd';
        this.es.getHours(this.route.snapshot.params['id'], this.datepipe.transform(this.reserveTime, 'yyyy-MM-dd')).subscribe(function (hours) { _this.enableAll(); _this.hours = hours; _this.enableCheckBoxes(); });
        this.enable = false;
    };
    ReserveComponent.prototype.enableCheckBoxes = function () {
        for (var i = 0; i < 12; i++) {
            for (var _i = 0, _a = this.hours; _i < _a.length; _i++) {
                var hr = _a[_i];
                if (hr === i) {
                    this.checkBoxes1[i] = true;
                }
            }
        }
        for (var i = 12; i < 24; i++) {
            for (var _b = 0, _c = this.hours; _b < _c.length; _b++) {
                var hr = _c[_b];
                if (hr === i) {
                    this.checkBoxes2[i - 12] = true;
                }
            }
        }
    };
    ReserveComponent.prototype.enableAll = function () {
        for (var i = 0; i < 12; i++) {
            this.checkBoxes1[i] = false;
        }
        for (var i = 0; i < 12; i++) {
            this.checkBoxes2[i] = false;
        }
    };
    ReserveComponent.prototype.deleteAdd = function (i) {
        for (var _i = 0, _a = this.selectedHour; _i < _a.length; _i++) {
            var num = _a[_i];
            if (i === num) {
                this.selectedHour[i] = -1;
                this.flag = true;
            }
        }
        if (this.flag === false) {
            this.selectedHour[i] = i;
        }
        this.flag = false;
    };
    ReserveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserve',
            template: __webpack_require__(/*! ./reserve.component.html */ "./src/app/reserve/reserve.component.html"),
            styles: [__webpack_require__(/*! ./reserve.component.css */ "./src/app/reserve/reserve.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _authencation_service__WEBPACK_IMPORTED_MODULE_4__["AuthencationService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], ReserveComponent);
    return ReserveComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let review of reviews \" class=\"card col-md-10\" style=\"margin-top:20px;\" >\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\"> {{review.userName}} </h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\"> {{review.rate}} </h6>\r\n    <p class=\"card-text\"> {{review.comment}} </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(es, route) {
        this.es = es;
        this.route = route;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.getReviews(this.route.snapshot.params['id']).subscribe(function (rev) { _this.reviews = rev; });
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _app_create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _app_p_profile_p_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/p-profile/p-profile.component */ "./src/app/p-profile/p-profile.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reserve/reserve.component */ "./src/app/reserve/reserve.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./places/places.component */ "./src/app/places/places.component.ts");
/* harmony import */ var _gift_gift_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gift/gift.component */ "./src/app/gift/gift.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");










var routes = [
    { path: 'sign', component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_0__["SignComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_authencation_service__WEBPACK_IMPORTED_MODULE_2__["AuthencationService"]] },
    { path: 'create', component: _app_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"] },
    { path: 'profile/:id', component: _app_p_profile_p_profile_component__WEBPACK_IMPORTED_MODULE_4__["PProfileComponent"] },
    { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_5__["EventsComponent"] },
    { path: 'reserve', component: _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_6__["ReserveComponent"] },
    { path: 'cities', component: _places_places_component__WEBPACK_IMPORTED_MODULE_7__["PlacesComponent"] },
    { path: 'gifts', component: _gift_gift_component__WEBPACK_IMPORTED_MODULE_8__["GiftComponent"] },
    { path: 'stats', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__["StatisticsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsService = /** @class */ (function () {
    // private base = 'http://192.168.137.1:8080/photofia-database-project/public/api/';
    function EventsService(http) {
        this.http = http;
        //private base = 'http://169.254.137.164/api/';
        this.base = 'http://127.0.0.1/api/';
    }
    EventsService.prototype.getImagesPhotographer = function (id, currentUser, orderBy, pageNumber) {
        return this.http.get(this.base + 'images/' + id + '/' + currentUser + orderBy + pageNumber);
    };
    EventsService.prototype.getImagesOfPlace = function (place) {
        return this.http.get(this.base + 'getAllIamges/' + place);
    };
    EventsService.prototype.getphotographer = function (id) {
        return this.http.get(this.base + 'photographer/' + id);
    };
    EventsService.prototype.getCustomer = function (id) {
        return this.http.get(this.base + 'customer/' + id);
    };
    EventsService.prototype.requesttime = function (id, currentUser, t, selectedHours) {
        var fv = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'photographer/' + id + '/' + currentUser + '/' + t, selectedHours, fv);
    };
    EventsService.prototype.saveform = function (obj) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'profile', obj, options);
    };
    EventsService.prototype.EventsApplications = function (id) {
        return this.http.get(this.base + 'eventsApplications/' + id);
    };
    EventsService.prototype.customerReserve = function (id) {
        return this.http.get(this.base + 'customersReserves/' + id);
    };
    EventsService.prototype.getHours = function (id, tim) {
        return this.http.get(this.base + 'photographer/' + id + '/' + tim);
    };
    EventsService.prototype.respondEvent = function (eventid, email, accepted) {
        var obj = { id: Number(), photographerEmail: String(), accepted: Number() };
        obj.id = eventid;
        obj.photographerEmail = email;
        obj.accepted = accepted;
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'updateEventNotification', obj, options);
    };
    EventsService.prototype.getprev = function (id) {
        return this.http.get(this.base + 'user/' + id);
    };
    EventsService.prototype.getFollowStatus = function (id, currentUsser) {
        return this.http.get(this.base + 'user/' + id + '/' + currentUsser);
    };
    EventsService.prototype.follow = function (id, currentUsser) {
        return this.http.get(this.base + 'follow/' + id + '/' + currentUsser);
    };
    EventsService.prototype.unfollow = function (id, currentUsser) {
        return this.http.get(this.base + 'unfollow/' + id + '/' + currentUsser);
    };
    EventsService.prototype.updateProfile = function (id, ph) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'updateUser', ph, options);
    };
    EventsService.prototype.applyEvent = function (eventId, currentUser) {
        return this.http.get(this.base + 'applyEvent/' + eventId + '/' + currentUser);
    };
    EventsService.prototype.getEvents = function (id) {
        return this.http.get(this.base + 'appliableEvents/' + id);
    };
    EventsService.prototype.getCities = function () {
        return this.http.get(this.base + 'getplaces/');
    };
    EventsService.prototype.createEvent = function (id, _event) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'createEvent/' + id, _event, options);
    };
    EventsService.prototype.getPlaces = function () {
        return this.http.get(this.base + 'getAllPlaces/');
    };
    EventsService.prototype.getPhotosHome = function (id) {
        return this.http.get(this.base + 'images/follow/' + id + '/time/1');
    };
    EventsService.prototype.getPhotographerCameras = function (id) {
        return this.http.get(this.base + 'getPhotographerCameras/' + id);
    };
    EventsService.prototype.getPhotographerLenses = function (id) {
        return this.http.get(this.base + 'getPhotographerLenses/' + id);
    };
    EventsService.prototype.getReviews = function (id) {
        return this.http.get('');
    };
    EventsService.prototype.getPhotoReviews = function (id, path) {
        return this.http.get('');
    };
    EventsService.prototype.reviewPhotographer = function (id, currentUser, rev) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'photographer/reviewPost/' + id + '/' + currentUser, rev, options);
    };
    EventsService.prototype.updateReviewPhotographer = function (id, currentUser, rev) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'photographer/updateReview/' + id + '/' + currentUser, rev, options);
    };
    EventsService.prototype.getCurrentReview = function (id, currentUser) {
        return this.http.get(this.base + 'photographer/review/' + id + '/' + currentUser);
    };
    EventsService.prototype.getCustomerPoints = function (id) {
        return this.http.get(this.base + 'getCustomerPoints/' + id);
    };
    EventsService.prototype.getGifts = function () {
        return this.http.get(this.base + 'getAllGifts');
    };
    EventsService.prototype.redeem = function (id, giftName) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'redeemGift/' + id, giftName, options);
    };
    EventsService.prototype.customerFollowers = function (id) {
        return this.http.get(this.base + 'customersFollows/' + id);
    };
    EventsService.prototype.uploadProfilePicture = function (id, selectedFile) {
        var fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name);
        return this.http.post(this.base + 'profile/profilePicture/' + id, selectedFile);
    };
    EventsService.prototype.getCurrentPhotoReview = function (id, currentUser, path) {
        return this.http.get(this.base + 'photographer/review/' + id + '/' + currentUser);
    };
    EventsService.prototype.reviewPhoto = function (id, currentUser, rev) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'photographer/reviewPost/' + id + '/' + currentUser, rev, options);
    };
    EventsService.prototype.updateReviewPhoto = function (id, currentUser, rev) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.base + 'photographer/updateReview/' + id + '/' + currentUser, rev, options);
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.signin\r\n{\r\n    width: 350px;\r\n    height: 549px;\r\n    background-color: white;\r\n    position: absolute;\r\n    top:100px;\r\n    right: 10%;\r\n    -webkit-animation-name: slip;\r\n            animation-name: slip;\r\n    -webkit-animation-duration: 4s;\r\n            animation-duration: 4s;\r\n}\r\n\r\n.logo\r\n{\r\n    width: 100px;\r\n    height: 120px;\r\n}\r\n\r\n.btnn{\r\n    width:100%;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n@-webkit-keyframes slip {\r\n    from {right: -10%;}\r\n    to {right: 10%;}\r\n}\r\n\r\n@keyframes slip {\r\n    from {right: -10%;}\r\n    to {right: 10%;}\r\n}\r\n\r\ni {\r\n    cursor: pointer;\r\n    margin-bottom: 10px;\r\n}\r\n\r\naa \r\n{\r\n    color:blue;\r\n}\r\n\r\n.form-control{\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n\r\n.glitch {\r\n    position: absolute;\r\n    background-image: url('create.jpg');\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n.glitch::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('create.jpg');\r\n    opacity: .5;\r\n    -webkit-animation: animate 3s linear infinite;\r\n            animation: animate 3s linear infinite;\r\n    mix-blend-mode: hard-light;\r\n  }\r\n\r\n@-webkit-keyframes animate\r\n{\r\n    0%,70%\r\n    {\r\n        background-position: 0 0 ;\r\n        -webkit-filter: hue-rotate(0);\r\n                filter: hue-rotate(0);\r\n    }\r\n    80%\r\n    {\r\n        background-position: 10px 0;\r\n        \r\n    }\r\n    90%\r\n    {\r\n        background-position: -5px 0px;\r\n        -webkit-filter: hue-rotate(360deg);\r\n                filter: hue-rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes animate\r\n{\r\n    0%,70%\r\n    {\r\n        background-position: 0 0 ;\r\n        -webkit-filter: hue-rotate(0);\r\n                filter: hue-rotate(0);\r\n    }\r\n    80%\r\n    {\r\n        background-position: 10px 0;\r\n        \r\n    }\r\n    90%\r\n    {\r\n        background-position: -5px 0px;\r\n        -webkit-filter: hue-rotate(360deg);\r\n                filter: hue-rotate(360deg);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/sign/sign.component.html":
/*!******************************************!*\
  !*** ./src/app/sign/sign.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\r\n    <div class=\"glitch\">\r\n<div class=\"signin\">\r\n  <div class=\"container\">\r\n    <form #form=\"ngForm\">\r\n      <div class=\"logo\">\r\n\r\n      </div>\r\n      <div *ngIf=\"invalid\" class=\"alert alert-danger col-lg-4 \">\r\n          invalid data\r\n        </div>\r\n      <input #email=\"ngModel\" required name=\"email\" [(ngModel)]=\"login.email\" type=\"text\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Enter your email\" >\r\n      <input required #pass=\"ngModel\" name=\"pass\"  [(ngModel)]=\"login.pass\" type=\"password\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Enter your password\" > \r\n      <button (click)=\"signin()\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btnn btn-primary\">Sign in</button>\r\n      <a href=\"#\">Forget password?</a>\r\n      <p>\r\n          Don't have an account? <a [routerLink]=\"['/create']\"> Sign up</a>\r\n      </p>\r\n    </form>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authencation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authencation.service */ "./src/app/authencation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_logIn_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/logIn.model */ "./src/app/models/logIn.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignComponent = /** @class */ (function () {
    function SignComponent(as, route, cookie) {
        this.as = as;
        this.route = route;
        this.cookie = cookie;
        this.login = new _models_logIn_model__WEBPACK_IMPORTED_MODULE_3__["LogIn"]('', '');
        this.invalid = false;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
    }
    SignComponent.prototype.signin = function () {
        var _this = this;
        this.as.login(this.login).subscribe(function (resp) {
            if (resp) {
                _this.invalid = true;
            }
            else {
                _this.env.email = _this.login.email;
                _this.cookie.put('email', _this.login.email);
                _this.route.navigate(['home']);
            }
        });
    };
    SignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! ./sign.component.html */ "./src/app/sign/sign.component.html"),
            styles: [__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")]
        }),
        __metadata("design:paramtypes", [_authencation_service__WEBPACK_IMPORTED_MODULE_1__["AuthencationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas id=\"myChart\" width=\"400\" height=\"400\"></canvas>\r\n<script>\r\nvar ctx = document.getElementById(\"myChart\").getContext('2d');\r\nvar myChart = new Chart(ctx, {\r\n    type: 'bar',\r\n    data: {\r\n        labels: [\"Red\", \"Blue\", \"Yellow\", \"Green\", \"Purple\", \"Orange\"],\r\n        datasets: [{\r\n            label: '# of Votes',\r\n            data: [12, 19, 3, 5, 2, 3],\r\n            backgroundColor: [\r\n                'rgba(255, 99, 132, 0.2)',\r\n                'rgba(54, 162, 235, 0.2)',\r\n                'rgba(255, 206, 86, 0.2)',\r\n                'rgba(75, 192, 192, 0.2)',\r\n                'rgba(153, 102, 255, 0.2)',\r\n                'rgba(255, 159, 64, 0.2)'\r\n            ],\r\n            borderColor: [\r\n                'rgba(255,99,132,1)',\r\n                'rgba(54, 162, 235, 1)',\r\n                'rgba(255, 206, 86, 1)',\r\n                'rgba(75, 192, 192, 1)',\r\n                'rgba(153, 102, 255, 1)',\r\n                'rgba(255, 159, 64, 1)'\r\n            ],\r\n            borderWidth: 1\r\n        }]\r\n    },\r\n    options: {\r\n        scales: {\r\n            yAxes: [{\r\n                ticks: {\r\n                    beginAtZero:true\r\n                }\r\n            }]\r\n        }\r\n    }\r\n});\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent.prototype.add = function () {
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    email: 'philo@yahoo.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ayman\Desktop\photofia\photofia\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map