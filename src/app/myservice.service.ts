import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  isViewModal!:boolean;

  constructor() { 
    this.isViewModal = true;
  }

  onChangeModal(value:boolean){
    this.isViewModal = value;
  }

}
