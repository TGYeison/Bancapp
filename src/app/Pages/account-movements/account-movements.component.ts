import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-account-movements',
  templateUrl: './account-movements.component.html',
  styleUrls: ['./account-movements.component.scss']
})
export class AccountMovementsComponent {
  transactions: Array<any> = [];
  id: string = '';

  constructor(
    private accountService: AccountService, 
    private userService: UserService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    const token = this.userService.getToken();

    this.activeRouter.paramMap.subscribe((params) => {
      this.id = params.get('id') as string;
    });

    this.accountService.getTransactions(token, this.id).subscribe((transactions) => {
      this.transactions = transactions as [];
    });
  }  
}
