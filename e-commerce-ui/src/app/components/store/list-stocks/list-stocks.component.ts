import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { Stock } from '../../../models/stockResponse-model';

@Component({
  selector: 'app-list-stocks',
  standalone: true,
  imports: [SearchBarComponent, CommonModule],
  templateUrl: './list-stocks.component.html',
  styleUrl: './list-stocks.component.css'
})
export class ListStocksComponent implements OnInit{
  stocks : Stock[]=[];

  ngOnInit(): void {
    const date = new Date();
    this.stocks = [
      {
        stockId : 1,
        storeId : 1,
        quantity: 10,
        consumedQuantity : 2,
        creationDate: date.toLocaleDateString('en-US')
      },
      {
        stockId : 1,
        storeId : 1,
        quantity: 10,
        consumedQuantity : 2,
        creationDate: date.toLocaleDateString('en-US')
      },
      {
        stockId : 1,
        storeId : 1,
        quantity: 10,
        consumedQuantity : 2,
        creationDate: date.toLocaleDateString('en-US')
      },
    ]
  }
}
