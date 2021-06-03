import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { HomePage } from '../home/home.page';
import { FooterPage } from '../footer/footer.page';
import { LeadsPage } from '../leads/leads.page';
import { MainPage } from '../main/main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule
  ],
  declarations: [
  // UserProfilePage
],
// exports:[  
//   HomePage,
//   FooterPage,
//   LeadsPage,
//   MainPage,
// ]
})
export class UserProfilePageModule {}
