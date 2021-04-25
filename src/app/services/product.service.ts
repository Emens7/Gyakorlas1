import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = `https://nettuts.hu/jms/Emens7/products`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  get(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${id}`)
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.url}`, product)
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(`${this.url}/${product.id}`, product)
  }

  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.url}/${id}`)
  }

}
