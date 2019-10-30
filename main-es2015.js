(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!--img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n</div>\n  \n<form class=\"container form-group\" (submit)=\"registrarVenta($event)\" style=\"margin: 0px; padding: 0px;\">\n\t<div class=\"form-group row\" *ngIf=\"orden\" class=\"table-responsive-lg\">\n\t\t<table class=\"table table-hover table-striped \">\n\t\t\t<!-- https://getbootstrap.com/docs/4.0/content/tables/ -->\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\"><h6>Producto</h6></th>\n\t\t\t\t\t<th scope=\"col\" style=\"min-width: 171px;\"><h6>Vendido</h6></th>\n\t\t\t\t\t<th scope=\"col\" style=\"min-width: 171px;\"><h6>Feria</h6></th>\n\t\t\t\t\t<th scope=\"col\" class=\"text-right\"><h6>Total</h6></th>\n\t\t\t\t\t<th scope=\"col\" style=\"min-width: 15px;\"><h6>Tipo</h6></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody *ngIf=\"orden.detalleOrdenList\">\n\t\t\t\t<tr *ngFor=\"let detalleOrden of orden.detalleOrdenList\">\n\t\t\t\t\t<th scope=\"row\" class=\"text-nowrap\" style=\"padding-right: 0px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t{{ detalleOrden.producto.nombre }}\n\t\t\t\t\t\t\t<small>({{ detalleOrden.producto.precio }})</small>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</th>\n\t\t\t\t\t<td style=\"padding-left: 2px; padding-right: 0px;\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-number btn-sm\" data-type=\"minus\" (click)=\"detalleOrden.minusVendido()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" style=\"padding-left: 1rem; padding-right: 1rem;\">-</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"number\" class=\"input-number form-control-md text-right\" style=\"height: 31px; width: 50px;\" [(ngModel)]=\"detalleOrden.vendido\" [ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"detalleOrden.onChangeVendido($event)\" onclick=\"this.select();\" [disabled]=\"guardando\"/>\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-number btn-sm\" data-type=\"plus\" (click)=\"detalleOrden.addVendido()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" style=\"padding-left: 1rem; padding-right: 1rem;\">+</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style=\"padding-left: 2px; padding-right: 0px;\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-number btn-sm\" data-type=\"minus\" (click)=\"detalleOrden.minusFeria()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" style=\"padding-left: 1rem; padding-right: 1rem;\">-</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<input type=\"number\" class=\"input-number form-control-md text-right\" style=\"height: 31px; width: 50px;\" [(ngModel)]=\"detalleOrden.feria\" [ngModelOptions]=\"{standalone: true}\" onclick=\"this.select();\" [disabled]=\"guardando\"/>\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-number btn-sm\" data-type=\"plus\" (click)=\"detalleOrden.addFeria()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" style=\"padding-left: 1rem; padding-right: 1rem;\">+</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style=\"width: 100%;\">\n\t\t\t\t\t\t<h6 class=\"text-right\">{{ detalleOrden.total }}</h6>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"detalleOrden.toggleTipoPago()\" [disabled]=\"guardando\">\n\t\t\t\t\t\t\t{{detalleOrden.tipoPago}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"2\"></td>\n\t\t\t\t\t<td colspan=\"2\" class=\"text-right\">\n\t\t\t\t\t\t<h5>{{orden.total}}</h5>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-center\" style=\"padding-left: 0px; padding-right: 0px;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"guardando\" name=\"btnGuardando\">\n\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




const routes = [
    { path: 'panaderiaavila', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=number]{\r\n    width: 25px;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _models_producto_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/producto.model */ "./src/models/producto.model.ts");
/* harmony import */ var _models_orden_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/orden.model */ "./src/models/orden.model.ts");
/* harmony import */ var _models_tipo_pago_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/tipo.pago.model */ "./src/models/tipo.pago.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var AppComponent_1;








let AppComponent = AppComponent_1 = class AppComponent {
    constructor(gapiSession, ngZone) {
        this.gapiSession = gapiSession;
        this.ngZone = ngZone;
        this.productos = [];
        this.tipoPagos = Object.values(_models_tipo_pago_model__WEBPACK_IMPORTED_MODULE_5__["TipoPago"]);
        this.test = "test";
        this.guardando = false;
    }
    ngOnInit() {
        console.log("Version 3 component");
        if (!this.gapiSession.isSignedIn) {
            // use this to refresh the credentials
            //this.gapiSession.signOut();
            this.gapiSession.signIn();
        }
        this.load().subscribe(productosRange => {
            this.ngZone.run(() => {
                var listaProductos = productosRange.result["values"];
                for (var index in listaProductos) {
                    var producto = listaProductos[index];
                    this.productos.push(new _models_producto_model__WEBPACK_IMPORTED_MODULE_3__["Producto"](producto[0], producto[1], producto[2]));
                }
                this.orden = new _models_orden_model__WEBPACK_IMPORTED_MODULE_4__["Orden"](this.productos);
            });
        });
    }
    load() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(gapi.client.request({
            method: 'GET',
            // Returns a range of values from a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
            path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}/values/${AppComponent_1.rangeCatalogosProductos}?valueRenderOption=${AppComponent_1.valueRenderOption}`
        }));
    }
    registrarVenta(event) {
        console.log("this.guardando = " + this.guardando);
        this.guardando = true;
        event.preventDefault();
        const self = this;
        // Registers the Efectivo and the Tarjeta
        gapi.client.request({
            method: 'POST',
            // Applies one or more updates to the spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate 
            path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}:batchUpdate`,
            body: {
                requests: [
                    {
                        // adds a 2 row in `Control Venta` starting at row 4 (one for efectivo, one for tarjeta)
                        insertDimension: {
                            range: {
                                sheetId: AppComponent_1.controlVentaSheetId,
                                dimension: "ROWS",
                                startIndex: 4,
                                endIndex: 6
                            },
                            inheritFromBefore: false
                        }
                    }
                ]
            }
        }).then(function (response) {
            gapi.client.request({
                method: 'POST',
                // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
                path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}/values:batchUpdate`,
                body: {
                    valueInputOption: AppComponent_1.valueInputOption,
                    data: [
                        {
                            range: AppComponent_1.rangeControlVentaAddRow,
                            values: [
                                self.orden.getRowForEfectivo(),
                                self.orden.getRowForTarjeta()
                            ]
                        }
                    ]
                }
            }).then(function (response) {
                console.log(response);
            });
        });
        // Registers the Feria
        gapi.client.request({
            method: 'POST',
            // Applies one or more updates to the spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate 
            path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}:batchUpdate`,
            body: {
                requests: [
                    {
                        // adds a 1 row in `Control Ferias` starting at row 4
                        insertDimension: {
                            range: {
                                sheetId: AppComponent_1.controlFeriaSheetId,
                                dimension: "ROWS",
                                startIndex: 4,
                                endIndex: 5
                            },
                            inheritFromBefore: false
                        }
                    }
                ]
            }
        }).then(function (response) {
            gapi.client.request({
                method: 'POST',
                // Sets values in one or more ranges of a spreadsheet => https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate
                path: `https://sheets.googleapis.com/v4/spreadsheets/${AppComponent_1.spreadsheetId}/values:batchUpdate`,
                body: {
                    valueInputOption: AppComponent_1.valueInputOption,
                    data: [
                        {
                            range: AppComponent_1.rangeControlFeriaAddRow,
                            values: [
                                self.orden.getRowForFeria()
                            ]
                        }
                    ]
                }
            }).then(function (response) {
                self.ngZone.run(() => {
                    console.log("resetting");
                    self.orden.reset();
                    self.guardando = false;
                });
            });
        });
        // GET sheet/tab ID
        /*gapi.client.request(
            {
                method: 'GET',
                path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`
            }
        ).then(function(response)
            {
                console.log(response);
            }
        );*/
        /*gapi.client.request(
            {
                method: 'GET',
                path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetRange}`
            }
        ).then(function(response)
            {
                console.log(response);
            }
        );*/
    }
};
AppComponent.valueInputOption = "USER_ENTERED"; // RAW => https://developers.google.com/sheets/api/guides/values
AppComponent.valueRenderOption = "UNFORMATTED_VALUE"; // RAW => https://developers.google.com/sheets/api/reference/rest/v4/ValueRenderOption
AppComponent.spreadsheetId = '1oajvWQJIqPETOX-FxzFNvTcwf1K2KeuNnGKJ-aHGDmo';
AppComponent.rangeControlVentaAddRow = 'Control Venta!B5';
AppComponent.rangeControlFeriaAddRow = 'Control Ferias!B5';
AppComponent.rangeCatalogosProductos = 'Catalogos!B3:D22';
AppComponent.controlVentaSheetId = 1798969314;
AppComponent.controlFeriaSheetId = 1823964924; // This is the gid parameter from the url
AppComponent.ctorParameters = () => [
    { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_2__["GapiSession"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initGapi, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGapi", function() { return initGapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");







function initGapi(gapiSession) {
    return () => gapiSession.initClient();
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: initGapi, deps: [_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__["GapiSession"]], multi: true },
            _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__["GapiSession"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/infrastructure/sessions/gapi.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/gapi.session.ts ***!
  \*****************************************************/
/*! exports provided: GapiSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiSession", function() { return GapiSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// https://hintdesk.com/2018/08/24/angular-google-drive-api-example/
// 	https://developers.google.com/drive/api/v3/downloads
// 		https://github.com/google/google-api-javascript-client
// Client ID and API key from the Developer Console
const CLIENT_ID = "950877447297-7l1ms0m9q26fsqv0o1s7m5m9917ieasa.apps.googleusercontent.com";
const API_KEY = "AIzaSyB44r0X-I9jnqcBI7F5hcUdvfiQBEKmam4";
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
//const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// https://developers.google.com/sheets/api/guides/authorizing
//var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
//var SCOPES = "https://www.googleapis.com/auth/drive";
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
let GapiSession = class GapiSession {
    constructor() {
    }
    initClient() {
        return new Promise((resolve, reject) => {
            gapi.load('client:auth2', () => {
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {
                    this.googleAuth = gapi.auth2.getAuthInstance();
                    resolve();
                });
            });
        });
    }
    get isSignedIn() {
        return this.googleAuth.isSignedIn.get();
    }
    signIn() {
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then((googleUser) => {
            //this.appRepository.User.add(googleUser.getBasicProfile());
        });
    }
    signOut() {
        this.googleAuth.signOut();
    }
};
GapiSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GapiSession);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/models/detalle.orden.model.ts":
/*!*******************************************!*\
  !*** ./src/models/detalle.orden.model.ts ***!
  \*******************************************/
/*! exports provided: DetalleOrden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleOrden", function() { return DetalleOrden; });
/* harmony import */ var _producto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.model */ "./src/models/producto.model.ts");
/* harmony import */ var _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo.pago.model */ "./src/models/tipo.pago.model.ts");
/* harmony import */ var _orden_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orden.model */ "./src/models/orden.model.ts");



class DetalleOrden {
    constructor(producto, orden) {
        this.vendido = 0;
        this.feria = 0;
        this.tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
        this.total = 0;
        this.producto = producto;
        this.orden = orden;
    }
    onChangeVendido(vendido) {
        this.vendido = vendido;
        this.calcularTotal();
    }
    toggleTipoPago() {
        switch (this.tipoPago) {
            case _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO:
                this.tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].TARJETA;
                break;
            case _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].TARJETA:
                this.tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
                break;
        }
    }
    calcularTotal() {
        this.total = this.producto.precio * this.vendido;
        this.orden.calcularTotal();
    }
    minusVendido() {
        this.vendido = this.minus(this.vendido);
        this.calcularTotal();
    }
    addVendido() {
        this.vendido = this.add(this.vendido);
        this.calcularTotal();
        console.log(this.orden);
    }
    minusFeria() {
        this.feria = this.minus(this.feria);
    }
    addFeria() {
        this.feria = this.add(this.feria);
    }
    isEffectivo() {
        return this.tipoPago == _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
    }
    minus(currentValue) {
        currentValue = currentValue - 1;
        return currentValue < 0 ? 0 : currentValue;
    }
    add(currentValue) {
        currentValue = currentValue + 1;
        return currentValue;
    }
}
DetalleOrden.ctorParameters = () => [
    { type: _producto_model__WEBPACK_IMPORTED_MODULE_0__["Producto"] },
    { type: _orden_model__WEBPACK_IMPORTED_MODULE_2__["Orden"] }
];


