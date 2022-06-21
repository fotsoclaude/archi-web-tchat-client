import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  service!:MyserviceService;

  constructor(service:MyserviceService) { 
    this.service = service;
  }

  ngOnInit(): void {
    
  }

  onCloseModal(value:boolean){
    this.service.onChangeModal(value);
  }
}
