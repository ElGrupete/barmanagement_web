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
import { DialogComponent } from './components/dialog/dialog.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
  SuccessComponent,
  ErrorComponent,
  LoadingComponent,
  DashboardComponent,
  ListComponent,
  DialogComponent,
  CardComponent,
  BannerComponent,
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
    DialogComponent,
    CardComponent,
    BannerComponent,
  ]
})
export class SharedModule { }
