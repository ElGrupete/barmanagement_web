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
