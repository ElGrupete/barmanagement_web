import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../global/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/alerts/success/success.component';
import { ErrorComponent } from './components/alerts/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
  SuccessComponent,
  ErrorComponent,
  LoadingComponent,
  DashboardComponent,
],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SuccessComponent,
    ErrorComponent,
    LoadingComponent,
    DashboardComponent
  ]
})
export class SharedModule { }
