import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConnexionRoutingModule } from './connexion/connexion-routing.module';
import { ConnexionModule } from './connexion/connexion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnexionModule,
    ConnexionRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
