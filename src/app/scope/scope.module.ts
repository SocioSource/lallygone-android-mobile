import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScopePageRoutingModule } from './scope-routing.module';

import { ScopePage } from './scope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScopePageRoutingModule
  ],
  declarations: [ScopePage]
})
export class ScopePageModule {}
