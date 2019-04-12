import { Component, OnInit } from '@angular/core';
import { Product } from '../product/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {
  products: Product[];
  selected: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getListProduct();
  }

  getListProduct() {
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => this.products = data, error => console.log(error));
  }

  showDetail(product) {
    this.selected = product;
  }

}
