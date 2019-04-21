import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  crendentials: TokenPayload = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
  };

  constructor(private auth: AuthenticationService, private router: Router, public alertController: AlertController) { }

  login() {
    this.auth.login(this.crendentials).subscribe(
      () => {
        this.router.navigateByUrl('/perfil');
      },
      err => {
        console.error(err);
      }
    );
  }
  registro() {
    this.router.navigateByUrl('/registro');
  }
  async alert() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      message: 'Introduce tu dirección de Email para enviarte tu contraseña',
      inputs: [{
        name: 'contraseña',
        placeholder: 'Email'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }



}