/***/ }),

/***/ "./src/models/orden.model.ts":
/*!***********************************!*\
  !*** ./src/models/orden.model.ts ***!
  \***********************************/
/*! exports provided: Orden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orden", function() { return Orden; });
/* harmony import */ var _detalle_orden_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle.orden.model */ "./src/models/detalle.orden.model.ts");
/* harmony import */ var _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo.pago.model */ "./src/models/tipo.pago.model.ts");


class Orden {
    constructor(productos) {
        this.detalleOrdenList = [];
        this.total = 0;
        for (var p in productos) {
            this.detalleOrdenList.push(new _detalle_orden_model__WEBPACK_IMPORTED_MODULE_0__["DetalleOrden"](productos[p], this));
        }
    }
    reset() {
        for (var detalleOrden in this.detalleOrdenList) {
            this.detalleOrdenList[detalleOrden].tipoPago = _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO;
            this.detalleOrdenList[detalleOrden].vendido = 0;
            this.detalleOrdenList[detalleOrden].feria = 0;
            this.detalleOrdenList[detalleOrden].calcularTotal();
        }
    }
    calcularTotal() {
        this.total = 0;
        for (var detalleOrden in this.detalleOrdenList) {
            this.total += this.detalleOrdenList[detalleOrden].total;
        }
    }
    getRowForEfectivo() {
        return this.getRowFor(_tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO);
    }
    getRowForTarjeta() {
        return this.getRowFor(_tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].TARJETA);
    }
    getRowForFeria() {
        return this.getRowFor(null);
    }
    getRowFor(tipoPago) {
        var row = new Array();
        row.push(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString());
        if (tipoPago != null) {
            row.push(tipoPago == _tipo_pago_model__WEBPACK_IMPORTED_MODULE_1__["TipoPago"].EFECTIVO ? "Effectivo" : "Tarjeta");
        }
        for (var detalle in this.detalleOrdenList) {
            var detalleOrden = this.detalleOrdenList[detalle];
            row.push(tipoPago == null ? detalleOrden.feria : (detalleOrden.tipoPago == tipoPago ? detalleOrden.vendido : 0));
        }
        return row;
    }
}
Orden.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/models/producto.model.ts":
/*!**************************************!*\
  !*** ./src/models/producto.model.ts ***!
  \**************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
class Producto {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
Producto.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/models/tipo.pago.model.ts":
/*!***************************************!*\
  !*** ./src/models/tipo.pago.model.ts ***!
  \***************************************/
/*! exports provided: TipoPago */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoPago", function() { return TipoPago; });
var TipoPago;
(function (TipoPago) {
    TipoPago["TARJETA"] = "Tarjeta";
    TipoPago["EFECTIVO"] = "Efectivo";
})(TipoPago || (TipoPago = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\psaen\Desktop\Personal\PanaderiaAvila\Site\PanaderiaAvila\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map