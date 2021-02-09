import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

import { UserListPage } from './user-list.page';

const routes: Routes = [
  {
    path: '',
    component: UserListPage,
  },
  {
    path: ':id',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListPageRoutingModule {}
