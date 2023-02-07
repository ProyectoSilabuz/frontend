import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUri: string = "http://localhost:3000/api"

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]>  {
    return this.http.get<Product[]>(`${this.apiUri}/products`)
  }

  get(id:string) {
    return this.http.get<Product[]>(`${this.apiUri}/products/${id}`)
  }
}
