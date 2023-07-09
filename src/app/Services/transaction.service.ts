import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  currentAccount!: string;

  constructor(private http: HttpClient) { }


  setAccount (account: string) {
    this.currentAccount = account;
  }

  create(token: string, newTransaction: any) {
    return this.http.post('http://localhost:3000/transaction', newTransaction, {
      headers: {
        'Authorization': token
      }
    });
  }
}
