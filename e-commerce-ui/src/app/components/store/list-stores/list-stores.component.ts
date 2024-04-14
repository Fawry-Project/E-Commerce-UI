import { Component, OnInit } from '@angular/core';
import { Store } from '../../../models/storeResponse-model';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StoreService } from '../../../service/store/store.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-stores',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, HttpClientModule],
  templateUrl: './list-stores.component.html',
  styleUrl: './list-stores.component.css'
})

export class ListStoresComponent implements OnInit{
  stores : Store[] = [];

  constructor(private storeService: StoreService){}

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
  
  
}
