import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportsComponent } from './reports/reports.component';
import { ShopComponent } from './shop/shop.component';
 import {RolesGuard} from '../roles.guard';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        canActivate : [RolesGuard],
        path: 'purchases',
        component: PurchasesComponent,
        data: {
          title: 'Purchases',
          code: '103'
        }
      },
      {
        canActivate : [RolesGuard],
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Invoice',
          code : '104'
        }
      },
      {
        canActivate : [RolesGuard],
        path: 'sales',
        component: SalesComponent,
        data: {
          title: 'Sales',
          code : '101'
        }
      },
      {
        canActivate : [RolesGuard],
        path: 'shop',
        component: ShopComponent,
        data: {
          title: 'Shop',
          code : '106'
        }
      },
      {
        canActivate : [RolesGuard],
        path: 'report',
        component: ReportsComponent,
        data: {
          title: 'Report',
          code : '105'


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
