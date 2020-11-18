import { CashRegisterComponent } from './cash-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashRegisterOrWaiterRoleGuard } from 'src/app/core/guards/role.guard';


const routes: Routes = [
  {
    path: '',
    component: CashRegisterComponent,
    canActivate: [CashRegisterOrWaiterRoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRegisterRoutingModule { }
