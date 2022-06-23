import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConnexionModule { }
