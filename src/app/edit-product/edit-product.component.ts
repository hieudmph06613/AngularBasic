import { Component, OnInit } from '@angular/core';
import { Product } from '../product/Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  detailProduct : Product;
  constructor(private productService:ProductService, private route : ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getDetailProduct();
  }
  getDetailProduct(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.showDetailProduct(id).subscribe(data => this.detailProduct = data);
  }

  edit(detailProduct){
    console.log(detailProduct);
    
  }

  onSubmit(formEdit){
    console.log(formEdit.value);
    console.log(formEdit.valid);
    if(formEdit.valid){
      this.productService.editProduct(this.detailProduct).subscribe(data =>{
        this.router.navigateByUrl('/manager-product');
      })
    }
  }
}
