import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { SidenavComponent } from './components/main/sidenav/sidenav.component';
import { LoginComponent } from './components/main/login/login.component';
import { SignupComponent } from './components/main/signup/signup.component';
import { UserComponent } from './components/main/user/user.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { AuthorComponent } from './components/main/author/author.component';
import { LedgerComponent } from './components/main/ledger/ledger.component';
import { BankDetailsComponent } from './components/main/bank-details/bank-details.component';
import { BooksComponent } from './components/main/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    DashboardComponent,
    AuthorComponent,
    LedgerComponent,
    BankDetailsComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
