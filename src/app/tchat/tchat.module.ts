import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { TchatComponent } from './tchat/tchat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTelIsjIsiModule } from 'input-tel-isj-isi-3';
import { ContactComponent } from './contact/contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    MainComponent,
    TchatComponent,
    ContactComponent,
    ContactsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTelIsjIsiModule
  ]
})
export class TchatModule { }
