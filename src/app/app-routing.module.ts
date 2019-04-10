import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
    path: 'general',
    loadChildren: './general/general.module#GeneralPageModule',
    canActivate: [AuthGuardService] },
  { path: 'actividades', loadChildren: './actividades/actividades.module#ActividadesPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
