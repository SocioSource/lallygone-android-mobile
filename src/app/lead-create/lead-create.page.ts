import { Component, OnInit } from '@angular/core'; 
import { AuthService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lead-create',
  templateUrl: './lead-create.page.html',
  styleUrls: ['./lead-create.page.scss'],
})
export class LeadCreatePage implements OnInit {
  forms:any={ 
    "EMAIL":"", 
    "PHONE":"",
    "MOBILE":"",
    "FIRST_NAME":"",
    "LAST_NAME":"",
    "ADDRESS_STREET":"",
    "CREATED_USER_ID":"", 
    "ADDRESS_CITY":"",  
    "ADDRESS_POSTCODE":"",
    "ADDRESS_STATE":""
  };
  update:boolean=true;
  public profile:any;
  public showList:boolean = true;
  private stageId:any="All";
  constructor(private service: AuthService,private alert:AlertService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.service.userdata);
    this.route.queryParams.subscribe(params => {
      // console.log(params.special);
      if (params && params.special) {
        let data = JSON.parse(params.special);
        this.forms = data;
        // console.log(this.forms);
        this.update = true;
        // this.getOpps(); 
      } else{
        this.update = false;
      }
    });
  }

  create(form:NgForm) {
    if(this.service.checkProperties(form.control.value)){
      this.service.showLoader(); 

    let params={
      method: "POST", 
      url:"https://api.insightly.com/v3.1/Leads",
      data: {
          "EMAIL":form.value.email, 
          "PHONE":form.value.phone,
          "MOBILE":form.value.mobile,
          "FIRST_NAME":form.value.first_name,
          "LAST_NAME":form.value.last_name,
          "ADDRESS_STREET":form.value.address_street, 
          "ADDRESS_CITY":form.value.address_city,  
          "ADDRESS_POSTCODE":form.value.address_postcode,
          "ADDRESS_STATE":form.value.address_state,
          "OWNER_USER_ID":this.service.userdata.user_id,
          "CREATED_USER_ID":this.service.userdata.user_id,
          "RESPONSIBLE_USER_ID":this.service.userdata.user_id,
      },
      key: "Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
    }; 
    this.service.postObs('/callApi',params).subscribe((res:any)=>{
      if(res.status == 200){ 
        this.service.router.navigate(['leads']);
      } else {
        this.alert.presentToast('insert data failed..!');
      }
      this.service.hideLoader();
    })
  } else {

  } 
  }

  updateForm(form:NgForm){ 
    if(this.service.checkProperties(form.control.value)){
      this.service.showLoader(); 
    let params={
      method: "PUT", 
      url:"https://api.insightly.com/v3.1/Leads",
      data: {
          "LEAD_ID":this.forms.LEAD_ID,
          "EMAIL":form.value.email, 
          "PHONE":form.value.phone,
          "MOBILE":form.value.mobile,
          "FIRST_NAME":form.value.first_name,
          "LAST_NAME":form.value.last_name,
          "ADDRESS_STREET":form.value.address_street, 
          "ADDRESS_CITY":form.value.address_city,  
          "ADDRESS_POSTCODE":form.value.address_postcode,
          "ADDRESS_STATE":form.value.address_state,
          "OWNER_USER_ID":this.service.userdata.user_id,
          "CREATED_USER_ID":this.service.userdata.user_id,
          "RESPONSIBLE_USER_ID":this.service.userdata.user_id,
      },
      key: "Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
    }; 
    console.log(params);
    this.service.postObs('/callApi',params).subscribe((res:any)=>{
      if(res.status == 200){ 
        this.service.router.navigate(['leads']);
      } else {
        this.alert.presentToast('update data failed..!');
      }
      this.service.hideLoader();
    })
  } else {

  } 
  }

  skip(){
    this.service.router.navigate(['leads']);
  }

  getNewValue(ev: any) {
    console.log(ev);
    this.forms.DATE_CREATED_UTC =ev.split(' ')[0];
}
}
