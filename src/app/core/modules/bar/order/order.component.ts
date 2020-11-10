import { AlertService } from './../../../../shared/services/alert/alert.service';
import { map } from 'rxjs/operators';
import { API_ROUTES } from './../../../../shared/constants/api-routes';
import { OrderService } from './services/order.service';
import { ResponseOrder } from './models/order.model';
import { Component, OnInit } from '@angular/core';
import { AlertMessages } from 'src/app/shared/constants/alert-messages';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order: ResponseOrder = new ResponseOrder();

  constructor(private orderService: OrderService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.getActualOrder();
  }

  getActualOrder(): void {
    this.orderService
        .getAll(API_ROUTES.management.order)
        .pipe(
          map(allOrders => allOrders.Result.orders)
        )
        .subscribe((orders: ResponseOrder[]) => {
          if (orders.length == 0) {
            this.alertService
                .openOnError(AlertMessages.noData.noResults)
          }
          /** This takes the first order because 
           * it should be the only one active for 
           * the table */
          this.order = orders[0] 
        });
  }

}
