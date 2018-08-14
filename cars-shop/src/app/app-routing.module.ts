import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Route[] = [
    {
        path: 'auth', children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
        ]
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