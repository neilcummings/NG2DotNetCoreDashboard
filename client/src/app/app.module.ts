import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';

import {CoreModule} from './core/core.module';
import { TableComponent } from './table/table.component';
import {SharedModule} from './shared/shared.module';
import { SecureComponent } from './secure/secure.component';
import {AuthGuard} from './_guards/auth.guard';
import {ToastModule} from 'ng2-toastr';
import {AuthenticationService} from './_services/authentication.service';
import { AdminComponent } from './admin/admin.component';
import {AdminGuard} from './_guards/admin.guard';
import {AppConfig} from './app.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    TableComponent,
    SecureComponent,
    AdminComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AdminGuard,
    AppConfig,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
