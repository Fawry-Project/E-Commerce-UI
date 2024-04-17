import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from '../../models/coupon-model';
import { Observable, catchError, throwError } from 'rxjs';
import { CouponDTO } from '../../models/couponDTO-model';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private apiUrl = 'http://localhost:8081/api/coupons';

  constructor(private http: HttpClient) {}

  getCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching coupons:', error);
        return throwError(error);
      })
    );
  }

  createCoupon(coupon: CouponDTO): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, coupon)
      .pipe(catchError(this.handleError));
  }

  deleteCoupon(couponCode: string): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${couponCode}`;
    return this.http.delete<void>(deleteUrl).pipe(
      catchError((error) => {
        console.error('Error deleting coupon:', error);
        return throwError(error);
      })
    );
  }

  getCouponByCode(couponCode: string): Observable<any> {
    const getCouponUrl = `${this.apiUrl}/${couponCode}`;
    return this.http.get<any>(getCouponUrl).pipe(catchError(this.handleError));
  }

  updateCoupon(couponCode: string, coupon: Coupon): Observable<any> {
    const updateUrl = `${this.apiUrl}/${couponCode}`;
    return this.http
      .put<any>(updateUrl, coupon)
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
