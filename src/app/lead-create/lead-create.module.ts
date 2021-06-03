import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadCreatePageRoutingModule } from './lead-create-routing.module';

import { LeadCreatePage } from './lead-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadCreatePageRoutingModule
  ],
  declarations: [LeadCreatePage]
})
export class LeadCreatePageModule {}
