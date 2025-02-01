import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: PrivacyComponent,
    path: 'privacy-policy',
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full', // Redirects to 'home' when the URL is empty
  },

  {
    path: '**',
    redirectTo:'' , // Wildcard route to handle unmatched paths
  }
];
