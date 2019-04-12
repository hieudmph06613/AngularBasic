import {Component, OnInit} from '@angular/core';
import {Product} from './components/product/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[];

  ngOnInit(): void {
    this.products = [];
  }

  constructor(public route: Router) {

  }

  navigate(url: string) {
    this.route.navigateByUrl(url);
  }
}
