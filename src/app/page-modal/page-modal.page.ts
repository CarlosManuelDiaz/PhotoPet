import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-imagenmodal',
  templateUrl: './page-modal.page.html',
  styleUrls: ['./page-modal.page.scss'],
})
export class ImagenmodalPage implements OnInit {
  imagen: string;
  comentarios: string;

  constructor(  private modalCtrl: ModalController, private navparams: NavParams) {
    this.imagen =  this.navparams.get('imagen');
    this.comentarios =  this.navparams.get('comentarios');
  }

  ngOnInit() {
  }
  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
