import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { FooterPage } from '../footer/footer.page';
import { HomePage } from '../home/home.page';
import { LeadsPage } from '../leads/leads.page';
import { UserProfilePage } from '../user-profile/user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [
    // MainPage
  ],
  // exports:[
  //   FooterPage,
  //   HomePage,
  //   LeadsPage,
  //   UserProfilePage
  // ]
})
export class MainPageModule {}
