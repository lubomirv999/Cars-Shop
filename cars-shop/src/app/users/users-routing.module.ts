import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AdminGuard } from '../auth/admin.guard';
import { AuthGuard } from '../auth/auth.guard';

import { AllUsersComponent } from './all-users/all-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Route[] = [
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'all', component: AllUsersComponent, canActivate: [AdminGuard] }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }