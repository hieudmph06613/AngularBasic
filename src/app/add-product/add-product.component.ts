import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from '../service/product-service.service'
import { Product } from '../product/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();

  constructor(private productServiceService: ProductServiceService, private route: Router,
  ) { }

  ngOnInit() {

  }
  AddProduct() {
    //  this.productServiceService.addProduct(this.product);
    this.productServiceService.AddProduct(this.product).subscribe(() => {
      this.route.navigate(['/home']);
    })
  }
  onSubmit(formAddProduct) {
    const  value  = formAddProduct;
    this.productServiceService.AddProduct(value).subscribe(data => {
      this.productServiceService.getProducts();

    })
    //   console.log(formAddProduct)
    //  if(formAddProduct.valid){
    //    console.log('thêm mới thành công');
    //  }else{
    //    console.log('thêm mới thất bại');
    //  }

  }

}
