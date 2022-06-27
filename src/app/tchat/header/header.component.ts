import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  service!:MyserviceService;

  constructor(service:MyserviceService) {
    this.service = service;
  }

  ngOnInit(): void {
  }

  onOpenModal(value:boolean){
    this.service.onChangeModal(value);
  }

}
