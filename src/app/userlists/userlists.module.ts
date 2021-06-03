import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserlistsPageRoutingModule } from './userlists-routing.module';

import { UserlistsPage } from './userlists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserlistsPageRoutingModule
  ],
  declarations: [UserlistsPage]
})
export class UserlistsPageModule {}
