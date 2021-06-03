import { Component,ElementRef, Renderer2, ViewChild, AfterViewInit, OnInit } from '@angular/core'; 
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  @ViewChild("myTabs") tabs:IonTabs;
  public currentTab:any='main';
  constructor(private render:Renderer2) { }

  ngOnInit(){}

  ngAfterViewInit() {    
    // this.tabs.outlet.nativeEl.classList.add('active'); 
     this.currentTab = this.tabs.outlet.tabsPrefix.replace("/","");
     console.log(this.currentTab);
    this.tabs.outlet.tabsPrefix = '/';  
    
}

getTab() {
  console.log("hi");
  let selectedTab = this.tabs.getSelected();
  console.log(selectedTab);
}
 
}


