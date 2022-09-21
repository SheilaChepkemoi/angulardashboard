import { ProductList } from 'src/app/product-list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../category';
import { Subcategory } from '../subcategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return [
     new Category(1, 'Phones and Tablets' ),
     new Category(2, 'Electronics' ),
     new Category(3, 'Computing' )

    ];
  }
  
  getSubcategories() {
   return [
     new Subcategory(1, 1, 'Phones and Tablets', 'Phone' ),
     new Subcategory(2, 1, 'Phones and Tablets', 'Tablet' ),
     new Subcategory(3, 1, 'Phones and Tablets','Accessories'), 
     new Subcategory(4, 2, 'Electronics','TV'),
     new Subcategory(5, 2, 'Electronics','Home Audio' ),
     new Subcategory(6, 3, 'Electronics','Laptop'),
     new Subcategory(7, 3, 'Electronics','Accessories' )
    ];
  }
 

  postProduct(data:any){
    // fetch name by category id based on data.categoryid
    

    // post 
    return this.http.post<any>('http://localhost:3000/products/', data);
  }
  getProducts(): Observable<ProductList[]>{
    return this.http.get<any>('http://localhost:3000/products/');
  }
  updateProduct(data:any, id: number){
    return this.http.put<any>('http://localhost:3000/products/'+id, data);
  }
  deleteProduct(id:number){
    return this.http.delete<any>('http://localhost:3000/products/'+id);
  }
}
