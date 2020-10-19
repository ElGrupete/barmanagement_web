import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftsRoutingModule } from './shifts-routing.module';
import { ShiftsComponent } from './shifts.component';


@NgModule({
  declarations: [ShiftsComponent],
  imports: [
    CommonModule,
    ShiftsRoutingModule,
    SharedModule
  ]
})
export class ShiftsModule { }
