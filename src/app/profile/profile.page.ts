import { Component, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

import { AuthService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { __await } from 'tslib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  opportunity: any;
  forms: any = {
    "email": "",
    "phone": "",
    "cell": "",
    "first_name": "",
    "last_name": "",
    "address_street": "",
    "address_city": "",
    "address_state": "",
    "address_postcode": "",
    "scope_of_work": ""
  };
  update: boolean = true;
  public profile: any;
  public showList: boolean = false;
  constructor(public service: AuthService, private alert: AlertService, private router: Router, private route: ActivatedRoute) {
    // service.address = "Unnamed Road, Unnamed Road, Sivaganga, Tamil Nadu, 630108, India, IN";
  }

  ngOnInit() {
    this.service.enableLocation().then((res)=>{
      console.log(res);
      // this.service.getLocation();
    });
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        let data = JSON.parse(params.special);
        this.opportunity = data;
        this.service.opportunity = data;
        console.log(this.service.opportunity);
        this.getOpps();
      }
    });
  }


  getOpps() {
    let address = this.service.address ? this.service.address.split(",") : '';
    console.log(address);
    this.service.showLoader();
    let params = { opportunity_id: this.opportunity.OPPORTUNITY_ID, delete_status: "S" };
    this.service.postObs('/getdata/lead', params).subscribe((res: any) => {
      if (res.status == 200) {
        this.update = false;
        this.forms = res.result[0];
        // this.forms.address_street = res.result[0].address_street ? res.result[0].address_street : address[0] ? address[0] : '';
        // this.forms.address_city = res.result[0].address_city ? res.result[0].address_city : address[2] ? address[2] : '';
        // this.forms.address_state = res.result[0].address_state ? res.result[0].address_state : address[3] ? address[3] : '';
        // this.forms.address_postcode = res.result[0].address_postcode ? res.result[0].address_postcode : address[4] ? address[4] : '';
        console.log(this.forms);
        this.service.mailData = this.forms;
        this.getPillerDetails();
        // this.router.navigateByUrl('/appoinment');
      } else {
        this.forms = this.service.opportunity;
        this.forms.address_street = address[0] ? address[0] : '';
        this.forms.address_city = address[2] ? address[2] : '';
        this.forms.address_state = address[3] ? address[3] : '';
        this.forms.address_postcode = address[4] ? address[4] : '';
        // this.alert.presentToast('opportunity insert failed..!');
      }
      this.service.hideLoader();
    })
  }

  getPillerDetails() {
    // this.service.showLoader();
    this.service.postObs('/getdata/pillers', { opportunity_id: this.service.opportunity.OPPORTUNITY_ID, delete_status: "S" }).subscribe((res: any) => {
      // this.service.hideLoader();
      if (res.status == 200) {
        this.showList = true;
        // this.forms = res.result;
      } else {

      }
    })
  }

  create(form: NgForm) {
    console.log(this.service.checkProperties(form.control.value));
    if (this.service.checkProperties(form.control.value)) {
      this.service.showLoader();
      let data = {
        "opportunity_id": this.opportunity.OPPORTUNITY_ID,
        "opportunity_user_id": this.opportunity.OWNER_USER_ID,
        "created_userid": this.opportunity.CREATED_USER_ID,
        "responsible_userid": this.opportunity.RESPONSIBLE_USER_ID,
        "owner_user_id": this.opportunity.OWNER_USER_ID,
        "email": form.value.email,
        "phone": form.value.phone,
        "cell": form.value.cell,
        "first_name": form.value.first_name,
        "last_name": form.value.last_name,
        "address_street": form.value.address_street,
        "address_city": form.value.address_city,
        "address_state": form.value.address_state,
        "address_postcode": form.value.address_postcode,
        "scope_of_work": form.value.scope_of_work
      };
      this.service.mailData = data;
      this.service.postObs('/postdata/lead', data).subscribe((res: any) => {
        this.service.hideLoader();
        console.log(res);
        if (res.status == 201) {
          this.router.navigateByUrl('/appoinment');
        } else {
          this.alert.presentToast('opportunity insert failed..!');
          // this.router.navigateByUrl('/appoinment');
        }
      })
      console.log("profile page");
    } else {
      this.alert.presentToast('Please fill all the data..!');
    }
  }

  updateForm(form: NgForm) {
    if (this.service.checkProperties(form.control.value)) {
      this.service.showLoader();
      let data = {
        "opportunity_id": this.opportunity.OPPORTUNITY_ID,
        "opportunity_user_id": this.opportunity.OWNER_USER_ID,
        "created_userid": this.opportunity.CREATED_USER_ID,
        "responsible_userid": this.opportunity.RESPONSIBLE_USER_ID,
        "owner_user_id": this.opportunity.OWNER_USER_ID,
        "email": form.value.email,
        "phone": form.value.phone,
        "cell": form.value.cell,
        "first_name": form.value.first_name,
        "last_name": form.value.last_name,
        "address_street": form.value.address_street,
        "address_city": form.value.address_city,
        "address_state": form.value.address_state,
        "address_postcode": form.value.address_postcode,
        "scope_of_work": form.value.scope_of_work
      };
      this.service.mailData = data;
      this.service.postObs('/putdata/lead', data).subscribe((res: any) => {
        this.service.hideLoader();
        // console.log(res);
        if (res.status == 201) {
          this.router.navigateByUrl('/appoinment');
        } else {
          // this.alert.presentToast('No more change..!');
          this.router.navigateByUrl('/appoinment');
        }
      })
    } else {
      // this.router.navigateByUrl('/appoinment');
      this.alert.presentToast('Please fill all the data..!');
    }
  }

  skip(form: NgForm) {
    this.router.navigateByUrl('/appoinment');
  }

  pillerPage() {
    this.router.navigateByUrl('/pillers');
  }

}
