import { MaterialModule } from './modules/material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/alerts/success/success.component';
import { ErrorComponent } from './components/alerts/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
  SuccessComponent,
  ErrorComponent,
  LoadingComponent,
  DashboardComponent,
  ListComponent,
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
    DashboardComponent,
    ListComponent,
  ]
})
export class SharedModule { }
