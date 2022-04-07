"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome_welcome_module_ts"],{

/***/ 2282:
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 9479);








const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage,
    },
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage],
    })
], WelcomePageModule);



/***/ }),

/***/ 9479:
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 9196);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 9233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-appauth */ 7798);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 2340);







let WelcomePage = class WelcomePage {
    constructor(authService, navController) {
        this.authService = authService;
        this.navController = navController;
    }
    ngOnInit() {
        this.sub = this.authService.events$.subscribe(action => this.onAction(action));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    signIn() {
        this.authService.signIn({ audience: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.oidcConfig.audience }).catch(error => console.error(`Sign in error: ${error}`));
    }
    onAction(action) {
        if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_2__.AuthActions.LoadTokenFromStorageSuccess || action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_2__.AuthActions.SignInSuccess) {
            this.navController.navigateRoot('/tabs');
        }
    }
};
WelcomePage.ctorParameters = () => [
    { type: ionic_appauth__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-welcome',
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 9233:
/*!************************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".hipster {\n  display: block;\n  width: 209px;\n  height: 300px;\n  margin: 20px auto;\n  background: url('jhipster_family_member_0.svg') no-repeat center top;\n  background-size: contain;\n}\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url('jhipster_family_member_0.svg') no-repeat center top;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvRUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUEsMEZBQUE7O0FBQ0E7RUFNRTtJQUNFLG9FQUFBO0lBQ0Esd0JBQUE7RUFKRjtBQUNGIiwiZmlsZSI6IndlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpcHN0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwOXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2poaXBzdGVyX2ZhbWlseV9tZW1iZXJfMC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4vKiB3YWl0IGF1dG9wcmVmaXhlciB1cGRhdGUgdG8gYWxsb3cgc2ltcGxlIGdlbmVyYXRpb24gb2YgaGlnaCBwaXhlbCBkZW5zaXR5IG1lZGlhIHF1ZXJ5ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgLmhpcHN0ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9qaGlwc3Rlcl9mYW1pbHlfbWVtYmVyXzAuc3ZnJykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 9196:
/*!************************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> {{ 'WELCOME_TITLE' | translate }}, Java Hipster! </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <span class=\"hipster\"></span>\n  <div>\n    <ion-button expand=\"block\" (click)=\"signIn()\" id=\"signIn\">{{ 'LOGIN' | translate }}</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome_welcome_module_ts.js.map