import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { ModalController} from '@ionic/angular';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  constructor( private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
  }
  cerrarEditarpPage() {
    this.modalCtrl.dismiss();
  }
}
