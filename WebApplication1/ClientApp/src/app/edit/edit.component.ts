import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit {
  public mainpage() {
    window.history.back();
  }

  constructor(private httpClient: HttpClient) { }

  employees: string[];
  ngOnInit() {
    this.httpClient.get("https://localhost:44371/api/employeescontroller/EditEmployee").
      subscribe(
        data => {
          this.employees = data as string[];
          console.log(this.employees)
        }
    );
  }

 
  //GetEmployees(): Observable<any[]> {
  //    return this.httpClient.get<any[]>("https://localhost:44371/api/employeescontroller/EditEmployee");
  //      }
  //}


  //public submit(form: any) {
  //  let requestForm = {
  //    EmployeeName: form.value.name,
  //    EmployeeEmail: form.value.email,
  //    EmployeePassword: form.value.password,
  //    EmployeeHP: form.value.hpnumber
  //  }

  //  let res: any = this.httpClient.post<any>("https://localhost:44371/api/employeescontroller/SaveEmployee", requestForm)
  //    .subscribe(data => {
  //      console.log(data, typeof (data));
  //    });
  //}
}

