import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsConsumptions } from '../../../models/consumptions-model';
import { ConsumptionsService } from '../../../service/store/consumptions.service';
import { FormsModule } from '@angular/forms';
import { ProductOrder } from '../../../models/product-order-model';

@Component({
  selector: 'app-list-products-consumptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-products-consumptions.component.html',
  styleUrl: './list-products-consumptions.component.css'
})
export class ListProductsConsumptionsComponent implements OnInit{
  products!: any[];
  product: any;

  productCode: string = '';
  orderCode: string = '';

  constructor(private consumptionsService: ConsumptionsService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.getProductsConsumptions();
  }

  onClick(){
    if(this.orderCode !=='')
      this.getProductConsumption();
    else 
      this.getProductConsumptions();
  }

  private getProductsConsumptions(): void{
    this.consumptionsService.getConsumptions().subscribe(
      (response : ProductsConsumptions[]) => {
        this.products = response;
        this.changeDateFormat();
      },
      (error) => {
        alert(error); // Display the error message in an alert
      }
    );
  }

  private getProductConsumption(): void{
    this.consumptionsService.getConsumptionsByProductCodeAndOrderCode(this.productCode, this.orderCode).subscribe(
      (response : ProductsConsumptions) => {
        this.product = response;
        this.product.consumedAt =  this.datePipe.transform(this.product.consumedAt, 'dd/MMM/yyyy');
        this.products = [];
        this.products.push(this.product);
      },
      (error) => {
        alert(error); 
      }
    );
  }

  private getProductConsumptions(): void{
    this.consumptionsService.getConsumptionsByProductCode(this.productCode).subscribe(
      (response : ProductsConsumptions[]) => {
        this.products = response;
        this.changeDateFormat();
        console.log(this.products);
      },
      (error) => {
        alert(error); 
      }
    );
  }

  private changeDateFormat(): void {
    this.products.forEach(product => {
      product.consumedAt =  this.datePipe.transform(product.consumedAt, 'dd/MMM/yyyy')
    });
  }

}
