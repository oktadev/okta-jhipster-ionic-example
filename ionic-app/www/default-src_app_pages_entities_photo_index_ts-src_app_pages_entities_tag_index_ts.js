"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_entities_photo_index_ts-src_app_pages_entities_tag_index_ts"],{

/***/ 4333:
/*!***********************************************!*\
  !*** ./src/app/pages/entities/photo/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Photo": () => (/* reexport safe */ _photo_model__WEBPACK_IMPORTED_MODULE_0__.Photo),
/* harmony export */   "PhotoDetailPage": () => (/* reexport safe */ _photo_detail__WEBPACK_IMPORTED_MODULE_2__.PhotoDetailPage),
/* harmony export */   "PhotoPage": () => (/* reexport safe */ _photo__WEBPACK_IMPORTED_MODULE_3__.PhotoPage),
/* harmony export */   "PhotoService": () => (/* reexport safe */ _photo_service__WEBPACK_IMPORTED_MODULE_1__.PhotoService)
/* harmony export */ });
/* harmony import */ var _photo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo.model */ 2955);
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.service */ 7570);
/* harmony import */ var _photo_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-detail */ 5474);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo */ 6162);






/***/ }),

/***/ 5474:
/*!******************************************************!*\
  !*** ./src/app/pages/entities/photo/photo-detail.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDetailPage": () => (/* binding */ PhotoDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _photo_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-detail.html?ngResource */ 6423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/data-util.service */ 3014);
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo.service */ 7570);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let PhotoDetailPage = class PhotoDetailPage {
    constructor(dataUtils, navController, photoService, activatedRoute, alertController) {
        this.dataUtils = dataUtils;
        this.navController = navController;
        this.photoService = photoService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.photo = {};
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(response => {
            this.photo = response.data;
        });
    }
    open(item) {
        this.navController.navigateForward('/tabs/entities/photo/' + item.id + '/edit');
    }
    deleteModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm the deletion?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            this.photoService.delete(item.id).subscribe(() => {
                                this.navController.navigateForward('/tabs/entities/photo');
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }
    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
};
PhotoDetailPage.ctorParameters = () => [
    { type: _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__.JhiDataUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
PhotoDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'page-photo-detail',
        template: _photo_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], PhotoDetailPage);



/***/ }),

/***/ 2955:
/*!*****************************************************!*\
  !*** ./src/app/pages/entities/photo/photo.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Photo": () => (/* binding */ Photo)
/* harmony export */ });
class Photo {
    constructor(id, title, description, imageContentType, image, height, width, taken, uploaded, album, tags) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageContentType = imageContentType;
        this.image = image;
        this.height = height;
        this.width = width;
        this.taken = taken;
        this.uploaded = uploaded;
        this.album = album;
        this.tags = tags;
    }
}


/***/ }),

/***/ 7570:
/*!*******************************************************!*\
  !*** ./src/app/pages/entities/photo/photo.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 5021);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/api.service */ 5146);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ 1679);





let PhotoService = class PhotoService {
    constructor(http) {
        this.http = http;
        this.resourceUrl = _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/photos';
    }
    create(photo) {
        return this.http.post(this.resourceUrl, photo, { observe: 'response' });
    }
    update(photo) {
        return this.http.put(`${this.resourceUrl}/${photo.id}`, photo, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], PhotoService);



/***/ }),

/***/ 6162:
/*!***********************************************!*\
  !*** ./src/app/pages/entities/photo/photo.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoPage": () => (/* binding */ PhotoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _photo_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo.html?ngResource */ 7340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/data-util.service */ 3014);
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo.service */ 7570);







let PhotoPage = class PhotoPage {
    // todo: add pagination
    constructor(dataUtils, navController, photoService, toastCtrl, plt) {
        this.dataUtils = dataUtils;
        this.navController = navController;
        this.photoService = photoService;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.photos = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadAll();
        });
    }
    loadAll(refresher) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService
                .query()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => res.body))
                .subscribe((response) => {
                this.photos = response;
                if (typeof refresher !== 'undefined') {
                    setTimeout(() => {
                        refresher.target.complete();
                    }, 750);
                }
            }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.error(error);
                const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
                yield toast.present();
            }));
        });
    }
    trackId(index, item) {
        return item.id;
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }
    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/photo/new');
        });
    }
    edit(item, photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/photo/' + photo.id + '/edit');
            yield item.close();
        });
    }
    delete(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.delete(photo.id).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({ message: 'Photo deleted successfully.', duration: 3000, position: 'middle' });
                yield toast.present();
                yield this.loadAll();
            }), error => console.error(error));
        });
    }
    view(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/photo/' + photo.id + '/view');
        });
    }
};
PhotoPage.ctorParameters = () => [
    { type: _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__.JhiDataUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
PhotoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'page-photo',
        template: _photo_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], PhotoPage);



