import {Component, OnInit, Input} from '@angular/core';
import {productType} from '../../model/productType';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {cateType} from '../../model/cateType';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
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
