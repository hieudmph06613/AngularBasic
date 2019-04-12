import { Component, OnInit, Input } from '@angular/core';
import { Product } from "src/app/product/Product";
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  
  constructor(private productServive: ProductService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.route.params.subscribe( params => {
      const {id} = params;
      this.productServive.getProduct(id).subscribe(data => {
        return this.product = data
      })
    })
  }
  save(){
    this.productServive.editProduct(this.product).subscribe( data =>
      {this.router.navigateByUrl('/product')});
  }
}
