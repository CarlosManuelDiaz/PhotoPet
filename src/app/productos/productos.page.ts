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
      imagen: 'assets/img/producto1.jpg',
    },
    {
      nombre: 'Cepillo',
      url: '/',
      imagen: 'assets/img/cepillo.jpg',
    },
    {
      nombre: 'Correa',
      url: '/',
      imagen: 'assets/img/correa.jpg',
    },
    {
      nombre: 'Bozal',
      url: '/',
      imagen: 'assets/img/producto2.jpg',
    },
    {
      nombre: 'Comedero',
      url: '/',
      imagen: 'assets/img/bebedero.jpg',
    },
    {
      nombre: 'Caseta',
      url: '/',
      imagen: 'assets/img/Caseta.jpg',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
