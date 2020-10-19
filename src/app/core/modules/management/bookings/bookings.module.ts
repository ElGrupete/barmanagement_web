import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';


@NgModule({
  declarations: [BookingsComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule
  ]
})
export class BookingsModule { }
