import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';


import { PageModalPageModule } from './page-modal/page-modal.module';
import {  EditarPageModule } from './editar/editar.module';
import { ActividadesPageModule} from './actividades/actividades.module';
import { DataApiService } from './data-api.service';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PageModalPageModule,
    EditarPageModule,
    ActividadesPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Chooser,
    ImagePicker,
    AuthenticationService,
    AuthGuardService,
    DataApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
