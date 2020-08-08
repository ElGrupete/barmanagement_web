import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FullComponent } from './components/full/full.component';
import { MaterialModule } from './../global/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';


@NgModule({
  declarations: [
    FullComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    MaterialModule
  ],
  exports: [
    FullComponent,
    NavbarComponent,
    ToolbarComponent
  ]
})
export class SidebarModule { }
