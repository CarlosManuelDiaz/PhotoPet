import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


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

  currentImage: Array<string> = [];

  constructor(private camera: Camera) {}


  ngOnInit() {
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      this.imagenes.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData });
    }, (err) => {
      // Handle error
      console.log('Camera issue:' + err);
    });
  }
}
