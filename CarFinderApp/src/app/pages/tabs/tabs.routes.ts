import { Routes } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const tabsRoutes: Routes = [
  {
    path: 'tabs',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tab1',
        component: Tab1Page,
      },
      {
        path: 'tab2',
        component: Tab2Page,
      },
      {
        path: 'tab3',
        component: Tab3Page,
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];
