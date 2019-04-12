import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrls: ['./produc-detail.component.css']
})
export class ProducDetailComponent implements OnInit {
  product: Product;
  constructor(private productService:ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct()
  }

 getProduct(){
  // const id=+this.route.snapshot.paramMap.get('id');
  // this.product=this.productService.getProduct(id);
  // console.log(id)
  this.route.params.subscribe(params=>{
    const{id}=params;
    this.productService.getProduct(id).subscribe(data=>{
     return this.product=data
    })
  })
}
editProduct(product){
  return this.productService.editProduct(product).subscribe(data=>{
    console.log(data)
  })
}
}
