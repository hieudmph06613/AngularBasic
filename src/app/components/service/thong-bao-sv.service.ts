import { Injectable } from '@angular/core';
import { DataProduct } from 'src/app/components/product/MockProduct';
import { Observable, of } from 'rxjs';
import { Product } from '../product/Product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ThongBaoSVService {
  private data = DataProduct;

  private urlAPI = 'http://5ca73f938e58df0014602f51.mockapi.io/products';
  constructor(private http: HttpClient) { }
  // showMS(){
  //   console.log('Hello2')
  // }

  getProducts(): Observable<Product[]> {
    // return of(this.data);
    return this.http.get<Product[]>(this.urlAPI);

  }
  addProduct(product): Observable<Product> {
    // const newProduct={id:this.data.length+1,...product}
    // this.data.push(product);
    // console.log(product)
    return this.http.post<Product>(this.urlAPI, product);
  }
  showdetail(id): Observable<Product> {
    // return this.data.find(item => item.id === id)
    const url = `${this.urlAPI}/${id}`
    return this.http.get<Product>(url);
  }
  deleteproduct(id): Observable<Product>{
    const url = `${this.urlAPI}/${id}`
    return this.http.delete<Product>(url);
  }
  editproduct(product): Observable<Product>{
    
    return this.http.put<Product>(`${this.urlAPI}/${product.id}`,product);
  }
}
