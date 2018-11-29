import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null) {

      form.resetForm();
    }
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      Office: '',
      EmpCode: '',
      Mobile: '',
    };
  }


  onSubmit(form: NgForm) {
    this.insertRecord(form);

  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('Data Inserted', 'Emp.Book');
      this.resetForm(form);
    });
  }
}
