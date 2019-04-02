import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

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

  constructor(private auth: AuthenticationService, private router: Router) { }

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



}
