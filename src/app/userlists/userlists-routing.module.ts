import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlistsPage } from './userlists.page';

const routes: Routes = [
  {
    path: '',
    component: UserlistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserlistsPageRoutingModule {}
