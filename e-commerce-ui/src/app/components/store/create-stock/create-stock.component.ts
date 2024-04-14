import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stock } from '../../../models/stockResponse-model';
import { StockService } from '../../../service/store/stock.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css'
})
export class CreateStockComponent {
  stock: Stock= new Stock();

  constructor(public stockService: StockService, private router: Router, private datePipe: DatePipe){}

  onSubmit(){
    console.log(this.stock);
    this.stock.consumedQuantity = 0;
    this.stock.creationDate = this.datePipe.transform(new Date(), 'dd/MMM/yyyy')
    this.stockService.createStock(this.stock);
    this.goToStocksList()
  }
  goToStocksList(){
    this.router.navigate(['/store-service/list-stocks'])
  }
}
