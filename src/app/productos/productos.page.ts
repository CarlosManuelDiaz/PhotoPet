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
      imagenn: 'assets/img/pienso.jpg',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Cepillo',
      imagenn: 'assets/img/cepillo.jpg',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Correa',
      imagenn: 'assets/img/correa.jpg',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Bozal',
      imagenn: 'assets/img/bozal.jpg',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Manta',
      imagenn: 'assets/img/manta.jpg',
      imagen: 'assets/icon/logo.png',
    },
    {
      nombre: 'Mordedor',
      imagenn: 'assets/img/mordedor.jpg',
      imagen: 'assets/icon/logo.png',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
