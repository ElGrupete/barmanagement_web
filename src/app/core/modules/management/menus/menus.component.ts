import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  title: string = 'gestionar menus';
  options: IOptions[] = [
    {name: 'ver lista categorías', url: 'category/list'}, 
    {name: 'ver lista menús', url: 'menu/list'}, 
    {name: 'ingresar nueva categoría', url: 'category/new'},
    {name: 'ingresar nuevo menú', url: 'menu/new'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
