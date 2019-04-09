import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticationService, UserDetails } from '../authentication.service';

import { ModalController } from '@ionic/angular';
import { ImagenmodalPage } from '../page-modal/page-modal.page';
import {  EditarPage } from '../editar/editar.page';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public details: UserDetails;
  public imagenes = [];


  constructor(private camera: Camera,
    private modalCtrl: ModalController,
    private auth: AuthenticationService,
    ) {}


  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    );
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.imagenes.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData});
        console.log(this.imagenes);
      },
      err => {
      // Handle error
      console.log('Camera issue:' + err);
    }
    );
  }

  galeria() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      };
      this.camera.getPicture(options).then((imageData) => {
      this.imagenes.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData});
      }, (err) => {
        // Handle error
        console.log('Camera issue:' + err);
      });
    }

    perfil() {
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
        console.log(imageData);
        }, (err) => {
          // Handle error
          console.log('Camera issue:' + err);
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

    editarpage() {
      this.modalCtrl.create({
        component : EditarPage
      }).then(modal => modal.present());
    }

}
