import { MenuListComponent } from './menu/components/menu-list/menu-list.component';
import { NewMenuComponent } from './menu/components/new-menu/new-menu.component';
import { MenuDetailComponent } from './menu/components/menu-detail/menu-detail.component';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
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
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'category/new',
    component: NewCategoryComponent
  },
  {
    path: 'menu/list',
    component: MenuListComponent
  },
  {
    path: 'menu/new',
    component: NewMenuComponent
  },
  {
    path: 'menu/detail/:id',
    component: MenuDetailComponent
  },
  {
    path: '**',
    component: MenusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
