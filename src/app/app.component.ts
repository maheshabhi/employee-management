import { Component } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'], 
})
export class AppComponent {
    title = 'employeeManagement';
    message = []
    
    constructor(private _confirmationService: ConfirmationService, 
                private _router: Router) {}
    
    logout() {
        this._confirmationService.confirm({
            message: 'Are you sure that you want to proceed?', 
            header: "Logout", 
            accept: () => {
                this.message = [{ severity: 'info', summary: 'confirmed', detail: 'You have accepted'}];
                this._router.navigate(['/']);
            },
            reject: () => {
                this.message = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
            }
        });
    }
}
