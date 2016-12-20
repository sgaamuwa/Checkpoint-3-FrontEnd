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
var bucketlist_service_1 = require('./bucketlist.service');
var ItemDetailComponent = (function () {
    function ItemDetailComponent(_bucketlistService) {
        this._bucketlistService = _bucketlistService;
        this.itemUpdate = new core_1.EventEmitter();
        this.edit = false;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.newItemName = this.item.name;
        this.isDone = this.item.done;
    };
    ItemDetailComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
        this.newItemName = this.item.name;
    };
    ItemDetailComponent.prototype.updateItem = function () {
        var _this = this;
        if (this.newItemName != this.item.name) {
            this._bucketlistService.updateBucketlistItem(this.newItemName, this.bucketlistId, this.item.id)
                .subscribe(function (result) { }, function (error) { return _this.errorMessage = error; }, function () { return _this.reloadBucketlist(); });
        }
        else if (this.isDone != this.item.done) {
            this._bucketlistService.updateBucketlistItemDone(this.isDone, this.bucketlistId, this.item.id)
                .subscribe(function (result) { }, function (error) { return _this.errorMessage = error; }, function () { return _this.reloadBucketlist(); });
        }
    };
    ItemDetailComponent.prototype.deleteItem = function () {
        var _this = this;
        this._bucketlistService.deleteBucketlistItem(this.bucketlistId, this.item.id)
            .subscribe(function (result) { }, function (error) { return _this.errorMessage = error; }, function () { return _this.reloadBucketlist(); });
    };
    ItemDetailComponent.prototype.reloadBucketlist = function () {
        this.itemUpdate.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDetailComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ItemDetailComponent.prototype, "bucketlistId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemDetailComponent.prototype, "itemUpdate", void 0);
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'bl-itemDetail',
            moduleId: module.id,
            templateUrl: 'item-detail.component.html'
        }), 
        __metadata('design:paramtypes', [bucketlist_service_1.BucketlistService])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map