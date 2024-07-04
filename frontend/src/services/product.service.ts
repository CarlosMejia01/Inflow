import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOriginalProduct } from '../app/interfaces/IOriginalProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = `https://localhost:7283`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IOriginalProduct[]> {
    return this.http.get<IOriginalProduct[]>(`${this.baseUrl}/Products`);
  }

  getSingleProduct(id: string): Observable<IOriginalProduct> {
    return this.http.get<IOriginalProduct>(`${this.baseUrl}/Products/${id}`)
  }

  uploadProduct(data: IOriginalProduct): Observable<IOriginalProduct> {
    return this.http.post<IOriginalProduct>(`${this.baseUrl}/Products`, data)
  }

  updateProduct(data: IOriginalProduct, id: string): Observable<IOriginalProduct> {
    return this.http.put<IOriginalProduct>(`${this.baseUrl}/Products/${id}`, data)
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Products/${id}`)
  }

}
