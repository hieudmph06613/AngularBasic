import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private productService:ProductService , private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
  // const id = +this.route.snapshot.paramMap.get('id');
  // this.product=this.productService.getProduct(id);
  this.route.params.subscribe(params=>{
    const{id} =params;
    this.productService.getProduct(id).subscribe(data=>{
        return 
    })
  })
 
}

}
