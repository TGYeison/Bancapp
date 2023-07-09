import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { AccountComponent } from './Pages/account/account.component';
import { TransactionComponent } from './Pages/transaction/transaction.component';
import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';


const routes: Routes = [
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'account/:id',
    component: AccountMovementsComponent,
  },
  {
    path: 'transaction/:id',
    component: TransactionComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
