import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'home',
    pathMatch: 'full'
=======
    redirectTo: 'login',
    pathMatch: 'full',
>>>>>>> 5ea45219644d35bd0e5868548f4a6396d3299eee
  },
  {
    path: 'home',
    loadChildren: './perfil/perfil.module#PerfilPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosPageModule' },
  {
    path: 'login',
  loadChildren: './login/login.module#LoginPageModule'
},
  {
    path: 'perfil',
  loadChildren: './perfil/perfil.module#PerfilPageModule',
  canActivate: [AuthGuardService]
},
  {
<<<<<<< HEAD
    path: 'galeria',
    loadChildren: './general/general.module#GeneralPageModule' }
=======
    path: 'general',
    loadChildren: './general/general.module#GeneralPageModule',
    canActivate: [AuthGuardService] }
>>>>>>> 5ea45219644d35bd0e5868548f4a6396d3299eee
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
