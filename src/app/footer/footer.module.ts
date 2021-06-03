import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterPageRoutingModule } from './footer-routing.module';

import { FooterPage } from './footer.page';
import { HomePage } from '../home/home.page';
import { MainPage } from '../main/main.page';
import { LeadsPage } from '../leads/leads.page';
import { UserProfilePage } from '../user-profile/user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterPageRoutingModule,
  ],
  declarations: [
    // FooterPage
  ],
  // exports:[ 
  //   HomePage,
  //   MainPage,
  //   LeadsPage,
  //   UserProfilePage
  // ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class FooterPageModule {}
