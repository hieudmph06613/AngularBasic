import { Component, OnInit } from '@angular/core';
import { DataProduct } from './MockProduct';
import { Product } from './product';
import { from } from 'rxjs';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
  product: Product;
  constructor(private productService:ProductService) { }
  ngOnInit() {
   this.getListProduct();
  }
  getListProduct(){
    this.productService.getProducts().subscribe(data=> this.products=data, error=>console.error(error));
  }
  cart_title: String = "Sản Phẩm";


  showDetail(product) {
 
  }
  deleteProduct(product) {
   this.productService.deleteProduct(product).subscribe(data=>{
     return this.products=this.products.filter(item=> item.id !== data.id)
   })
    
  }
  saveProduct(){
    return this.productService.editProduct(this.product).subscribe(data=>{
      console.log(data)
    });
  }
}
