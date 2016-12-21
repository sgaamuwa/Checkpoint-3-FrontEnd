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
var auth_service_1 = require('./auth.service');
var AuthComponent = (function () {
    function AuthComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.pageTitle = "Authentication";
        this.login = true;
    }
    AuthComponent.prototype.loginUser = function () {
        var _this = this;
        this._authService.loginUser(this.username, this.password).subscribe(function (result) {
            if (result) {
                _this._router.navigate(['/bucketlists']);
            }
            ;
        }, function (error) {
            _this.resetValues();
            _this.errorMessage = error;
        });
    };
    AuthComponent.prototype.registerUser = function () {
        var _this = this;
        this._authService.registerUser(this.username, this.password).subscribe(function (result) {
            if (result) {
                _this.resetValues();
                _this.welcomeMessage = "Welcome " + result + "!, Login to continue";
                _this.login = true;
                _this._router.navigate(['/auth']);
            }
            ;
        }, function (error) { return _this.errorMessage = error; });
    };
    AuthComponent.prototype.onRegister = function () {
        this.login = false;
        this.resetValues();
    };
    AuthComponent.prototype.onLogin = function () {
        this.login = true;
        this.resetValues();
    };
    AuthComponent.prototype.resetValues = function () {
        this.username = null;
        this.password = null;
        this.confirmPassword = null;
        this.email = null;
        this.errorMessage = null;
        this.welcomeMessage = null;
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'bl-auth',
            moduleId: module.id,
            templateUrl: "auth.component.html",
            styleUrls: ["auth.component.css"],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map