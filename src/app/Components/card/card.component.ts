import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() account!: any;

  constructor(private router: Router) {}

  transaction() {
    this.router.navigateByUrl(`/transaction/${this.account.accountId}`);
  }

  createAccount() {
    this.router.navigateByUrl(`/account/${this.account.id}`);
  }
}
