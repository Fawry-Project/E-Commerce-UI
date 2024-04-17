import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StockService } from '../../../service/store/stock.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Stock } from '../../../models/stock-model';

@Component({
  selector: 'app-create-stock',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css'
})
export class CreateStockComponent {
  stock: Stock= new Stock();

  constructor(public stockService: StockService, private router: Router){}

  onSubmit(stockForm: NgForm): void{
    console.log(stockForm.value);
    this.stockService.addStock(stockForm.value).subscribe(
      (response: Stock) => {
        console.log(response);
        this.goToStocksList();
      },
      (error) => {
        alert(error); // Display the error message in an alert
      }
    );
  }
  goToStocksList(){
    this.router.navigate(['/store-service/list-stocks'])
  }
}
