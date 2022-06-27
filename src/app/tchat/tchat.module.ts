import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { TchatComponent } from './tchat/tchat.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    MainComponent,
    TchatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TchatModule { }
