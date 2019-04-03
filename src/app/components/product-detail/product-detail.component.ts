import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {productType} from '../../model/productType';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
    product: productType;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.getProduct();
    }

    getProduct(): void {
        this.route.params.subscribe(param => {
            const id = +param.id;
            this.productService.getProduct(id).subscribe(item => this.product = item);
        });
    }

    save(): void {
        this.productService.editProduct(this.product).subscribe(item => console.log(item));
    }

    goBack(): void {
        this.location.back();
    }
}
