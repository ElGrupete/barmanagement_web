import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  title: string = 'gestionar sectores y mesas';
  options: IOptions[] = [
    {name: 'sectores del salón', url: 'sector'},
    {name: 'mesas del salón', url: 'table'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
