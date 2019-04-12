import { Component, OnInit } from '@angular/core';
import { DataProduct } from './MockProduct';
import { Product } from './Product';
import { ProductService } from '../service/product.service'



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = DataProduct;

  selected: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  showDetail(product) {
    this.selected = product;
  }
  Delete(id) {
    this.productService.Delete(id).subscribe(data => {
      this.products = this.products.filter(item => item.id !== data.id)
    })
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => this.products = data, error => console.log(error)

    )
  }
}
