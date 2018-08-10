import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const appRouters: Routes = [
    {
        path : '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);