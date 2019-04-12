import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ThongbaoService } from '../../services/thongbao.service';
import { Product } from '../product/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();

  constructor(private thongbaoService: ThongbaoService, private productService: ProductService, private route: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.route.navigate(['/product/page/1']);
      alert('A product has been added sucessfully!')
      this.productService.reload();
    })
  }

  onSubmit(formAddProduct) {
    if (formAddProduct.valid) {
      this.productService.addProduct(formAddProduct.value).subscribe(() => {
        this.route.navigate(['/admin']);
        alert('A product has been added sucessfully!')
        this.productService.reload();
      })
    } else{
      alert('Add a new product has a error!');
    }
  }

  showMessage() {
    this.thongbaoService.showMessage();
  }


}
