import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StoreService } from '../../../service/store/store.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '../../../models/store-model';
import { error } from 'console';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.css'
})
export class CreateStoreComponent{
  store :Store = new Store();
  stores : Store[] = [];

  constructor(private storeService: StoreService, private router: Router){}

  onSubmit(storeForm: NgForm): void{
    console.log(storeForm.value);
    this.storeService.addStore(storeForm.value).subscribe(
      (response: Store) => {
        console.log(response);
        this.goToStoreList();
      },
      (error) => {
        alert(error); // Display the error message in an alert
      }
    );
  }
  goToStoreList(){
    this.router.navigate(['/store-service/list-stores'])
  }
}
