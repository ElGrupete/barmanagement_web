import { AuthGuard } from './../../guards/auth.guard';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    canActivate: [AuthGuard]
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
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule)
  },
  {
    path: 'cash-register',
    loadChildren: () => import('./cash-register/cash-register.module').then(m => m.CashRegisterModule)
  },
  {
    path: 'shifts',
    loadChildren: () => import('./shifts/shifts.module').then(m => m.ShiftsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
