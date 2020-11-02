import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { TableComponent } from './components/table/table.component';
import { SectorComponent } from './components/sector/sector.component';


@NgModule({
  declarations: [
    TablesComponent,
    TableComponent,
    SectorComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
