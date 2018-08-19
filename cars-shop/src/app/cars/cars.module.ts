import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarsRoutingModule } from './cars-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';

import { CarsStartComponent } from './cars-start/cars-start.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsBuyComponent } from './cars-buy/cars-buy.component';
import { BuySuccessComponent } from './buy-success/buy-success.component';
import { BuyFailedComponent } from './buy-failed/buy-failed.component';
import { MyCarsComponent } from './my-cars/my-cars.component';

@NgModule({
  declarations: [
    CarsStartComponent,
    CarsCreateComponent,
    CarsEditComponent,
    CarsDetailsComponent,
    CarsBuyComponent,
    BuySuccessComponent,
    BuyFailedComponent,
    MyCarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CarsRoutingModule
  ],
  providers:[
    AuthService
  ]
})
export class CarsModule { }