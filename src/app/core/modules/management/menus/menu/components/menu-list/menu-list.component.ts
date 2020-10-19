import { AlertMessages } from 'src/app/shared/constants/alert-messages';
import { Menu } from './../../models/menu.model';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { map } from 'rxjs/operators';
import { ICard } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  title: string = 'menus';
  menus: Menu[] = [];
  items: ICard[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getAllMenus();
  }

  getAllMenus(): void {
    this.menuService
        .getAll(API_ROUTES.management.menu)
        .pipe(
          map(allMenus => allMenus.Result.menus)
        )
        .subscribe(menus => {
          this.menus = menus;
          console.log(menus);
          this.menus.forEach(menu => {
            this.items
                .push({
                  name: menu.name,
                  price: menu.price.$numberDecimal,
                  url: menu.image,
                  id: menu._id
                });
          })
        }); 
  }

}
