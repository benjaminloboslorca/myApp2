import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.username.length >= 4 && this.username.length <= 20 && this.password.length >= 4 && this.password.length <= 20) {
      // El formulario es válido, aquí puedes agregar la lógica de registro.
      // Por ejemplo, enviar los datos al servidor.

      // Una vez que el usuario se registra exitosamente, guardamos la información en localStorage.
      localStorage.setItem('username', this.username);
      localStorage.setItem('email', this.email); // Si lo necesitas
      localStorage.setItem('password', this.password);

      // Luego de registrar, redirige al usuario a la página deseada.
      this.router.navigate(['/home']);
    } else {
      // Realiza alguna acción si la validación no se cumple (por ejemplo, mostrar un mensaje de error).
      // Puedes mostrar un mensaje de error o realizar cualquier acción adicional aquí.
    }
  }
}
