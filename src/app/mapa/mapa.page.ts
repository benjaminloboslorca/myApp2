import { Component, OnInit } from '@angular/core';

/// <reference types="googlemaps" />

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: google.maps.Map | undefined;
  mapOptions: google.maps.MapOptions | undefined;
  mapCenter: google.maps.LatLngLiteral | undefined;

  constructor() {}

  ngOnInit() {
    this.mapCenter = { lat: 40.730610, lng: -73.935242 };

    if (this.mapCenter) {
      this.mapOptions = {
        center: this.mapCenter,
        zoom: 12,
      };

      if (document.getElementById('map') && google && google.maps) {
        this.map = new google.maps.Map(document.getElementById('map')!, this.mapOptions);
      }
    }
  }
}
