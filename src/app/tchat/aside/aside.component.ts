import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.services';
import { Contact } from 'src/app/models/contact.models';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  newContactForm!:FormGroup;
  service!:MyserviceService;
  isViewForm!:boolean;

  contacts !: Contact[];

  constructor(service:MyserviceService, private contactsService: ContactsService) { 
    this.service = service;
    this.isViewForm = true;
  }

  ngOnInit(): void {
    this.newContactForm = new FormGroup({
      name: new FormControl(""),
      indicator : new FormControl('+237'),
      phone: new FormControl("")
    });
    //Ajout des contacts récuppérés du service à la vue
    this.contacts = this.contactsService.getAllContacts();
  }

  onCloseModal(value:boolean){
    this.service.onChangeModal(value);
  }

  onViewForm(value:boolean){
    this.isViewForm = value;
  }
  
}
