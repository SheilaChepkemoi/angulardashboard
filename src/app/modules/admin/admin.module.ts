import { SalesComponent } from './../../pages/sales/sales.component';

import { ProductsComponent } from './../../pages/products/products.component';
import { UsersComponent } from '../../pages/users/users.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarchartsComponent } from './components/barcharts/barcharts.component';
import { PiechartsComponent } from './components/piecharts/piecharts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { Dialog2Component } from './components/dialog2/dialog2.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Dialog3Component } from './components/dialog3/dialog3.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    DashboardComponent,
    SidenavComponent,
    UsersComponent,
    BarchartsComponent,
    PiechartsComponent,
    DialogComponent,
    Dialog2Component,
    ProductsComponent,
    Dialog3Component,
    HomeComponent,
    SalesComponent
   
 
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    HighchartsChartModule,
    NgxPaginationModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule
    
  ]
})
export class AdminModule { }
