import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { NewDishesComponent } from './dishes/components/new-dishes/new-dishes.component';
import { DishesListComponent } from './dishes/components/dishes-list/dishes-list.component';
import { NewDrinkComponent } from './drinks/components/new-drink/new-drink.component';
import { DrinkListComponent } from './drinks/components/drink-list/drink-list.component';
import { NewCategoryComponent } from './category/components/new-category/new-category.component';
import { MenusComponent } from './menus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MenusComponent
  },
  {
    path: 'category',
    component: CategoryListComponent
  },
  {
    path: 'category/new',
    component: NewCategoryComponent
  },
  {
    path: 'drinks/list',
    component: DrinkListComponent
  },
  {
    path: 'drinks/new',
    component: NewDrinkComponent
  },
  {
    path: 'dishes/list',
    component: DishesListComponent
  },
  {
    path: 'dishes/new',
    component: NewDishesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
