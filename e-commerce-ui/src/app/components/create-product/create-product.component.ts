import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDTO } from '../../models/product-model';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  product: ProductDTO = new ProductDTO();

  submitForm() {
    // Handle form submission here
    console.log('Form submitted with product:', this.product);
    this.clearForm();
  }
  clearForm() {
    this.product.name = '';
    this.product.description = '';
    this.product.imgUrl = '';
    this.product.price = 0;
    this.product.categoryName = '';
  }
}
