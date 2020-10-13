import { IList } from './../../../../../../../shared/models/list.model';
import { Dishes } from './../../models/dishes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {

  title: string = 'platos';
  dishes: Dishes[] = [];
  options: IList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
