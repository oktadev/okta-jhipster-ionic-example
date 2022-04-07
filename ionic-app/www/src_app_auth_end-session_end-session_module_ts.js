"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_end-session_end-session_module_ts"],{

/***/ 8243:
/*!********************************************************!*\
  !*** ./src/app/auth/end-session/end-session.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndSessionPageModule": () => (/* binding */ EndSessionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _end_session_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end-session.page */ 4550);







const routes = [
    {
        path: '',
        component: _end_session_page__WEBPACK_IMPORTED_MODULE_0__.EndSessionPage,
    },
];
let EndSessionPageModule = class EndSessionPageModule {
};
EndSessionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_end_session_page__WEBPACK_IMPORTED_MODULE_0__.EndSessionPage],
    })
], EndSessionPageModule);



/***/ }),

/***/ 4550:
/*!******************************************************!*\
  !*** ./src/app/auth/end-session/end-session.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndSessionPage": () => (/* binding */ EndSessionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-appauth */ 7798);




let EndSessionPage = class EndSessionPage {
    constructor(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.auth.endSessionCallback();
            yield this.navCtrl.navigateRoot('login');
        });
    }
};
EndSessionPage.ctorParameters = () => [
    { type: ionic_appauth__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
EndSessionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        template: '<p style="margin-left: 10px">Signing out...</p>',
    })
], EndSessionPage);



/***/ })

}]);
//# sourceMappingURL=src_app_auth_end-session_end-session_module_ts.js.map