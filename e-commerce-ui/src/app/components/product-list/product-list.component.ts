import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../../models/product-model';
import { ProductService } from '../../service/product/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [ProductCardComponent, CommonModule],
})
export class ProductListComponent implements OnInit {
  products: ProductDTO[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
