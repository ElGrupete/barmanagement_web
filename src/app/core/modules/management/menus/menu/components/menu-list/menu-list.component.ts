import { AlertMessages } from 'src/app/shared/constants/alert-messages';
import { Menu } from './../../models/menu.model';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { map } from 'rxjs/operators';
import { IList } from 'src/app/shared/models/list.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  title: string = 'menus';
  menus: Menu[];
  options: IList[] = [];

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
          this.menus.forEach(menu => {
            this.options.push({ name: menu.name, description: menu.description != "" || null ? menu.description : AlertMessages.noData.productDescription });
          })
        }); 
  }

}
