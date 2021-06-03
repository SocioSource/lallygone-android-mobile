import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadsPageRoutingModule } from './leads-routing.module';

import { LeadsPage } from './leads.page';
import { HomePage } from '../home/home.page';
import { MainPage } from '../main/main.page';
import { FooterPage } from '../footer/footer.page';
import { UserProfilePage } from '../user-profile/user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadsPageRoutingModule
  ],
  declarations: [
  // LeadsPage
],
// exports:[
//   HomePage,
//   MainPage,
//   FooterPage,
//   UserProfilePage
// ]
})
export class LeadsPageModule {}
