import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { ResponseTable } from './../../management/tables/models/table.model';
import { User } from 'src/app/core/models/user.model';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { EmployeesService } from './../../management/employees/services/employees.service';
import { TablesService } from './../../management/tables/services/tables.service';
import { AlertService } from './../../../../shared/services/alert/alert.service';
import { map } from 'rxjs/operators';
import { OrderService } from './services/order.service';
import { Order, ResponseOrder } from './models/order.model';
import { Component, OnInit } from '@angular/core';
import { AlertMessages } from 'src/app/shared/constants/alert-messages';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order: ResponseOrder = new ResponseOrder();
  tableId: string;

  constructor(private orderService: OrderService,
              private authService: AuthService,
              private employeesService: EmployeesService,
              private tableService: TablesService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit(): void {
    this.getTableIdBasedOnActualUser();
  }

  private getTables(): Observable<ResponseTable[]> {
    let tables$: Subject<ResponseTable[]> = new Subject();
    this.tableService
        .getAll(API_ROUTES.config.table)
        .pipe(
          map(allTables => allTables.Result.tables)
        )
        .subscribe((tables: ResponseTable[]) => {
          tables$.next(tables);
        });
    return tables$.asObservable();
  }

  private getTableIdBasedOnActualUser(): void {
    this.getTables()
        .subscribe(tables => { 
          const user = this.authService.getUser();
          let count = 0;
          tables.forEach(table => {
            if (table.user._id == user._id) {
              count++;
              this.getActualOrderBasedOnTableId(table._id);
            }
          });
          if (count === 0) {
            this.getActualOrderBasedOnTableId('');
          }
        });
  }

  private getActualOrderBasedOnTableId(tableId: string): void {
    if (tableId == '' || tableId == undefined || tableId == null) {
      this.alertService
          .openOnError('No puede crear pedidos como administrador');
      this.order = null;
      this.router.navigate(['management']);
      return;
    }
    this.orderService
        .getAll(`${API_ROUTES.management.orderByTable}/${tableId}`)
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
          this.order = orders[0];
          this.tableId = tableId;
          console.log(this.order);
        });
  }

  sendOrder(): void {
    /** Some logic if the order already exists */
    let existingMenuItems: string[] = [];
    this.order.menu.forEach(existingMenuItem => {
      existingMenuItems.push(existingMenuItem._id);
    });

    let updatedBody: Order = {
      ...this.order,
      menu: existingMenuItems,
      table: this.tableId,
      paid: false,
      status: '5fac47e59e95b351ad6edfc2'
    }
    
    this.orderService
        .updateOrder(`${API_ROUTES.management.order}/${this.order._id}`, updatedBody)
        .pipe(
          map(updatedOrder => updatedOrder.Result.updatedOrder)
        )
        .subscribe(updatedOrder => {
          if (updatedOrder) {
            this.alertService
                .openOnSuccess(AlertMessages.success.message);
            this.router.navigate(['order']);
          }
        })
  }

}
