import { Injectable } from '@angular/core';
import { Product } from '../components/product/Product';
import { DataProduct } from '../components/product/MockProduct';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data = [...DataProduct];
  private urlAPI = "http://5ca740a28e58df001460302a.mockapi.io/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // return of(this.data);
    return this.http.get<Product[]>(this.urlAPI);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.urlAPI}/${id}`);
  }

  addProduct(product): Observable<Product> {
    // const newProduct = { id: this.data.length + 1, ...product };
    // this.data.push(newProduct);
    // console.log(this.data);
    return this.http.post<Product>(this.urlAPI, product);
  }

  deleteProduct(product): Observable<Product> {
    return this.http.delete<Product>(`${this.urlAPI}/${product.id}`);
  }

  editProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.urlAPI}/${product.id}`, product);
  }

  reload(){
    location.reload();
  }
}
