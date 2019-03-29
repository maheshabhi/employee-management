import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employees-service/employee.service";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

import { Employee } from "../../models/employee.model";
import { ConfirmationService } from 'primeng/api'
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.sass']
})
export class EmployeesListComponent implements OnInit {
    
    employees: Employee[];
    cols: any[];
    showDialog: Boolean = false;
    employeeData: any;
    employee: any;
    message = [];
    userForm: FormGroup;
    group: any;

    cities: any;
    selectedCities: [];
    maxLength: number = 3;

    constructor(private _employeeService: EmployeeService,
                private _formBuilder: FormBuilder,
                private _confirmationService: ConfirmationService,
                private _router: Router) {

                this.cities = [
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'},
                    {name: 'Bengaluru', code: 'BNG'},
                    {name: 'Mysuru', code: 'MYS'},
                    {name: 'Mandya', code: 'MDY'}
                ];

    }

    ngOnInit() {
        this.getEmployees();

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
            { field: 'phone', header: 'Phone' }
        ];

        this.userForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])], 
            phone: ['', Validators.required]
        });
    }

    getEmployees() {
        console.log("get all the employees");

        this._employeeService.getEmployees().subscribe(
            (data: Employee[]) => {
                console.log("Employees data", data);
                this.employees = Object.assign(data);
            }, error => {
                console.log("Error occured ", error); 
            }
        );
    }

    openDialog() {
        this.showDialog = true;
    }

    onSubmit(formData) {
        console.log("Userform data", formData.value);
        this.employeeData = JSON.stringify(formData.value);
        console.log("employeeData", this.employeeData);
        
        this._employeeService.addEmployees(this.employeeData).subscribe(
            data => {
                console.log("Employee added succesfully!", data);
                this.userForm.reset();
                this.showDialog = false;
                this.getEmployees();

            }, error => {
                console.log("Error in adding an employee", error);
            }
        )
    }

    updateEmployee(employee) {
        console.log("updating an employee data");
        this.showDialog = true;
        // this.employees = employee;
        // console.log("this.employee", this.employees);
        
    }

    archiveEmployee(employeeId) {
        console.log("employee ID", employeeId);
        
        this._confirmationService.confirm({
            message: 'Are you sure that you want to acrhive employee?', 
            header: "Archive", 
            accept: () => {
                this.message = [{ severity: 'info', summary: 'confirmed', detail: 'You have accepted'}];
                this._employeeService.archiveEmployee(employeeId).subscribe(
                    data => {
                        console.log("Employee deleted successfully!", data);
                        this.getEmployees();
                    }, error => {
                        console.log("problem achiving an employee", error);  
                    }
                );
            },
            reject: () => {
                this.message = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];

            }
        });    
    }   

    // employeeSearch(searchText) {
    //     console.log("Seaching an employees", searchText.value);
    //     this._employeeService.searchEmployee(searchText.value).subscribe(
    //         result => {
    //             if(result) {
    //                 this.employees = result;
    //             }
    //         }, error => {
    //             console.log("Problem in searching", error);
    //         }
    //     );
    // }
    

    viewEmployee(employeeData) {
        console.log("Viewing the employee data", employeeData.name);
        this.employee = employeeData;
        console.log("employeeData", employeeData);
    }

    editEmployee() {
        // console.log("event", event);
        this._router.navigate(['/employee-edit']);
    }

    selectedCity(city) {
        console.log("city", city[city.length-1]);
        this.selectedCities = city;
        if(city.length > 3) {
            alert("you have selected 3 items");
            console.log("array before slice", this.selectedCities);
            this.selectedCities.pop();
            console.log("array after slice", this.selectedCities);
            
        }
    }
}
