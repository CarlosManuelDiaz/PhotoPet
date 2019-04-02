import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import { ImagenmodalPage } from '../page-modal/page-modal.page';

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
    {rutaimagen: '../assets/img/1.jpg' , comentario: './comentario.'},
    {rutaimagen: '../assets/img/2.jpg' , comentario: './comentario.'},
    {rutaimagen: '../assets/img/3.jpg' , comentario: './comentario.'},
    {rutaimagen: '../assets/img/4.jpg' , comentario: './comentario.'},
    {rutaimagen: '../assets/img/5.jpg' , comentario: './comentario.'},
    {rutaimagen: '../assets/img/6.jpg' , comentario: './comentario.'},
  ];

  currentImage: Array<string> = [];

  constructor(private camera: Camera, private modalCtrl: ModalController) {}


  ngOnInit() {
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then((imageData) => {
      this.imagenes.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData, comentario: 'ggvf' });
    }, (err) => {
      // Handle error
      // console.log('Camera issue:' + err);
    });
  }
  galeria() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      };
      this.camera.getPicture(options).then((imageData) => {
        this.imagenes.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData, comentario: 'hhjgg' });
      }, (err) => {
        // Handle error
        // console.log('Camera issue:' + err);
      });
    }
    verImagen( imagen, comentarios) {
      this.modalCtrl.create({
        component : ImagenmodalPage,
        componentProps : {
          imagen : imagen,
          comentarios : comentarios,
        }
      }).then(modal => modal.present());
    }
}
