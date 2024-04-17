import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8083/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return throwError(error);
      })
    );
  }

  createProduct(product: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, product)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(productCode: string): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${productCode}`;
    return this.http.delete<void>(deleteUrl).pipe(
      catchError((error) => {
        console.error('Error deleting product:', error);
        return throwError(error);
      })
    );
  }

  getProductByCode(productCode: string): Observable<any> {
    const getProductUrl = `${this.apiUrl}/${productCode}`;
    return this.http.get<any>(getProductUrl).pipe(catchError(this.handleError));
  }

  updateProduct(productCode: string, product: Product): Observable<any> {
    const updateUrl = `${this.apiUrl}/${productCode}`;
    return this.http
      .put<any>(updateUrl, product)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
      errorMessage = `Client-side Error: ${error.error.message}`;
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${JSON.stringify(error.error)}`
      );
      errorMessage = `BackEnd Error: ${error.status} - ${error.error.message}`;
    }
    // Return an observable with a user-facing error message //
    return throwError(errorMessage);
  }
}
