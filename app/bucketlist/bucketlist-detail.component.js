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
var BucketlistDetailComponent = (function () {
    function BucketlistDetailComponent(_route, _bucketlistService) {
        this._route = _route;
        this._bucketlistService = _bucketlistService;
        this.pageTitle = "Bucketlist Details";
        this.edit = false;
    }
    BucketlistDetailComponent.prototype.ngOnInit = function () {
        this.getBucketlist();
    };
    BucketlistDetailComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    BucketlistDetailComponent.prototype.getBucketlist = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this._bucketlistService.getOneBucketlist(id).subscribe(function (bucketlist) {
            _this.bucketlist = bucketlist;
            _this.bucketlistName = bucketlist.name;
        }, function (error) { return _this.errorMessage = error; });
    };
    BucketlistDetailComponent.prototype.updateBucketlist = function (bucketlistId) {
        var _this = this;
        this._bucketlistService.updateBucketlist(this.bucketlistName, bucketlistId)
            .subscribe(function (result) {
            _this.updateBucketlistError = null;
        }, function (error) { return _this.updateBucketlistError = error; }, function () {
            _this.toggleEdit();
            _this.getBucketlist();
        });
    };
    BucketlistDetailComponent.prototype.createItem = function (bucketlistId) {
        var _this = this;
        this._bucketlistService.createBucketlistItem(bucketlistId, this.newItem)
            .subscribe(function (result) {
            _this.createItemError = null;
            _this.newItem = null;
        }, function (error) { return _this.createItemError = error; }, function () { return _this.getBucketlist(); });
    };
    BucketlistDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'bucketlist-detail.component.html',
            styleUrls: ['bucketlist-detail.component.css'],
            providers: [bucketlist_service_1.BucketlistService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, bucketlist_service_1.BucketlistService])
    ], BucketlistDetailComponent);
    return BucketlistDetailComponent;
}());
exports.BucketlistDetailComponent = BucketlistDetailComponent;
//# sourceMappingURL=bucketlist-detail.component.js.map