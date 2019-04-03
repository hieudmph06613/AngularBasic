import {Component, OnInit} from '@angular/core';
import {productType} from '../../model/productType';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
    selectedProduct: productType;
    products: productType[];

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(dataProduct => this.products = dataProduct);
    }
    removeProduct(id) {
        this.productService.removeProduct(id).subscribe(() => {
            this.products = this.products.filter(item => item.id !== id);
        });
    }

}
