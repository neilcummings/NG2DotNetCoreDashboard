webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = (function () {
    function AdminGuard(authService) {
        this.authService = authService;
    }
    AdminGuard.prototype.canActivate = function () {
        return this.authService.isAdmin;
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], AdminGuard);

var _a;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrService = (function () {
    function ToastrService(toastr, toastOpts) {
        this.toastr = toastr;
        this.toastOpts = toastOpts;
        this.toastOpts.positionClass = 'toast-bottom-right';
    }
    ToastrService.prototype.success = function (message) {
        this.toastr.success(message);
    };
    ToastrService.prototype.info = function (message) {
        this.toastr.info(message);
    };
    ToastrService.prototype.warning = function (message) {
        this.toastr.warning(message);
    };
    ToastrService.prototype.error = function (message) {
        this.toastr.error(message);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastOptions"]) === "function" && _b || Object])
], ToastrService);

var _a, _b;
//# sourceMappingURL=toastr.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(424),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.model);
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.toastr.success('Registration successful');
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.toastr.error('Failed to register');
            console.log(error._body);
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(426),
        styles: [__webpack_require__(389)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(428),
        styles: [__webpack_require__(391)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(429),
        styles: [__webpack_require__(392)]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecureComponent = (function () {
    function SecureComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    SecureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    return SecureComponent;
}());
SecureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-secure',
        template: __webpack_require__(430),
        styles: [__webpack_require__(393)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], SecureComponent);

var _a;
//# sourceMappingURL=secure.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(432),
        styles: [__webpack_require__(395)]
    }),
    __metadata("design:paramtypes", [])
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 311;


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(329);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(36);
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
    function AppComponent(toastr, vRef, auth) {
        this.toastr = toastr;
        this.auth = auth;
        this.title = 'app works!';
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.auth.checkAuthenticationStatus();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(425),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reports_reports_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__table_table_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__secure_secure_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_admin_guard__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_10__secure_secure_component__["a" /* SecureComponent */],
            __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__["a" /* AdminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_15__guards_admin_guard__["a" /* AdminGuard */],
            __WEBPACK_IMPORTED_MODULE_16__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__["a" /* AuthenticationService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__accounts_register_register_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_toastr_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__accounts_register_register_component__["a" /* RegisterComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__services_toastr_service__["a" /* ToastrService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(auth, toastr) {
        this.auth = auth;
        this.toastr = toastr;
        this.isIn = false;
    }
    NavComponent.prototype.toggleState = function () {
        this.isIn = !this.isIn;
    };
    NavComponent.prototype.ngOnInit = function () {
        console.log(this.auth.currentUser);
    };
    NavComponent.prototype.login = function (formvalues) {
        var _this = this;
        console.log(formvalues);
        this.auth.login(formvalues.username, formvalues.password)
            .subscribe(function (data) {
            _this.toastr.success('Logged into App');
        }, function (error) {
            _this.toastr.error('Failed to log in');
            console.log(error._body);
        });
    };
    NavComponent.prototype.logout = function () {
        this.toastr.success('Logged out');
        this.auth.logout();
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cr-nav',
        template: __webpack_require__(427),
        styles: [__webpack_require__(390)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reports_reports_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_table_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secure_secure_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_admin_guard__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_accounts_register_register_component__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });








var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__core_accounts_register_register_component__["a" /* RegisterComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_1__reports_reports_component__["a" /* ReportsComponent */] },
    { path: 'tables', component: __WEBPACK_IMPORTED_MODULE_2__table_table_component__["a" /* TableComponent */] },
    { path: 'secure', component: __WEBPACK_IMPORTED_MODULE_3__secure_secure_component__["a" /* SecureComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_layout_table_layout_component__ = __webpack_require__(328);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__table_layout_table_layout_component__["a" /* TableLayoutComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__table_layout_table_layout_component__["a" /* TableLayoutComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableLayoutComponent = (function () {
    function TableLayoutComponent() {
    }
    TableLayoutComponent.prototype.ngOnInit = function () {
    };
    return TableLayoutComponent;
}());
TableLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cr-table-layout',
        template: __webpack_require__(431),
        styles: [__webpack_require__(394)]
    }),
    __metadata("design:paramtypes", [])
], TableLayoutComponent);

//# sourceMappingURL=table-layout.component.js.map

/***/ }),

/***/ 329:
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function () {
    function AuthenticationService(http, config) {
        this.http = http;
        this.config = config;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password }, options)
            .map(function (response) {
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.checkAuthenticationStatus();
            }
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthenticationService.prototype.logout = function () {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.checkAuthenticationStatus = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.config.apiUrl + '/users/' + user._id, user, this.jwt());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/users/' + _id, this.jwt());
    };
    UserService.prototype.jwt = function () {
        //create auth header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "/* Top Navigation */\n\n.top-nav {\n  padding: 0 15px;\n}\n\n.top-nav>li {\n  display: inline-block;\n  float: left;\n}\n\n.top-nav>li>a {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  line-height: 20px;\n  color: #999;\n}\n\n.top-nav>li>a:hover,\n.top-nav>li>a:focus,\n.top-nav>.open>a,\n.top-nav>.open>a:hover,\n.top-nav>.open>a:focus {\n  color: #fff;\n  background-color: #000;\n}\n\n.top-nav>.open>.dropdown-menu {\n  float: left;\n  position: absolute;\n  margin-top: 0;\n  border: 1px solid rgba(0,0,0,.15);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  background-color: #fff;\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n}\n\n.top-nav>.open>.dropdown-menu>li>a {\n  white-space: normal;\n}\n\nul.message-dropdown {\n  padding: 0;\n  max-height: 250px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\nli.message-preview {\n  width: 275px;\n  border-bottom: 1px solid rgba(0,0,0,.15);\n}\n\nli.message-preview>a {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\nli.message-footer {\n  margin: 5px 0;\n}\n\nul.alert-dropdown {\n  width: 200px;\n}\n\n/* Side Navigation */\n\n@media(min-width:768px) {\n  .side-nav {\n    position: fixed;\n    top: 51px;\n    left: 225px;\n    width: 225px;\n    margin-left: -225px;\n    border: none;\n    border-radius: 0;\n    overflow-y: auto;\n    background-color: #222;\n    bottom: 0;\n    overflow-x: hidden;\n    padding-bottom: 40px;\n  }\n\n  .side-nav>li>a {\n    width: 225px;\n  }\n\n  .side-nav li a:hover,\n  .side-nav li a:focus {\n    outline: none;\n    background-color: #000 !important;\n  }\n}\n\n.side-nav>li>ul {\n  padding: 0;\n}\n\n.side-nav>li>ul>li>a {\n  display: block;\n  padding: 10px 15px 10px 38px;\n  text-decoration: none;\n  color: #999;\n}\n\n.side-nav>li>ul>li>a:hover {\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 126,
	"./af.js": 126,
	"./ar": 133,
	"./ar-dz": 127,
	"./ar-dz.js": 127,
	"./ar-kw": 128,
	"./ar-kw.js": 128,
	"./ar-ly": 129,
	"./ar-ly.js": 129,
	"./ar-ma": 130,
	"./ar-ma.js": 130,
	"./ar-sa": 131,
	"./ar-sa.js": 131,
	"./ar-tn": 132,
	"./ar-tn.js": 132,
	"./ar.js": 133,
	"./az": 134,
	"./az.js": 134,
	"./be": 135,
	"./be.js": 135,
	"./bg": 136,
	"./bg.js": 136,
	"./bn": 137,
	"./bn.js": 137,
	"./bo": 138,
	"./bo.js": 138,
	"./br": 139,
	"./br.js": 139,
	"./bs": 140,
	"./bs.js": 140,
	"./ca": 141,
	"./ca.js": 141,
	"./cs": 142,
	"./cs.js": 142,
	"./cv": 143,
	"./cv.js": 143,
	"./cy": 144,
	"./cy.js": 144,
	"./da": 145,
	"./da.js": 145,
	"./de": 148,
	"./de-at": 146,
	"./de-at.js": 146,
	"./de-ch": 147,
	"./de-ch.js": 147,
	"./de.js": 148,
	"./dv": 149,
	"./dv.js": 149,
	"./el": 150,
	"./el.js": 150,
	"./en-au": 151,
	"./en-au.js": 151,
	"./en-ca": 152,
	"./en-ca.js": 152,
	"./en-gb": 153,
	"./en-gb.js": 153,
	"./en-ie": 154,
	"./en-ie.js": 154,
	"./en-nz": 155,
	"./en-nz.js": 155,
	"./eo": 156,
	"./eo.js": 156,
	"./es": 158,
	"./es-do": 157,
	"./es-do.js": 157,
	"./es.js": 158,
	"./et": 159,
	"./et.js": 159,
	"./eu": 160,
	"./eu.js": 160,
	"./fa": 161,
	"./fa.js": 161,
	"./fi": 162,
	"./fi.js": 162,
	"./fo": 163,
	"./fo.js": 163,
	"./fr": 166,
	"./fr-ca": 164,
	"./fr-ca.js": 164,
	"./fr-ch": 165,
	"./fr-ch.js": 165,
	"./fr.js": 166,
	"./fy": 167,
	"./fy.js": 167,
	"./gd": 168,
	"./gd.js": 168,
	"./gl": 169,
	"./gl.js": 169,
	"./gom-latn": 170,
	"./gom-latn.js": 170,
	"./he": 171,
	"./he.js": 171,
	"./hi": 172,
	"./hi.js": 172,
	"./hr": 173,
	"./hr.js": 173,
	"./hu": 174,
	"./hu.js": 174,
	"./hy-am": 175,
	"./hy-am.js": 175,
	"./id": 176,
	"./id.js": 176,
	"./is": 177,
	"./is.js": 177,
	"./it": 178,
	"./it.js": 178,
	"./ja": 179,
	"./ja.js": 179,
	"./jv": 180,
	"./jv.js": 180,
	"./ka": 181,
	"./ka.js": 181,
	"./kk": 182,
	"./kk.js": 182,
	"./km": 183,
	"./km.js": 183,
	"./kn": 184,
	"./kn.js": 184,
	"./ko": 185,
	"./ko.js": 185,
	"./ky": 186,
	"./ky.js": 186,
	"./lb": 187,
	"./lb.js": 187,
	"./lo": 188,
	"./lo.js": 188,
	"./lt": 189,
	"./lt.js": 189,
	"./lv": 190,
	"./lv.js": 190,
	"./me": 191,
	"./me.js": 191,
	"./mi": 192,
	"./mi.js": 192,
	"./mk": 193,
	"./mk.js": 193,
	"./ml": 194,
	"./ml.js": 194,
	"./mr": 195,
	"./mr.js": 195,
	"./ms": 197,
	"./ms-my": 196,
	"./ms-my.js": 196,
	"./ms.js": 197,
	"./my": 198,
	"./my.js": 198,
	"./nb": 199,
	"./nb.js": 199,
	"./ne": 200,
	"./ne.js": 200,
	"./nl": 202,
	"./nl-be": 201,
	"./nl-be.js": 201,
	"./nl.js": 202,
	"./nn": 203,
	"./nn.js": 203,
	"./pa-in": 204,
	"./pa-in.js": 204,
	"./pl": 205,
	"./pl.js": 205,
	"./pt": 207,
	"./pt-br": 206,
	"./pt-br.js": 206,
	"./pt.js": 207,
	"./ro": 208,
	"./ro.js": 208,
	"./ru": 209,
	"./ru.js": 209,
	"./sd": 210,
	"./sd.js": 210,
	"./se": 211,
	"./se.js": 211,
	"./si": 212,
	"./si.js": 212,
	"./sk": 213,
	"./sk.js": 213,
	"./sl": 214,
	"./sl.js": 214,
	"./sq": 215,
	"./sq.js": 215,
	"./sr": 217,
	"./sr-cyrl": 216,
	"./sr-cyrl.js": 216,
	"./sr.js": 217,
	"./ss": 218,
	"./ss.js": 218,
	"./sv": 219,
	"./sv.js": 219,
	"./sw": 220,
	"./sw.js": 220,
	"./ta": 221,
	"./ta.js": 221,
	"./te": 222,
	"./te.js": 222,
	"./tet": 223,
	"./tet.js": 223,
	"./th": 224,
	"./th.js": 224,
	"./tl-ph": 225,
	"./tl-ph.js": 225,
	"./tlh": 226,
	"./tlh.js": 226,
	"./tr": 227,
	"./tr.js": 227,
	"./tzl": 228,
	"./tzl.js": 228,
	"./tzm": 230,
	"./tzm-latn": 229,
	"./tzm-latn.js": 229,
	"./tzm.js": 230,
	"./uk": 231,
	"./uk.js": 231,
	"./ur": 232,
	"./ur.js": 232,
	"./uz": 234,
	"./uz-latn": 233,
	"./uz-latn.js": 233,
	"./uz.js": 234,
	"./vi": 235,
	"./vi.js": 235,
	"./x-pseudo": 236,
	"./x-pseudo.js": 236,
	"./yo": 237,
	"./yo.js": 237,
	"./zh-cn": 238,
	"./zh-cn.js": 238,
	"./zh-hk": 239,
	"./zh-hk.js": 239,
	"./zh-tw": 240,
	"./zh-tw.js": 240
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 400;


/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Admin Area</h1>\n  <p>You're logged in with JWT!!</p>\n  <div>\n    Users from secure api end point:\n    <ul>\n      <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\n    </ul>\n  </div>\n  <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>\n"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <cr-nav></cr-nav>\n  <div id=\"page-wrapper\">\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <h2>Register</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      <a [routerLink]=\"['/home']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Angular 2 Dashboard</a>\n  </div>\n  <!-- Top Menu Items -->\n\n  <!--if authenticated-->\n  <ul class=\"nav navbar-right top-nav\" *ngIf=\"auth.isAuthenticated()\">\n    <li class=\"dropdown\" dropdown>\n      <a href dropdownToggle class=\"dropdown-toggle\" (click)=\"false\"><i class=\"fa fa-user\"></i> {{auth.currentUser.firstName}} {{auth.currentUser.lastName}}<b class=\"caret\"></b></a>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <li role=\"menuitem\">\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\n        </li>\n        <li role=\"menuitem\">\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\n        </li>\n        <li role=\"menuitem\">\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n        </li>\n        <li class=\"divider\"></li>\n        <li role=\"menuitem\">\n          <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor: pointer\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n\n  <!--if not auth-->\n\n  <ul class=\"nav navbar-right top-nav\" *ngIf=\"!auth.isAuthenticated()\">\n    <li>\n      <a [routerLink]=\"['/register']\">Sign Up</a>\n    </li>\n    <li>\n      <form action=\"\" class=\"navbar-form\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Email\" (ngModel)=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" (ngModel)=\"password\">\n        </div>\n        <button class=\"btn btn-primary\">Sign In</button>\n      </form>\n    </li>\n  </ul>\n\n  <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{'in': isIn}\">\n    <ul class=\"nav navbar-nav side-nav\">\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/home']\" ><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/reports']\" ><i class=\"fa fa-fw fa-bar-chart-o\"></i> Reports</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/tables']\" ><i class=\"fa fa-fw fa-table\"></i> Tables</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf=\"auth.isAuthenticated()\">\n        <a [routerLink]=\"['/secure']\" ><i class=\"fa fa-fw fa-lock\"></i> Secure Area</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf=\"auth.isAdmin\">\n        <a [routerLink]=\"['/admin']\" ><i class=\"fa fa-fw fa-users\"></i> Admin Area</a>\n      </li>\n      <li>\n        <a class=\"dropdown-toggle\" (click)=\"toggleState()\" style=\"cursor: pointer\"><i class=\"fa fa-fw fa-arrows-v\"></i> Dropdown <i class=\"fa fa-fw fa-caret-down\"></i></a>\n        <ul id=\"demo\" class=\"collapse\" [ngClass]=\"{'in': isIn}\">\n          <li>\n            <a href=\"#\">Dropdown Item</a>\n          </li>\n          <li>\n            <a href=\"#\">Dropdown Item</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <!-- /.navbar-collapse -->\n</nav>\n"

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<!-- Page Heading -->\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <h1 class=\"page-header\">\n      Dashboard <small>Statistics Overview</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">\n        <i class=\"fa fa-dashboard\"></i> Dashboard\n      </li>\n    </ol>\n  </div>\n</div>\n<!-- /.row -->\n\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"alert alert-danger\">\n      <i class=\"fa fa-info-circle\"></i>  <strong>Warning</strong> There is no manager defined\n    </div>\n  </div>\n</div>\n<!-- /.row -->\n\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-6\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            <i class=\"fa fa-comments fa-5x\"></i>\n          </div>\n          <div class=\"col-xs-9 text-right\">\n            <div class=\"huge\">26</div>\n            <div>New Comments!</div>\n          </div>\n        </div>\n      </div>\n      <a href=\"#\">\n        <div class=\"panel-footer\">\n          <span class=\"pull-left\">View Details</span>\n          <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n          <div class=\"clearfix\"></div>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6\">\n    <div class=\"panel panel-green\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            <i class=\"fa fa-tasks fa-5x\"></i>\n          </div>\n          <div class=\"col-xs-9 text-right\">\n            <div class=\"huge\">12</div>\n            <div>New Tasks!</div>\n          </div>\n        </div>\n      </div>\n      <a href=\"#\">\n        <div class=\"panel-footer\">\n          <span class=\"pull-left\">View Details</span>\n          <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n          <div class=\"clearfix\"></div>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6\">\n    <div class=\"panel panel-yellow\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            <i class=\"fa fa-shopping-cart fa-5x\"></i>\n          </div>\n          <div class=\"col-xs-9 text-right\">\n            <div class=\"huge\">124</div>\n            <div>New Orders!</div>\n          </div>\n        </div>\n      </div>\n      <a href=\"#\">\n        <div class=\"panel-footer\">\n          <span class=\"pull-left\">View Details</span>\n          <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n          <div class=\"clearfix\"></div>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-6\">\n    <div class=\"panel panel-red\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            <i class=\"fa fa-support fa-5x\"></i>\n          </div>\n          <div class=\"col-xs-9 text-right\">\n            <div class=\"huge\">13</div>\n            <div>Support Tickets!</div>\n          </div>\n        </div>\n      </div>\n      <a href=\"#\">\n        <div class=\"panel-footer\">\n          <span class=\"pull-left\">View Details</span>\n          <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n          <div class=\"clearfix\"></div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n<!-- /.row -->\n"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<!-- Page Heading -->\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <h1 class=\"page-header\">\n      Charts\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li>\n        <i class=\"fa fa-dashboard\"></i>  <a [routerLink]=\"['/']\">Dashboard</a>\n      </li>\n      <li class=\"active\">\n        <i class=\"fa fa-bar-chart-o\"></i> Reports\n      </li>\n    </ol>\n  </div>\n</div>\n<!-- /.row -->\n"

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Admin Area</h1>\n  <p>You're logged in with JWT!!</p>\n  <div>\n    Users from secure api end point:\n    <ul>\n      <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\n    </ul>\n  </div>\n  <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>\n"

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <caption>Table</caption>\n  <thead>\n  <tr>\n    <th>Column 1</th>\n    <th>Column 2</th>\n    <th>Column 3</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>Some value</td>\n    <td>Some value</td>\n    <td>Some value</td>\n  </tr>\n  <tr>\n    <td>Some value</td>\n    <td>Some value</td>\n    <td>Some value</td>\n  </tr>\n  <tr>\n    <td>Some value</td>\n    <td>Some value</td>\n    <td>Some value</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = "<cr-table-layout></cr-table-layout>\n"

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(312);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
        this.apiUrl = 'http://localhost:5000/api';
    }
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ })

},[484]);
//# sourceMappingURL=main.bundle.js.map