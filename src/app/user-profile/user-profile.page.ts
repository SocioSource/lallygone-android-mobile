import { Component, OnInit,ViewChild } from '@angular/core';
import { AlertController, IonBackButtonDelegate, NavController } from '@ionic/angular';
import { AlertService } from '../service/alert.service';
import { AuthService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { UserlistsPage } from '../userlists/userlists.page';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  title:any="Profile";
  type:any="password";
  yourData: any={vehicle_id:''};
    @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;
  
    constructor(private navCtrl:NavController,private alert:AlertService,private service:AuthService,private alertController:AlertController) { }
  
    ngOnInit() {
      this.service.st.get('trucks').then((res)=>{
        console.log(res);
        (res) ? this.yourData = res : this.yourData.vehicle_id = '';
      });
  
      // this.getRide();
    }
  
    // ionViewDidEnter() {
    //   console.log('ionViewDidEnter');
    //   this.setUIBackButtonAction();
    // }

    // setUIBackButtonAction() {  
    //   this.backButton.onClick = () => {
    //    this.title == 'Profile' ? this.navCtrl.navigateForward('/home') : this.title = 'Profile' ;
    //   }; 
    // }

    backBtn(){
      this.title = 'Profile';
    }
  
    
  
  change(event){ 
    this.title = event.target.innerText;
  }
  
  changePassword(form: NgForm){
    if(form.value.n_password == form.value.c_password){
    this.service.showLoader();
      let data = {
        password : form.value.n_password,
        email: this.service.userdata.email
      }
      this.service.postObs('/putData/user',data).subscribe((res:any)=>{
        this.service.hideLoader();
        if(res.status == 201){
          this.alert.presentToast("Password changed succesfully..!");
          this.navCtrl.navigateRoot('/main');
        } else {
          this.alert.presentToast('Password change failed..!');
        }
      });
    } else {
      this.alert.presentToast('Password are not same..!');
    }
  }
  
  show(){
  this.type = 'text';
  }
  
  hide(){
  this.type = 'password';
  }
  
  async logoutConfirm(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure logout!',
      // message:  'Are you complete timeout?', 
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { 
            ;
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  logout() { 
    this.service.showLoader();
    this.service.getObs('/logout').subscribe((data:any) => {  
      if(data.status == 200){
        this.service.st.clear();       
        // this.service.router.navigate(['/userlists']);
        this.navCtrl.navigateRoot('/userlists');
      }
      this.service.hideLoader();
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/userlists');
        // this.service.router.navigate(['/userlists']);
      });
  }

}
