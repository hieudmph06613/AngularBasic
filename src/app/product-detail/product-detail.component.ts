import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.product = this.productService.getProduct(id);
    // console.log(this.product);
  }
  save() {
    this.productService.editProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
    })
  }

}
