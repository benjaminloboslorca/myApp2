import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfilId: any;
  personaje: any;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.perfilId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpClient.get('https://rickandmortyapi.com/api/character/' + this.perfilId)
      .subscribe(res => this.personaje = res);
  }
}
