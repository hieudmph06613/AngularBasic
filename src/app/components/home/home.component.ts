import {Component, OnInit} from '@angular/core';
import {productType} from '../../model/productType';
import {ProductService} from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    products: productType[];

    constructor(private productService: ProductService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        //this.productService.getProducts(cateId).subscribe(item => this.products = item);
    }

    removeProduct(id) {
        this.productService.removeProduct(id).subscribe(() => this.getProducts());
    }
}
