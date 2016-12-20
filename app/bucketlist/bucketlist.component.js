"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var bucketlist_service_1 = require('./bucketlist.service');
var BucketlistComponent = (function () {
    function BucketlistComponent(_bucketlistService, _router) {
        this._bucketlistService = _bucketlistService;
        this._router = _router;
        this.pageTitle = "Bucketlists";
        this.showItems = false;
    }
    BucketlistComponent.prototype.ngOnInit = function () {
        this.getBucketlists();
    };
    BucketlistComponent.prototype.getBucketlists = function () {
        var _this = this;
        this._bucketlistService.getBucketlists()
            .subscribe(function (bucketlists) {
            _this.bucketlists = bucketlists.results;
            _this.count = bucketlists.count;
            _this.nextPage = bucketlists.next;
            _this.previousPage = bucketlists.previous;
        }, function (error) { return _this.errorMessage = error; });
    };
    BucketlistComponent.prototype.createBucketlist = function () {
        var _this = this;
        this._bucketlistService.createBucketlist(this.newBucketlist).subscribe(function (result) {
            _this.createBucketlistError = null;
            _this.newBucketlist = null;
        }, function (error) { return _this.createBucketlistError = error; }, function () { return _this.getBucketlists(); });
    };
    BucketlistComponent.prototype.deleteBucketlist = function (bucketlistId) {
        var _this = this;
        this._bucketlistService.deleteBucketlist(bucketlistId).subscribe(function (result) { }, function (error) { return _this.errorMessage = error; }, function () { return _this.getBucketlists(); });
    };
    BucketlistComponent.prototype.getNextPage = function () {
        var _this = this;
        this._bucketlistService.getPage(this.nextPage)
            .subscribe(function (bucketlists) {
            _this.bucketlists = bucketlists.results;
            _this.count = bucketlists.count;
            _this.nextPage = bucketlists.next;
            _this.previousPage = bucketlists.previous;
        }, function (error) { return _this.errorMessage = error; });
    };
    BucketlistComponent.prototype.getPreviousPage = function () {
        var _this = this;
        this._bucketlistService.getPage(this.previousPage)
            .subscribe(function (bucketlists) {
            _this.bucketlists = bucketlists.results;
            _this.count = bucketlists.count;
            _this.nextPage = bucketlists.next;
            _this.previousPage = bucketlists.previous;
        }, function (error) { return _this.errorMessage = error; });
    };
    BucketlistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'bucketlist.component.html',
            styleUrls: ['bucketlist.component.css'],
            providers: [bucketlist_service_1.BucketlistService]
        }), 
        __metadata('design:paramtypes', [bucketlist_service_1.BucketlistService, router_1.Router])
    ], BucketlistComponent);
    return BucketlistComponent;
}());
exports.BucketlistComponent = BucketlistComponent;
//# sourceMappingURL=bucketlist.component.js.map