import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

import { AuthService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { NavigationExtras } from '@angular/router';
import { IonBackButton, IonBackButtonDelegate } from '@ionic/angular';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit { 
  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;
  public leadLists:any;
  public skipNo:any=500;
  constructor(private service: AuthService,private alert:AlertService,private router:Router,private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    // this.getLeads();
  }

  ionViewWillEnter(){
    this.getLeads();
  }


  getLeads(){
    this.service.showLoader();
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
    this.skipNo = this.skipNo == "" ? 0 : this.skipNo;
    let data ={
      "method":"GET",
      // "url":"https://api.insightly.com/v3.1/Leads?brief=false&skip="+this.skipNo+"&top=100&count_total=true",
      "url":"https://api.insightly.com/v2.1/Leads?$orderby=DATE_CREATED_UTC%20desc&$top=100",
      "data":false,
      "key":"Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
    }; 
    this.service.postObs('/callApi',data).subscribe((res:any)=>{
      this.service.hideLoader();
      if(res.status == 200){
        this.leadLists = res.result; 
      } else {
        this.alert.presentToast('No more users');
      }
    })
  }

  ShowLead(lead){ 
    let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(lead)
    }
  };
  this.service.router.navigate(['lead-create'], navigationExtras);
  }

  leadPage(){
    this.service.router.navigate(['lead-create']);
  }

  opportunity(){
    this.service.router.navigate(['home']);
  }

  ionViewDidEnter() { 
    this.setUIBackButtonAction();
  }

  setUIBackButtonAction() {    
    this.backButton.onClick = () => {
     this.service.router.navigateByUrl('/main');
    }; 
  }
}