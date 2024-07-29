import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsTableComponent } from './transactions-table.component';



@NgModule({
  declarations: [
    TransactionsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TransactionsTableComponent
  ]
})
export class TransactionsTableModule { }
