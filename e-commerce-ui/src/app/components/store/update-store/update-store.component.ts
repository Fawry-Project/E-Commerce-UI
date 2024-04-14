import { Component } from '@angular/core';
import { Store } from '../../../models/storeResponse-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-store',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-store.component.html',
  styleUrl: './update-store.component.css'
})
export class UpdateStoreComponent {
  store: Store = new Store();

  onsubmit(){

  }
  updateStore(){
    
  }
}
