import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.page.html',
  styleUrls: ['./upload-modal.page.scss'],
})
export class UploadModalPage {

  imageData: any;
  desc: string;

  constructor( public navCtrl: NavController,
    private imagesService: ImagesService,
    public navParams: NavParams,
    private modalCtrl: ModalController) {
      this.imageData = this.navParams.get('data');
    }

  saveImage() {
    this.imagesService.uploadImage(this.imageData, this.desc).then(res => {
      console.log(this.imageData);
      this.modalCtrl.dismiss({reload: true});
    }, err => {
      this.modalCtrl.dismiss();
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }



}
