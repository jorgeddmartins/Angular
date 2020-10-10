(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<global-area></global-area>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _global_global_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/global.component */ "./src/app/global/global.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _template_rightbtn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template/rightbtn.component */ "./src/app/template/rightbtn.component.ts");
/* harmony import */ var _template_takelead_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template/takelead.component */ "./src/app/template/takelead.component.ts");
/* harmony import */ var _policies_policies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./policies/policies.component */ "./src/app/policies/policies.component.ts");
/* harmony import */ var _fishing_fishing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fishing/fishing.component */ "./src/app/fishing/fishing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'quotes', component: _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_9__["QuotesComponent"] },
    { path: 'policies', component: _policies_policies_component__WEBPACK_IMPORTED_MODULE_12__["PoliciesComponent"] },
    { path: 'fishing', component: _fishing_fishing_component__WEBPACK_IMPORTED_MODULE_13__["FishingComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _global_global_component__WEBPACK_IMPORTED_MODULE_8__["GlobalComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_9__["QuotesComponent"],
                _template_rightbtn_component__WEBPACK_IMPORTED_MODULE_10__["RightbtnComponent"],
                _template_takelead_component__WEBPACK_IMPORTED_MODULE_11__["TakeleadComponent"],
                _policies_policies_component__WEBPACK_IMPORTED_MODULE_12__["PoliciesComponent"],
                _fishing_fishing_component__WEBPACK_IMPORTED_MODULE_13__["FishingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fishing/fishing.component.html":
/*!************************************************!*\
  !*** ./src/app/fishing/fishing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"fishingTemp\">\n\n    <section class=\"costumerDetails\">\n        <div class=\"costumerBoard costumerMiddle\">\n            <form action=\"#\" method=\"post\">\n\n                <div *ngFor=\"let topelem of topelems\" class=\"boxInp {{ topelem.mainClass }}\">\n                    <label class=\"boxLabel\">{{ topelem.name }}</label>\n                    <input name=\"{{ topelem.inputname }}\" type=\"text\">\n                </div>\n\n                <div class=\"boxInp wTh4\">\n                    <span class=\"GoFishBtn\">Go Fish</span>\n                </div>\n\n            </form>\n        </div>\n    </section>\n\n    <section class=\"costumerDetails\">\n        <div class=\"costumerBoard costumerMiddle\" style=\"height: 75.15vh;\">\n\n            <div class=\"theadFish\">\n\n                <span *ngFor=\"let fishhead of fishheads\" class=\"thFish\">{{ fishhead.name }}</span>\n\n            </div>\n\n            <div class=\"tbodyFish\" id=\"tbodyFish\"></div>\n\n            <div class=\"tdFoot\">\n                \n                <span *ngFor=\"let footpage of footpages\" class=\"pageNum\">{{ footpage.name }}</span>\n\n            </div>\n\n        </div>\n    </section>\n\n</div>"

/***/ }),

/***/ "./src/app/fishing/fishing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fishing/fishing.component.ts ***!
  \**********************************************/
/*! exports provided: FishingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FishingComponent", function() { return FishingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FishingComponent = /** @class */ (function () {
    function FishingComponent() {
        this.topelems = {};
        this.fishheads = {};
        this.footpages = {};
        this.topelems = [
            { mainClass: 'wTh4', name: 'Dates', inputname: 'dates' },
            { mainClass: 'wTh4', name: 'Start Date', inputname: 'startdate' },
            { mainClass: 'wTh4', name: 'End Date', inputname: 'enddate' },
            { mainClass: 'wTh4', name: 'Consultant', inputname: 'consultant' },
            { mainClass: 'wTh4', name: 'Team', inputname: 'team' },
            { mainClass: 'wTh4', name: 'Lead Status', inputname: 'leadstatus' },
            { mainClass: 'wTh4', name: 'Lead Providers', inputname: 'leadproviders' }
        ];
        this.fishheads = [
            { name: 'Ref#' },
            { name: 'Status' },
            { name: 'Client' },
            { name: 'Sum' },
            { name: 'Term' },
            { name: 'Added' },
            { name: 'Lead Provider' },
            { name: 'Supplier' },
            { name: 'Owner' },
            { name: 'Action' }
        ];
        this.footpages = [
            { name: '<<' },
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '>>' }
        ];
    }
    FishingComponent.prototype.ngOnInit = function () { };
    FishingComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/fishing.js');
    };
    FishingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fishing-page',
            template: __webpack_require__(/*! ./fishing.component.html */ "./src/app/fishing/fishing.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FishingComponent);
    return FishingComponent;
}());



