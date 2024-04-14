import { Injectable } from '@angular/core';
import { Stock } from '../../models/stockResponse-model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stocks: Stock[] = [];
  stockId = 0;

  createStock(stock: Stock){
    stock.stockId = ++this.stockId;
    this.stocks.push(stock);
  }
}
