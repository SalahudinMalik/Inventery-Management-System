import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportsComponent } from './reports/reports.component';
import { ShopComponent } from './shop/shop.component';
 import {AuthGuard} from '../auth.guard';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        canActivate : [AuthGuard],
        path: 'purchases',
        component: PurchasesComponent,
        data: {
          title: 'Purchases'
        }
      },
      {
        canActivate : [AuthGuard],
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Invoice'
        }
      },
      {
        canActivate : [AuthGuard],
        path: 'sales',
        component: SalesComponent,
        data: {
          title: 'Sales'
        }
      },
      {
        canActivate : [AuthGuard],
        path: 'shop',
        component: ShopComponent,
        data: {
          title: 'Shop'
        }
      },
      {
        canActivate : [AuthGuard],
        path: 'report',
        component: ReportsComponent,
        data: {
          title: 'Report'
        }
      }
      
      
    ]
 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
