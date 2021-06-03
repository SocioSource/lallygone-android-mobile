import { Component, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

import { AuthService } from '../service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
  public profile:any;
  forms:any={
    "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
    "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
    "disposal_fee":"", 
    "structural_engineering":"", 
    "sub_total":"", 
    "special_promo":"", 
    "total":"", 
    "deposit_50_percentage":"", 
    "balance":"", 
    "special_notes":"", 
    
  };
  update:boolean=true;
  constructor(private service: AuthService,private alert:AlertService,private router:Router) {
    console.log(this.service.opportunity);
   }

  ngOnInit() {
    this.getPillerDetails();
  }

  getPillerDetails(){
    this.service.showLoader();
    this.service.postObs('/getdata/lead_main_details',{opportunity_id:this.service.opportunity.OPPORTUNITY_ID,delete_status:"S"}).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 200){
        this.update = false;
        // this.forms = res.result[0];
        this.forms={ 
          "disposal_fee":res.result[0].disposal_fee == 0 ? "" : res.result[0].disposal_fee, 
        "structural_engineering":res.result[0].structural_engineering == 0 ? "" : res.result[0].structural_engineering, 
        "sub_total":res.result[0].sub_total == 0 ? "" : res.result[0].sub_total, 
        "special_promo":res.result[0].special_promo == 0 ? "" : res.result[0].special_promo, 
        "total":res.result[0].total == 0 ? "" : res.result[0].total, 
        "deposit_50_percentage":res.result[0].deposit_50_percentage == 0 ? "" : res.result[0].deposit_50_percentage, 
        "balance":res.result[0].balance == 0 ? "" : res.result[0].balance, 
        "special_notes":res.result[0].special_notes == 0 ? "" : res.result[0].special_notes
      }
      } else {
        
      }
    })
  }

 
  create(form:NgForm) {
    // if(this.service.checkProperties(form.control.value)){
      this.service.showLoader();
    let params={
        "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
        "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
        "disposal_fee":form.value.disposal_fee, 
        "structural_engineering":form.value.structural_engineering, 
        "sub_total":form.value.sub_total, 
        "special_promo":form.value.special_promo, 
        "total":form.value.total, 
        "deposit_50_percentage":form.value.deposit_50_percentage, 
        "balance":form.value.balance, 
        "special_notes":form.value.special_notes, 
    };
    console.log(params);
    this.service.postObs('/putdata/lead_main_details',params).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 201){
          this.service.router.navigateByUrl('/sign');
      } else {
        this.alert.presentToast('No more change..!');
      }
    })
  // } else {

  // }
  }

  updateForm(form:NgForm){
    // if(this.service.checkProperties(form.control.value)){
    let params={
      "opportunity_id":this.service.opportunity.OPPORTUNITY_ID, 
      "opportunity_user_id":this.service.opportunity.OWNER_USER_ID,
      "disposal_fee":form.value.disposal_fee, 
      "structural_engineering":form.value.structural_engineering, 
      "sub_total":form.value.sub_total, 
      "special_promo":form.value.special_promo, 
      "total":form.value.total, 
      "deposit_50_percentage":form.value.deposit_50_percentage, 
      "balance":form.value.balance, 
      "special_notes":form.value.special_notes, 
    };

    this.service.postObs('/putdata/lead_main_details',params).subscribe((res:any)=>{
      if(res.status == 201){
          this.service.router.navigateByUrl('/sign');
      } else {
        this.service.router.navigateByUrl('/sign');
        // this.alert.presentToast('No more change..!');
      }
    })
  // } else {
    
  // }
  }
 
  skip(form:NgForm){
    this.router.navigateByUrl('/sign');
  }

}
