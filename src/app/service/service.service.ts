import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service'; 
import { Storage } from '@ionic/storage';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { Network } from '@ionic-native/network/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  isLoading = false;
  loaderToShow: any;
  userdata: any;
  token: any;
  vehicle: any;
  userList:any;
  opportunity:any;
  piller_id:any;
  mailData:any;
  pipelineStages:any=[];


   //Geocoder configuration
   geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  
  // Location coordinates
  latitude: number;
  longitude: number;
  accuracy: number;

  // Readable Address
  address: string;

  onDevice: boolean;
  constructor(
    private httpclient: HttpClient,
    private storage: NativeStorage,
    public st: Storage,
    public env: EnvService,
    public loadingController: LoadingController,
    public navCtrl:NavController,
    public router:Router,
    public route:ActivatedRoute,
    public geolocation:Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public platform: Platform,
    public network: Network,
    private locationAccuracy: LocationAccuracy
  ) {
    this.onDevice = this.platform.is('cordova');
   }
 
  public headerPost() {
    var headers: any = new HttpHeaders();
    //headers = headers.set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Headers','*').set('Content-Type','application/json').set('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE').set('Authorization','Bearer '+this.token);

    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
    
    if(this.token){
      headers = headers.set('Authorization', this.token);
    }
    return headers;
  }


  public insightlyPost() {
    var headers: any = new HttpHeaders();
    //headers = headers.set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Headers','*').set('Content-Type','application/json').set('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE').set('Authorization','Bearer '+this.token);

    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    
    // if(this.token){
      headers = headers.set('Authorization', 'Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh');
    // }
    return headers;
  }

  public get(api) {
    return new Promise((resolve, reject) => {
      let url: any = this.env.API_URL + api;
      this.httpclient.get(url).subscribe((res) => {
        resolve(res);
      }, onerror => { console.log(onerror); });
    });
  }

  public post(api, data) {
    return new Promise((resolve, reject) => {
      let url: any = this.env.API_URL + api;
      this.httpclient.post(url, data,{headers:this.insightlyPost()}).subscribe((res: any) => {
        resolve(res);
      }, onerror => { console.log(onerror); });
    })
  }

  getObs(api): Observable<String> {
    var subject = new Subject<string>();
    let url: any = this.env.API_URL + api;
    this.httpclient.get(url,{headers:this.headerPost()}).subscribe((item: any) => {
      subject.next(item);
    });
    return subject.asObservable();
  }

  postObs(api, data): Observable<String> {
    var subject = new Subject<string>();
    let url: any = this.env.API_URL + api;
    this.httpclient.post(url, data,{headers:this.headerPost()}).subscribe((item: any) => {
      subject.next(item);
    });
    return subject.asObservable();
  }

  putObs(api, data): Observable<String> {
    var subject = new Subject<string>();
    let url: any = this.env.API_URL + api;
    this.httpclient.put(url, data,{headers:this.headerPost()}).subscribe((item: any) => {
      subject.next(item);
    });
    return subject.asObservable();
  }
  getToken() {
    return this.st.get('token').then((res: any) => {
      return res;
    });
  }

  async showLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Processing',
      duration: 8000,
      cssClass:''
    }).then(a => {
      a.present().then(() => { 
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hideLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  date() {
    let d = new Date();
    let finalDate = d.toISOString().split('T')[0] + ' ' + d.toTimeString().split(' ')[0];
    return finalDate;
  }

  checkProperties(obj) { 
    for (var key in obj) { 
        if (obj[key] != null && obj[key] != "" && obj[key] != undefined){   
        } else { 
          return false;   
        } 
    }
    return true;
}

getLocation(){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    this.accuracy = resp.coords.accuracy;

    this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

   }).catch((error) => {
     this.address= 'empty';
    //  console.log('Error getting location', error);
   });
}

//geocoder method to fetch address from coordinates passed as arguments
getGeoencoder(latitude, longitude) {
  this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
    .then((result: NativeGeocoderResult[]) => {
      this.address = this.generateAddress(result[0]);
      console.log(this.address);
      // alert(this.address);
    })
    .catch((error: any) => {
      this.address = 'empty';
      // alert('Error getting location' + JSON.stringify(error));
    });
}

generateAddress(addressObj) {
  console.log(addressObj);
  let obj = [];
  let address = "";
  for (let key in addressObj) {
    obj.push(addressObj[key]);
  }
  obj.reverse();
  for (let val in obj) {
    if (obj[val].length)
      address += obj[val] + ', ';
  }
  return address.slice(0, -2);
}

isOnline(): boolean {
  if(this.onDevice && this.network.type){
    return this.network.type != 'none';
  } else {
    return navigator.onLine; 
  }
}

isOffline(): boolean {
  if(this.onDevice && this.network.type){
    return this.network.type == 'none';
  } else {
    return !navigator.onLine;   
  }
}

watchOnline(): any {
  return this.network.onConnect();
}

watchOffline(): any {
  return this.network.onDisconnect();
}

enableLocation(){
  return new Promise((resolve,reject)=>{
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => {return true},
          error => {return false}
        );
      }
    
    });
  })
  
}
}