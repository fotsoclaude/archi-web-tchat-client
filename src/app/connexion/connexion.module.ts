import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTelIsjIsiModule } from 'input-tel-isj-isi-3';


@NgModule({
  declarations: [
    WelcomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTelIsjIsiModule
  ]
})
export class ConnexionModule { }
