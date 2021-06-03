import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;
  opportunity: any;
  update: boolean = false;
  editImage: boolean = false;
  signature: any;
  email:any;
  constructor(private service: AuthService, private alert: AlertService, private elementRef: ElementRef, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOpps();
  }

  getOpps() {
    this.service.showLoader();
    let params = { opportunity_id: this.service.opportunity.OPPORTUNITY_ID, delete_status: "S" };
    console.log(params);
    this.service.postObs('/getdata/lead', params).subscribe((res: any) => {
      if (res.status == 200) {
        this.update = true;
        this.signature = res.result[0].customer_sign; 
        this.email= res.result[0].email;
        this.editImage = (this.service.checkProperties({'sign':this.signature}));
        // ? true : false; 
        console.log(this.editImage);
      } else {
        // this.alert.presentToast('opportunity insert failed..!');
      }
      this.service.hideLoader();
    })
  }

  // this.service.router.navigateByUrl('/home');


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    this.init();
  }

  editImagefun() {
    this.editImage = this.editImage ? false : true;
    this.update = false;
  }

  init() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(51,190,229)';
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }

  create() {
    this.service.showLoader();
    if (this.signaturePad.toDataURL()) {
      let data = {
        "opportunity_id": this.service.opportunity.OPPORTUNITY_ID,
        "opportunity_user_id": this.service.opportunity.OWNER_USER_ID,
        "customer_sign": this.signaturePad.toDataURL()
      };
      this.service.postObs('/postdata/lead', data).subscribe((res: any) => {
        this.service.hideLoader();
        console.log(res);
        if (res.status == 201) {
          this.router.navigateByUrl('/home');
        } else {
          this.alert.presentToast('opportunity insert failed..!');
        }
      })
    } else {

    }
  }

  updateSign() {
    // this.service.showLoader();
    if (this.signaturePad.toDataURL() && (!this.editImage)) {
      let data = {
        "opportunity_id": this.service.opportunity.OPPORTUNITY_ID,
        "customer_sign": this.signaturePad.toDataURL()
      };
      this.service.postObs('/putdata/lead', data).subscribe((res: any) => {
        this.service.hideLoader();
        console.log(res);
        if (res.status == 201) {
          this.router.navigateByUrl('/home');
          if(this.signature == "" && this.signature == undefined && this.signature == null) {
          this.pdfGen();
        }
        } else {
          this.router.navigateByUrl('/home');
          // this.alert.presentToast('opportunity insert failed..!');
        }
      }) 
    } else { 
      // this.alert.presentToast('Sign please..!');
      this.router.navigateByUrl('/home');
    }
  }

  pdfGen() {
    this.service.showLoader();
    let data = {
      "opportunity_id": this.service.opportunity.OPPORTUNITY_ID, 
      // assign_to: this.service.userdata.user_id
    }
    this.service.postObs('/pdfCreate', data).subscribe((res: any) => {
      console.log(res);
      this.service.hideLoader();
      if (res.status == 200) {
        this.sendMail();
      } else {
        this.alert.presentToast("Pdf generate failed")
      }
      // this.signTable = res.result;
    });
  }
  
  sendMail() {
    this.service.showLoader();
    let data = {
      // "opportunity_id": this.service.opportunity.OPPORTUNITY_ID,
      toEmail: this.email,
      // fromEmail: "vjsamraj@gmail.com",
      "opportunity": this.service.mailData,
      "userdata":this.service.userdata
    };
    this.service.postObs('/sendMail', data).subscribe((data: any) => {
      this.service.hideLoader();
      if(data.status == 200){
      this.alert.presentToast("Mail sent");
    } else {
      this.alert.presentToast("Mail sending failed...");
    }
      console.log(data);
    });
  }

  skip() {
    this.router.navigateByUrl('/home');
  }
}
