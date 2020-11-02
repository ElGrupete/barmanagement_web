import { SectorComponent } from './components/sector/sector.component';
import { TableComponent } from './components/table/table.component';
import { TablesComponent } from './tables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TablesComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'sector',
    component: SectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
