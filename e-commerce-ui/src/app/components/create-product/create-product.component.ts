import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDTO } from '../../models/productDTO-model';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  product: ProductDTO = new ProductDTO();

  constructor(private productService: ProductService) {}

  submitForm() {
    this.productService.createProduct(this.product).subscribe(
      (response) => {
        console.log('Product created successfully:', response);
        this.clearForm();
      },
      (error) => {
        console.error('Error creating product:', error);
        // Handle error if necessary
      }
    );
  }
  clearForm() {
    this.product.name = '';
    this.product.description = '';
    this.product.imgUrl = '';
    this.product.price = 0;
    this.product.categoryName = '';
  }
}
