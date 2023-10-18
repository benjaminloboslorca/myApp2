import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps'; // Importa el módulo de Google Maps
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { RickymortyPage } from './rickymorty/rickymorty.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {} 
