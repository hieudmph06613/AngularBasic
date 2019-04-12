import { Injectable } from '@angular/core';
import {Product} from '../component/product/product';
import {DataProduct} from '../component/product/MockProduct';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlAPI = 'http://5ca73f698e58df0014602f31.mockapi.io/products'  ;
  private data=[...DataProduct];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI)
  }
  addProduct(product): Observable<Product>{
   return this.http.post<Product>(this.urlAPI,product)
  }
  getProduct(id):Observable<Product>{
    return this.http.get<Product>(`${this.urlAPI}/${id}`);
  }
  deleteProduct(product): Observable<Product>{
    return this.http.delete<Product>(`${this.urlAPI}/${product.id}`)
  }
  editProduct(product):Observable<Product>{
    return this.http.put<Product>(`${this.urlAPI}/${product.id}`,product)
  }
}
