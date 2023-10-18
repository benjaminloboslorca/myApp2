import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  errorMessage: string = '';

  constructor(
    public fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'contrasena': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  async ingresar() {
    const f = this.formularioLogin.value;

    // Utiliza las mismas claves que se usaron para guardar los datos en registro.ts
    const nombreUsuario = localStorage.getItem('username');
    const contrasenaUsuario = localStorage.getItem('password'); // Utiliza la misma clave 'password'

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
    } else if (nombreUsuario === f.nombre && contrasenaUsuario === f.contrasena) {
      localStorage.setItem('authenticated', 'true');
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  redirectToRegistroPage() {
    this.router.navigate(['/registro']);
  }
}
