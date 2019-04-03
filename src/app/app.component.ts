import {Component, Input} from '@angular/core';
import {productType} from './model/productType';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    productInfo: productType;

    getInfoProduct(data) {
        this.productInfo = data;
    }

}
