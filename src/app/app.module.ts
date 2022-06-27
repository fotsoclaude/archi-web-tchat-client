import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConnexionRoutingModule } from './connexion/connexion-routing.module';
import { ConnexionModule } from './connexion/connexion.module';
import { TchatRoutingModule } from './tchat/tchat-routing.module';
import { TchatModule } from './tchat/tchat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConnexionModule,
    ConnexionRoutingModule,
    TchatModule,
    TchatRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
