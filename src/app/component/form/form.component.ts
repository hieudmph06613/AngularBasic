import { Component, OnInit } from '@angular/core';
import { Product } from '../product/Product'
import  {ProductService} from '../service/product.service'
import {ThongbaoService} from '../service/thongbao.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product:Product = new Product()
  constructor(private thongbaoService : ThongbaoService) { }

  ngOnInit() {
  }
  ShowMess(){
   this.thongbaoService.ShowMess();
  }

}
