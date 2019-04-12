import { Component, OnInit , Input } from '@angular/core';
import { Product } from "src/app/product/Product";
import { ProductService } from "../services/product.service"
import { ActivatedRoute , Route, Router } from '@angular/router';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // @Input('infoProduct') detailProduct : Product;
  detailProduct : Product;
  

  constructor( private productService:ProductService, private route : ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getDetailProduct();
  }

  getDetailProduct(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.showDetailProduct(id).subscribe(data => this.detailProduct = data);
  }

  edit(detailProduct){
    console.log(detailProduct);
    this.productService.editProduct(this.detailProduct).subscribe(data =>{
      this.router.navigateByUrl('/product');
    })
  }

}
