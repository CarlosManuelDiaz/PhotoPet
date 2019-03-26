import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { BooleanValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {

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
   

  constructor() { }

  ngOnInit() {
  }

}
