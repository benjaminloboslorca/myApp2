import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-rickymorty',
  templateUrl: './rickymorty.page.html',
  styleUrls: ['./rickymorty.page.scss'],
})
export class RickymortyPage implements OnInit, AfterViewInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  personajes: Character[] = [];

  nombreUsuario = localStorage.getItem('nombreUsuario');

  constructor(
    private animationCtrl: AnimationController,
    private httpClient: HttpClient
  ) {
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
  }

  ngOnInit() {
    this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((res: any) => {
        console.log(res);
        this.personajes = res.results as Character[]; // Usar la interfaz Character
      });
  }

  ngAfterViewInit() {
    this.crecer();
  }

  public avanzarDerecha() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(200px)')
      .fromTo('color', "blue", "red")
      .fromTo('opacity', '1', '0');

    animation.play();
  }

  public crecer() {
    if (this.titulo) {
      const animation = this.animationCtrl
        .create()
        .addElement(this.titulo.nativeElement)
        .duration(2000)
        .iterations(Infinity)
        .fromTo('transform', 'scale3d(1,1,1)', 'scale3d(1.5,1.5,1.5)')
        .fromTo('color', 'green', 'blue')
        .fromTo('opacity', '1', '0');
  
      animation.play();
    } else {
      console.warn('this.titulo is not defined.'); // Agrega un mensaje de advertencia si this.titulo no está definido
    }
  }
  
}

interface Character {
  name: string;
  image: string;
  id: string;
}
