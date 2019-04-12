import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {DataProduct}  from './MockProduct'
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
    this.getListProduct()
  }

  getListProduct(){
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => this.products=data , error => console.log(error))
    console.log();
  }

  // showDetail(product){
  //   this.selected = product;
  // }


  delete(id){
    this.productService.deleteProduct(id).subscribe(data =>{
      this.products = this.products.filter(item => item.id !== id);
    });
    console.log(id)
    // this.products = this.products.filter(item => item.id !== productID)
  }

  showConsole(){
    this.productService.showMessage()
  }

  // productName: string = "Vayne";
  // productImg: string = "https://cdn.lolalytics.com/image/generated/championtiles/Vayne.jpg";
  // productID: number = 1;
  // priceSale: number = 130;
  // priceRegular:number = 190;
  // review: number = 3;
  // statusProdcut = true;

}
