import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./shared/modules/home/home.module').then(m => m.HomeModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./core/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./core/modules/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./core/modules/management/management.module').then(m => m.ManagementModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./core/modules/bar/order/order.module').then(m => m.OrderModule)
  },
  {
    path: '',
    redirectTo: 'management',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./core/modules/management/management.module').then(m => m.ManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
