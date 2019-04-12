import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Cate } from './Cate';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Cate[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this.productService.getCategory().subscribe(data => {
      this.category = data;
    }) 
  }
}
