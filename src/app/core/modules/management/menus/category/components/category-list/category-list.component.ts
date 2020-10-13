import { IList } from './../../../../../../../shared/models/list.model';
import { Router } from '@angular/router';
import { Category } from './../../models/category.model';
import { API_ROUTES } from './../../../../../../../shared/constants/api-routes';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  title: string = 'categorías'
  categories: Category[];
  options: IList[] = [];

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoryService
        .getAll(API_ROUTES.management.category)
        .pipe(
          map(allCategories => allCategories.Result.categories)
        )
        .subscribe(categories => {
          this.categories = categories;
          this.categories.forEach(category => {
            this.options.push({ name: category.name, description: category.description });
          })
        }); 
  }
  
}
