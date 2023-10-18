import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { MenuController } from '@ionic/angular'; // Importa el MenuController

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  cardHidden: boolean = false;
  sessionClosed: boolean = false;

  constructor(
    private router: Router, // Inyecta el Router
    private menu: MenuController // Inyecta el MenuController
  ) {}

  hideCard() {
    this.cardHidden = true;
  }

  // Función para cerrar la sesión del usuario
  logout() {
    // Elimina la información de autenticación del Local Storage
    localStorage.removeItem('authenticated');
  
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  
    // Cierra el menú (si es necesario)
    this.menu.close();
  }
}
