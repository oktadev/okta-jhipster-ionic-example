"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_photo_photo_module_ts"],{

/***/ 6702:
/*!******************************************************!*\
  !*** ./src/app/pages/entities/photo/photo-update.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoUpdatePage": () => (/* binding */ PhotoUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _photo_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-update.html?ngResource */ 2838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/utils/data-util.service */ 3014);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _photo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo.model */ 2955);
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo.service */ 7570);
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../album */ 784);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tag */ 6778);












let PhotoUpdatePage = class PhotoUpdatePage {
    constructor(activatedRoute, navController, formBuilder, platform, toastCtrl, dataUtils, elementRef, camera, albumService, tagService, photoService) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.dataUtils = dataUtils;
        this.elementRef = elementRef;
        this.camera = camera;
        this.albumService = albumService;
        this.tagService = tagService;
        this.photoService = photoService;
        this.isSaving = false;
        this.isNew = true;
        this.form = this.formBuilder.group({
            id: [null, []],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            description: [null, []],
            image: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            imageContentType: [null, []],
            height: [null, []],
            width: [null, []],
            taken: [null, []],
            uploaded: [null, []],
            album: [null, []],
            tags: [null, []],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(v => {
            this.isReadyToSave = this.form.valid;
        });
        // Set the Camera options
        this.cameraOptions = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            allowEdit: true,
            sourceType: 1,
        };
    }
    ngOnInit() {
        this.albumService.query().subscribe(data => {
            this.albums = data.body;
        }, error => this.onError(error));
        this.tagService.query().subscribe(data => {
            this.tags = data.body;
        }, error => this.onError(error));
        this.activatedRoute.data.subscribe(response => {
            this.photo = response.data;
            this.isNew = this.photo.id === null || this.photo.id === undefined;
            this.updateForm(this.photo);
        });
    }
    updateForm(photo) {
        this.form.patchValue({
            id: photo.id,
            title: photo.title,
            description: photo.description,
            image: photo.image,
            imageContentType: photo.imageContentType,
            height: photo.height,
            width: photo.width,
            taken: this.isNew ? new Date().toISOString() : photo.taken,
            uploaded: this.isNew ? new Date().toISOString() : photo.uploaded,
            album: photo.album,
            tags: photo.tags,
        });
    }
    save() {
        this.isSaving = true;
        const photo = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.photoService.update(photo));
        }
        else {
            this.subscribeToSaveResponse(this.photoService.create(photo));
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res.error));
    }
    onSaveSuccess(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let action = 'updated';
            if (response.status === 201) {
                action = 'created';
            }
            this.isSaving = false;
            const toast = yield this.toastCtrl.create({ message: `Photo ${action} successfully.`, duration: 2000, position: 'middle' });
            yield toast.present();
            yield this.navController.navigateBack('/tabs/entities/photo');
        });
    }
    previousState() {
        window.history.back();
    }
    onError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.isSaving = false;
            console.error(error);
            const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            yield toast.present();
        });
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _photo_model__WEBPACK_IMPORTED_MODULE_3__.Photo()), { id: this.form.get(['id']).value, title: this.form.get(['title']).value, description: this.form.get(['description']).value, image: this.form.get(['image']).value, imageContentType: this.form.get(['imageContentType']).value, height: this.form.get(['height']).value, width: this.form.get(['width']).value, taken: new Date(this.form.get(['taken']).value), uploaded: new Date(this.form.get(['uploaded']).value), album: this.form.get(['album']).value, tags: this.form.get(['tags']).value });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }
    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    setFileData(event, field, isImage) {
        this.dataUtils.loadFileToForm(event, this.form, field, isImage).subscribe();
        this.processWebImage(event, field);
    }
    getPicture(fieldName) {
        if (_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera.installed()) {
            this.camera.getPicture(this.cameraOptions).then(data => {
                this.photo[fieldName] = data;
                this.photo[fieldName + 'ContentType'] = 'image/jpeg';
                this.form.patchValue({ [fieldName]: data });
                this.form.patchValue({ [fieldName + 'ContentType']: 'image/jpeg' });
            }, err => {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    }
    processWebImage(event, fieldName) {
        const reader = new FileReader();
        reader.onload = readerEvent => {
            let imageData = readerEvent.target.result;
            const imageType = event.target.files[0].type;
            imageData = imageData.substring(imageData.indexOf(',') + 1);
            this.form.patchValue({ [fieldName]: imageData });
            this.form.patchValue({ [fieldName + 'ContentType']: imageType });
            this.photo[fieldName] = imageData;
            this.photo[fieldName + 'ContentType'] = imageType;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    clearInputImage(field, fieldContentType, idInput) {
        this.dataUtils.clearInputImage(this.photo, this.elementRef, field, fieldContentType, idInput);
        this.form.patchValue({ [field]: '' });
    }
    compareAlbum(first, second) {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }
    trackAlbumById(index, item) {
        return item.id;
    }
    compareTag(first, second) {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }
    trackTagById(index, item) {
        return item.id;
    }
};
PhotoUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _services_utils_data_util_service__WEBPACK_IMPORTED_MODULE_1__.JhiDataUtils },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _album__WEBPACK_IMPORTED_MODULE_5__.AlbumService },
    { type: _tag__WEBPACK_IMPORTED_MODULE_6__.TagService },
    { type: _photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService }
];
PhotoUpdatePage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['fileInput', { static: false },] }]
};
PhotoUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'page-photo-update',
        template: _photo_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], PhotoUpdatePage);



/***/ }),

/***/ 7956:
/*!******************************************************!*\
  !*** ./src/app/pages/entities/photo/photo.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoPageModule": () => (/* binding */ PhotoPageModule),
