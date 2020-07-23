import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://www.itgenius.co.th/sandbox_api/ministockapi/public/api/"

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }
 
   // อ่านข้อมูล Product
  getProducts(): Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiUrl+ 'products')
  }

  getProduct(id): Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiUrl+ 'product/'+id)
  }

  createProduct(product): Observable<ProductModel>{
    return this.http.post<ProductModel>(this.apiUrl + "product", JSON.stringify(product), this.httpOptions)
  }

  updateProduct(id, product): Observable<ProductModel>{
    return this.http.put<ProductModel>(this.apiUrl + "product/"+id, JSON.stringify(product), this.httpOptions)
  }

  deleteProduct(id){
    return this.http.delete<ProductModel>(this.apiUrl + "product/"+id, this.httpOptions)
  }

}
