import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
  {
    path: ':id',
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
