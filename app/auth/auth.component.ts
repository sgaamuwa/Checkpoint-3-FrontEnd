import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'bl-auth',
    moduleId: module.id,
    templateUrl: "auth.component.html",
    styleUrls: ["auth.component.css"],
})
export class AuthComponent {
    pageTitle: string = "Authentication";
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    login: boolean = true;
    welcomeMessage: string;
    usernameError: string;
    passwordError: string;
    errorMessage: string;

    constructor(private _authService: AuthService, private _router: Router){

    }

    loginUser(): void {
        this._authService.loginUser(this.username, this.password).subscribe(
            (result) => {
                if (result){
                    this._router.navigate(['/bucketlists']);
                };
            },
            error => {
                this.resetValues();
                this.errorHandler(error);
                this.errorMessage = <any>error;
            });
    }

    registerUser(): void {
        this._authService.registerUser(this.username, this.password).subscribe(
            (result) => {
                if (result){
                    this.resetValues();
                    this.welcomeMessage = "Welcome " + result + "!, Login to continue";
                    this.login = true; 
                    this._router.navigate(['/auth']);
                };
            },
            error => {
                this.errorHandler(error);
                this.errorMessage = <any>error
            });
    }

    onRegister(): void {
        this.login = false;
        this.resetValues();
    }

    onLogin(): void{
        this.login = true;
        this.resetValues();
    }

    resetValues(): void {
        this.username = null;
        this.password = null;
        this.confirmPassword = null;
        this.email = null;
        this.errorMessage = null;
        this.welcomeMessage = null;
    }

    errorHandler(error: any ): void {
        if(error.username){
            if(error.username[0] == "This field may not be null."){
                this.usernameError = "Please provide a Username"
            }
            else{
                this.usernameError = error.username
            }
        }
        if(error.password){
            if(error.password[0] == ("This field may not be null." || "This field may not be blank.")){
                this.passwordError = "Please provide a Password"
            }
            else{
                this.passwordError = error.password
            }
        }
    }
}