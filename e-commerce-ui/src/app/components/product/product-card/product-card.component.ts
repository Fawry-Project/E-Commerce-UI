import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product-model';
import { ProductService } from '../../../service/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() deleteProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor(private productService: ProductService, private router: Router) {}

  onDeleteClick(productCode: string) {
    // Emit the delete event with the productcode
    this.deleteProduct.emit(productCode);
  }

  onUpdateClick(productCode: string) {
    this.router.navigate(['/product-service/update-product'], {
      queryParams: { code: productCode },
    });
  }
}
