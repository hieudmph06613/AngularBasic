import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service'
import { Product } from '../product/Product';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  @Input() dataProduct: Product[];
  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit() {
  }


  ngModel() {

  }
  addProduct() {
    
  }
  onSubmit(formAdd) {
    console.log(formAdd.value)
    console.log(formAdd.valid)
    
    if(formAdd.valid){
      this.productService.addProduct(formAdd.value).subscribe(data =>
        this.dataProduct.push(data))
    }
    
  }
}