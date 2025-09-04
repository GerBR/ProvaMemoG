import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // En app.routes.ts
  {
    path: 'details/:id',
    loadComponent: () => import('./component/memogameview/memogameview.component').then(m => m.MemogameviewComponent)
  }


];
