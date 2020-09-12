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
    {name: 'ver lista platos', url: 'dishes/list'}, 
    {name: 'ver lista bebidas', url: 'drinks/list'},
    {name: 'ingresar nueva categoría', url: 'category/new'},
    {name: 'ingresar nuevo plato', url: 'dishes/new'},
    {name: 'ingresar nueva bebida', url: 'drinks/new'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
