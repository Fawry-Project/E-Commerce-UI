import { Component } from '@angular/core';
import { StoreDTO } from '../../../models/store-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.css'
})
export class CreateStoreComponent {
  store :StoreDTO = new StoreDTO;

  addStore(){
    
  }
}
