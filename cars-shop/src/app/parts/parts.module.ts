import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { PartsRoutingModule } from './parts-routing.model';
import { PartsCreateComponent } from './parts-create/parts-create.component';
import { PartsStartComponent } from './parts-start/parts-start.component';
import { MyPartsComponent } from './my-parts/my-parts.component';
import { PartsEditComponent } from './parts-edit/parts-edit.component';
import { PartsBuyComponent } from './parts-buy/parts-buy.component';
import { PartsDetailsComponent } from './parts-details/parts-details.component';
import { PartsBuySuccessComponent } from './parts-buy-success/parts-buy-success.component';
import { PartsBuyFailedComponent } from './parts-buy-failed/parts-buy-failed.component';

@NgModule({
  declarations: [
  PartsCreateComponent,
  PartsStartComponent,
  MyPartsComponent,
  PartsEditComponent,
  PartsBuyComponent,
  PartsDetailsComponent,
  PartsBuySuccessComponent,
  PartsBuyFailedComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PartsRoutingModule
  ],
  providers:[
    AuthService
  ]
})
export class PartsModule { }