/***/ }),

/***/ 6778:
/*!*********************************************!*\
  !*** ./src/app/pages/entities/tag/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tag": () => (/* reexport safe */ _tag_model__WEBPACK_IMPORTED_MODULE_0__.Tag),
/* harmony export */   "TagDetailPage": () => (/* reexport safe */ _tag_detail__WEBPACK_IMPORTED_MODULE_2__.TagDetailPage),
/* harmony export */   "TagPage": () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_3__.TagPage),
/* harmony export */   "TagService": () => (/* reexport safe */ _tag_service__WEBPACK_IMPORTED_MODULE_1__.TagService)
/* harmony export */ });
/* harmony import */ var _tag_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag.model */ 445);
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.service */ 1579);
/* harmony import */ var _tag_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-detail */ 7900);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag */ 5665);






/***/ }),

/***/ 7900:
/*!**************************************************!*\
  !*** ./src/app/pages/entities/tag/tag-detail.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagDetailPage": () => (/* binding */ TagDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tag_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-detail.html?ngResource */ 9851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.service */ 1579);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






let TagDetailPage = class TagDetailPage {
    constructor(navController, tagService, activatedRoute, alertController) {
        this.navController = navController;
        this.tagService = tagService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.tag = {};
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(response => {
            this.tag = response.data;
        });
    }
    open(item) {
        this.navController.navigateForward('/tabs/entities/tag/' + item.id + '/edit');
    }
    deleteModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm the deletion?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            this.tagService.delete(item.id).subscribe(() => {
                                this.navController.navigateForward('/tabs/entities/tag');
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
TagDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _tag_service__WEBPACK_IMPORTED_MODULE_1__.TagService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
TagDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'page-tag-detail',
        template: _tag_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], TagDetailPage);



/***/ }),

/***/ 445:
/*!*************************************************!*\
  !*** ./src/app/pages/entities/tag/tag.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tag": () => (/* binding */ Tag)
/* harmony export */ });
class Tag {
    constructor(id, name, photos) {
        this.id = id;
        this.name = name;
        this.photos = photos;
    }
}


/***/ }),

/***/ 1579:
/*!***************************************************!*\
  !*** ./src/app/pages/entities/tag/tag.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagService": () => (/* binding */ TagService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 5021);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/api.service */ 5146);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ 1679);





let TagService = class TagService {
    constructor(http) {
        this.http = http;
        this.resourceUrl = _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/tags';
    }
    create(tag) {
        return this.http.post(this.resourceUrl, tag, { observe: 'response' });
    }
    update(tag) {
        return this.http.put(`${this.resourceUrl}/${tag.id}`, tag, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
};
TagService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
TagService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], TagService);



/***/ }),

/***/ 5665:
/*!*******************************************!*\
  !*** ./src/app/pages/entities/tag/tag.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagPage": () => (/* binding */ TagPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tag_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag.html?ngResource */ 2628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.service */ 1579);






let TagPage = class TagPage {
    // todo: add pagination
    constructor(navController, tagService, toastCtrl, plt) {
        this.navController = navController;
        this.tagService = tagService;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.tags = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadAll();
        });
    }
    loadAll(refresher) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.tagService
                .query()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.body))
                .subscribe((response) => {
                this.tags = response;
                if (typeof refresher !== 'undefined') {
                    setTimeout(() => {
                        refresher.target.complete();
                    }, 750);
                }
            }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                console.error(error);
                const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
                yield toast.present();
            }));
        });
    }
    trackId(index, item) {
        return item.id;
    }
    new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/tag/new');
        });
    }
    edit(item, tag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/tag/' + tag.id + '/edit');
            yield item.close();
        });
    }
    delete(tag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.tagService.delete(tag.id).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({ message: 'Tag deleted successfully.', duration: 3000, position: 'middle' });
                yield toast.present();
                yield this.loadAll();
            }), error => console.error(error));
        });
    }
    view(tag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/tag/' + tag.id + '/view');
        });
    }
};
TagPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _tag_service__WEBPACK_IMPORTED_MODULE_1__.TagService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
TagPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'page-tag',
        template: _tag_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], TagPage);



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

