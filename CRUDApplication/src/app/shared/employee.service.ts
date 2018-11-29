import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee; // then we inject this class inside App.Module
  readonly rootURL = 'http://localhost:57296/api';

  constructor(private http: HttpClient) { }
  postEmployee(formData: Employee) {
   return this.http.post(this.rootURL + '/Employee', formData);
  }
}
