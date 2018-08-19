import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { CarsStartComponent } from './cars-start/cars-start.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsBuyComponent } from './cars-buy/cars-buy.component';
import { BuySuccessComponent } from './buy-success/buy-success.component';
import { BuyFailedComponent } from './buy-failed/buy-failed.component';
import { MyCarsComponent } from './my-cars/my-cars.component';

const routes: Route[] = [
  { path: 'create', component: CarsCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: CarsEditComponent, canActivate: [AuthGuard] },
  { path: 'buy/:id', component: CarsBuyComponent, canActivate: [AuthGuard] },
  { path: 'buy-car-success', component: BuySuccessComponent, canActivate: [AuthGuard] },
  { path: 'buy-car-failed', component: BuyFailedComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: CarsDetailsComponent }
  { path: 'my-cars', component: MyCarsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarsRoutingModule { }