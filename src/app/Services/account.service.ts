import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  create(token: string, newAccount: any) {
    return this.http.post('http://localhost:3000/account', newAccount, {
      headers: {
        'Authorization': token
      }
    })
  }

  get(token: string) {
    return this.http.get('http://localhost:3000/account', {
      headers: {
        'Authorization': token
      }
    });
  }

  getTransactions(token: string, id:string) {
    return this.http.get(`http://localhost:3000/account/${id}/transactions`, {
      headers: {
        'Authorization': token
      }
    })
  }
}
