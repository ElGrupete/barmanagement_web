import { ResponseTable } from './../../models/table.model';
import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tables: ResponseTable[] = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  addTable(): void {

  }

  getTables(): void {

  }

}
