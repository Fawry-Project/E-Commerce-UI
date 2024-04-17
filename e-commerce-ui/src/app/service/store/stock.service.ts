import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, OperatorFunction, catchError, throwError } from 'rxjs';
import { Stock } from '../../models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiServerUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient){}

  public getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.apiServerUrl}/stocks`).pipe(
      this.fetchError()
    )
  }

  public getStocksByProductCode(code: string): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.apiServerUrl}/stocks/${code}`).pipe(
      this.fetchError()
    )
  }

  public addStock(stock: Stock): Observable<Stock>{
    return this.http.post<Stock>(`${this.apiServerUrl}/stocks`, stock).pipe(
      this.fetchError()
    )
  }

  public updateStock(stock: Stock): Observable<Stock>{
    return this.http.put<Stock>(`${this.apiServerUrl}/stocks`, stock).pipe(
      this.fetchError()
    )
  }

  public deleteStock(stockId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/stocks/${stockId}`).pipe(
      this.fetchError()
    )
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
