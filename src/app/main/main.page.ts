import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../service/alert.service';
import { AuthService } from '../service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public opportunityLists: any = [];
  public pipelineStages: any = [];
  public stageId:any="All";
  public getTotal:number=0;
  public wonTotal:number=0;
  public shows:boolean=false;
  constructor(private service: AuthService, private alert: AlertService,private router:Router,private menu:MenuController) { }

  ngOnInit() {
    this.getStages();
  }

  ionViewDidEnter() { 
    this.menu.enable(true); 
  }

  doRefresh(event) {
    setTimeout(() => { 
    event.target.complete();
    this.getStages(); 
    this.getTotal = 0;
    this.wonTotal = 0;
    this.shows = false;
    this.opportunityLists = [];
    this.pipelineStages = [];
    this.stageId='';
    }, 1000);
    }

  getStages() {
    this.service.pipelineStages = [];
    this.service.showLoader();
    let data = {
      method: "GET",
      url: "https://api.insightly.com/v3.1/PipelineStages?count_total=false",
      data: false,
      key: "Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
    }
    this.service.postObs('/callApi', data).subscribe((res: any) => {
      if (res.status == 200) { 
        res.result.forEach((element,i) => {  
          if (element.PIPELINE_ID == 873118) { 
            this.service.pipelineStages.push(element);
            this.getLead(element,i); 
          }
        });
      }
    });
  }


  getLead(stage:any,i) {   
    this.opportunityLists = [];
    let count = 0;
    let data = {
      method: "GET",
      // url:"https://api.insightly.com/v3.1/Leads?brief=false&count_total=false",
      url: (stage == undefined || stage == 'All') ? "https://api.insightly.com/v3.1/Opportunities?brief=true&count_total=false" : "https://api.insightly.com/v3.1/Opportunities/Search?field_name=STAGE_ID&field_value=" +stage.STAGE_ID + "&brief=false&count_total=false",
      data: false,
      key: "Basic YmY0NGViN2QtMWFmYy00NjA4LTg4MDQtMGVhNWY4YTc4NTVh"
    };
    this.service.postObs('/callApi', data).subscribe((res: any) => {
      if (res.status == 200) {
        res.result.filter((data)=>{
          this.wonTotal += data.OPPORTUNITY_STATE == "WON" ? 1 : 0; 
          count += data.OPPORTUNITY_STATE == "OPEN" ? 1 : 0; 
        });
         this.getTotal += res.result.length;
        this.opportunityLists.push({"stage_id":stage.STAGE_ID,"stage_name":stage.STAGE_NAME,"count":count}); 
      } else {
        this.alert.presentToast('No more data');
      }

      if(i == 0){
      this.service.hideLoader();
      }

      this.shows=true; 
    })
  }

  leadPage(stateid){
    console.log(stateid);
    this.service.st.set('stage_id',stateid);
    this.router.navigate(['home']);
  }
}
