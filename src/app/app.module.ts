import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { InterceptorService } from './provider/interceptor.directive';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FooterPage } from './footer/footer.page';
import { MainPage } from './main/main.page';
import { HomePage } from './home/home.page';
import { LeadsPage } from './leads/leads.page';
import { UserProfilePage } from './user-profile/user-profile.page';
import { FormsModule } from '@angular/forms';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Network } from '@ionic-native/network/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx'; 


@NgModule({
  declarations: [AppComponent,
    FooterPage,
    MainPage,
    HomePage,
    LeadsPage,
    UserProfilePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  exports:[
    FooterPage,
    MainPage,
    HomePage,
    LeadsPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    NativeGeocoder,
    Network,
    LocationAccuracy,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
