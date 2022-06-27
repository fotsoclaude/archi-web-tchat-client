import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface registerformdata {
  phone: string;
  nom: string;
  prenom: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  phone!: string;
  nom!:string;
  prenom!:string;

  formdata !: any;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      phone: new FormControl("", Validators.compose([
        Validators.required
      ])),
      pseudo: new FormControl("", Validators.compose([
        Validators.required
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required
      ])),
      confirm: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  onClickSubmit(data: registerformdata) {
    this.phone = data.phone;
    this.nom = data.nom;
    this.prenom = data.prenom;
  }
}
