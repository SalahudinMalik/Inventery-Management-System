import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import { NgProgressModule } from 'ngx-progressbar';
import { ChartJSComponent } from './chartjs.component';
import { FormsModule } from '@angular/forms';
import { P500Component } from '../pages/500.component';
import { RolesGuard } from '../roles.guard';
@NgModule({
  imports: [CommonModule,NgbModule,
    DashboardRoutingModule,
    NgProgressModule,
    ChartsModule,
    FormsModule
  ],
  declarations: [ DashboardComponent ,ChartJSComponent , P500Component],
  providers : [DataService, RolesGuard]
})
export class DashboardModule { }
