import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { Transaction } from '../interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  public readonly API = '../../../assets/mock.json';

  constructor(private http: HttpClient) { }

  fetchTransactions() {
    return this.http.get<Transaction[]>(this.API)
      .pipe(
        tap(transactions => console.log(transactions))
      )
  }
}
