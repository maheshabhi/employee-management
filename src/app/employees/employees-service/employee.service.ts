import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment  } from "../../../environments/environment";

import { Employee } from "../../models/employee.model";
import { Observable, from} from "rxjs";

import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    APIURL:String = environment.APIBASEURL; 
    
    constructor(private _http: HttpClient) {

    }

    getEmployees(): Observable<Employee[]> {
        console.log("inside employee service >>>> retriving all employees");
        return this._http.get<Employee[]>(`${this.APIURL}/employees`).pipe(
            map(res => res));
    }

    getEmployeeById(empId) {
        console.log("inside employee service >>>> retriving single employee");
        return this._http.get<Employee[]>(`${this.APIURL}/employees/empId`).pipe(
            map(res => res));
    }

    addEmployees(employeeData) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log("inside employee service >>>> adding an employees");
        return this._http.post(this.APIURL + '/employees', employeeData,  {headers});
    }

    archiveEmployee(employeeId) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log("inside employee service >>>> deleting an employee");
        return this._http.post(this.APIURL + '/employees/' + employeeId, {headers});
    }

    searchEmployee(searchText) {
        console.log("inside employee service >>>> searching an employee");
        return this._http.get(this.APIURL + '/employees/search/' + searchText);
    }
}