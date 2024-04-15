import { Component } from '@angular/core';
import { Stock } from '../../../models/stockResponse-model';
import { FormsModule, NgForm } from '@angular/forms';
import { StockService } from '../../../service/store/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-stock',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-stock.component.html',
  styleUrl: './update-stock.component.css'
})
export class UpdateStockComponent {
  stock: Stock = new Stock();

  constructor(private stockService: StockService, 
    private route: ActivatedRoute, 
    private router: Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['stock']) {
        this.stock= JSON.parse(params['stock']);
        console.log(this.stock);
      }
    });
  }

  onUpdateStock(): void{
    this.stockService.updateStock(this.stock).subscribe(
      (response : Stock) => {
        console.log(response);
        this.goToStocks()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  private goToStocks(){
    this.router.navigate(['/store-service/list-stocks'])
  }
}
