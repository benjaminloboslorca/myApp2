import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { PerfilPage } from './perfil/perfil.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirige la ruta predeterminada a 'home'
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    canActivate: [NoAuthGuard], // Protege la página de inicio de sesión para no autenticados
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then((m) => m.RecuperarContrasenaPageModule),
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then((m) => m.RegistroPageModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard], // Protege la página de inicio para autenticados
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'rickymorty',
    loadChildren: () => import('./rickymorty/rickymorty.module').then( m => m.RickymortyPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfil/:id',
    component: PerfilPage, // Reemplaza "PerfilPage" con el nombre de tu página de perfil
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
