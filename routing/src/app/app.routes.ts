import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path:'home', component:Home},
    {path:'about', component:About},

    {path:'product/:id', component:Product},

    {
        path: 'admin',
             loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin)
    },

    {path:"**", component:NotFound}
];
