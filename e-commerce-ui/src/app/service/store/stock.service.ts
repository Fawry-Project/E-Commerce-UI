import { Injectable } from '@angular/core';
import { Stock } from '../../models/stockResponse-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockDTO } from '../../models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiServerUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient){}

  public getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.apiServerUrl}/stocks`)
  }

  public getStocksByProductCode(code: string): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.apiServerUrl}/stocks/${code}`)
  }

  public addStock(stock: StockDTO): Observable<Stock>{
    return this.http.post<Stock>(`${this.apiServerUrl}/stocks`, stock);
  }

  public updateStock(stock: Stock): Observable<Stock>{
    return this.http.put<Stock>(`${this.apiServerUrl}/stocks`, stock);
  }

  public deleteStock(stockId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/stocks/${stockId}`);
  }
}
