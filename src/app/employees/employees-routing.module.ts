import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

const routes: Routes = [
    {
        path: '', component: EmployeesListComponent, pathMatch: 'full',
        children: [
            // { path: 'employee-edit', component: EmployeesEditComponent },
            { path: 'addEmployee', component: EmployeesAddComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})


export class EmployeesRoutingModule { }
