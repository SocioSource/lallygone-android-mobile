import { Component, OnInit,ViewChild } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

import { AuthService } from '../service/service.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {  NavController,IonBackButtonDelegate } from '@ionic/angular';


@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.page.html',
  styleUrls: ['./appoinment.page.scss'],
})

export class AppoinmentPage implements OnInit {
  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;
  public profile:any;
  forms:any={
    "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
    "opportunity_user_id":this.service.opportunity.OWNER_USER_ID, 
    "appt_date":"", 
    "appt_time":"", 
    "sales_tech":this.service.userdata ? this.service.userdata.user_id : '835601', 
    "referral_source":"",  
    "terms":"", 
    "quote_valid_for":"", 
    "install_date":""
  };
  update:boolean=true;
  constructor(private service: AuthService,private alert:AlertService,private router:Router,private camera: Camera) {
    console.log(this.service.opportunity);
   }

  ngOnInit() {
    this.getLeadDetails();
  }

  getLeadDetails(){
    this.service.showLoader();
    this.service.postObs('/getdata/lead_main_details',{opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"}).subscribe((res:any)=>{
      if(res.status == 200){
        this.update = false;
        this.forms = res.result[0];
        this.forms.sales_tech = this.service.userdata.user_id;
        console.log(this.forms.pictures);
        // this.forms.pictures
      } else {
        
      }
    this.service.hideLoader();
    })
  }

  cameraPic() {
    const options: CameraOptions = {
      quality: 20,
      allowEdit : true,
      targetWidth: 100,
      targetHeight: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.forms.pictures = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     this.forms.pictures = "data:image/png;base64,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";
    });
  }

  close(){
    this.forms.pictures = "";
  }

  create(form: NgForm) {
    if(this.service.checkProperties(form.control.value) && (this.forms.pictures)){
    this.service.showLoader();
    let params={
      "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
      "opportunity_user_id":this.service.opportunity.OWNER_USER_ID, 
      "appt_date":form.value.appt_date, 
      "appt_time":form.value.appt_time, 
      "sales_tech":form.value.sales_tech, 
      "referral_source":form.value.referral_source, 
      "pictures":this.forms.pictures, 
      "terms":form.value.terms, 
      "quote_valid_for":form.value.quote_valid_for, 
      "install_date":form.value.install_date
    }
    this.service.postObs('/postdata/lead_main_details',params).subscribe((res:any)=>{
      if(res.status == 201){
          this.service.router.navigateByUrl('/pillers');
      } else {
        this.alert.presentToast('insert data failed..!');
      }
      this.service.hideLoader();
    })
  } else{
    this.alert.presentToast('Please fill all the data..!');
  }
    // this.router.navigateByUrl('/appoinment');
  }

  updateForm(form:NgForm){ 
    if(this.service.checkProperties(form.control.value) && (this.forms.pictures)){
      this.service.showLoader();
    let params={
      "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
      "opportunity_user_id":this.service.opportunity.OWNER_USER_ID, 
      "appt_date":form.value.appt_date, 
      "appt_time":form.value.appt_time, 
      "sales_tech":form.value.sales_tech, 
      "referral_source":form.value.referral_source, 
      "pictures":this.forms.pictures, 
      "terms":form.value.terms, 
      "quote_valid_for":form.value.quote_valid_for, 
      "install_date":form.value.install_date
    }
    this.service.postObs('/putdata/lead_main_details',params).subscribe((res:any)=>{
      if(res.status == 201){
          this.service.router.navigateByUrl('/pillers');
      } else {
        // this.alert.presentToast('No more change..!');
        this.router.navigateByUrl('/pillers');
      }
      this.service.hideLoader();
    })
  } else {
    this.alert.presentToast('Please fill all the data..!');
  }
  }

  skip(form:NgForm){
    this.router.navigateByUrl('/pillers');
  }

  terms(event){
    this.forms.terms = event;
  }

  setUIBackButtonAction() {  
    this.backButton.onClick = () => {
      this.router.navigateByUrl['profile'];
    }; 
  }
}
