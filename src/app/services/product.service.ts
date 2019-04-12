import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Product} from '../components/product/Product';
import {Cate} from '../components/category/Cate';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlAPI = 'http://5c999ea71a4c360014a0ff5b.mockapi.io/products';
  private newUrlAPI = 'http://5c999ea71a4c360014a0ff5b.mockapi.io';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlAPI}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(this.urlAPI, product);
  }

  deleteProduct(product): Observable<Product>{
    return this.http.delete<Product>(`${this.urlAPI}/${product.id}`)
  }

  getProduct(id): Observable<Product>{
      return this.http.get<Product>(`${this.urlAPI}/${id}`);
  }

  editProduct(product): Observable<Product>{
      return this.http.put<Product>(`${this.urlAPI}/${product.id}`, product)
  }


  getCategory(): Observable<Cate[]>{
    return this.http.get<Cate[]>(`${this.newUrlAPI}/category`);
  }
}







