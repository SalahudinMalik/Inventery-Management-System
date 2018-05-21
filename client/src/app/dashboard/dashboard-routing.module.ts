import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AuthGuard} from '../auth.guard';
import { DashboardComponent } from './dashboard.component';
import { P500Component } from '../pages/500.component';
const routes: Routes = [
  {
    // canActivate : [AuthGuard],
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
