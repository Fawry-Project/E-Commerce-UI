import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../service/store/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '../../../models/store-model';

@Component({
  selector: 'app-delete-store',
  standalone: true,
  imports: [],
  templateUrl: './delete-store.component.html',
  styleUrl: './delete-store.component.css'
})
export class DeleteStoreComponent implements OnInit{
  store: Store = new Store();
  constructor(private storeService: StoreService, 
    private route: ActivatedRoute, 
    private router: Router){}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['store']) {
        this.store= JSON.parse(params['store']);
        console.log(this.store);
      }
    });
  }

  onDeleteStore(){
    this.storeService.deleteStore(this.store.id).subscribe(
      (response: void) => {
        console.log(response);
        this.router.navigate(['/store-service/list-stores']);
      },
      (error) => {
        alert(error); // Display the error message in an alert
      }
    );
  }
  onCancle(){
    this.router.navigate(['/store-service/list-stores']);
  }

}
