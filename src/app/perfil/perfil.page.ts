import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticationService, UserDetails } from '../authentication.service';

import { ModalController, NavController } from '@ionic/angular';
import { ImagenmodalPage } from '../page-modal/page-modal.page';
import { EditarPage } from '../editar/editar.page';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImagesService } from '../images.service';
import { UploadModalPage } from '../upload-modal/upload-modal.page';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public details: UserDetails;
  public images: any = [];
  public base64Image: string;



  constructor(private camera: Camera,
    public modalCtrl: ModalController,
    private auth: AuthenticationService,
    public navCtrl: NavController,
    public http: HttpClient,
    private imagesService: ImagesService,
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
  // reloadImages() {
  //   this.imagesService.getImages().subscribe(data => {
  //     this.images = data;
  //   });
  // }
  // deleteImage(img) {
  //   this.imagesService.deleteImage(img).subscribe(data => {
  //     this.reloadImages();
  //   });
  // }

   takePicture() {
    const options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      savetoPhotoAlbum: false,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.images.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData});
      // const modal = await this.modalCtrl.create(
      //   {component: UploadModalPage,
      //     componentProps:
      //     { data: imagePath }});
      // modal.present();
      // modal.onDidDismiss().then(data => {
      //   if (data) {
      //     this.reloadImages();
        },
        (err) => {
      console.log('Error: ', err);
    });
  }

  galeria() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      };
      this.camera.getPicture(options).then((imageData) => {
        this.images.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData});
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
