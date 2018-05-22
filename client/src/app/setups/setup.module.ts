import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportsComponent } from './reports/reports.component';
import { ShopComponent } from './shop/shop.component';
import { RolesGuard } from '../roles.guard';
import { SetupService } from './setup.service';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [ SalesComponent, PurchasesComponent, InvoiceComponent, ReportsComponent, ShopComponent ],
  providers: [RolesGuard , SetupService , DatePipe]
})
export class SetupModule { }
