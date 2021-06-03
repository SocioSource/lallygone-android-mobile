import { Component, OnInit } from '@angular/core';

import { NavController, Platform,MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './service/service.service';
import { AlertService } from './service/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Opportunity',
      url: '/home',
      icon: 'mail'
    },
    {
      title: 'Leads',
      url: '/leads',
      icon: 'paper-plane'
    },
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public service : AuthService,
    private alert:AlertService,
    private  navCtrl:NavController,
    private router:Router,
    private menuCtrl:MenuController
  ) {
    this.initializeApp(); 
    this.menuCtrl.enable(true,'menu'); 
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // this.router.navigateByUrl('/home');
  }

  ngOnInit() {
    // this.navCtrl.navigateForward('/pillers');
    this.service.st.get('userdata').then((res)=>{     
      console.log(res);
      if(res){
        this.service.token = res?.token;
        this.service.userdata = res;
        // this.navCtrl.navigateForward('/home');
        this.navCtrl.navigateForward('/main');
      } else {
        this.service.navCtrl.navigateForward('/userlists');
      }
    });
  }

  // getUsers(){
  //   this.service.showLoader();
  //   // const path = window.location.pathname.split('folder/')[1];
  //   // if (path !== undefined) {
  //   //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
  //   // }
  //   let data ={
  //     "method":"GET",
  //     "url":"https://api.insightly.com/v3.1/Users?count_total=false",
  //     "data":false,
  //     "key":"Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
  //   };
  //   this.service.postObs('/callApi',data).subscribe((res:any)=>{
  //     this.service.hideLoader();
  //     if(res.status == 200){
  //       this.service.userList = res.result;
  //       console.log(this.service.userList);
  //       this.service.navCtrl.navigateForward('/userlists');
  //     } else {
  //       this.alert.presentToast('No more users');
  //     }
  //   })
  // }

  logout() { 
    this.service.showLoader();
    this.service.getObs('/logout').subscribe((data:any) => {  
      this.service.hideLoader();
      if(data.status == 200){
        this.service.st.clear();       
        this.navCtrl.navigateRoot('/userlists');
      }
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/userlists'); 
      }
    );
  }
}
