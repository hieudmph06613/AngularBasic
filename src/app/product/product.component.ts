import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {Product} from './Product'
import { ProductService } from '../services/product.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // products = DataProduct;
  products : Product[];
  selected : Product;
  
  

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProduct()
  }

  getProduct(){
    this.productService.getProducts().subscribe( data=> this.products = data,error => console.error())
  }
  showDetail(product){
    this.selected = product;
  }


  delete(product){
    this.productService.deleteProduct(product).subscribe(
      data => {this.products = this.products.filter(item => item.id !== data.id)}
    )
  }

  
  
}
