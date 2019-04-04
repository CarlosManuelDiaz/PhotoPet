import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  crendentials: TokenPayload = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
  };
  iconos = [
    {
      nombre : 'logo',
      imagen : 'assets/icon/logo.png',

    }];
    constructor(private auth: AuthenticationService, private router: Router) { }

    register() {
      this.auth.register(this.crendentials).subscribe(
        () => {
          this.router.navigateByUrl('/perfil');
        },
        err => {
          console.error(err);
        }
      );
    }
}
