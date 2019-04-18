import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'General',
      url: '/general',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'finger-print'
    },
    {
      title: 'Productos',
      url: '/productos',
      icon: 'basket'
    },
 
    {
      title: 'Actividades',
      url: '/actividades',
      icon: 'sunny'
    },
    {
      title: 'Mapa',
      url: '/mapa',
      icon: 'pin'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthenticationService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  endsesion() {
    this.auth.logout();
  }
}
