import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  accountRoot: string = '';

  constructor (
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router, 
    private activeRouter: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  get accountDestination() {
    return this.formTransaction.get('accountDestination');
  }

  get amount() {
    return this.formTransaction.get('amount');
  }

  formTransaction = this.fb.group({
    'accountDestination': ['', Validators.required],
    'amount': ['', [Validators.required]],
  });


  ngOnInit() {
    this.activeRouter.paramMap.subscribe((params) => {
      this.accountRoot = params.get('id') as string;
    });
  }

  createTransaction () {
    const newTransaction = {
      ...this.formTransaction.value, 
      accountRoot: this.accountRoot
    };
    const token = this.userService.getToken();
   
    this.transactionService.create(token, newTransaction).subscribe((data) => {
      this.router.navigateByUrl('/lobby');
    });
  }
}
