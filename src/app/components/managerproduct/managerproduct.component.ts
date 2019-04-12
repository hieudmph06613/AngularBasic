import { Component, OnInit } from '@angular/core';
import { DataProduct } from '../product/MockProduct';
import { ThongBaoSVService } from '../service/thong-bao-sv.service';

@Component({
  selector: 'app-managerproduct',
  templateUrl: './managerproduct.component.html',
  styleUrls: ['./managerproduct.component.css']
})
export class ManagerproductComponent implements OnInit {
  products = DataProduct;
  constructor(private thongBaoSVService:ThongBaoSVService) { }

  ngOnInit() {
    this.getProducts();
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
