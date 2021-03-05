import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/user-list/user-list.module').then(
        (m) => m.UserListPageModule
      ),
  },
  {
    path: 'users/add',
    loadChildren: () =>
      import('./users/add-user/add-user.module').then(
        (m) => m.AddUserPageModule
      ),
  },
  {
    path: 'users/:id',
    loadChildren: () =>
      import('./users/user-details/user-details.module').then(
        (m) => m.UserDetailsPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
