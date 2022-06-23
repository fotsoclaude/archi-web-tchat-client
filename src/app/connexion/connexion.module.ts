import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ConnectionComponent } from './connection/connection.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    RegisterComponent,
    ConnectionComponent,
    ConnexionComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConnexionModule { }
