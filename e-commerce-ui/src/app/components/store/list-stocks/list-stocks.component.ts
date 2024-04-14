import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { Stock } from '../../../models/stockResponse-model';
import { StockService } from '../../../service/store/stock.service';

@Component({
  selector: 'app-list-stocks',
  standalone: true,
  imports: [SearchBarComponent, CommonModule],
  templateUrl: './list-stocks.component.html',
  styleUrl: './list-stocks.component.css'
})
export class ListStocksComponent implements OnInit{
  stocks : Stock[]=[];

  constructor(private stockService:StockService){}

  ngOnInit(): void {
    this.stocks = this.stockService.stocks;
  }

  

}
