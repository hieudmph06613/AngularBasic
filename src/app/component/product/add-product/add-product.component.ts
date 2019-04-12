import { Component, OnInit, Input } from '@angular/core';
import {Product} from './../product';
import {ProductService} from './../../../service/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product: Product = new Product;
  constructor(private productService:ProductService) { }
  @Input() dataProduct:Product[];
  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data=>{
      this.dataProduct.push(data)
    });
  }
  onSubmit(formAdd){
    console.log(23)
  }

}
