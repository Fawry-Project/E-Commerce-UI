import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { StoreService } from '../../../service/store/store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '../../../models/store-model';

@Component({
  selector: 'app-update-store',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-store.component.html',
  styleUrl: './update-store.component.css'
})
export class UpdateStoreComponent implements OnInit{
  editStore: Store = new Store();

  constructor(private storeService: StoreService, 
    private route: ActivatedRoute, 
    private router: Router){}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['store']) {
        this.editStore= JSON.parse(params['store']);
        console.log(this.editStore);
      }
    });
  }
  onUpdateStore(): void{
    this.storeService.updateStore(this.editStore).subscribe(
      (response : Store) => {
        console.log(response);
        this.goToStores();
      },
      (error) => {
        alert(error); // Display the error message in an alert
      }
    )
  }

  private goToStores(){
    this.router.navigate(['/store-service/list-stores'])
  }
}
