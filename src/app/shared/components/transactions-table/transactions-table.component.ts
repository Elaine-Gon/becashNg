import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from 'src/app/core/interface/transaction';
import { TransactionService } from 'src/app/core/services/transaction.service';


@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})

export class TransactionsTableComponent implements OnInit {

  transactions: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) {
    this.transactions = this.transactionService.fetchTransactions();
   }

  ngOnInit(): void {

  }

}
