import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface loginformdata {
  phone: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone!: string;
  password!:string;

  formdata !: any;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      phone: new FormControl("", Validators.compose([
        Validators.required
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  onClickSubmit(data: loginformdata) {
    this.phone = data.phone;
    this.password = data.password;
  }

}
