import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { NewCategoryComponent } from './category/components/new-category/new-category.component';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { CategoryDetailComponent } from './category/components/category-detail/category-detail.component';
import { NewDrinkComponent } from './drinks/components/new-drink/new-drink.component';
import { DrinkListComponent } from './drinks/components/drink-list/drink-list.component';
import { DishesListComponent } from './dishes/components/dishes-list/dishes-list.component';
import { NewDishesComponent } from './dishes/components/new-dishes/new-dishes.component';


@NgModule({
  declarations: [
    MenusComponent,
    NewCategoryComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    NewDrinkComponent,
    DrinkListComponent,
    DishesListComponent,
    NewDishesComponent, 
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    SharedModule
  ]
})
export class MenusModule { }
