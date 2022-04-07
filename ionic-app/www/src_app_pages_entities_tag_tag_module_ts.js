"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_tag_tag_module_ts"],{

/***/ 5016:
/*!**************************************************!*\
  !*** ./src/app/pages/entities/tag/tag-update.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagUpdatePage": () => (/* binding */ TagUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tag_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-update.html?ngResource */ 625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tag_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.model */ 445);
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag.service */ 1579);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo */ 4333);









let TagUpdatePage = class TagUpdatePage {
    constructor(activatedRoute, navController, formBuilder, platform, toastCtrl, photoService, tagService) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.photoService = photoService;
        this.tagService = tagService;
        this.isSaving = false;
        this.isNew = true;
        this.form = this.formBuilder.group({
            id: [null, []],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(v => {
            this.isReadyToSave = this.form.valid;
        });
    }
    ngOnInit() {
        this.photoService.query().subscribe(data => {
            this.photos = data.body;
        }, error => this.onError(error));
        this.activatedRoute.data.subscribe(response => {
            this.tag = response.data;
            this.isNew = this.tag.id === null || this.tag.id === undefined;
            this.updateForm(this.tag);
        });
    }
    updateForm(tag) {
        this.form.patchValue({
            id: tag.id,
            name: tag.name,
        });
    }
    save() {
        this.isSaving = true;
        const tag = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.tagService.update(tag));
        }
        else {
            this.subscribeToSaveResponse(this.tagService.create(tag));
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res.error));
    }
    onSaveSuccess(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let action = 'updated';
            if (response.status === 201) {
                action = 'created';
            }
            this.isSaving = false;
            const toast = yield this.toastCtrl.create({ message: `Tag ${action} successfully.`, duration: 2000, position: 'middle' });
            yield toast.present();
            yield this.navController.navigateBack('/tabs/entities/tag');
        });
    }
    previousState() {
        window.history.back();
    }
    onError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isSaving = false;
            console.error(error);
            const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            yield toast.present();
        });
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _tag_model__WEBPACK_IMPORTED_MODULE_1__.Tag()), { id: this.form.get(['id']).value, name: this.form.get(['name']).value });
    }
    comparePhoto(first, second) {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }
    trackPhotoById(index, item) {
        return item.id;
    }
};
TagUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _photo__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _tag_service__WEBPACK_IMPORTED_MODULE_2__.TagService }
];
TagUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'page-tag-update',
        template: _tag_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], TagUpdatePage);



/***/ }),

/***/ 4840:
/*!**************************************************!*\
  !*** ./src/app/pages/entities/tag/tag.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagPageModule": () => (/* binding */ TagPageModule),
/* harmony export */   "TagResolve": () => (/* binding */ TagResolve)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth/user-route-access.service */ 1284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag */ 5665);
/* harmony import */ var _tag_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-update */ 5016);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ 6778);













let TagResolve = class TagResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params.id ? route.params.id : null;
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((response) => response.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tag) => tag.body));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new ___WEBPACK_IMPORTED_MODULE_3__.Tag());
    }
};
TagResolve.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_3__.TagService }
];
TagResolve = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], TagResolve);

const routes = [
    {
        path: '',
        component: _tag__WEBPACK_IMPORTED_MODULE_1__.TagPage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: 'new',
        component: _tag_update__WEBPACK_IMPORTED_MODULE_2__.TagUpdatePage,
        resolve: {
            data: TagResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/view',
        component: ___WEBPACK_IMPORTED_MODULE_3__.TagDetailPage,
        resolve: {
            data: TagResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/edit',
        component: _tag_update__WEBPACK_IMPORTED_MODULE_2__.TagUpdatePage,
        resolve: {
            data: TagResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
let TagPageModule = class TagPageModule {
};
TagPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_tag__WEBPACK_IMPORTED_MODULE_1__.TagPage, _tag_update__WEBPACK_IMPORTED_MODULE_2__.TagUpdatePage, ___WEBPACK_IMPORTED_MODULE_3__.TagDetailPage],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)],
    })
], TagPageModule);



/***/ }),

/***/ 625:
/*!***************************************************************!*\
  !*** ./src/app/pages/entities/tag/tag-update.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Tag </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!isReadyToSave\" (click)=\"save()\" color=\"primary\">\n        <span *ngIf=\"platform.is('ios')\">{{'DONE_BUTTON' | translate}}</span>\n        <ion-icon name=\"checkmark\" *ngIf=\"!platform.is('ios')\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form *ngIf=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <ion-list>\n      <ion-item [hidden]=\"!form.id\">\n        <ion-label>ID</ion-label>\n        <ion-input type=\"hidden\" id=\"id\" formControlName=\"id\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\" name=\"name\" formControlName=\"name\"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_tag_tag_module_ts.js.map