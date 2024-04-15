import { Component, OnInit, Output } from '@angular/core';
import { Store } from '../../../models/storeResponse-model';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StoreService } from '../../../service/store/store.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-stores',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './list-stores.component.html',
  styleUrl: './list-stores.component.css'
})

export class ListStoresComponent implements OnInit{
  stores : Store[] = [];
  store: Store = new Store();

  constructor(private storeService: StoreService, private router: Router){}

  ngOnInit(): void {
    this.getStores();
  }

  public getStores(): void{
    this.storeService.getStores().subscribe(
      (response : Store[]) => {
        this.stores = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  getStoreById(storeName: string): void{
    this.storeService.getStoreByName(storeName).subscribe(
      (response : Store) => {
        this.stores=[];
        this.stores.push(response);
        console.log(response);
      },
      () => {
        this.stores = [];
      }
    );
  }
  
  public onFetchStore(storeName: string){
    if(storeName === '')
      this.getStores()
    else
      this.getStoreById(storeName);
  }
  
  onClickEdit(store: Store){
    console.log("onEdit")
    this.router.navigate(['/store-service/update-store'], {
      queryParams: { store: JSON.stringify(store) }
    });
  }
  onClickDelete(store: Store){
    console.log("onDelete")
    this.router.navigate(['/store-service/delete-store'], {
      queryParams: { store: JSON.stringify(store) }
    });
  }
}
