import { Component, OnInit } from '@angular/core';
import { DataProduct } from './MockProduct'
import { Product } from './Product'
import { ThongBaoSVService } from '../service/thong-bao-sv.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // status: boolean=true;
  // product={
  //   img:'https://e0.365dm.com/18/11/768x432/skysports-lukaku-romelu-manchester-united_4477768.jpg?20181106120104',
  //   name:'Product 1',
  //   note:'OK oK OK OK OK',
  //   priceregular:"100000",
  // }
  products = DataProduct;
  selected: Product;


  constructor(private thongBaoSVService: ThongBaoSVService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }
  showDetail(product) {
    // console.log(product);
    this.selected = product;

  }
  getProducts() {
    this.thongBaoSVService.getProducts().subscribe(data => this.products = data, error => console.log(error));
    console.log();
  }
 
  deleteItem(id) {
    this.thongBaoSVService.deleteproduct(id).subscribe(data => { 
      return this.products = this.products.filter(item => item.id != id) });
  }
}
