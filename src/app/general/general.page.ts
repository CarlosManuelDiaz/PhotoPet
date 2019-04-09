import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})


export class GeneralPage implements OnInit {

  constructor() { }

  public fotos: Array<any> = [{
    comentario: 'este perro es blanco',
    foto: '../assets/img/perro.jpg'
  }, {
      comentario: 'este perro es blanco',
      foto: '../assets/img/perro.jpg'
    }, {
      comentario: 'este perro es blanco',
      foto: '../assets/img/perro.jpg'
    },
];

  comentarios = [
    {comentario: 'hola perrito,le gustan las pelotas y la comida vegetal'},
    {comentario: 'otro comentario'},
  ];
  model: any = {};

  add(): void {
  this.comentarios.push(this.model);
  console.log(this.model);
  }
  ngOnInit() {
  }


}