/* harmony export */   "PhotoResolve": () => (/* binding */ PhotoResolve)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth/user-route-access.service */ 1284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo */ 6162);
/* harmony import */ var _photo_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-update */ 6702);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ 4333);














let PhotoResolve = class PhotoResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params.id ? route.params.id : null;
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((response) => response.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((photo) => photo.body));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new ___WEBPACK_IMPORTED_MODULE_4__.Photo());
    }
};
PhotoResolve.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_4__.PhotoService }
];
PhotoResolve = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: 'root' })
], PhotoResolve);

const routes = [
    {
        path: '',
        component: _photo__WEBPACK_IMPORTED_MODULE_2__.PhotoPage,
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__.UserRouteAccessService],
    },
    {
        path: 'new',
        component: _photo_update__WEBPACK_IMPORTED_MODULE_3__.PhotoUpdatePage,
        resolve: {
            data: PhotoResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__.UserRouteAccessService],
    },
    {
        path: ':id/view',
        component: ___WEBPACK_IMPORTED_MODULE_4__.PhotoDetailPage,
        resolve: {
            data: PhotoResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__.UserRouteAccessService],
    },
    {
        path: ':id/edit',
        component: _photo_update__WEBPACK_IMPORTED_MODULE_3__.PhotoUpdatePage,
        resolve: {
            data: PhotoResolve,
        },
        data: {
            authorities: ['ROLE_USER'],
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_1__.UserRouteAccessService],
    },
];
let PhotoPageModule = class PhotoPageModule {
};
PhotoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_photo__WEBPACK_IMPORTED_MODULE_2__.PhotoPage, _photo_update__WEBPACK_IMPORTED_MODULE_3__.PhotoUpdatePage, ___WEBPACK_IMPORTED_MODULE_4__.PhotoDetailPage],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes)],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera],
    })
], PhotoPageModule);



/***/ }),

/***/ 6018:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "DestinationType": () => (/* binding */ DestinationType),
/* harmony export */   "Direction": () => (/* binding */ Direction),
/* harmony export */   "EncodingType": () => (/* binding */ EncodingType),
/* harmony export */   "MediaType": () => (/* binding */ MediaType),
/* harmony export */   "PictureSourceType": () => (/* binding */ PictureSourceType),
/* harmony export */   "PopoverArrowDirection": () => (/* binding */ PopoverArrowDirection)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);




var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
Camera.ɵfac = /*@__PURE__*/ function () { var ɵCamera_BaseFactory; return function Camera_Factory(t) { return (ɵCamera_BaseFactory || (ɵCamera_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Camera)))(t || Camera); }; }();
Camera.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Camera, factory: function (t) { return Camera.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Camera, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));




/***/ }),

/***/ 2838:
/*!*******************************************************************!*\
  !*** ./src/app/pages/entities/photo/photo-update.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Photo </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!isReadyToSave\" (click)=\"save()\" color=\"primary\">\n        <span *ngIf=\"platform.is('ios')\">{{'DONE_BUTTON' | translate}}</span>\n        <ion-icon name=\"checkmark\" *ngIf=\"!platform.is('ios')\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form *ngIf=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <ion-list>\n      <ion-item [hidden]=\"!form.id\">\n        <ion-label>ID</ion-label>\n        <ion-input type=\"hidden\" id=\"id\" formControlName=\"id\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Title</ion-label>\n        <ion-input type=\"text\" name=\"title\" formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder=\"Description\" formControlName=\"description\" id=\"field_description\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <div>\n          <img\n            [src]=\"'data:' + photo.imageContentType + ';base64,' + photo.image\"\n            style=\"max-height: 100px\"\n            *ngIf=\"photo?.image\"\n            alt=\"photo image\"\n          />\n          <div *ngIf=\"photo.image\">\n            <p>{{photo.imageContentType}}, {{byteSize(photo.image)}}</p>\n            <ion-button color=\"danger\" (click)=\"clearInputImage('image', 'imageContentType', 'fileImage')\">\n              <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </div>\n          <input type=\"file\" #fileInput style=\"display: none\" (change)=\"setFileData($event, 'image', true)\" accept=\"image/*\" />\n          <ion-button *ngIf=\"!photo?.image\" (click)=\"getPicture('image')\">\n            <ion-icon name=\"add-circle\" slot=\"start\"></ion-icon>\n            {{ 'ITEM_CREATE_CHOOSE_IMAGE' | translate }}\n          </ion-button>\n        </div>\n      </ion-item>\n      <div *ngIf=\"!isNew\">\n        <ion-item>\n          <ion-label position=\"floating\">Height</ion-label>\n          <ion-input type=\"number\" name=\"height\" formControlName=\"height\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Width</ion-label>\n          <ion-input type=\"number\" name=\"width\" formControlName=\"width\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Taken</ion-label>\n          <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" formControlName=\"taken\" id=\"field_taken\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Uploaded</ion-label>\n          <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" formControlName=\"uploaded\" id=\"field_uploaded\"></ion-datetime>\n        </ion-item>\n      </div>\n      <ion-item>\n        <ion-label>Album</ion-label>\n        <ion-select id=\"field_album\" formControlName=\"album\" [compareWith]=\"compareAlbum\">\n          <ion-select-option [value]=\"null\"></ion-select-option>\n          <ion-select-option [value]=\"albumOption\" *ngFor=\"let albumOption of albums; trackBy: trackAlbumById\"\n            >{{albumOption.title}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Tag</ion-label>\n        <ion-select id=\"field_tag\" multiple=\"true\" formControlName=\"tags\" [compareWith]=\"compareTag\">\n          <ion-select-option [value]=\"tagOption\" *ngFor=\"let tagOption of tags; trackBy: trackTagById\"\n            >{{tagOption.name}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_photo_photo_module_ts.js.map