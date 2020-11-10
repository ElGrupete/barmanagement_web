import { AlertService } from './../../../../../../../shared/services/alert/alert.service';
import { AuthService } from './../../../../../../services/auth.service';
import { Order, ResponseOrder } from './../../../../../bar/order/models/order.model';
import { OrderService } from './../../../../../bar/order/services/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { ICard } from 'src/app/shared/models/card.model';
import { Product } from '../../../product/models/product.model';
import { ResponseMenu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { AlertMessages } from 'src/app/shared/constants/alert-messages';

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

  form: FormGroup;

  get quantity() { return this.form.get('quantity'); }
  get notes() { return this.form.get('notes'); }

  constructor(private menuService: MenuService,
              private fb: FormBuilder,
              private auth: AuthService,
              private orderService: OrderService,
              private alertService: AlertService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formInit();
    this.getMenu();
    this.getOrderForTable();
  }

  private formInit(): void {
    this.form = this.fb.group({
      quantity: ['', [Validators.pattern(/^\d+$/)]],
      notes: ['']
    });
  }

  getMenu(): void {
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

  getOrderForTable(): void {
    this.orderService
        .getAll(`${API_ROUTES.management.order}?tableId=5fa9efe607e2a47398b4a914`)
        .pipe(
          map(actualOrderOfTable => actualOrderOfTable.Result.orders)
        )
        .subscribe((orders: ResponseOrder[]) => {
          if (orders.length == 0) {
            this.alertService
                .openOnError(AlertMessages.noData.noResults)
          }
          console.log(orders[0]);
          this.order = orders[0];
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
  }

  createOrderAndAddMenu(): void {
    let body: Order = {
      notes: this.notes.value,
      paid: false,
      table: '5fa9efe607e2a47398b4a914',
      menu: this.addMenu()
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
