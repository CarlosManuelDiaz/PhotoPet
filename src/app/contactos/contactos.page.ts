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
      icon: 'ribbon'
    },
    {
      nombre: 'Charly',
      url: '/charly',
      imagen: 'assets/icon/logo.png',
      icon: 'ribbon'
    },
    {
      nombre: 'Paco',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
      icon: 'ribbon'
    },
    {
      nombre: 'Pepe',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
      icon: 'ribbon'
    },
    {
      nombre: 'Alberto',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
      icon: 'ribbon'
    },
    {
      nombre: 'Marcos',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
      icon: 'ribbon'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
