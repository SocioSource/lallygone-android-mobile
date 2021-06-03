import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterPage } from '../footer/footer.page';
import { LeadsPage } from '../leads/leads.page';
import { MainPage } from '../main/main.page';
import { UserProfilePage } from '../user-profile/user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    // HomePage
  ],
// exports:[
//   FooterPage,
//   LeadsPage,
//   MainPage,
// UserProfilePage
// ]
})
export class HomePageModule {}
