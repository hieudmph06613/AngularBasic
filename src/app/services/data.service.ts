import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/product/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://5ca73fdb8e58df0014602f78.mockapi.io/products';

  constructor(private http: HttpClient) { }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  add(pro: Product): Observable<Product> {
    return this.http.post<Product>(this.url, pro);
  }

  delete(id): Observable<Product> {
    const urlDelete = this.url + '/' + id;
    return this.http.delete<Product>(urlDelete);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  update(pro: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${pro.id}`, pro);
  }

}