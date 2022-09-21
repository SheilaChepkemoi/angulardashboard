import { DialogComponent } from './../../modules/admin/components/dialog/dialog.component';

import { Component,  OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/services/product.service';
import { Dialog2Component } from 'src/app/modules/admin/components/dialog2/dialog2.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, public dialog: MatDialog){}
  displayedColumns: string[] = ['id', 'name', 'category', 'subcategory', 'price', 'action'];
  dataSource!: MatTableDataSource<any>;

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(){
    this.getallProducts();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog() {
    this.dialog.open(Dialog2Component,{
      width:'60%'

    }).afterClosed().subscribe((value)=>{
      if(value=== 'Save'){
        this.getallProducts();
      }
    });
    
  }
  public getallProducts(): void {
    this.productService.getProducts().subscribe(
      (response) => {
        // this.employees = response;
        console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      },
      (error) => {
        Swal.fire('Error', 'Error when fetching records', 'error')
        
      }
    );
  }

  removeUser(id: number){
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        Swal.fire('Deleted', 'Product deleted successfully', 'success')
        // this.employees = response;
        console.log(response);
        this.getallProducts();
        
      },
      (error) => {
        Swal.fire('Error', 'Error when deleting product', 'error')
        
      }
    );
    
  }

  editUser(row:any){
    this.dialog.open(Dialog2Component,{
      width: '60%',
      data:row
    }).afterClosed().subscribe((value=>{
      if(value === 'Update'){
        this.getallProducts();
      }
    }))
  }


}