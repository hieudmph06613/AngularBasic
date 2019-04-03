import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {productType} from '../model/productType';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private urlAPI = 'http://5c999ea71a4c360014a0ff5b.mockapi.io/';


    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<productType[]> {
        const urlApi = `${this.urlAPI}/products`;
        return this.http.get<productType[]>(urlApi);
    }

    addProduct(product): Observable<productType> {
        return this.http.post<productType>(this.urlAPI, product, httpOptions);
    }

    removeProduct(id): Observable<productType> {
        const url = `${this.urlAPI}/products/${id}`;
        return this.http.delete<productType>(url, httpOptions);
    }

    editProduct(product): Observable<productType> {
        const url = `${this.urlAPI}/products/${product.id}`;
        return this.http.put<productType>(url, product, httpOptions);
    }

    getProduct(productId: number): Observable<productType> {
        const url = `${this.urlAPI}/products/${productId}`;
        return this.http.get<productType>(url);
    }
}
