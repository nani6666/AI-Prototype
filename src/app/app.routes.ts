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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
