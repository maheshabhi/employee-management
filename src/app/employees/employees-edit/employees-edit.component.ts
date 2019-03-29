import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from "rxjs/operators";
import { of } from 'rxjs';
import { EmployeeService } from '../employees-service/employee.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Employee } from "../../models/employee.model";
import { environment  } from "../../../environments/environment";

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.sass']
})

export class EmployeesEditComponent implements OnInit {

    employeeEditForm: FormGroup;
    empId: string;
    employeeData: any;

    APIURL:String = environment.APIBASEURL; 
    constructor(private _formBuilder: FormBuilder, 
                private _activatedRoute: ActivatedRoute,
                private _employeeService: EmployeeService,
                private _http: HttpClient,
                private _router: Router) {

        this.employeeEditForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email]) ], 
            phone: ['', Validators.required]
        });
    }

    ngOnInit() {

        this._activatedRoute.paramMap.pipe(
            switchMap((params: ParamMap) =>
                of(params.get('id'))))
                .subscribe(id => this.empId = id);
                console.log("emp id", this.empId);

        this.getEmployeeDetail();
    }

    getEmployeeDetail() {
        this._http.get<Employee[]>(`${this.APIURL}/employees/` + this.empId).pipe(
            map(res => res)).subscribe(
                data => {
                    console.log("employeedata",);
                    
                    this.employeeEditForm.setValue(data)
                }
            );
    }

    onSubmit(formData) {
        console.log("Userform data", formData.value);
        this.employeeData = JSON.stringify(formData.value);
        console.log("employeeData", this.employeeData);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        this._http.put<Employee[]>(`${this.APIURL}/employees/` + this.empId, this.employeeData, {headers}).pipe(
            map(res => res)).subscribe(
                data => {
                    this.employeeEditForm.reset();
                    this._router.navigate(['/employees']);
                }
            );
    }



}
