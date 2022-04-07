"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_auth-callback_auth-callback_module_ts"],{

/***/ 7129:
/*!************************************************************!*\
  !*** ./src/app/auth/auth-callback/auth-callback.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthCallbackPageModule": () => (/* binding */ AuthCallbackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_callback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-callback.page */ 5636);







const routes = [
    {
        path: '',
        component: _auth_callback_page__WEBPACK_IMPORTED_MODULE_0__.AuthCallbackPage,
    },
];
let AuthCallbackPageModule = class AuthCallbackPageModule {
};
AuthCallbackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_auth_callback_page__WEBPACK_IMPORTED_MODULE_0__.AuthCallbackPage],
    })
], AuthCallbackPageModule);



/***/ }),

/***/ 5636:
/*!**********************************************************!*\
  !*** ./src/app/auth/auth-callback/auth-callback.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthCallbackPage": () => (/* binding */ AuthCallbackPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-appauth */ 7798);





let AuthCallbackPage = class AuthCallbackPage {
    constructor(auth, navCtrl, router) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.sub = this.auth.events$.subscribe(action => this.postCallback(action));
        this.auth.authorizationCallback(window.location.origin + this.router.url);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    postCallback(action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_0__.AuthActions.SignInSuccess) {
                yield this.navCtrl.navigateRoot('tabs');
            }
            if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_0__.AuthActions.SignInFailed) {
                yield this.navCtrl.navigateRoot('login');
            }
        });
    }
};
AuthCallbackPage.ctorParameters = () => [
    { type: ionic_appauth__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthCallbackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        template: '<p style="margin-left: 10px">Authorizing...</p>',
    })
], AuthCallbackPage);



/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth-callback_auth-callback_module_ts.js.map