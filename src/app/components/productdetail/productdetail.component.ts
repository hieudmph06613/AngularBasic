import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  pro: Product;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPro();
  }

  getPro() {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.dataService.getProduct(id).subscribe(data => {
        this.pro = data;
      });
    });
  }
}
