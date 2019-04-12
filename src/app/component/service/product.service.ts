import { Injectable } from '@angular/core';
import { DataProduct } from '../product/MockProduct';
import { Product } from '../product/Product';
import { Observable, of } from 'rxjs'
import {HttpClient} from '@angular/common/http'





@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data = [...DataProduct] ;
  private urlAPI = 'http://5ca744a18e58df0014603110.mockapi.io/products';
  
  constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(this.urlAPI);
}
 
 addProduct(product): Observable<Product>{
  //  const newProduct = {id: this.data.length + 1,...product}
  //  this.data.push(newProduct);
   return this.http.post<Product>(this.urlAPI, product);
 }
 Delete(id): Observable<Product>{
  return this.http.delete<Product>(`${this.urlAPI}/${id}`);
}
getProduct(id): Observable<Product>{
  return this.http.get<Product>(`${this.urlAPI}/${id}`);
}
editProduct(product): Observable<Product>{
  return this.http.put<Product>(`${this.urlAPI}/${product.id}`,product);

}

}
