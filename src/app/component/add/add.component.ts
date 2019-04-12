import { Component, OnInit ,Input} from '@angular/core';
import { Product } from '../product/Product';
import { ProductService } from '../service/product.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: Product = new Product();
  files: FileList;
  @Input () dataproduct :Product[];
  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit() {
  }
  addProduct() {
    // this.productService.addProduct(this.product).subscribe(() => {
    //   this.route.navigate(['/product']);
    this.productService.addProduct(this.product).subscribe(data => {
      return this.dataproduct.push(data);
    })
  }
  onSubmit(formAddProduct) {
    console.log(formAddProduct);
    if (formAddProduct.valid) {
    console.log("pass")
      this.productService.addProduct(this.product).subscribe(data => {
       return this.dataproduct.push(data);
      });
    }else{
      console.log("fail");
    }
  }

}
