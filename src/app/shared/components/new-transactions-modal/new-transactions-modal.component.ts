import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-transactions-modal',
  templateUrl: './new-transactions-modal.component.html',
  styleUrls: ['./new-transactions-modal.component.scss']
})
export class NewTransactionsModalComponent {

  public form: FormGroup;

  constructor (
    public dialogRef: MatDialogRef<NewTransactionsModalComponent>,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: [''],
      amount: [''],
      type: [''],
      category: [''],
      createdAt: ['']
    })
  }

  submitForm() {
    console.log(this.form.value)
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
