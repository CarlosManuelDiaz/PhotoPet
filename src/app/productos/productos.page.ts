import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class productospage implements OnInit {
  public productos = [
    {
      nombre: 'Pienso',
      url: '/alexis',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Cepillo',
      url: '/charly',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Correa',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Bozal',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Man',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Marcos',
      url: '/nuria',
      imagen: 'assets/icon/logo.png',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
