import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { PartsCreateComponent } from './parts-create/parts-create.component';
import { PartsStartComponent } from './parts-start/parts-start.component';
import { MyPartsComponent } from './my-parts/my-parts.component';
import { PartsEditComponent } from './parts-edit/parts-edit.component';
import { PartsBuyComponent } from './parts-buy/parts-buy.component';
import { PartsDetailsComponent } from './parts-details/parts-details.component';
import { PartsBuyFailedComponent } from './parts-buy-failed/parts-buy-failed.component';
import { PartsBuySuccessComponent } from './parts-buy-success/parts-buy-success.component';

const routes: Route[] = [
    { path: '', component: PartsStartComponent, canActivate: [AuthGuard] },
    { path: 'create', component: PartsCreateComponent, canActivate: [AuthGuard] },
    { path: 'my-parts', component: MyPartsComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: PartsEditComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: PartsDetailsComponent, canActivate: [AuthGuard] },
    { path: 'buy/:id', component: PartsBuyComponent, canActivate: [AuthGuard] },
    { path: 'buy-success', component: PartsBuySuccessComponent, canActivate: [AuthGuard] },
    { path: 'buy-failed', component: PartsBuyFailedComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PartsRoutingModule { }