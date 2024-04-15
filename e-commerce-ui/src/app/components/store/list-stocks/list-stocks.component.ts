import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { Stock } from '../../../models/stockResponse-model';
import { StockService } from '../../../service/store/stock.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-stocks',
  standalone: true,
  imports: [SearchBarComponent, CommonModule],
  templateUrl: './list-stocks.component.html',
  styleUrl: './list-stocks.component.css'
})
export class ListStocksComponent implements OnInit{
  stocks : Stock[]=[];

  constructor(private stockService:StockService, private router: Router){}

  ngOnInit(): void {
    this.getStocks();
  }

  public getStocks(): void{
    this.stockService.getStocks().subscribe(
      (response : Stock[]) => {
        this.stocks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getStocksByProductCode(productCode : string){
    this.stockService.getStocksByProductCode(productCode).subscribe(
      (response : Stock[]) => {
        this.stocks = response;
        console.log(response);
      },
      () => {
        this.stocks = [];
      }
    );
  }

  public onFetchStocks(code: string){
    if(code === '') 
      this.getStocks()
    else
      this.getStocksByProductCode(code);
  }

  onClickEdit(stock: Stock){
    console.log("onEdit : " + stock)
    this.router.navigate(['/store-service/update-stock'], {
      queryParams: { stock: JSON.stringify(stock) }
    });
  }
  onClickDelete(stock: Stock){
    console.log("onDelete : "+ stock)
    this.router.navigate(['/store-service/delete-stock'], {
      queryParams: { stock: JSON.stringify(stock) }
    });
  }

}
