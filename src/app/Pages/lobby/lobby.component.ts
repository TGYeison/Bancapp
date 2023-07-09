import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { AccountService } from 'src/app/Services/account.service';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
  accounts: [] = [];

  constructor(
    public userService: UserService, 
    public accountServices:AccountService,
    public transactionService: TransactionService,
    public router: Router
  ) {}

  ngOnInit() {
    const token = this.userService.getToken();
    if(!token)
      this.router.navigateByUrl('/login');

    this.accountServices.get(token).subscribe(
      (data:any) => {
        this.accounts = data as [];

        console.log(this.accounts);
      },
      (error) => {
        this.router.navigateByUrl('/login');
      }
    );
  }

 
}
