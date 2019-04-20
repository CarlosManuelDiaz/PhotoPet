import { Component, OnInit } from '@angular/core';
// import {ImagenesgeneralService} from '../imagenesgeneral.service'
// import{imageInterface} from '../data-api.service';
import {DataApiService} from '../data-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})


export class GeneralPage implements OnInit {

 constructor(private dataApi: DataApiService) {}

private images: ImageData;

private add: number = 2;

private comentarios = [];
model: any = {};

ngOnInit() {
   this.getListImages();
  }

getListImages(): void {
this.dataApi.getAllImages().subscribe(
  (images: ImageData) => {
  this.images = images;
  });
}

addLike(): number {
const like = this.add++;
return like;
}

addcomment(comentario): void {
  this.comentarios.push(comentario);
  console.log(comentario);
  }

}
