import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

    authForm: FormGroup;

    userData: any;
    errorMessage: any;

    constructor(private _fb: FormBuilder, 
                private _authService: AuthService,
                private _router: Router) { }

    ngOnInit() {
        this.authForm = this._fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])], 
            password: ['', Validators.required]
        });
    }   

    onSubmit(formData) {
        console.log("formData", formData.value);
        this.userData = formData.value;
        this._authService.login(this.userData).subscribe(
            data => {
                console.log("User loggedin successfully!", data);
                if(data) {
                    this.authForm.reset();
                    this._router.navigate(['/employees']);
                }
            }, error => {
                console.log("Error occured when logging in", error.error.message);
                this.errorMessage = error.error.message;
                
            }
        );
    }

}
