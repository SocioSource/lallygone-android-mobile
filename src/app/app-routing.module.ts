import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'userlists',
    loadChildren: () => import('./userlists/userlists.module').then( m => m.UserlistsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'scope',
    loadChildren: () => import('./scope/scope.module').then( m => m.ScopePageModule)
  },
  {
    path: 'appoinment',
    loadChildren: () => import('./appoinment/appoinment.module').then( m => m.AppoinmentPageModule)
  },
  {
    path: 'pillers',
    loadChildren: () => import('./billers/billers.module').then( m => m.BillersPageModule)
  },
  {
    path: 'draws',
    loadChildren: () => import('./draws/draws.module').then( m => m.DrawsPageModule)
  },
  {
    path: 'fees',
    loadChildren: () => import('./fees/fees.module').then( m => m.FeesPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'leads',
    loadChildren: () => import('./leads/leads.module').then( m => m.LeadsPageModule)
  },
  {
    path: 'lead-create',
    loadChildren: () => import('./lead-create/lead-create.module').then( m => m.LeadCreatePageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
