import { Component, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { AuthService } from '../service/service.service';
import { NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public opportunityLists: any = [];
  public pipelineStages: any = [];
  public stageId:any;
  public show:boolean=false;

  constructor(public service: AuthService, private alert: AlertService,private menu:MenuController) { }

  ngOnInit() { 
    // this.service.st.get('stage_id').then((res)=>{
    //   this.stageId = res; 
    //   console.log(this.stageId);
    // // this.getLead();
    // }); 
  }

  ionViewWillEnter(){ 
    this.service.st.get('stage_id').then((res)=>{      
      this.stageId = (res == null || res == undefined) ? 'All' : res; 
      console.log(this.stageId);
    }); 
  }

  

    doRefresh(event) { 
    setTimeout(() => { 
    event.target.complete();
    this.service.st.get('stage_id').then((res)=>{
      this.stageId = (this.stageId == null || this.stageId == undefined) ? 'All' : this.stageId; 
    this.getLead();
    }); 
    // this.getStages(); 
    this.opportunityLists = [];
    this.pipelineStages = [];
    this.stageId = (this.stageId == null || this.stageId == undefined) ? 'All' : this.stageId; 
    }, 1000);
    }

  // getStages() {
  //   this.service.pipelineStages = [];
  //   // this.service.showLoader();
  //   let data = {
  //     method: "GET",
  //     url: "https://api.insightly.com/v3.1/PipelineStages?count_total=false",
  //     data: false,
  //     key: "Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
  //   }
  //   this.service.postObs('/callApi', data).subscribe((res: any) => {
  //     // this.service.hideLoader();
  //     if (res.status == 200) { 
  //       res.result.forEach((element, i) => {
  //         console.log(element.PIPELINE_ID);
  //         if (element.PIPELINE_ID == 873118) {
  //           this.service.pipelineStages.push(element);
  //         }
  //       });
  //     }
  //   });
  // }


  getLead() {   
    this.service.showLoader(); 
    this.show = false;
    this.opportunityLists = [];
    this.service.st.set('stage_id',this.stageId);
    let data = {
      method: "GET",
      // url:"https://api.insightly.com/v3.1/Leads?brief=false&count_total=false",
      url: (this.stageId == 'All') ? "https://api.insightly.com/v3.1/Opportunities?brief=true&count_total=false" : "https://api.insightly.com/v3.1/Opportunities/Search?field_name=STAGE_ID&field_value=" + this.stageId + "&PIPELINE_ID=873118&brief=false&count_total=false",
      data: false,
      key: "Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
    };
    this.service.postObs('/callApi', data).subscribe((res: any) => {
     this.service.hideLoader();
      if (res.status == 200) { 
        res.result.forEach((element, i) => { 
              if (element.OPPORTUNITY_STATE === 'OPEN') {
                this.show = true;  
                this.opportunityLists.push(element);
              }  
        }); 
        this.opportunityLists;
      } else {
        this.alert.presentToast('No more data');
      }
    });
  }

  selectOpportunity(opps) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(opps)
      }
    };
    this.service.router.navigate(['profile'], navigationExtras);
  }

  lead(){
    this.service.router.navigate(['/leads'])
  }

}
