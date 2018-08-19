import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CarsStartComponent } from './cars/cars-start/cars-start.component';

import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartsModule } from './parts/parts.module';

const routes: Route[] = [
    {
        path: 'auth', children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
        ]
    },
    {
        path: '', component: CarsStartComponent
    },
    {
        path: 'cars',
        loadChildren: () => CarsModule,
        canActivate: [AuthGuard]
    },
    {
        path: 'parts',
        loadChildren: () => PartsModule,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        loadChildren: () => UsersModule,
        canActivate: [AuthGuard]
    },
    {
        path: 'about-us', component: AboutUsComponent
    },
    {
        path: '*', redirectTo: '/auth/signin'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }