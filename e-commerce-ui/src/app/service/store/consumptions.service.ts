import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction, catchError, throwError } from 'rxjs';
import { ProductsConsumptions } from '../../models/consumptions-model';
import { ProductOrder } from '../../models/product-order-model';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionsService {
  private apiServerUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient){}


  public getConsumptions(): Observable<ProductsConsumptions[]>{
    return this.http.get<ProductsConsumptions[]>(`${this.apiServerUrl}/consumptions`).pipe(
      this.fetchError()
    );
  }

  public getConsumptionsByProductCodeAndOrderCode(productCode: string, orderCode: string): Observable<ProductsConsumptions>{
    return this.http.get<ProductsConsumptions>(`${this.apiServerUrl}/consumptions/product-order`, { params: { productCode, orderCode } }).pipe(
      this.fetchError()
    );
  }

  public getConsumptionsByProductCode(productCode: string): Observable<ProductsConsumptions[]>{
    return this.http.get<ProductsConsumptions[]>(`${this.apiServerUrl}/consumptions/${productCode}`).pipe(
      this.fetchError()
    );
  }

  private fetchError(): OperatorFunction<any, any>{
    return catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An error occurred';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        console.log(`Eclient-side rror: ${error.error.message}`);
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Backend error
        console.log(`Backend Error: ${error.status} - ${error.error.message}`)
        errorMessage = `Error: ${error.status} - ${error.error.message}`;
      }
      return throwError(errorMessage);
    })
  }
}
