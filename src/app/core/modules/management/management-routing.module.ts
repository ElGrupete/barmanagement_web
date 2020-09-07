import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ManagementComponent
  },
  {
    path: 'tables',
    loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
