import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '../../../models/storeResponse-model';
import { StoreService } from '../../../service/store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.css'
})
export class CreateStoreComponent{
  store :Store = new Store();

  // constructor(private storeService: StoreService, private router: Router){}

  onsubmit(){
    console.log(this.store);
    // this.storeService.createStore(this.store);
    // this.goToStoreList();
  }

  // goToStoreList(){
  //   this.router.navigate(['/store-service/list-stores'])
  // }
}
