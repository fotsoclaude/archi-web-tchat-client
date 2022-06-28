import { Injectable } from "@angular/core";
import { Contact } from "../models/contact.models";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    contacts: Contact[] = [
        {
            id: 1,
            pseudo: "Bidzana Erwin",
            numero: "(+237) 655 205 289",
            bio: "Étudiant en Management et Système d'Information",
            imageUrl: 'assets/imgs/bg-main.jpg',
            createdDate: new Date(),
        },
        {
            id: 2,
            pseudo: "Epale Yvan",
            numero: "(+237) 657 012 557",
            bio: "Étudiant en ingénierie logicielle",
            imageUrl: 'assets/imgs/bg-main.jpg',
            createdDate: new Date()
        },
        {
            id: 3,
            pseudo: "FOTSO Claude",
            numero: "(+237) 696 685 090",
            bio: "Étudiant en ingénierie logicielle",
            imageUrl: 'assets/imgs/bg-main.jpg',
            createdDate: new Date()
        }
    ];

    getAllContacts(): Contact[] {
        return this.contacts;
    }

    getContactById(contactId: number): Contact {
        const contact = this.contacts.find(contact => contact.id === contactId);
        if(!contact) {
            throw new Error('Contact not found !');
        } else {
            return contact;
        }
    }
}