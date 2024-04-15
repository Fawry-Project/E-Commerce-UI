import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../service/store/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../../../models/stockResponse-model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-stock',
  standalone: true,
  imports: [],
  templateUrl: './delete-stock.component.html',
  styleUrl: './delete-stock.component.css'
})
export class DeleteStockComponent implements OnInit{
  stock : Stock = new Stock();
  constructor(private stockService: StockService, 
    private route: ActivatedRoute, 
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['stock']) {
        this.stock= JSON.parse(params['stock']);
        console.log(this.stock);
      }
    });
  }

  onDeleteStore(){
    this.stockService.deleteStock(this.stock.stockId).subscribe(
      (response: void) => {
        console.log(response);
        this.router.navigate(['/store-service/list-stocks']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onCancle(){
    this.router.navigate(['/store-service/list-stocks']);
  }
}
