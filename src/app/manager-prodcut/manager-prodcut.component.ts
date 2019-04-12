import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product/Product';

@Component({
  selector: 'app-manager-prodcut',
  templateUrl: './manager-prodcut.component.html',
  styleUrls: ['./manager-prodcut.component.css']
})
export class ManagerProdcutComponent implements OnInit {

  products : Product[];
  selected : Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getListProduct()
  }

  getListProduct(){
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => this.products=data , error => console.log(error))
    
  }

  delete(id){
    this.productService.deleteProduct(id).subscribe(data =>{
      this.products = this.products.filter(item => item.id !== id);
    });
    console.log(id)
    // this.products = this.products.filter(item => item.id !== productID)
  }

}
