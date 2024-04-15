import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '../../../models/storeResponse-model';
import { StoreService } from '../../../service/store/store.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
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
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  goToStoreList(){
    this.router.navigate(['/store-service/list-stores'])
  }
}
