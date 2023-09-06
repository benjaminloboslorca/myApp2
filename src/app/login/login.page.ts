import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { } // Inyecta el Router en el constructor

  ngOnInit() {
  }

  onSubmit() {
    // Agrega la lógica de autenticación aquí (validar usuario y contraseña)
    // Si la autenticación es exitosa, redirige al usuario a la ruta "/home"
    this.router.navigate(['/home']); // Reemplaza '/home' con la ruta real de tu página de inicio
  }

}
