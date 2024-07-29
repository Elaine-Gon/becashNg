import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SummaryModule } from 'src/app/shared/components/summary/summary.module';
import { TransactionsTableModule } from 'src/app/shared/components/transactions-table/transactions-table.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SummaryModule,
    TransactionsTableModule
  ]
})
export class DashboardModule { }
