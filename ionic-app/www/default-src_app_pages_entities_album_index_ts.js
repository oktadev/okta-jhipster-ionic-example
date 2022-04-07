"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_entities_album_index_ts"],{

/***/ 5238:
/*!******************************************************!*\
  !*** ./src/app/pages/entities/album/album-detail.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumDetailPage": () => (/* binding */ AlbumDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _album_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-detail.html?ngResource */ 5958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/data-util.service */ 3014);
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album.service */ 1050);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let AlbumDetailPage = class AlbumDetailPage {
    constructor(dataUtils, navController, albumService, activatedRoute, alertController) {
        this.dataUtils = dataUtils;
        this.navController = navController;
        this.albumService = albumService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.album = {};
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(response => {
            this.album = response.data;
        });
    }
    open(item) {
        this.navController.navigateForward('/tabs/entities/album/' + item.id + '/edit');
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
                            this.albumService.delete(item.id).subscribe(() => {
                                this.navController.navigateForward('/tabs/entities/album');
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
AlbumDetailPage.ctorParameters = () => [
    { type: _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__.JhiDataUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _album_service__WEBPACK_IMPORTED_MODULE_2__.AlbumService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
AlbumDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'page-album-detail',
        template: _album_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], AlbumDetailPage);



/***/ }),

/***/ 3974:
/*!*****************************************************!*\
  !*** ./src/app/pages/entities/album/album.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Album": () => (/* binding */ Album)
/* harmony export */ });
class Album {
    constructor(id, title, description, created, user) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.created = created;
        this.user = user;
    }
}


/***/ }),

/***/ 1050:
/*!*******************************************************!*\
  !*** ./src/app/pages/entities/album/album.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumService": () => (/* binding */ AlbumService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 5021);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/api.service */ 5146);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ 1679);





let AlbumService = class AlbumService {
    constructor(http) {
        this.http = http;
        this.resourceUrl = _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/albums';
    }
    create(album) {
        return this.http.post(this.resourceUrl, album, { observe: 'response' });
    }
    update(album) {
        return this.http.put(`${this.resourceUrl}/${album.id}`, album, { observe: 'response' });
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
AlbumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AlbumService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], AlbumService);



/***/ }),

/***/ 887:
/*!***********************************************!*\
  !*** ./src/app/pages/entities/album/album.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumPage": () => (/* binding */ AlbumPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _album_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album.html?ngResource */ 5765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/data-util.service */ 3014);
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album.service */ 1050);







let AlbumPage = class AlbumPage {
    // todo: add pagination
    constructor(dataUtils, navController, albumService, toastCtrl, plt) {
        this.dataUtils = dataUtils;
        this.navController = navController;
        this.albumService = albumService;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.albums = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadAll();
        });
    }
    loadAll(refresher) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.albumService
                .query()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => res.body))
                .subscribe((response) => {
                this.albums = response;
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
            yield this.navController.navigateForward('/tabs/entities/album/new');
        });
    }
    edit(item, album) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/album/' + album.id + '/edit');
            yield item.close();
        });
    }
    delete(album) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.albumService.delete(album.id).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({ message: 'Album deleted successfully.', duration: 3000, position: 'middle' });
                yield toast.present();
                yield this.loadAll();
            }), error => console.error(error));
        });
    }
    view(album) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/album/' + album.id + '/view');
        });
    }
};
AlbumPage.ctorParameters = () => [
    { type: _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__.JhiDataUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _album_service__WEBPACK_IMPORTED_MODULE_2__.AlbumService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
AlbumPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'page-album',
        template: _album_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], AlbumPage);



/***/ }),

/***/ 784:
/*!***********************************************!*\
  !*** ./src/app/pages/entities/album/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Album": () => (/* reexport safe */ _album_model__WEBPACK_IMPORTED_MODULE_0__.Album),
/* harmony export */   "AlbumDetailPage": () => (/* reexport safe */ _album_detail__WEBPACK_IMPORTED_MODULE_2__.AlbumDetailPage),
/* harmony export */   "AlbumPage": () => (/* reexport safe */ _album__WEBPACK_IMPORTED_MODULE_3__.AlbumPage),
/* harmony export */   "AlbumService": () => (/* reexport safe */ _album_service__WEBPACK_IMPORTED_MODULE_1__.AlbumService)
/* harmony export */ });
/* harmony import */ var _album_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album.model */ 3974);
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album.service */ 1050);
/* harmony import */ var _album_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-detail */ 5238);
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album */ 887);






/***/ }),

/***/ 5958:
/*!*******************************************************************!*\
  !*** ./src/app/pages/entities/album/album-detail.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Album </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"fixed\">ID</ion-label>\n      <div item-content>\n        <span>{{album.id}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Title</ion-label>\n      <div item-content>\n        <span>{{album.title}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Description</ion-label>\n      <div item-content>\n        <span>{{album.description}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Created</ion-label>\n      <div item-content>\n        <span>{{album.created | date:'medium'}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label>User</ion-label>\n      <div item-content>{{album.user?.login}}</div>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"open(album)\">{{ 'EDIT_BUTTON' | translate }}</ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"deleteModal(album)\">{{ 'DELETE_BUTTON' | translate }}</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 5765:
/*!************************************************************!*\
  !*** ./src/app/pages/entities/album/album.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Albums </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- todo: add elasticsearch support -->\n<ion-content class=\"ion-padding\">\n  <ion-refresher [disabled]=\"plt.is('desktop')\" slot=\"fixed\" (ionRefresh)=\"loadAll($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let album of albums; trackBy: trackId\" #slidingItem>\n      <ion-item (click)=\"view(album)\">\n        <ion-label text-wrap>\n          <p>{{album.id}}</p>\n          <ion-text color=\"primary\"><h2>{{album.title}}</h2></ion-text>\n          <p>{{album.description}}</p>\n          <p>{{album.created | date:'medium'}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"edit(slidingItem, album)\"> {{ 'EDIT_BUTTON' | translate }} </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(album)\"> {{ 'DELETE_BUTTON' | translate }} </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-item *ngIf=\"!albums?.length\">\n    <ion-label> No Albums found. </ion-label>\n  </ion-item>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"new()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_entities_album_index_ts.js.map