import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';

    if (isAuthenticated) {
      return true; // El usuario está autenticado y puede acceder a la ruta.
    } else {
      this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión.
      return false;
    }
  }
}
