"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_album_album_module_ts-src_app_shared_index_ts"],{

/***/ 7624:
/*!******************************************************!*\
  !*** ./src/app/pages/entities/album/album-update.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumUpdatePage": () => (/* binding */ AlbumUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _album_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-update.html?ngResource */ 646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/data-util.service */ 3014);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _album_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album.model */ 3974);
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album.service */ 1050);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user/user.service */ 9709);










let AlbumUpdatePage = class AlbumUpdatePage {
    constructor(activatedRoute, navController, formBuilder, platform, toastCtrl, dataUtils, userService, albumService) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.dataUtils = dataUtils;
        this.userService = userService;
        this.albumService = albumService;
        this.isSaving = false;
        this.isNew = true;
        this.form = this.formBuilder.group({
            id: [null, []],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            description: [null, []],
            created: [null, []],
            user: [null, []],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(v => {
            this.isReadyToSave = this.form.valid;
        });
    }
    ngOnInit() {
        this.userService.findAll().subscribe(data => (this.users = data), error => this.onError(error));
        this.activatedRoute.data.subscribe(response => {
            this.album = response.data;
            this.isNew = this.album.id === null || this.album.id === undefined;
            this.updateForm(this.album);
        });
    }
    updateForm(album) {
        this.form.patchValue({
            id: album.id,
            title: album.title,
            description: album.description,
            created: this.isNew ? new Date().toISOString() : album.created,
            user: album.user,
        });
    }
    save() {
        this.isSaving = true;
        const album = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.albumService.update(album));
        }
        else {
            this.subscribeToSaveResponse(this.albumService.create(album));
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res.error));
    }
    onSaveSuccess(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let action = 'updated';
            if (response.status === 201) {
                action = 'created';
            }
            this.isSaving = false;
            const toast = yield this.toastCtrl.create({ message: `Album ${action} successfully.`, duration: 2000, position: 'middle' });
            yield toast.present();
            yield this.navController.navigateBack('/tabs/entities/album');
        });
    }
    previousState() {
        window.history.back();
    }
    onError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isSaving = false;
            console.error(error);
            const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            yield toast.present();
        });
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _album_model__WEBPACK_IMPORTED_MODULE_2__.Album()), { id: this.form.get(['id']).value, title: this.form.get(['title']).value, description: this.form.get(['description']).value, created: new Date(this.form.get(['created']).value), user: this.form.get(['user']).value });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }
    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    setFileData(event, field, isImage) {
        this.dataUtils.loadFileToForm(event, this.form, field, isImage).subscribe();
    }
    compareUser(first, second) {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }
    trackUserById(index, item) {
        return item.id;
    }
};
AlbumUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__.JhiDataUtils },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _album_service__WEBPACK_IMPORTED_MODULE_3__.AlbumService }
];
AlbumUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'page-album-update',
        template: _album_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], AlbumUpdatePage);



/***/ }),

/***/ 3371:
/*!******************************************************!*\
  !*** ./src/app/pages/entities/album/album.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPageModule": () => (/* binding */ AlbumPageModule),
/* harmony export */   "AlbumResolve": () => (/* binding */ AlbumResolve)
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
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ 887);
/* harmony import */ var _album_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-update */ 7624);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ 784);













let AlbumResolve = class AlbumResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params.id ? route.params.id : null;
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((response) => response.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((album) => album.body));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new ___WEBPACK_IMPORTED_MODULE_3__.Album());
    }
};
AlbumResolve.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_3__.AlbumService }
];
AlbumResolve = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], AlbumResolve);

const routes = [
    {
        path: '',
        component: _album__WEBPACK_IMPORTED_MODULE_1__.AlbumPage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: 'new',
        component: _album_update__WEBPACK_IMPORTED_MODULE_2__.AlbumUpdatePage,
        resolve: {
            data: AlbumResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/view',
        component: ___WEBPACK_IMPORTED_MODULE_3__.AlbumDetailPage,
        resolve: {
            data: AlbumResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/edit',
        component: _album_update__WEBPACK_IMPORTED_MODULE_2__.AlbumUpdatePage,
        resolve: {
            data: AlbumResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
let AlbumPageModule = class AlbumPageModule {
};
AlbumPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_album__WEBPACK_IMPORTED_MODULE_1__.AlbumPage, _album_update__WEBPACK_IMPORTED_MODULE_2__.AlbumUpdatePage, ___WEBPACK_IMPORTED_MODULE_3__.AlbumDetailPage],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)],
    })
], AlbumPageModule);



/***/ }),

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.service */ 5146);



let UserService = class UserService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    findAll() {
        return this.apiService.get('users');
    }
};
UserService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ 3014:
/*!*****************************************************!*\
  !*** ./src/app/services/utils/data-util.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JhiDataUtils": () => (/* binding */ JhiDataUtils)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);

/*
 Copyright 2016-Present the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * An utility service for data.
 */
