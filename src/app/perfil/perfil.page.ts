import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticationService, UserDetails } from '../authentication.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public details: UserDetails;

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

    constructor(private camera: Camera, private auth: AuthenticationService) {}


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
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then((imageData) => {
      this.imagenes.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData });
    }, (err) => {
      // Handle error
      console.log('Camera issue:' + err);
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
        this.imagenes.push({ rutaimagen: 'data:image/jpeg;base64,' + imageData });
      }, (err) => {
        // Handle error
        console.log('Camera issue:' + err);
      });
    }
}
