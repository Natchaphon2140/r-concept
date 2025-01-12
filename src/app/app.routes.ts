import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: PrivacyComponent,
    path: 'privacy',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', // Redirects to 'home' when the URL is empty
  },

  {
    path: '**',
    redirectTo:'home' , // Wildcard route to handle unmatched paths
  }
];