/***/ }),

/***/ "./src/app/global/global.component.html":
/*!**********************************************!*\
  !*** ./src/app/global/global.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"HeaderLeft\">\n    <div class=\"HeaderLeft_In\">\n        <div class=\"logo_Box\"><img src=\"assets/img/logo.png\" /></div>\n        <div class=\"newsFloor\">\n            <span class=\"newsTitle\">Smarter News</span>\n            <span class=\"newsSlider\">News</span>\n        </div>\n    </div>\n    <nav role=\"navigation\">\n        <a *ngFor=\"let navroute of navroutes\" routerLink=\"{{ navroute.url }}\" class=\"navRoute {{ navroute.mainClass }}\">{{ navroute.name }}</a>\n        <div class=\"search_Floor\">\n            <span>Search</span>\n            <input type=\"text\" class=\"searchLead\" />\n        </div>\n    </nav>\n</header>\n\n\n<!-- Local Areas -->\n<section class=\"SmarterSection\" role=\"main\">\n    <div class=\"leadTNav\">\n        <div class=\"LRefr_Fl\">\n            <span class=\"referenceLead\">Lead Reference</span>\n            <span class=\"refIt createdL\">Created: {{ createDate }}</span>\n            <span class=\"refIt modifiedL\">Modified: {{ modifDate }}</span>\n        </div>\n        <rightbtn-page></rightbtn-page>\n        <takelead-page></takelead-page>\n    </div>\n    <router-outlet></router-outlet>\n</section>\n\n\n<!-- Global Right -->\n<div class=\"HeaderRight\">\n    <div class=\"topHeaderRight\">\n        <div class=\"topHeaderRight_Floor\">\n            <div class=\"alerts_Floor\"><span class=\"newsSlider\">Alerts</span></div>\n            <div class=\"LoginUsers\">\n                <span class=\"userName\">{{ activeUser }}</span>\n                <a class=\"userLog selected\">Log Out</a>\n                <!-- <a class=\"userLog\">Log In</a> -->\n            </div>\n\n            <div class=\"LocalDateTime\">\n                <span class=\"weekDay\" style=\"margin-right: 7px;\"></span>\n                <span class=\"date\"></span>\n                <span class=\"hours\" style=\"margin-left: 7px;\"></span>\n            </div>\n\n        </div>\n    </div>\n\n    <section class=\"taskSection\">\n\n    \t<div class=\"topTasks topLeadDetail\">\n            <div class=\"topNav lDetail\"><span class=\"leadDet\">Lead Details</span></div>\n            <div class=\"leadDetail_Floor leadDetail_Height\">\n            \t\n            \t<section class=\"costumerDetails\">\n            \t\t<div class=\"costumerBoard costumerBoard_MaxWith\">\n\n            \t\t\t<div *ngFor=\"let detailsinput of detailsinputs\" class=\"boxInp {{ detailsinput.mainClass }}\">\n\t                        <label class=\"boxLabel\">{{ detailsinput.name }}</label>\n\t                        <input type=\"text\" name=\"{{ detailsinput.inputname }}\" />\n\t                    </div>\n\n            \t\t</div>\n            \t</section>\n\n            </div>\n        </div>\n\n        <div class=\"topTasks\">\n            <div class=\"topNav\"><span class=\"addTasks\" data-toggle=\"modal\" data-target=\"#addTasksModal\">Tasks</span></div>\n            <div class=\"topNav_Floor\">\n                <div class=\"atb_Top\">\n                    <span class=\"atb_Header width20\">Author</span>\n                    <span class=\"atb_Header width45\">Task</span>\n                    <span class=\"atb_Header width17-5\">Due</span>\n                    <span class=\"atb_Header\">Created</span>\n                </div>\n                <div class=\"TasksTop_Fl\" id=\"TasksTop_Fl\"></div>\n            </div>\n        </div>\n\n        <div class=\"allTabs_Floor\">\n            <div class=\"headerTabs\">\n                <span class=\"HTab tabAll selectedHtb\">All</span>\n                <span class=\"HTab tabNotes\">Notes</span>\n                <span class=\"HTab Tabsms\">Sms</span>\n                <span class=\"addNote addNoteGrey\"></span>\n            </div>\n            <div class=\"allTabs-Content\">\n                <div class=\"atb_Top\">\n                    <span class=\"atb_Header width20\">Author</span>\n                    <span class=\"atb_Header width54\">Note</span>\n                    <span class=\"atb_Header\">Created</span>\n                </div>\n                <div class=\"notes_Floor\" id=\"notesFloor\"></div>\n            </div>\n        </div>\n\n        <div class=\"bottomTasks\">\n            <div class=\"topNav\"><span class=\"addBttTasks\">Calls</span></div>\n            <div class=\"bottomNav_Floor\">\n                <div class=\"atb_Top\">\n                    <span class=\"atb_Header width20\">Caller</span>\n                    <span class=\"atb_Header width12\">Extn</span>\n                    <span class=\"atb_Header width20\">CallID</span>\n                    <span class=\"atb_Header width20\">Number</span>\n                    <span class=\"atb_Header width27\">Date</span>\n                </div>\n                <div class=\"calls_Floor\" id=\"callsFloor\"></div>\n            </div>\n        </div>\n    </section>\n</div>\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addTasksModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n        \t<div class=\"close-modal\" data-dismiss=\"modal\"></div>\n            <div class=\"modal-body\">\n                Add a New Task\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"addNoteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            \t<div class=\"close-modal\" data-dismiss=\"modal\"></div>\n            <div class=\"modal-body\">\n                Add a New Note\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global/global.component.ts":
/*!********************************************!*\
  !*** ./src/app/global/global.component.ts ***!
  \********************************************/
