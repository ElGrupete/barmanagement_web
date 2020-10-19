import { Menu, ResponseMenu } from './../../models/menu.model';
import { Product } from './../../../product/models/product.model';
import { ICard } from 'src/app/shared/models/card.model';
import { map } from 'rxjs/operators';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  item: ICard;
  products: Product[] = [];

  constructor(private menuService: MenuService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMenu();
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
          this.products = menu.product
        });
  }

}
