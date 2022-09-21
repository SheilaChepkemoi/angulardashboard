import { SalesComponent } from './../../pages/sales/sales.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './../../product-list/product-list.component';
import { ProductsComponent } from './../../pages/products/products.component';
import { PieComponent } from './../../widgets/pie/pie.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UsersComponent } from '../../pages/users/users.component';



const routes: Routes = [
  {path: '', component: AdminDashboardComponent,
  // {path: 'admin', component: AdminDashboardComponent,
   children:[
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'sales', component: SalesComponent}
    // {path: 'product2', component: ProductListComponent}
  
 
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
