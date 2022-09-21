import { Subcategory } from './../../../../subcategory';
import { Category } from './../../../../category';
import { ProductService } from './../../../../services/product.service';

import { Component, Inject, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";

import Swal from 'sweetalert2';




@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {
  productForm!: FormGroup;
  
  categoryName : any;
  actionBtn: string = "Save";

  selectedCategory: Category = new Category(0, 'Electronics');
  categories: Category[]= [];
  subcategories: Subcategory[]= [];

  constructor(private productService: ProductService,
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) 
    public editProductData:any,
    private dialogRef: MatDialogRef<Dialog2Component>
    ) { }


  



  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.onSelect(this.selectedCategory.name);

    this.productForm = this.formbuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['',Validators.required],
      brand: ['',Validators.required],
      price: ['',Validators.required],
      description: ['',Validators.required],
      date: ['',Validators.required],
      image: ['',Validators.required],
      fileName: '',
    })

    if(this.editProductData){
      this.actionBtn = "Update"
      this.productForm.controls['name'].setValue(this.editProductData.name);
      this.productForm.controls['category'].setValue(this.editProductData.category.name);
      this.productForm.controls['subcategory'].setValue(this.editProductData.subcategory.name);
      this.productForm.controls['brand'].setValue(this.editProductData.brand);
      this.productForm.controls['price'].setValue(this.editProductData.price);
      this.productForm.controls['description'].setValue(this.editProductData.description);
      this.productForm.controls['date'].setValue(this.editProductData.date);
      this.productForm.controls['image'].setValue(this.editProductData.image);
      
    }
    console.log(this.editProductData)

    // if(this.editProductData){
    //   this.actionBtn = "Update"
    //   this.productForm.controls['name'].setValue(this.productForm.name);
    //   this.productForm.controls['category'].setValue(this.productForm.category);
    //   this.productForm.controls['subcategory'].setValue(this.productForm.subcategory);
    //   this.productForm.controls['brand'].setValue(this.productForm.brand);
    //   this.productForm.controls['price'].setValue(this.productForm.price);
    //   this.productForm.controls['description'].setValue(this.productForm.description);
    //   this.productForm.controls['date'].setValue(this.productForm.date);
    //   this.productForm.controls['image'].setValue(this.productForm.image);
      
    // }
    // console.log(this.editProductData)
    



  
    
  }

  // addProduct(){
  //   console.log(this.productForm.value.category);
  //   if(!this.editProductData){
  //     if(this.productForm.valid){
  //       this.productService.postProduct(this.productForm.value).subscribe(
  //         (response) => {
  //           Swal.fire('Success', 'Product added successfully', 'success');
  //           console.log(response);
  //           this.productForm.reset();
  //           this.dialogRef.close();
          
  //         },
  //         (error) => {
  //           Swal.fire('Error', 'Failed to add User', 'error')
            
  //           this.productForm.reset();
  //         }
  //       )
  //     }

  //   }
  //   else{

      

  //   }
    

  //   // get categoryName by ID 
  //   //this.categoryName = response.body.categoryName;


 

  // }

  onSelect(categoryname:string) {
    this.subcategories = this.productService.getSubcategories()
    .filter((item) => item.categoryname == categoryname);
  }

  addProduct(){
    if(!this.editProductData){
      
      if(this.productForm.valid){
      this.productService.postProduct(this.productForm.value).subscribe(
        (response) => {
          Swal.fire('Success', 'Product added successfully', 'success');
          console.log(response);
          this.productForm.reset();
          this.dialogRef.close();
          
        
        },
        (error) => {
          Swal.fire('Error', 'Failed to add User', 'error')
          
          this.productForm.reset();
        }
      )
    }
   
    }
     else{
      this.updateProduct();
    }
  
  }

  updateProduct(){
    this.productService.updateProduct(this.productForm.value, this.editProductData.id)
    .subscribe((response)=>{
      Swal.fire('Updated', 'Product updated successfully', 'success');
      console.log(response);
      this.productForm.reset();
      this.dialogRef.close('Update');
      

    }, 
    (error) => {
      Swal.fire('Error', 'Failed to update Product', 'error')
      this.productForm.reset();
    }
    )
    

  }

 }


