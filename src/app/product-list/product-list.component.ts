import { ProductList } from 'src/app/product-list';
import { Component, OnInit } from '@angular/core';





import { FormGroup, FormBuilder, FormControl, Validators, NgForm} from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";

import Swal from 'sweetalert2';
import { Category } from '../category';
import { ProductService } from '../services/product.service';
import { Subcategory } from '../subcategory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  selectedCategory: Category = new Category(2, 'Electronics');
  categories: Category[]= [];
  subcategories: Subcategory[]= [];

  ngOnInit(): void {


  }
 

  public addProduct(productForm: NgForm): void {
    // document.getElementById('add-employee-form').click();
    this.productService.postProduct(productForm.value).subscribe(
      (response: ProductList) => {
        Swal.fire('Success', 'Employee added successfully', 'success');
        console.log(response);
        
        productForm.reset();
      },
      
    );
  }
  onSelect(categoryid:any) {
    this.subcategories = this.productService.getSubcategories()
    .filter((item) => item.categoryid == categoryid);
  }

}
