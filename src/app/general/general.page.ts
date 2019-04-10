import { Component, OnInit } from '@angular/core';
//import {ImagenesgeneralService} from '../imagenesgeneral.service' 
//import{imageInterface} from '../data-api.service';
import { DataApiService } from '../data-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})


export class GeneralPage implements OnInit {

 constructor(private dataApi:DataApiService){}

private images: ImageData

ngOnInit(){ this.getListImages()}

getListImages(): void{
this.dataApi.getAllImages().subscribe(
  (images: ImageData)=>{
  console.log(images)
  this.images=images
  });    
}

private add:number=2;

addLike():number{
const like = this.add++
console.log(like)
return like;

}

  
 /* public fotos: Array<any> = [{
    comentario: 'Jugando con la pelota',
    foto: '../assets/img/perro.jpg'
  }, {
      comentario: 'haciendo el dia',
      foto: '../assets/img/perro.jpg'
    }, {
      comentario: ':) :)',
      foto: '../assets/img/perro.jpg'
    },

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
  }*/


}
