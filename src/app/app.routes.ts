import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./hello-world/hello-world.component').then(m => m.HelloWorldComponent)
    },
    { 
        path: 'micro', 
        loadComponent: () => import('./hello-world/hello-world.component').then(m => m.HelloWorldComponent)
    }
];
