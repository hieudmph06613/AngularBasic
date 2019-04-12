import { Component, OnInit, Input } from '@angular/core';  
import { ProductService } from '../services/product.service'
import { Product } from '../product/Product'
import { Router} from '@angular/router'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  

  constructor(private productService : ProductService,private route : Router)  { }

  product : Product = new Product;
  @Input() dataProduct : Product[];
  ngOnInit() {
  }

  showConsoleForm(){
    this.productService.showMessage()
  }
  // addProduct(){
  //   this.productService.addProduct(this.product).subscribe((data) => {
  //     console.log(data)
  //     this.dataProduct.push(data);
  //   });
  //   console.log(this.product)
  // }

  onSubmit(formAdd){
    console.log(formAdd.value);
    console.log(formAdd.valid);
    if(formAdd.valid){
      this.productService.addProduct(this.product).subscribe((data) => {
        console.log(data)
        this.dataProduct.push(data);
      });
    }
  }
}
