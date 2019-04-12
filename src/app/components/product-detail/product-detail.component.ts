import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../product/Product';
import {ProductService} from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute, 
    private router: Router) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe(params => {
        const { id } = params;
        this.productService.getProduct(id).subscribe(data => {
          return this.product = data
        })
    })
  }
  save(){
    this.productService.editProduct(this.product).subscribe(() => {
      this.router.navigateByUrl('/product');
    })
  }
}
