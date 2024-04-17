import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryDTO } from '../../../models/category-model';
import { CategoryService } from '../../../service/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css',
})
export class CreateCategoryComponent {
  category: CategoryDTO = new CategoryDTO();

  constructor(private categoryService: CategoryService, private router: Router) {}

  onSubmit() {
    this.categoryService.createCategory(this.category).subscribe(
      (response) => {
        console.log('Category created successfully:', response);
        this.router.navigate(['/product-service/list-products'])
      },
      (error) => {
        alert(error);
      }
    );
  }
}
