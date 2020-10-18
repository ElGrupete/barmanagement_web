import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { SharedModule } from './shared/shared.module';
import { CUSTOM_HTTP_INTERCEPTORS } from './core/interceptors/index.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from './shared/modules/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    SidebarModule,
    SharedModule,
    OverlayModule
  ],
  providers: [
    CUSTOM_HTTP_INTERCEPTORS
  ],
  entryComponents: [MatProgressSpinner],
  bootstrap: [AppComponent]
})
export class AppModule { }
