import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';


@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent, NewEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
