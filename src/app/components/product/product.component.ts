import { Component, OnInit } from '@angular/core';
import { DataProduct } from './MockProduct';
import { Product } from './Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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

  deleteProduct(product) {
    // this.products = this.products.filter (item => item.id !== id);
    this.productService.deleteProduct(product).subscribe(data => {
      this.products = this.products.filter(item => item.id !== data.id)
    })
    alert('A product has been deleted!');
  }
}
