import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

import { FormsModule } from "@angular/forms";
import { EmployeeService } from "./employees-service/employee.service";
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';


@NgModule({
    declarations: [EmployeesListComponent, EmployeesAddComponent],
    imports: [
        CommonModule,
        EmployeesRoutingModule, 
        HttpClientModule, ReactiveFormsModule, FormsModule,
        TableModule, ButtonModule, DialogModule, InputTextModule, 
        ListboxModule,
    ],
    providers: [EmployeeService]
})

export class EmployeesModule { }
 