/***/ 6423:
/*!*******************************************************************!*\
  !*** ./src/app/pages/entities/photo/photo-detail.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Photo </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"fixed\">ID</ion-label>\n      <div item-content>\n        <span>{{photo.id}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Title</ion-label>\n      <div item-content>\n        <span>{{photo.title}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Description</ion-label>\n      <div item-content>\n        <span>{{photo.description}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Image</ion-label>\n      <div item-content>\n        <div *ngIf=\"photo.image\">\n          <a (click)=\"openFile(photo.imageContentType, photo.image)\">\n            <img [src]=\"'data:' + photo.imageContentType + ';base64,' + photo.image\" style=\"max-width: 100%\" alt=\"photo image\" />\n          </a>\n          {{photo.imageContentType}}, {{byteSize(photo.image)}}\n        </div>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Height</ion-label>\n      <div item-content>\n        <span>{{photo.height}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Width</ion-label>\n      <div item-content>\n        <span>{{photo.width}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Taken</ion-label>\n      <div item-content>\n        <span>{{photo.taken | date:'medium'}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Uploaded</ion-label>\n      <div item-content>\n        <span>{{photo.uploaded | date:'medium'}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Album</ion-label>\n      <div item-content *ngIf=\"photo.album\">\n        <a>{{photo.album?.title}}</a>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tag</ion-label>\n      <div item-content>\n        <span *ngFor=\"let tag of photo.tags; let last = last\"> <a>{{tag.name}}</a>{{last ? '' : ', '}} </span>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"open(photo)\">{{ 'EDIT_BUTTON' | translate }}</ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"deleteModal(photo)\">{{ 'DELETE_BUTTON' | translate }}</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 7340:
/*!************************************************************!*\
  !*** ./src/app/pages/entities/photo/photo.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Photos </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- todo: add elasticsearch support -->\n<ion-content class=\"ion-padding\">\n  <ion-refresher [disabled]=\"plt.is('desktop')\" slot=\"fixed\" (ionRefresh)=\"loadAll($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let photo of photos; trackBy: trackId\" #slidingItem>\n      <ion-item (click)=\"view(photo)\">\n        <ion-label text-wrap>\n          <p>{{photo.id}}</p>\n          <ion-text color=\"primary\"><h2>{{photo.title}}</h2></ion-text>\n          <p>{{photo.description}}</p>\n          <ion-avatar *ngIf=\"photo.image\">\n            <img [src]=\"'data:' + photo.imageContentType + ';base64,' + photo.image\" />\n          </ion-avatar>\n          <p>{{photo.height}}</p>\n          <p>{{photo.width}}</p>\n          <p>{{photo.taken | date:'medium'}}</p>\n          <p>{{photo.uploaded | date:'medium'}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"edit(slidingItem, photo)\"> {{ 'EDIT_BUTTON' | translate }} </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(photo)\"> {{ 'DELETE_BUTTON' | translate }} </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-item *ngIf=\"!photos?.length\">\n    <ion-label> No Photos found. </ion-label>\n  </ion-item>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"new()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ }),

/***/ 9851:
/*!***************************************************************!*\
  !*** ./src/app/pages/entities/tag/tag-detail.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Tag </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"fixed\">ID</ion-label>\n      <div item-content>\n        <span>{{tag.id}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Name</ion-label>\n      <div item-content>\n        <span>{{tag.name}}</span>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"open(tag)\">{{ 'EDIT_BUTTON' | translate }}</ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"deleteModal(tag)\">{{ 'DELETE_BUTTON' | translate }}</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 2628:
/*!********************************************************!*\
  !*** ./src/app/pages/entities/tag/tag.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Tags </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- todo: add elasticsearch support -->\n<ion-content class=\"ion-padding\">\n  <ion-refresher [disabled]=\"plt.is('desktop')\" slot=\"fixed\" (ionRefresh)=\"loadAll($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let tag of tags; trackBy: trackId\" #slidingItem>\n      <ion-item (click)=\"view(tag)\">\n        <ion-label text-wrap>\n          <p>{{tag.id}}</p>\n          <ion-text color=\"primary\"><h2>{{tag.name}}</h2></ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"edit(slidingItem, tag)\"> {{ 'EDIT_BUTTON' | translate }} </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(tag)\"> {{ 'DELETE_BUTTON' | translate }} </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-item *ngIf=\"!tags?.length\">\n    <ion-label> No Tags found. </ion-label>\n  </ion-item>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"new()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_entities_photo_index_ts-src_app_pages_entities_tag_index_ts.js.map