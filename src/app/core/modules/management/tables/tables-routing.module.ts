import { AdminRoleGuard } from './../../../guards/role.guard';
import { SectorComponent } from './components/sector/sector.component';
import { TableComponent } from './components/table/table.component';
import { TablesComponent } from './tables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'table',
    component: TableComponent,
    canActivate: [AdminRoleGuard]
  },
  {
    path: 'sector',
    component: SectorComponent,
    canActivate: [AdminRoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
