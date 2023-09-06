import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // Agrega aquí la lógica para enviar el correo y restablecer la contraseña si es necesario.

    // Después de enviar el correo y completar la acción correspondiente,
    // redirige al usuario a la página de inicio de sesión ("/login").
    this.router.navigate(['/login']);
  }

}
