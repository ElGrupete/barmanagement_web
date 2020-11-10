import { OrderComponent } from './components/order/order.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'new',
    component: NewOrderComponent
  },
  {
    path: '',
    component: OrderComponent
  },
  {
    path: '**',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
