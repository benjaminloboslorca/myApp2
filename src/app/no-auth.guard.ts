import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Agrega lógica para verificar si el usuario no está autenticado.
    // Si no está autenticado, devuelve true. Si está autenticado, redirige al usuario a la página principal y devuelve false.
    
    // Supongamos que tienes un servicio de autenticación que verifica si el usuario ha iniciado sesión y almacena esta información en una variable.
    const isAuthenticated = localStorage.getItem('token') !== null; // Comprueba si hay un token de autenticación en el almacenamiento local
    
    if (!isAuthenticated) {
      return true; // El usuario no está autenticado y puede acceder a la ruta.
    } else {
      // El usuario está autenticado, redirige al usuario a la página principal.
      this.router.navigate(['/']); // Asegúrate de que la ruta sea correcta.
      return false;
    }
  }
}
