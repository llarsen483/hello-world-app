import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { News } from './pages/news/news';
import { Rules } from './pages/rules/rules';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: Welcome
  },
  {
    path: 'news',
    component: News
  },
  {
    path: 'rules',
    component: Rules
  },
  {
    path: 'contact',
    component: Contact
  }
];
