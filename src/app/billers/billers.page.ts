import { Component, OnInit,ViewChild } from '@angular/core';
import {  NavController,IonBackButtonDelegate } from '@ionic/angular';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

import { AuthService } from '../service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-billers',
  templateUrl: './billers.page.html',
  styleUrls: ['./billers.page.scss'],
})
export class BillersPage implements OnInit { 
  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;

  public profile:any;
  forms:any={
    "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
    "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
    "col_wall":"", 
    "col_wall_location":"", 
    "height_from_FF":"", 
    "beam_length":"", 
    "beam_width":"", 
    "beam_depth":"", 
    "col_if_wall_to_remove":"", 
    "drop_flush":"", 
    "unit_price":"", 
    "total":""
  };
  pillers:any=[];
  update:boolean=false;
  showList:boolean=false;
  constructor(private service: AuthService,private alert:AlertService,private router:Router) {
    console.log(this.service.opportunity);
   }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.update=false;
    this.showList=false;
    this.getPillerDetails();
  }

  getPillerDetails(){
    this.service.showLoader();
    this.service.postObs('/getdata/pillers',{opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"}).subscribe((res:any)=>{
      if(res.status == 200){
        this.update = true;
        this.showList = true;
        this.pillers = res.result;
        // this.forms = res.result;
      } else {
        
      }
      this.service.hideLoader();
    })
  }

  editForm(formData){
    this.forms = formData;
    this.update = true;
    this.showList = false;
  }

  add(){ 
    this.forms={
      "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
      "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
      "col_wall":"", 
      "col_wall_location":"", 
      "height_from_FF":"", 
      "beam_length":"", 
      "beam_width":"", 
      "beam_depth":"", 
      "col_if_wall_to_remove":"", 
      "drop_flush":"", 
      "unit_price":"", 
      "total":""
    };
    this.update = false;
    this.showList = false;
  }

 
  create(form:NgForm) {
    if(this.service.checkProperties(form.control.value)){
      this.service.showLoader();
    let params={
        "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
        "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
        "col_wall":form.value.col_wall, 
        "col_wall_location":form.value.col_wall_location, 
        "height_from_FF":form.value.height_from_FF, 
        "beam_length":form.value.beam_length, 
        "beam_width":form.value.beam_width, 
        "beam_depth":form.value.beam_depth, 
        "col_if_wall_to_remove":form.value.col_if_wall_to_remove, 
        "drop_flush":form.value.drop_flush, 
        "unit_price":form.value.unit_price, 
        "total":form.value.total
    };

    this.service.postObs('/postdata/pillers',params).subscribe((res:any)=>{
      if(res.status == 201){
        this.getPillerID();
      } else {
        this.alert.presentToast('insert data failed..!');
      }
      this.service.hideLoader();
    })
  } else {
    this.alert.presentToast('Please fill all the data..!');
  }
    // this.router.navigateByUrl('/appoinment');
  }

  getPillerID(){
    this.service.showLoader();
    this.service.postObs('/getdata/pillers',{opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"}).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 200){
        this.service.piller_id = res.result[res.count-1].id;
        // console.log(res.count);
        this.service.router.navigateByUrl('/draws');
      } else {
        
      }
    })
  }

  updateForm(form:NgForm){
    if(this.service.checkProperties(form.control.value)){
      this.service.showLoader();
    let params={
      "id":this.forms.id,
      "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
        "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
        "col_wall":this.forms.col_wall, 
        "col_wall_location":form.value.col_wall_location, 
        "height_from_FF":form.value.height_from_FF, 
        "beam_length":form.value.beam_length, 
        "beam_width":form.value.beam_width, 
        "beam_depth":form.value.beam_depth, 
        "col_if_wall_to_remove":form.value.col_if_wall_to_remove, 
        "drop_flush":this.forms.drop_flush, 
        "unit_price":form.value.unit_price, 
        "total":form.value.total
    };

    this.service.postObs('/putdata/pillers',params).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 201){
        this.service.piller_id = this.forms.id;
          this.service.router.navigateByUrl('/draws');
      } else {
        this.service.piller_id = this.forms.id;
        this.router.navigateByUrl('/draws');
        //  this.alert.presentToast('No more change..!');
      }
    })
  } else {
    this.alert.presentToast('Please fill all the data..!');
  }
  }

  removePiller(i){
    this.service.showLoader();
    let params = {id:this.pillers[i].id,delete_status:"N"};
    this.service.postObs('/putdata/pillers',params).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 201){
        this.pillers.splice(i,1);
      } else {
        this.alert.presentToast('Delete data failed..!');
      }
    })
  }


  selectColWall(event){
    this.forms.col_wall = event;
    this.forms.col_if_wall_to_remove = event+' to remove';
  }

  selectDropFlush(event){
    this.forms.drop_flush = event;
  }

  skip(form:NgForm){
    this.service.piller_id = this.forms.id;
    // if(this.showList){
      this.router.navigateByUrl('/fees');
    // } else{
    // this.router.navigateByUrl('/draws');
    // }
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.setUIBackButtonAction();
  }

  setUIBackButtonAction() {  
    this.backButton.onClick = () => {
      this.showList ? this.router.navigateByUrl('/appoinment') : this.showList = false ;      
      this.showList = true;
    }; 
  }
  
}
