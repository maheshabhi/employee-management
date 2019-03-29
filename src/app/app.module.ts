import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { EmployeesModule } from "./employees/employees.module";
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ConfirmationService } from "primeng/api";
import { EmployeesEditComponent } from "./employees/employees-edit/employees-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EmployeeService } from "./employees/employees-service/employee.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent, EmployeesEditComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
         AppRoutingModule, ReactiveFormsModule,
        ButtonModule, FormsModule, ConfirmDialogModule,HttpClientModule
        // TableModule
    ],
    providers: [ConfirmationService],
    bootstrap: [AppComponent]
})

export class AppModule { }
