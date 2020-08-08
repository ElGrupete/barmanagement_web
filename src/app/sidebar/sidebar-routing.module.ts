import { FullComponent } from './components/full/full.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: FullComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../shared/shared.module').then(m => m.SharedModule),
    outlet: 'secondary'
  },
  {
    path: 'login',
    loadChildren: () => import('../core/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
