(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome/welcome.module */ 2282)).then(m => m.WelcomePageModule) },
    { path: 'tabs', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then(m => m.TabsPageModule) },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule) },
    { path: 'callback', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth-callback_auth-callback_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth-callback/auth-callback.module */ 7129)).then(m => m.AuthCallbackPageModule) },
    { path: 'logout', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_end-session_end-session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/end-session/end-session.module */ 8243)).then(m => m.EndSessionPageModule) },
    { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-appauth */ 7798);








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, translate, authService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.authService = authService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.init();
            if (this.platform.is('mobile') && !this.platform.is('mobileweb')) {
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            }
        }));
        this.initTranslate();
    }
    initTranslate() {
        const enLang = 'en';
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang(enLang);
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use(enLang); // Set your language here
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: ionic_appauth__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 5021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-webstorage */ 9930);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 8189);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__.NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__.IonicStorageModule.forRoot(),
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
                useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 991:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-config.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthConfigService": () => (/* binding */ AuthConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5021);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);




let AuthConfigService = class AuthConfigService {
    constructor(http) {
        this.http = http;
    }
    loadAuthConfig() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth-info`)
            .toPromise()
            .then(data => {
            this.authConfig = data;
            if (this.authConfig.issuer.endsWith('/')) {
                this.authConfig.issuer = this.authConfig.issuer.substring(0, this.authConfig.issuer.length - 1);
            }
            // Override issuer and client ID with values from API
            _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidcConfig.server_host = this.authConfig.issuer;
            _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidcConfig.client_id = this.authConfig.clientId;
        })
            .catch(error => {
            console.error('Failed to fetch remote OIDC configuration.');
            console.error(error);
        });
    }
    getConfig() {
        return this.authConfig;
    }
};
AuthConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthConfigService);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 5021);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openid/appauth */ 7154);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openid_appauth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ 2459);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-appauth */ 7798);
/* harmony import */ var _auth_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-config.service */ 991);









const authInitializer = (authConfig) => {
    return () => {
        return authConfig.loadAuthConfig();
    };
};
let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
        providers: [
            {
                provide: _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.StorageBackend,
                useFactory: _factories__WEBPACK_IMPORTED_MODULE_1__.storageFactory,
                deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform],
            },
            {
                provide: _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.Requestor,
                useFactory: _factories__WEBPACK_IMPORTED_MODULE_1__.httpFactory,
                deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient],
            },
            {
                provide: ionic_appauth__WEBPACK_IMPORTED_MODULE_2__.Browser,
                useFactory: _factories__WEBPACK_IMPORTED_MODULE_1__.browserFactory,
                deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform],
            },
            {
                provide: ionic_appauth__WEBPACK_IMPORTED_MODULE_2__.AuthService,
                useFactory: _factories__WEBPACK_IMPORTED_MODULE_1__.authFactory,
                deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone, _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.Requestor, ionic_appauth__WEBPACK_IMPORTED_MODULE_2__.Browser, _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.StorageBackend],
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.APP_INITIALIZER,
                useFactory: authInitializer,
                multi: true,
                deps: [_auth_config_service__WEBPACK_IMPORTED_MODULE_3__.AuthConfigService],
            },
        ],
    })
], AuthModule);



/***/ }),

/***/ 7311:
/*!************************************************!*\
  !*** ./src/app/auth/factories/auth.factory.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFactory": () => (/* binding */ authFactory)
/* harmony export */ });
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-appauth */ 7798);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/app */ 3253);



const authFactory = (platform, ngZone, requestor, browser, storage) => {
    const authService = new ionic_appauth__WEBPACK_IMPORTED_MODULE_0__.AuthService(browser, storage, requestor);
    if (platform.is('mobile') && !platform.is('mobileweb')) {
        _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.oidcConfig.scopes += ' offline_access';
        _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.oidcConfig.redirect_url = 'dev.localhost.ionic:/callback';
        _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.oidcConfig.end_session_redirect_url = 'dev.localhost.ionic:/logout';
    }
    authService.authConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.oidcConfig;
    if (platform.is('mobile') && !platform.is('mobileweb')) {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.addListener('appUrlOpen', (data) => {
            if (data.url !== undefined) {
                ngZone.run(() => {
                    if (data.url.indexOf(authService.authConfig.redirect_url) === 0) {
                        authService.authorizationCallback(data.url);
                    }
                    else {
                        authService.endSessionCallback();
                    }
                });
            }
        });
    }
    return authService;
};


/***/ }),

/***/ 1269:
/*!***************************************************!*\
  !*** ./src/app/auth/factories/browser.factory.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "browserFactory": () => (/* binding */ browserFactory)
/* harmony export */ });
/* harmony import */ var ionic_appauth_lib_cordova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-appauth/lib/cordova */ 9704);
/* harmony import */ var ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth/lib/capacitor */ 5638);


const browserFactory = (platform) => {
    return platform.is('cordova') ? new ionic_appauth_lib_cordova__WEBPACK_IMPORTED_MODULE_0__.CordovaBrowser() : new ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_1__.CapacitorBrowser();
};


/***/ }),

/***/ 820:
/*!************************************************!*\
  !*** ./src/app/auth/factories/http.factory.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpFactory": () => (/* binding */ httpFactory)
/* harmony export */ });
/* harmony import */ var ionic_appauth_lib_cordova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-appauth/lib/cordova */ 9704);
/* harmony import */ var _ng_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ng-http.service */ 379);


const httpFactory = (platform, httpClient) => {
    return platform.is('cordova') ? new ionic_appauth_lib_cordova__WEBPACK_IMPORTED_MODULE_0__.CordovaRequestor() : new _ng_http_service__WEBPACK_IMPORTED_MODULE_1__.NgHttpService(httpClient);
};


/***/ }),

/***/ 2459:
/*!*****************************************!*\
  !*** ./src/app/auth/factories/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFactory": () => (/* reexport safe */ _auth_factory__WEBPACK_IMPORTED_MODULE_0__.authFactory),
/* harmony export */   "browserFactory": () => (/* reexport safe */ _browser_factory__WEBPACK_IMPORTED_MODULE_1__.browserFactory),
/* harmony export */   "httpFactory": () => (/* reexport safe */ _http_factory__WEBPACK_IMPORTED_MODULE_2__.httpFactory),
/* harmony export */   "storageFactory": () => (/* reexport safe */ _storage_factory__WEBPACK_IMPORTED_MODULE_3__.storageFactory)
/* harmony export */ });
/* harmony import */ var _auth_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.factory */ 7311);
/* harmony import */ var _browser_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser.factory */ 1269);
/* harmony import */ var _http_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.factory */ 820);
/* harmony import */ var _storage_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.factory */ 7635);






/***/ }),

/***/ 7635:
/*!***************************************************!*\
  !*** ./src/app/auth/factories/storage.factory.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageFactory": () => (/* binding */ storageFactory)
/* harmony export */ });
/* harmony import */ var ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-appauth/lib/capacitor */ 5638);
/* harmony import */ var ionic_appauth_lib_cordova__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth/lib/cordova */ 9704);


let storageFactory = (platform) => {
    return platform.is('cordova') ? new ionic_appauth_lib_cordova__WEBPACK_IMPORTED_MODULE_1__.CordovaSecureStorage() : new ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_0__.CapacitorStorage();
};


/***/ }),

/***/ 379:
/*!*****************************************!*\
  !*** ./src/app/auth/ng-http.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgHttpService": () => (/* binding */ NgHttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5021);



let NgHttpService = class NgHttpService {
    constructor(http) {
        this.http = http;
    }
    xhr(settings) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!settings.method) {
                settings.method = 'GET';
            }
            switch (settings.method) {
                case 'GET':
                    return this.http.get(settings.url, { headers: this.getHeaders(settings.headers) }).toPromise();
                case 'POST':
                    return this.http.post(settings.url, settings.data, { headers: this.getHeaders(settings.headers) }).toPromise();
                case 'PUT':
                    return this.http.put(settings.url, settings.data, { headers: this.getHeaders(settings.headers) }).toPromise();
                case 'DELETE':
                    return this.http.delete(settings.url, { headers: this.getHeaders(settings.headers) }).toPromise();
            }
        });
    }
    getHeaders(headers) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        if (headers !== undefined) {
            Object.keys(headers).forEach(key => {
                httpHeaders = httpHeaders.append(key, headers[key]);
            });
        }
        return httpHeaders;
    }
};
NgHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NgHttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], NgHttpService);



/***/ }),

/***/ 8189:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 7798);





let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.servicesEndpoint = _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL.replace('api', 'services');
    }
    intercept(request, next) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.handleAccess(request, next));
    }
    handleAccess(request, next) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // prettier-ignore
            if (!request || !request.url || (/^http/.test(request.url) &&
                !request.url.startsWith(_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL) && !request.url.startsWith(this.servicesEndpoint))) {
                return next.handle(request).toPromise();
            }
            try {
                const token = yield this.authService.getValidToken();
                if (!!token) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${token.accessToken}`,
                        },
                    });
                }
            }
            catch (err) {
                // ignore
            }
            return next.handle(request).toPromise();
        });
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 5146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
var ApiService_1;




let ApiService = ApiService_1 = class ApiService {
    constructor(http) {
        this.http = http;
    }
    get(endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams(),
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
            for (let k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(ApiService_1.API_URL + '/' + endpoint, reqOpts);
    }
    post(endpoint, body, reqOpts) {
        return this.http.post(ApiService_1.API_URL + '/' + endpoint, body, reqOpts);
    }
    put(endpoint, body, reqOpts) {
        return this.http.put(ApiService_1.API_URL + '/' + endpoint, body, reqOpts);
    }
    delete(endpoint, reqOpts) {
        return this.http.delete(ApiService_1.API_URL + '/' + endpoint, reqOpts);
    }
    patch(endpoint, body, reqOpts) {
        return this.http.put(ApiService_1.API_URL + '/' + endpoint, body, reqOpts);
    }
};
ApiService.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ApiService = ApiService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api',
    oidcConfig: {
        client_id: 'web_app',
        server_host: 'http://localhost:9080/auth/realms/jhipster',
        redirect_url: window.location.origin + '/callback',
        end_session_redirect_url: window.location.origin + '/logout',
        scopes: 'openid profile',
        pkce: true,
        audience: 'api://default',
    },
    scheme: 'dev.localhost.ionic:/',
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map