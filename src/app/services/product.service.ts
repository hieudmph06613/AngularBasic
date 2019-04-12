import { Injectable } from '@angular/core';
import { DataProduct } from '../product/MockProduct';
import { Observable ,of} from 'rxjs';
import { Product } from '../product/Product';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data = DataProduct;
  private urlAPI = 'http://5ca73f378e58df0014602f0f.mockapi.io/products';
  constructor( private http : HttpClient) { }

  showMessage(){
    console.log('Service workk')
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI)
    
  }

  // Lasays data tĩnh
  // getProducts():Observable<Product[]>{
  //   return of(this.data)
  // }

  // getProducts(){
  //   return DataProduct
  // }
  
  // addProduct(product){
  //   const newProduct = {id:this.data.length+1,...product};
  //   this.data.push(newProduct);
  // }

  addProduct(product): Observable<Product>{
    return this.http.post<Product>(this.urlAPI,product)
  }
  
  showDetailProduct(id): Observable<Product>{
    const url = `${this.urlAPI}/${id}`
    return this.http.get<Product>(url);
  }

  deleteProduct(id) : Observable<Product>{
    const url = `${this.urlAPI}/${id}`
    return this.http.delete<Product>(url);
  }

  editProduct(detailProduct) : Observable<Product>{
    const url = `${this.urlAPI}/${detailProduct.id}`
    return this.http.put<Product>(url,detailProduct);
  }
}
