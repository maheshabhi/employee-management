import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesEditComponent } from './employees/employees-edit/employees-edit.component';

const routes: Routes = [ 
    {
        path: 'employees', 
        loadChildren: './employees/employees.module#EmployeesModule' 
    },
    {
        path: 'auth', 
        loadChildren: './auth/auth.module#AuthModule'
    },
    
    { path: 'employees/employee-edit/:id', component: EmployeesEditComponent },
    { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
