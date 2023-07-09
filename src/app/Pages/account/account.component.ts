import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent {
  constructor (
    private fb: FormBuilder, 
    public userService: UserService, 
    public router: Router, 
    public accountService: AccountService
  ) {}

  get accountId() {
    return this.formAccount.get('accountId');
  }

  get balance() {
    return this.formAccount.get('balance');
  }

  get typeAccount() {
    return this.formAccount.get('typeAccount');
  }

  formAccount = this.fb.group({
    'accountId': ['', Validators.required],
    'balance': ['', [Validators.required]],
    'typeAccount': ['0', [Validators.required]]
  });

  addAccount () {
    const newAccount = this.formAccount.value;
    const token = this.userService.getToken();
   
    this.accountService.create(token, newAccount).subscribe((data) => {
      this.router.navigateByUrl('/lobby');
    });
  }
}
