import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTransactionsModalComponent } from '../new-transactions-modal/new-transactions-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public dialog: MatDialog
  ) {}

  // como alterar o estilo global do angular material é necessário alterar a classe "panelClass: 'custom-container'"
  openModal() {
    this.dialog.open(NewTransactionsModalComponent, {
      panelClass: 'custom-container'
    });
  }
}
