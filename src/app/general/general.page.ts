import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { BooleanValueAccessor } from '@ionic/angular';
import { addAllToArray } from '@angular/core/src/render3/util';


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

añadirComentario=[{comentario:'hola perrito,le gustan las pelotas y la comida vegetal'}];
model: any={};

add(){
this.añadirComentario.push(this.model);
}
  

  ngOnInit() {
  }
  

}
