import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  public contactos = [
    {
      nombre: 'Alexis',
      url: '/alexis',
      imagen: 'assets/icon/logo.png',
      imagenicon: 'assets/icon/logo.png'
    },
    {
      nombre: 'Charly',
      url: '/charly',
      imagen: 'assets/icon/logo.png',
      imagenicon: 'assets/icon/logo.png'
    },
    {
      nombre: 'Paco',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
      imagenicon: 'assets/icon/logo.png'
    },
    {
      nombre: 'Pepe',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
      imagenicon: 'assets/icon/logo.png'
    },
    {
      nombre: 'Alberto',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
      imagenicon: 'assets/icon/logo.png'
    },
    {
      nombre: 'Marcos',
      url: '/nuria',
      imagen: 'assets/icon/logo-huella.png',
      imagenicon: 'assets/icon/logo.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
