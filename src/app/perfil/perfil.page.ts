import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public datosperfil = [
    {Nombre: 'Noa', imagen: '../assets/img/perfil-circular.jpg'}
  ];

  public imagenes = [
    {rutaimagen: '../assets/img/1.jpg'},
    {rutaimagen: '../assets/img/2.jpg'},
    {rutaimagen: '../assets/img/3.jpg'},
    {rutaimagen: '../assets/img/4.jpg'},
    {rutaimagen: '../assets/img/5.jpg'},
    {rutaimagen: '../assets/img/6.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
