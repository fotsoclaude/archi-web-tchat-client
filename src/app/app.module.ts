import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConnexionRoutingModule } from './connexion/connexion-routing.module';
import { ConnexionModule } from './connexion/connexion.module';
import { TchatRoutingModule } from './tchat/tchat-routing.module';
import { TchatModule } from './tchat/tchat.module';

import { InputTelIsjIsiModule } from 'input-tel-isj-isi-3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTelIsjIsiModule,
    ConnexionModule,
    ConnexionRoutingModule,
    TchatModule,
    TchatRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
