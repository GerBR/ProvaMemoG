import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // En app.routes.ts
  {
    path: 'details/:id',
    loadComponent: () => import('./component/memogameview/memogameview.component').then(m => m.MemogameviewComponent)
  },
  {
		path: '',
		loadChildren: () => import('./login/login.module  ').then((m) => m.LoginPageModule),
		...canActivate(redirectLoggedInToHome)
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
		...canActivate(redirectUnauthorizedToLogin)
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}

