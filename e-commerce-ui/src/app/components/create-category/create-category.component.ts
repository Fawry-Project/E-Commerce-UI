import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryDTO } from '../../models/category-model';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css',
})
export class CreateCategoryComponent {
  categoryName: string = '';

  onSubmit(): void {
    const categoryDTO: CategoryDTO = { categoryName: this.categoryName };
    console.log(categoryDTO);
    // Clear the input field after successful submission
    this.categoryName = '';
  }
}
