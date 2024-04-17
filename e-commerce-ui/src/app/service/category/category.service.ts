import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CategoryDTO } from '../../models/category-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8083/api/products/category'; // Adjust the API URL as per your backend

  constructor(private http: HttpClient) {}

  createCategory(category: CategoryDTO): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, category)
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
