import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { GoToHomeGuard } from './../../../guards/go-to-home.guard';
import { EmployeesComponent } from './employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoleGuard } from 'src/app/core/guards/role.guard';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'list',
    component: EmployeesListComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'new',
    component: NewEmployeeComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: '**',
    component: EmployeesComponent,
    canActivate: [GoToHomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
