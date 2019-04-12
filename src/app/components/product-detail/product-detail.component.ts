import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/Product'
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @Input('infoProduct') detailProduct: Product;
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.product = this.productService.getProduct(id);
    // console.log(this.product);
    this.route.params.subscribe(params => {
      const { id } = params;
      console.log(id);
      this.productService.getProduct(id).subscribe(data => {
        return this.product = data;       
      })
    })
  }

  save(){
    this.productService.editProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product/page/1');
    })
    alert('Product Updated!');
  }

}
