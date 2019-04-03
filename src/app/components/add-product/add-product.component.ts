import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {productType} from '../../model/productType';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {
    product: productType = new productType();

    constructor(private  productService: ProductService) {
    }

    ngOnInit() {
    }

    addProduct() {
        this.productService.addProduct(this.product).subscribe(data => {
            console.log(data);
        });
    }
}
