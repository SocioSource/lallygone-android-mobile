import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterPage } from './footer.page';

const routes: Routes = [
  {
    path: '',
    component: FooterPage
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'leads',
    loadChildren: () => import('../leads/leads.module').then( m => m.LeadsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterPageRoutingModule {}
