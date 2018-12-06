import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { SidenavComponent } from './components/main/sidenav/sidenav.component';
import { LoginComponent } from './components/main/login/login.component';
import { SignupComponent } from './components/main/signup/signup.component';
import { UserComponent } from './components/main/user/user.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { AuthorComponent } from './components/main/author/author.component';
import { BooksComponent } from './components/main/books/books.component';
import { TitleInformationComponent } from './components/bookPublishing/title-information/title-information.component';
import { CoverdesignComponent } from './components/bookPublishing/coverdesign/coverdesign.component';
import { PreviewFinalFilesComponent } from './components/bookPublishing/preview-final-files/preview-final-files.component';
import { SendforReviewComponent } from './components/bookPublishing/sendfor-review/sendfor-review.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'sidenav', component: SidenavComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: UserComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'books', component: BooksComponent },
    { path: 'author', component: AuthorComponent },
    { path: 'titleinformation', component: TitleInformationComponent },
    { path: 'coverDesign', component: CoverdesignComponent },
    { path: 'sendReview', component: SendforReviewComponent },
    { path: 'finished', component: PreviewFinalFilesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
