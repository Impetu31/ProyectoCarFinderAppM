// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomePage } from './pages/home/home.page';       // corregido
import { LoginPage } from './pages/login/login.page';     // corregido
import { RegistroPage } from './pages/registro/registro.page'; // corregido

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'registro', component: RegistroPage },
];

export const appRouterProviders = [provideRouter(routes)];
