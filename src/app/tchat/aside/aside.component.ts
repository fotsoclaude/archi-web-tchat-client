import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  newContactForm!:FormGroup;

  service!:MyserviceService;

  isViewForm!:boolean;

  constructor(service:MyserviceService) { 
    this.service = service;
    this.isViewForm = true;
  }

  ngOnInit(): void {
    this.newContactForm = new FormGroup({
      name: new FormControl(""),
      indicator : new FormControl('+237'),
      phone: new FormControl("")
    })
  }

  onCloseModal(value:boolean){
    this.service.onChangeModal(value);
  }

  onViewForm(value:boolean){
    this.isViewForm = value;
  }
  
}
