import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee; // then we inject this class inside App.Module
  list: Employee[]; // in order to retrieve all of the intersed employees, we will call api method GetEmployees
  readonly rootURL = 'http://localhost:57296/api';

  constructor(private http: HttpClient) { }
  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL + '/Employee', formData);
  }
  // we will define the method here
  refreshList() {
    this.http.get(this.rootURL + '/Employee')
      .toPromise().then(res => this.list = res as Employee[]);
  }

  putEmployee(formData: Employee) {
    return this.http.put(this.rootURL + '/Employee/' + formData.EmployeeID, formData);
  }
deleteEmployee(id: number) {
return this.http.delete(this.rootURL + '/Employee/' + id);
}
}
