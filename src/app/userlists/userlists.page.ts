import { Component, OnInit,ViewChild } from '@angular/core';
import {  NavController,IonBackButtonDelegate, MenuController } from '@ionic/angular';
import { AuthService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { AlertService } from '../service/alert.service';


@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.page.html',
  styleUrls: ['./userlists.page.scss'],
})
export class UserlistsPage implements OnInit {
  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;
public userPosition:any='create Password';
public userCreate:any={"EMAIL_ADDRESS":""};
  constructor(public service:AuthService,private alert:AlertService,private menu:MenuController) {
    console.log(service.userList);
   }

  ngOnInit() {
    this.getUsers();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter'); 
    this.menu.enable(false); 
  }

  getUsers(){
    this.service.showLoader();
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
    let data ={
      "method":"GET",
      "url":"https://api.insightly.com/v3.1/Users?count_total=false",
      "data":false,
      "key":"Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
    };
    this.service.postObs('/callApi',data).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 200){
        this.service.userList = res.result;
        // console.log(this.service.userList);
        // this.service.navCtrl.navigateForward('/userlists');
      } else {
        this.alert.presentToast('No more users');
      }
    })
  }

  selectUser(){ 
    // this.service.showLoader();
    // this.userPosition = 'login';
    //  this.userCreate = user;
    console.log(this.userCreate);
    this.service.postObs('/userFind/user',{user_id:this.userCreate.USER_ID}).subscribe((data:any)=>{
      if(data.status == 404){
        // this.service.hideLoader();
          this.userPosition = 'createPassword';
      } else{
        // this.service.hideLoader();
          this.userPosition = 'login';
      }
    });
  }

  create(form: NgForm) {
    let data={
      "email":this.userCreate.EMAIL_ADDRESS,
      "password":form.value.password,
      "user_id":this.userCreate.USER_ID,
      "first_name":this.userCreate.FIRST_NAME,
      "last_name":this.userCreate.LAST_NAME,
      "dropbox_email":this.userCreate.EMAIL_DROPBOX_ADDRESS,
      "dropbox_identity":this.userCreate.EMAIL_DROPBOX_IDENTIFIER,
      "instance_id":this.userCreate.INSTANCE_ID,
      "user_currency":this.userCreate.USER_CURRENCY
    };
    if(this.service.checkProperties(data)){
      this.service.showLoader();
    this.service.postObs('/postData/user/',data).subscribe((data:any) => {
      console.log(data);
      this.service.hideLoader();
     if(data.status == 201){
       this.alert.presentToast('User created..!');
       console.log(data);
       this.login(form);
      //  form.reset();
     } else {
      this.alert.presentToast('User create failed..!');
     } 
      },
      error => {
        console.log(error);
      },);
    } else{
      this.alert.presentToast('Fill all the fields');
    }
  }
  
  login(form: NgForm) {
    let data={"email":this.userCreate.EMAIL_ADDRESS,"password":form.value.password};
    console.log(data);
    if(this.service.checkProperties(data)){
    this.service.showLoader();
    this.service.postObs('/login/',data).subscribe((data:any) => { 
      this.service.hideLoader();   
     if(data.status == 200){
      this.service.st.remove('token');
      this.service.st.set('token',data.result[0].token);
      this.service.token = data.result[0].token;
       this.service.st.set('userdata',data.result[0]);
              this.service.userdata = data.result[0];
               this.alert.presentToast("Logged In");
               this.service.navCtrl.navigateRoot('/main');
     } else {
      this.alert.presentToast("Please check the password");
     } 
      },
      error => {
        console.log(error);
      this.service.hideLoader();
      },);
    } else {
      this.alert.presentToast('Fill all the fields');
    }

  } 

  setUIBackButtonAction() {  
    this.backButton.onClick = () => {
      this.userPosition = 'Users';
    //  this.userPosition == 'Profile' ? this.service.navCtrl.navigateForward('/home') : this.userPosition = 'Profile' ;
    }; 
  }

  back(){
   this.userPosition = 'Users'; 
  }
}
