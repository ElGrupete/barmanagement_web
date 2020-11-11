import { TablesService } from './../../../../tables/services/tables.service';
import { AlertService } from './../../../../../../../shared/services/alert/alert.service';
import { AuthService } from './../../../../../../services/auth.service';
import { Order, ResponseOrder } from './../../../../../bar/order/models/order.model';
import { OrderService } from './../../../../../bar/order/services/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { ICard } from 'src/app/shared/models/card.model';
import { Product } from '../../../product/models/product.model';
import { ResponseMenu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { AlertMessages } from 'src/app/shared/constants/alert-messages';
import { Observable, Subject } from 'rxjs';
import { ResponseTable } from '../../../../tables/models/table.model';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.scss']
})
export class MenuOrderComponent implements OnInit {
  
  item: ICard;
  products: Product[] = [];
  menu: ResponseMenu;
  order: ResponseOrder;
  tableId: string;

  form: FormGroup;

  get quantity() { return this.form.get('quantity'); }

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private orderService: OrderService,
              private alertService: AlertService,
              private tableService: TablesService,
              private menuService: MenuService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formInit();
    this.getMenu();
    this.getTableIdBasedOnActualUser();
  }

  private formInit(): void {
    this.form = this.fb.group({
      quantity: ['', [Validators.pattern(/^\d+$/)]],
    });
  }

  /** This is for the card component */
  private getMenu(): void {
    this.menuService
        .getById(API_ROUTES.management.menu, this.activatedRoute.snapshot.params['id'])
        .pipe(
          map(menu => menu.Result.menu)
        )
        .subscribe((menu: ResponseMenu) => {
          this.item = {
            id: menu._id,
            name: menu.name,
            price: parseFloat(menu.price.$numberDecimal),
            url: menu.image
          };
          this.menu = menu;
          this.products = menu.product;
        });
  }

  // Order methods //

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
        });
  }

  addMenu(): string[] {
    let menuIds: string[] = [];
    for (let i = 0; i < parseInt(this.quantity.value); i++) {
      menuIds.push(this.menu._id);
    }
    return menuIds;
  }

  updateOrder(): void {
    /** Some logic if the order already exists */
    let existingMenuItems: string[] = [];
    let existingAndNewMenuItems: string [] = [];
    this.order.menu.forEach(existingMenuItem => {
      existingMenuItems.push(existingMenuItem._id);
    });
    
    existingAndNewMenuItems = existingMenuItems.concat(this.addMenu());

    let updatedBody: Order = {
      ...this.order,
      menu: existingAndNewMenuItems,
      table: this.tableId,
      paid: false,
      status: '5fac482a9e95b351ad6f0803'
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

  createOrderAndAddMenu(): void {
    let body: Order = {
      paid: false,
      table: this.tableId,
      menu: this.addMenu(),
      status: '5fac482a9e95b351ad6f0803'
    }

    this.orderService
        .create(API_ROUTES.management.order, body)
        .pipe(
          map(newOrder => newOrder.Result.order)
        )
        .subscribe((order: ResponseOrder) => {
          console.log(order);
        });
  }

}
