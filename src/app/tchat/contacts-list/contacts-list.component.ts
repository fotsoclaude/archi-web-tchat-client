import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.models';
import { ContactsService } from 'src/app/services/contacts.services';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts!: Contact[];
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getAllContacts();
  }

}
