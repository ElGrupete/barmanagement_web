import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { NewCategoryComponent } from './category/components/new-category/new-category.component';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { CategoryDetailComponent } from './category/components/category-detail/category-detail.component';


@NgModule({
  declarations: [
    MenusComponent,
    NewCategoryComponent,
    CategoryListComponent,
    CategoryDetailComponent, 
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    SharedModule
  ]
})
export class MenusModule { }
