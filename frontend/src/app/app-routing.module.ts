import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  },
  {
    path: 'user-list',
    loadChildren: () => import('./users/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./users/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./users/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
