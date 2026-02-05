import { Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { AboutsComponent } from './comps/abouts/abouts.component';
import { HomeComponent } from './comps/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },

     {
        path: 'abouts',
        component: AboutsComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    }

];
