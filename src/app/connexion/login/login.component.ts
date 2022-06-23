import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface loginformdata {
  phone: string;
  nom: string;
  prenom: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone!: string;
  nom!:string;
  prenom!:string;

  formdata !: any;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      phone: new FormControl("", Validators.compose([
        Validators.required,
        Validators.maxLength(9)
      ])),
      nom: new FormControl("", Validators.compose([
        Validators.required
      ])),
      prenom: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  onClickSubmit(data: loginformdata) {
    this.phone = data.phone;
    this.nom = data.nom;
    this.prenom = data.prenom;
  }

}
