import { CUSTOM_HTTP_INTERCEPTORS } from './core/interceptors/index.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from './shared/modules/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule
  ],
  providers: [
    CUSTOM_HTTP_INTERCEPTORS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
