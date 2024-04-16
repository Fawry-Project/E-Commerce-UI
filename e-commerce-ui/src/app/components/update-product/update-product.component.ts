import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  product: any = {};
  productCode!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.productCode = params['code'];
      // Fetch the product data by product code
      this.productService.getProductByCode(this.productCode).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    });
  }

  submitForm() {
    // console.log('Poduct from submit', this.product);
    this.productService.updateProduct(this.productCode, this.product).subscribe(
      (response) => {
        // Navigate to the product list page
        this.router.navigate(['/product-service/list-products']);
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }
}
