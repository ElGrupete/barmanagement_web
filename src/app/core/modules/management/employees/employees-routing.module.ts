import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { GoToHomeGuard } from './../../../guards/go-to-home.guard';
import { EmployeesComponent } from './employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: 'list',
    component: EmployeesListComponent
  },
  {
    path: 'new',
    component: NewEmployeeComponent
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
