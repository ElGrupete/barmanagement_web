import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { NewCategoryComponent } from './category/components/new-category/new-category.component';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { CategoryDetailComponent } from './category/components/category-detail/category-detail.component';
import { NewMenuComponent } from './menu/components/new-menu/new-menu.component';
import { MenuDetailComponent } from './menu/components/menu-detail/menu-detail.component';
import { MenuListComponent } from './menu/components/menu-list/menu-list.component';
import { DessertComponent } from './menu/components/dessert/dessert.component';
import { ChefSuggestionComponent } from './menu/components/chef-suggestion/chef-suggestion.component';
import { StarterMealComponent } from './menu/components/starter-meal/starter-meal.component';
import { MainCourseComponent } from './menu/components/main-course/main-course.component';
import { MenuOrderComponent } from './menu/components/menu-order/menu-order.component';



@NgModule({
  declarations: [
    MenusComponent,
    NewCategoryComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    NewMenuComponent,
    MenuDetailComponent,
    MenuListComponent,
    DessertComponent,
    ChefSuggestionComponent,
    StarterMealComponent,
    MainCourseComponent,
    MenuOrderComponent
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    SharedModule
  ]
})
export class MenusModule { }
