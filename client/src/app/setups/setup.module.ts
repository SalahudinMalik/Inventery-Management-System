import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';


import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportsComponent } from './reports/reports.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule
  ],
  declarations: [ SalesComponent, PurchasesComponent, InvoiceComponent, ReportsComponent, ShopComponent ]
})
export class SetupModule { }
