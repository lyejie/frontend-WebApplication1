import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html'
})
export class RegisterComponent {


  public mainpage() {
    window.history.back();
  }

  constructor(private httpClient: HttpClient) { }

  public submit(form: any) {
    let requestForm = {
      EmployeeName: form.value.name,
      EmployeeEmail: form.value.email,
      EmployeePassword: form.value.password,
      EmployeeHP: form.value.hpnumber
    }

    let res: any = this.httpClient.post<any>("https://localhost:44371/api/employeescontroller/SaveEmployee", requestForm)
      .subscribe(data => {
        console.log(data, typeof(data));
      });
  }
  }



