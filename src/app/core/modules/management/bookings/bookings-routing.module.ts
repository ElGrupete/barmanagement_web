import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashRegisterOrWaiterRoleGuard } from 'src/app/core/guards/role.guard';
import { BookingsComponent } from './bookings.component';


const routes: Routes = [
  {
    path: '',
    component: BookingsComponent,
    canActivate: [CashRegisterOrWaiterRoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
