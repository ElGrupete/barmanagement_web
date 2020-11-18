import { ShiftsComponent } from './shifts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashRegisterOrWaiterRoleGuard } from 'src/app/core/guards/role.guard';


const routes: Routes = [
  {
    path: '',
    component: ShiftsComponent,
    canActivate: [CashRegisterOrWaiterRoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftsRoutingModule { }
