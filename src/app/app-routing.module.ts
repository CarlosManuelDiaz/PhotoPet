import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
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
  loadChildren: './perfil/perfil.module#PerfilPageModule'
},
  {
    path: 'general',
    loadChildren: './general/general.module#GeneralPageModule' },
  { path: 'page-modal', loadChildren: './page-modal/page-modal.module#PageModalPageModule' },
  { path: 'editar', loadChildren: './editar/editar.module#EditarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
