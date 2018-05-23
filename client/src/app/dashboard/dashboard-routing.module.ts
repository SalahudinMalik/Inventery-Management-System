import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AuthGuard} from '../auth.guard';
import { DashboardComponent } from './dashboard.component';
import { P500Component } from '../pages/500.component';
import {RolesGuard} from '../roles.guard';

const routes: Routes = [
  {
    canActivate : [RolesGuard],
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      code: '100'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
