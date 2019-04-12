import { Component, OnInit } from '@angular/core';
import { DataProduct } from './MockProduct';
import { Product } from './Product';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selected: Product;


  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit() {
    this.getListProduct();
  }
  getListProduct() {
    this.productServiceService.getProducts().subscribe(data => this.products = data, error => console.log(error)
    );
  }
  showDetail(product) {
    this.selected = product;

  }

  deleteProduct(product) {
    //   this.products = this.products.filter(item => item.id !== id)
    this.productServiceService.deleteProduct(product).subscribe(data => {
   this.products = this.products.filter(item => item.id !== data.id)
    })

  }


}

