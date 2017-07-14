import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReportsComponent} from './reports/reports.component';
import {TableComponent} from './table/table.component';
import {SecureComponent} from './secure/secure.component';
import {AuthGuard} from './_guards/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {AdminGuard} from './_guards/admin.guard';
import {RegisterComponent} from './core/accounts/register/register.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'tables', component: TableComponent},
  { path: 'secure', component: SecureComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
