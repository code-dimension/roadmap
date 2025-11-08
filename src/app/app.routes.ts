import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
