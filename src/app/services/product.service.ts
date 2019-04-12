import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private urlAPI = "http://5ca73f468e58df0014602f1b.mockapi.io/Products";
  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlAPI);
  }
  addProduct(product):Observable<Product> {
    return this.http.post<Product>(this.urlAPI, product)
  }
  getProduct(id):Observable<Product> {
    return this.http.get<Product>(`${this.urlAPI}/${id}`)
  }
  deleteProduct(product):Observable<Product>{
    return this.http.delete<Product>(`${this.urlAPI}/${product.id}`)
  }
  editProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.urlAPI}/${product.id}`, product)
  }
}
