import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransactionsModalComponent } from './new-transactions-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewTransactionsModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NewTransactionsModalComponent
  ]
})
export class NewTransactionsModalModule { }
