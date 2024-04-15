import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryDTO } from '../../models/category-model';
import { CategoryService } from '../../service/category/category.service';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css',
})
export class CreateCategoryComponent {
  category: CategoryDTO = new CategoryDTO();

  constructor(private categoryService: CategoryService) {}

  onSubmit() {
    this.categoryService.createCategory(this.category).subscribe(
      (response) => {
        console.log('Category created successfully:', response);
      },
      (error) => {
        console.error('Error creating category:', error);
      }
    );
  }
}
