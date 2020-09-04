import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../global/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/alerts/success/success.component';
import { ErrorComponent } from './components/alerts/error/error.component';



@NgModule({
  declarations: [
  SuccessComponent,
  ErrorComponent,
],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SuccessComponent,
    ErrorComponent,
  ]
})
export class SharedModule { }
