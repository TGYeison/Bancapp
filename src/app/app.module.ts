import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CookieService } from "ngx-cookie-service";
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { FormControlComponent } from './components/form/form-control/form-control.component';
import { CardComponent } from './Components/card/card.component';
import { TransactionComponent } from './Pages/transaction/transaction.component';
import { AccountComponent } from './Pages/account/account.component';
import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LobbyComponent,
    FormControlComponent,
    CardComponent,
    TransactionComponent,
    AccountComponent,
    AccountMovementsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService, CurrencyPipe, NgOptimizedImage],
  bootstrap: [AppComponent]
})
export class AppModule { }