let JhiDataUtils = class JhiDataUtils {
    constructor() { }
    /**
     * Method to abbreviate the text given
     */
    abbreviate(text, append = '...') {
        if (text.length < 30) {
            return text;
        }
        return text ? text.substring(0, 15) + append + text.slice(-10) : '';
    }
    /**
     * Method to find the byte size of the string provides
     */
    byteSize(base64String) {
        return this.formatAsBytes(this.size(base64String));
    }
    /**
     * Method to open file
     */
    openFile(contentType, data) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // To support IE and Edge
            const byteCharacters = atob(data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {
                type: contentType,
            });
            window.navigator.msSaveOrOpenBlob(blob);
        }
        else {
            // Other browsers
            const fileURL = `data:${contentType};base64,${data}`;
            const win = window.open();
            win.document.write('<iframe src="' +
                fileURL +
                '" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>');
        }
    }
    /**
     * Method to convert the file to base64
     */
    toBase64(file, cb) {
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            const base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
            cb(base64Data);
        };
        fileReader.readAsDataURL(file);
    }
    /**
     * Method to clear the input
     */
    clearInputImage(entity, elementRef, field, fieldContentType, idInput) {
        if (entity && field && fieldContentType) {
            if (Object.prototype.hasOwnProperty.call(entity, field)) {
                entity[field] = null;
            }
            if (Object.prototype.hasOwnProperty.call(entity, fieldContentType)) {
                entity[fieldContentType] = null;
            }
            if (elementRef && idInput && elementRef.nativeElement.querySelector('#' + idInput)) {
                elementRef.nativeElement.querySelector('#' + idInput).value = null;
            }
        }
    }
    /**
     * Sets the base 64 data & file type of the 1st file on the event (event.target.files[0]) in the passed entity object
     * and returns a promise.
     *
     * @param event the object containing the file (at event.target.files[0])
     * @param entity the object to set the file's 'base 64 data' and 'file type' on
     * @param field the field name to set the file's 'base 64 data' on
     * @param isImage boolean representing if the file represented by the event is an image
     * @returns a promise that resolves to the modified entity if operation is successful, otherwise rejects with an error message
     */
    setFileData(event, entity, field, isImage) {
        return new Promise((resolve, reject) => {
            if (event && event.target && event.target.files && event.target.files[0]) {
                const file = event.target.files[0];
                if (isImage && !file.type.startsWith('image/')) {
                    reject(`File was expected to be an image but was found to be ${file.type}`);
                }
                else {
                    this.toBase64(file, base64Data => {
                        entity[field] = base64Data;
                        entity[`${field}ContentType`] = file.type;
                        resolve(entity);
                    });
                }
            }
            else {
                reject(`Base64 data was not set as file could not be extracted from passed parameter: ${event}`);
            }
        });
    }
    /**
     * Sets the base 64 data & file type of the 1st file on the event (event.target.files[0]) in the passed entity object
     * and returns an observable.
     *
     * @param event the object containing the file (at event.target.files[0])
     * @param editForm the form group where the input field is located
     * @param field the field name to set the file's 'base 64 data' on
     * @param isImage boolean representing if the file represented by the event is an image
     * @returns an observable that loads file to form field and completes if sussessful
     *          or returns error as JhiFileLoadError on failure
     */
    loadFileToForm(event, editForm, field, isImage) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
            const eventTarget = event.target;
            if (eventTarget.files && eventTarget.files[0]) {
                const file = eventTarget.files[0];
                if (isImage && !file.type.startsWith('image/')) {
                    const error = {
                        message: `File was expected to be an image but was found to be '${file.type}'`,
                        key: 'not.image',
                        params: { fileType: file.type },
                    };
                    observer.error(error);
                }
                else {
                    const fieldContentType = field + 'ContentType';
                    this.toBase64(file, (base64Data) => {
                        editForm.patchValue({
                            [field]: base64Data,
                            [fieldContentType]: file.type,
                        });
                        observer.next();
                        observer.complete();
                    });
                }
            }
            else {
                const error = {
                    message: 'Could not extract file',
                    key: 'could.not.extract',
                    params: { event },
                };
                observer.error(error);
            }
        });
    }
    /**
     * Method to download file
     */
    downloadFile(contentType, data, fileName) {
        const byteCharacters = atob(data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
            type: contentType,
        });
        const tempLink = document.createElement('a');
        tempLink.href = window.URL.createObjectURL(blob);
        tempLink.download = fileName;
        tempLink.target = '_blank';
        tempLink.click();
    }
    endsWith(suffix, str) {
        return str.includes(suffix, str.length - suffix.length);
    }
    paddingSize(value) {
        if (this.endsWith('==', value)) {
            return 2;
        }
        if (this.endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
    size(value) {
        return (value.length / 4) * 3 - this.paddingSize(value);
    }
    formatAsBytes(size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    }
};
JhiDataUtils.ctorParameters = () => [];
JhiDataUtils = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], JhiDataUtils);



/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* reexport safe */ _util_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)
/* harmony export */ });
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/request-util */ 9393);



/***/ }),

/***/ 9393:
/*!*********************************************!*\
  !*** ./src/app/shared/util/request-util.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* binding */ createRequestOption)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 5021);

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach(val => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ 646:
/*!*******************************************************************!*\
  !*** ./src/app/pages/entities/album/album-update.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Album </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!isReadyToSave\" (click)=\"save()\" color=\"primary\">\n        <span *ngIf=\"platform.is('ios')\">{{'DONE_BUTTON' | translate}}</span>\n        <ion-icon name=\"checkmark\" *ngIf=\"!platform.is('ios')\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form *ngIf=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <ion-list>\n      <ion-item [hidden]=\"!form.id\">\n        <ion-label>ID</ion-label>\n        <ion-input type=\"hidden\" id=\"id\" formControlName=\"id\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Title</ion-label>\n        <ion-input type=\"text\" name=\"title\" formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder=\"Description\" formControlName=\"description\" id=\"field_description\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Created</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" formControlName=\"created\" id=\"field_created\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>User</ion-label>\n        <ion-select id=\"field_user\" formControlName=\"user\" [compareWith]=\"compareUser\">\n          <ion-select-option [value]=\"null\"></ion-select-option>\n          <ion-select-option [value]=\"userOption\" *ngFor=\"let userOption of users; trackBy: trackUserById\"\n            >{{userOption.login}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_album_album_module_ts-src_app_shared_index_ts.js.map