import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  { path: 'productos', loadChildren: './productos/productos.module#ProductosPageModule' },
  {
    path: 'login',
  loadChildren: './login/login.module#LoginPageModule'
},
  {
    path: 'perfil',
  loadChildren: './perfil/perfil.module#PerfilPageModule'
},
  {
    path: 'general',
    loadChildren: './general/general.module#GeneralPageModule'},
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
