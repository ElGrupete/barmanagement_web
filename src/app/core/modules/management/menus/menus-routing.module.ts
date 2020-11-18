import { MenuOrderComponent } from './menu/components/menu-order/menu-order.component';
import { DessertComponent } from './menu/components/dessert/dessert.component';
import { ChefSuggestionComponent } from './menu/components/chef-suggestion/chef-suggestion.component';
import { MenuListComponent } from './menu/components/menu-list/menu-list.component';
import { NewMenuComponent } from './menu/components/new-menu/new-menu.component';
import { MenuDetailComponent } from './menu/components/menu-detail/menu-detail.component';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { NewCategoryComponent } from './category/components/new-category/new-category.component';
import { MenusComponent } from './menus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoleGuard, ClientRoleGuard } from 'src/app/core/guards/role.guard';


const routes: Routes = [
  {
    path: 'menu',
    component: MenusComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'category/list',
    component: CategoryListComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'category/new',
    component: NewCategoryComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'menu/list',
    component: MenuListComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'menu/new',
    component: NewMenuComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'menu/detail/:id',
    component: MenuDetailComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'menu/order/:id',
    component: MenuOrderComponent,
    canActivate: [ClientRoleGuard]
  },
  {
    path: 'menu/chef-suggestion',
    component: ChefSuggestionComponent,
    canActivate: [ClientRoleGuard]
  },
  {
    path: 'menu/dessert',
    component: DessertComponent,
    canActivate: [ClientRoleGuard]
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
