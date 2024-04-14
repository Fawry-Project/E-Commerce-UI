import { Component, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { StoreService } from '../../../service/store/store.service';
import { Store } from '../../../models/storeResponse-model';

@Component({
  selector: 'app-store-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterModule, RouterOutlet],
  templateUrl: './store-side-nav.component.html',
  styleUrl: './store-side-nav.component.css'
})
export class StoreSideNavComponent {
  // @Input() stores !: Store[];
  // constructor(private storeService: StoreService){}

  // getStores(){
  //   this.stores = this.storeService.stores;
  // }
}
