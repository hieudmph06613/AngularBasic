import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product/Product';
import { DataProduct } from '../product/MockProduct';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private data = [...DataProduct];
  private urlAPI = 'http://5ca741438e58df00146030c5.mockapi.io/product';

  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<Product[]> {
    //return of(this.data);
    return this.http.get<Product[]>(this.urlAPI);
  }
  getProduct(id) {
    return this.http.get<Product>(`${this.urlAPI}/${id}`)
   // return this.data.find(item => item.id === id);
  }
  AddProduct(product): Observable<Product> {
    return this.http.post<Product>(this.urlAPI, product);
    // const newProduct = { id: this.data.length + 1, ...product };
    // this.data.push(newProduct);
    // console.log(this.data);

  }
  deleteProduct(product):Observable<Product>{
    return this.http.delete<Product>(`${this.urlAPI}/${product.id}`)
  }
  editProduct(product):Observable<Product>{
  return this.http.put<Product>(`${this.urlAPI}/${product.id}`,product);

  }
}