/*! exports provided: GlobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalComponent", function() { return GlobalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalComponent = /** @class */ (function () {
    function GlobalComponent() {
        this.navroutes = {};
        this.detailsinputs = {};
        this.navroutes = [
            { mainClass: 'normal', url: '/', name: 'Home' },
            { mainClass: 'normal', url: '/', name: 'My Leads' },
            { mainClass: 'normal', url: '/', name: 'Tasks' },
            { mainClass: 'policies', url: '/policies', name: 'My Policies' },
            { mainClass: 'fishing', url: '/fishing', name: 'Fishing' },
            { mainClass: 'normal', url: '/', name: 'Add Lead' },
        ],
            this.activeUser = 'John Doe';
        this.createDate = '04/04/2018';
        this.modifDate = '04/04/2018';
        this.detailsinputs = [
            { mainClass: 'detailLeadW', name: 'Customer Name', inputname: 'customername' },
            { mainClass: 'detailLeadW', name: 'Sum Assured', inputname: 'sumAssured' },
            { mainClass: 'detailLeadW', name: 'Tel No.', inputname: 'TelNo' },
            { mainClass: 'detailLeadW', name: 'Term', inputname: 'term' },
        ];
    }
    GlobalComponent.prototype.ngOnInit = function () { };
    GlobalComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/global.js');
    };
    GlobalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'global-area',
            template: __webpack_require__(/*! ./global.component.html */ "./src/app/global/global.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], GlobalComponent);
    return GlobalComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"homeTemp\">\n\n    <section class=\"costumerDetails\">\n        <div class=\"costumerBoard costumerLeft\">\n            <span class=\"formBoard_Title\">Customer 1 Details</span>\n            <form action=\"#\" method=\"post\">\n                <div class=\"form_Fl formWhite\">\n\n                    <div class=\"boxInp\" *ngFor=\"let costumer of costumers\">\n                        <label class=\"boxLabel\">{{ costumer.name }}</label>\n                        <input type=\"text\" name=\"{{ costumer.inputname }}\" />\n                    </div>\n\n                    <div class=\"boxInp DOBcl\">\n                        <label class=\"boxLabel\">DOB</label>\n                        <div class=\"inputBox datePicker_Fl datepicker1_Fl\">\n                            <input type=\"text\" name=\"dob\" class=\"dobDatepicker1\" id=\"dobDatepicker1\" />\n                        </div>\n                    </div>\n\n                    <div class=\"boxInp genderTemp switchTemp\">\n                        <label class=\"boxLabel\">Gender</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"slider round\"><div class=\"switchBtnG\"></div></div></label></div>\n                    </div>\n                    <div class=\"boxInp smokerTemp switchTemp\">\n                        <label class=\"boxLabel\">Smoker?</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"slider round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                </div>\n                <div class=\"form_Fl formGrey\">\n\n                    <div class=\"boxInp\" *ngFor=\"let addresse of addresses\">\n                        <label class=\"boxLabel\">{{ addresse.name }}</label>\n                        <input type=\"text\" name=\"{{ addresse.inputname }}\" />\n                    </div>\n\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">Post Code</label>\n                        <div class=\"inputBox postcode_Fl\">\n                            <input type=\"text\" name=\"postcode\" />\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form_Fl formWhite\">\n\n                    <div *ngFor=\"let costcontct of costcontcts\" class=\"boxInp {{ costcontct.mainClass }}\">\n                        <label class=\"boxLabel\">{{ costcontct.name }}</label>\n                        <input type=\"text\" name=\"{{ costcontct.inputname }}\" />\n                        <div class=\"phoneAdt_Fl\"></div>\n                    </div>\n\n                </div>\n            </form>\n        </div>\n\n        <div class=\"costumerBoard costumerRight costumerRightBorder\">\n            <div class=\"addCustomer\">\n                <button class=\"addCustomerBtn\">Add Second Customer</button>\n            </div>\n\n            <span class=\"formBoard_Title\">Customer 2 Details</span>\n            <form action=\"\" method=\"post\">\n                <div class=\"form_Fl formWhite\">\n\n                    <div class=\"boxInp\" *ngFor=\"let costumer of costumers\">\n                        <label class=\"boxLabel\">{{ costumer.name }}</label>\n                        <input type=\"text\" name=\"{{ costumer.inputname }}\" />\n                    </div>\n\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">DOB</label>\n                        <div class=\"inputBox datePicker_Fl\">\n                            <input type=\"text\" id=\"datepicker2\" class=\"datepicker2\" name=\"dob\" readonly=\"readonly\" />\n                        </div>\n                    </div>\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel genderTemp switchTemp\">Gender</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"slider round\"><div class=\"switchBtnG\"></div></div></label></div>\n                    </div>\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel smokerTemp switchTemp\">Smoker?</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"slider round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                </div>\n                <div class=\"form_Fl formGrey\">\n                    <div class=\"boxInp\" *ngFor=\"let addresse of addresses\">\n                        <label class=\"boxLabel\">{{ addresse.name }}</label>\n                        <input type=\"text\" name=\"{{ addresse.inputname }}\" />\n                    </div>\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">Post Code</label>\n                        <div class=\"inputBox postcode_Fl\">\n                            <input type=\"text\" name=\"postcode\" />\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form_Fl formWhite\">\n                    <div *ngFor=\"let costcontct of costcontcts\" class=\"boxInp {{ costcontct.mainClass }}\">\n                        <label class=\"boxLabel\">{{ costcontct.name }}</label>\n                        <input type=\"text\" name=\"{{ costcontct.inputname }}\" />\n                        <div class=\"phoneAdt_Fl\"></div>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n    </section>\n\n    <section class=\"costumerDetails\">\n        <div class=\"costumerBoard costumerLeft\">\n            <form action=\"#\" method=\"post\">\n                <div class=\"form_Fl formGrey\">\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">Sum Assured</label>\n                        <input type=\"text\" name=\"address\" />\n                    </div>\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">CIC Sum</label>\n                        <input type=\"text\" name=\"address\" />\n                    </div>\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">Term</label>\n                        <input type=\"text\" name=\"town\" />\n                    </div>\n                    \n                    <div class=\"boxInp smllInp\">\n                        <label class=\"boxLabel\">Life</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderSmall round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                    <div class=\"boxInp smllInp\">\n                        <label class=\"boxLabel\">CIC</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderSmall round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                    <div class=\"boxInp smllInp\">\n                        <label class=\"boxLabel\">Level term</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderSmall round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                    <div class=\"boxInp smllInp\">\n                        <label class=\"boxLabel\">Guaranteed</label>\n                       <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderSmall round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"costumerBoard costumerRight\" style=\"border: 0;\">\n            <form action=\"#\" method=\"post\">\n                <div class=\"btnsLft\">\n                    <a class=\"QutBtn\" routerLink=\"/quotes\">Get Quotes</a>\n                    <span class=\"bttBtnlft smsBtn btnW49\">Send Sms</span>\n                    <span class=\"bttBtnlft updaBtn btnW49\">Update Lead</span>\n                </div>\n\n                <div class=\"downCostumer\">\n                    <div class=\"boxInp extraW \">\n                        <label class=\"boxLabel\">Dupliocate</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderMedium round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                    <div class=\"boxInp extraW \">\n                        <label class=\"boxLabel\">Single / Joint</label>\n                        <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderMedium round\"><div class=\"switchBtnS\"></div></div></label></div>\n                    </div>\n                    <div class=\"boxInp extraW \">\n                        <label class=\"boxLabel\">Lead Status</label>\n                        <input type=\"text\" name=\"leadstatus\" />\n                    </div>\n                    <div class=\"boxInp extraW \">\n                        <label class=\"boxLabel\">Initial Owner</label>\n                        <input type=\"text\" name=\"initialOwner\" />\n                    </div>\n                </div>\n                <span class=\"bttBtnlft smsBtn assignBt btnW13\">Assign</span>\n                <span class=\"bttBtnlft updaBtn assignBt btnW13\">Reassign</span>\n            </form>\n        </div>\n    </section>\n\n    <section class=\"costumerDetails\" style=\"border: 1px solid #ddd; height: 118.2px\"></section>\n    <section class=\"costumerDetails\" style=\"border: 1px solid #ddd; height: 150px\"></section>\n\n    <div class=\"dobC_Fl\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.costumers = {};
        this.addresses = {};
        this.costcontcts = {};
        this.costumers = [
            { name: 'Title', inputname: 'title' },
            { name: 'First Name', inputname: 'firstname' },
            { name: 'Last Name', inputname: 'lasttname' }
        ];
        this.addresses = [
            { name: 'Address Line 1', inputname: 'address' },
            { name: 'Address Line 2', inputname: 'address' },
            { name: 'Town', inputname: 'town' },
            { name: 'City', inputname: 'city' },
            { name: 'Country', inputname: 'country' }
        ];
        this.costcontcts = [
            { mainClass: 'boxInp100', name: 'Email', inputname: 'email' },
            { mainClass: '', name: 'Home Phone', inputname: 'homephone' },
            { mainClass: '', name: 'Work Phone', inputname: 'workphone' },
            { mainClass: '', name: 'Mobile Phone', inputname: 'mobilephone' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/home.js');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/policies/policies.component.html":
/*!**************************************************!*\
  !*** ./src/app/policies/policies.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"policyTemp\">\n    <section class=\"costumerDetails\">\n        <div class=\"details_Left\">\n\n            <div class=\"costumerBoard costumerLeft marginB3\">\n                <span class=\"formBoard_Title title_BackWhite\">Customer Contact Details</span>\n            </div>\n\n            <input *ngFor=\"let detacost of detacosts\" type=\"{{ detacost.type }}\" name=\"{{ detacost.name }}\" class=\"{{ detacost.classMain }}\" />\n\n            <div class=\"costumerBoard costumerLeft\" style=\"height: 42.5vh\">\n                <span class=\"formBoard_Title\">Policy Notes</span>\n            </div>\n\n            <div class=\"costumerBoard costumerLeft\" style=\"height: 30.355vh\">\n                <span class=\"formBoard_Title\">Document Notes</span>\n            </div>\n\n        </div>\n\n        <div class=\"costumerBoard costumerRight\">\n            <span class=\"formBoard_Title\">Update Policy Details</span>\n            <form action=\"\" method=\"post\">\n                <div class=\"form_Fl formWhite form_FlPolicy\" id=\"form_Fl\">\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">App No.</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Policy No.</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Provider</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Premium</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Commission</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Recurring</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Split</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Split With</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Has Bank Details</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Has Start Date</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Start Date</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Pref Payment Date</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">First Payment Date</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Cashback Amount</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Voucher Amout</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Net Commission</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Sold Status</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Is Policy Discounted</label>\n                        <label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderIsPolicy round\"><div class=\"switchBtnS\"></div></div></label>\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Bank Name</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Acc. No.</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Sort Code</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp estraWPlus\">\n                        <label class=\"boxLabel\">Card Holder Name</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                </div>\n\n                <div class=\"bottomForm\">\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">GP Name</label>\n                        <input type=\"text\" name=\"title\" />\n                    </div>\n                    <div class=\"boxInp\">\n                        <label class=\"boxLabel\">GP Details</label>\n                        <textarea></textarea>\n                    </div>\n                </div>\n\n                <div class=\"boxInp extraBtn\">\n                    <span class=\"addPoliBtn\">Add Policy Details</span>\n                </div>\n            </form>\n        </div>\n\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/policies/policies.component.ts":
/*!************************************************!*\
  !*** ./src/app/policies/policies.component.ts ***!
  \************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoliciesComponent = /** @class */ (function () {
    function PoliciesComponent() {
        this.detacosts = {};
        this.detacosts = [
            { name: '', classMain: 'CostDetInpt marginL', type: 'text' },
            { name: '', classMain: 'CostDetInpt', type: 'text' },
            { name: '', classMain: 'CostDetInpt', type: 'text' },
            { name: '', classMain: 'CostDetInpt marginR', type: 'text' },
            { name: '', classMain: 'CostDetInpt marginL', type: 'text' },
            { name: '', classMain: 'CostDetInpt', type: 'text' },
            { name: '', classMain: 'CostDetInpt', type: 'text' },
            { name: '', classMain: 'CostDetInpt marginR', type: 'text' }
        ];
    }
    PoliciesComponent.prototype.ngOnInit = function () { };
    PoliciesComponent.prototype.ngAfterViewInit = function () {
        // $.getScript('assets/js/quotes.js');
        // $("#form_Fl").mCustomScrollbar({ { theme: "minimal" } });
    };
    PoliciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'policies-page',
            template: __webpack_require__(/*! ./policies.component.html */ "./src/app/policies/policies.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PoliciesComponent);
    return PoliciesComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"quoteTemp\">\n    <section class=\"costumerDetails\">\n\n        <div class=\"details_Left\">\n            <div class=\"costumerBoard costumerLeft\">\n                <span class=\"formBoard_Title\">Customer 1<span class=\"updaTeDetail costDet1\">Upadate Details 1</span></span>\n\n                <form action=\"#\" method=\"post\">\n                    <div class=\"form_Fl formWhite\">\n\n                        <div class=\"boxInp\" *ngFor=\"let costumer of costumers\">\n                            <label class=\"boxLabel\">{{ costumer.name }}</label>\n                            <input type=\"text\" name=\"{{ costumer.inputname }}\" />\n                        </div>\n\n                        <div class=\"boxInp\">\n                            <label class=\"boxLabel\">DOB</label>\n                            <div class=\"inputBox datePicker_Fl datepicker1_Fl\">\n                                <input type=\"text\" name=\"dob\" class=\"datepicker\" id=\"datepicker\" />\n                            </div>\n                        </div>\n                        <div class=\"boxInp\">\n                            <label class=\"boxLabel\">Gender</label>\n                            <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"slider round\"><div class=\"switchBtnG\"></div></div></label></div>\n                        </div>\n                        <div class=\"boxInp boxInp10\">\n                            <label class=\"boxLabel\">Smoker?</label>\n                            <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderExtraSm round\"><div class=\"switchBtnS\"></div></div></label></div>\n                        </div>\n                        <div class=\"boxInp boxInp10\">\n                            <label class=\"boxLabel blueLabel\">ANB</label>\n                            <input type=\"text\" name=\"anb\" />\n                        </div>\n                    </div>\n                </form>\n            </div>\n\n            <div class=\"costumerBoard costumerLeft\">\n                <span class=\"formBoard_Title\">Customer 2<span class=\"updaTeDetail costDet2\">Upadate Details 2</span></span>\n\n                <form action=\"#\" method=\"post\">\n                    <div class=\"form_Fl formWhite\">\n\n                        <div class=\"boxInp\" *ngFor=\"let costumer of costumers\">\n                            <label class=\"boxLabel\">{{ costumer.name }}</label>\n                            <input type=\"text\" name=\"{{ costumer.inputname }}\" />\n                        </div>\n\n\n                        <div class=\"boxInp\">\n                            <label class=\"boxLabel\">DOB</label>\n                            <div class=\"inputBox datePicker_Fl datepicker1_Fl\"><input type=\"text\" name=\"dob\" class=\"datepicker\" id=\"datepicker\" /></div>\n                        </div>\n                        <div class=\"boxInp\">\n                            <label class=\"boxLabel\">Gender</label>\n                            <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"slider round\"><div class=\"switchBtnG\"></div></div></label></div>\n                        </div>\n                        <div class=\"boxInp boxInp10\">\n                            <label class=\"boxLabel\">Smoker?</label>\n                            <div class=\"switch_box\"><label class=\"switch\"><input type=\"checkbox\"><div class=\"sliderExtraSm round\"><div class=\"switchBtnS\"></div></div></label></div>\n                        </div>\n                        <div class=\"boxInp boxInp10\">\n                            <label class=\"boxLabel blueLabel\">ANB</label>\n                            <input type=\"text\" name=\"anb\" />\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <div class=\"costumerBoard costumerRight\">\n            <span class=\"formBoard_Title\"></span>\n            <form action=\"\" method=\"post\">\n                <div class=\"form_Fl formWhite\">\n\n                    <div *ngFor=\"let genequote of genequotes\" class=\"boxInp {{ genequote.widthClass }}\">\n                        <label class=\"boxLabel {{ genequote.labelColor }}\">{{ genequote.name }}</label>\n                        <input type=\"text\" name=\"{{ genequote.inputname}}\" />\n                    </div>\n\n                    <div class=\"boxInp boxInp73\">\n                        <span class=\"GeneQtBtn\">Generate Quote</span>\n                    </div>\n\n                </div>\n            </form>\n        </div>\n\n    </section>\n\n\n    <section class=\"costumerDetails\">\n        <span class=\"alertErrorBtn\">Error Alerts / Messages</span>\n    </section>\n\n    <section class=\"costumerDetails\">\n        <div class=\"columnState_Fl\" id=\"columnState_Fl\">\n\n            <div *ngFor=\"let clstateUp of clstateUps\" class=\"stateColumn {{ clstateUp.heightClass }}\"></div>\n            <div class=\"stateColumn\" *ngFor=\"let clstate of clstates\"><span class=\"state-In {{ clstate.colorBack }}\">{{ clstate.name }}</span></div>\n\n        </div>\n    </section>\n\n</div>"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuotesComponent = /** @class */ (function () {
    function QuotesComponent() {
        this.costumers = {};
        this.genequotes = {};
        this.clstateUps = {};
        this.clstates = {};
        this.costumers = [
            { name: 'Title', inputname: 'title' },
            { name: 'First Name', inputname: 'firstname' },
            { name: 'Last Name', inputname: 'lasttname' }
        ];
        this.genequotes = [
            { widthClass: 'boxInp23-35', labelColor: 'blueLabel', name: 'To Age', inputname: 'toage' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Term', inputname: 'term' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Life', inputname: 'life' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'CIC', inputname: 'cic' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Level Term', inputname: 'levelterm' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Guaranteed', inputname: 'guaranteed' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'WOL', inputname: 'wol' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Death', inputname: 'death' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Lives', inputname: 'lives' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Frenquency', inputname: 'frenquency' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Quote By', inputname: 'quoteby' },
            { widthClass: 'boxInp23-35', labelColor: '', name: '% Comn Ret.', inputname: 'comnret' },
            { widthClass: 'boxInp23-35', labelColor: '', name: 'Sum Assured', inputname: 'sumassured' }
        ];
        this.clstateUps = [
            { heightClass: 'heightLevel' },
            { heightClass: 'heightLevel' },
            { heightClass: 'heightLevel' },
            { heightClass: 'heightLevel' },
            { heightClass: 'heightLevel' },
            { heightClass: 'heightLevel' },
            { heightClass: 'heightLevel' }
        ];
        this.clstates = [
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: 'State 1' },
            { colorBack: 'blueBack', name: 'State 2' },
            { colorBack: 'blueBack', name: 'State 3' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' },
            { colorBack: '', name: '' }
        ];
    }
    QuotesComponent.prototype.ngOnInit = function () { };
    QuotesComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/quotes.js');
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quotes-page',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/template/rightbtn.component.html":
/*!**************************************************!*\
  !*** ./src/app/template/rightbtn.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    \n<span *ngFor=\"let topbtn of topbtns\" class=\"LRefr_Btns {{ topbtn.mainClass }}\">{{ topbtn.name }}</span>\n    \n\n\n"

/***/ }),

/***/ "./src/app/template/rightbtn.component.ts":
/*!************************************************!*\
  !*** ./src/app/template/rightbtn.component.ts ***!
  \************************************************/
/*! exports provided: RightbtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightbtnComponent", function() { return RightbtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightbtnComponent = /** @class */ (function () {
    function RightbtnComponent() {
        this.topbtns = {};
        this.topbtns = [
            { mainClass: 'bigBtn', name: 'Not Contacted' },
            { mainClass: 'bigBtn', name: 'No Bank Details' },
            { mainClass: 'bigBtn', name: 'Turned Down' },
            { mainClass: 'bigBtn', name: 'Quoted' },
            { mainClass: 'bigBtn', name: 'Contacted' }
        ];
    }
    RightbtnComponent.prototype.ngOnInit = function () { };
    RightbtnComponent.prototype.ngAfterViewInit = function () {
        // $.getScript('assets/js/home.js');
    };
    RightbtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rightbtn-page',
            template: __webpack_require__(/*! ./rightbtn.component.html */ "./src/app/template/rightbtn.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RightbtnComponent);
    return RightbtnComponent;
}());



/***/ }),

/***/ "./src/app/template/takelead.component.html":
/*!**************************************************!*\
  !*** ./src/app/template/takelead.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <span class=\"LRefr_Btns smallBtn\">Add</span>-->\n<!-- <span class=\"LRefr_Btns smallBtn viewBtn\">View</span> --> \n\n<span class=\"LRefr_Btns leadTBtn\">Take Lead</span>\n\n<span class=\"LRefr_Btns smallBtn viewBtn\">\n\t<span class=\"btnTip viewTip\">View</span>\n</span>\n\n<span class=\"LRefr_Btns smallBtn addBtn\">\n\t<span class=\"btnTip addTip\">Add</span>\n</span>\n\n<div class=\"takeLead_Fl\"></div>\n\n"

/***/ }),

/***/ "./src/app/template/takelead.component.ts":
/*!************************************************!*\
  !*** ./src/app/template/takelead.component.ts ***!
  \************************************************/
/*! exports provided: TakeleadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeleadComponent", function() { return TakeleadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TakeleadComponent = /** @class */ (function () {
    function TakeleadComponent() {
    }
    TakeleadComponent.prototype.ngOnInit = function () { };
    TakeleadComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/takelead.js');
    };
    TakeleadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'takelead-page',
            template: __webpack_require__(/*! ./takelead.component.html */ "./src/app/template/takelead.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TakeleadComponent);
    return TakeleadComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\projects\httdocs\smartercoverNewV6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map