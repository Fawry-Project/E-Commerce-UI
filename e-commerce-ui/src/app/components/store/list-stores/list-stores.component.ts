import { Component, OnInit } from '@angular/core';
import { Store } from '../../../models/storeResponse-model';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-list-stores',
  standalone: true,
  imports: [SearchBarComponent, CommonModule],
  templateUrl: './list-stores.component.html',
  styleUrl: './list-stores.component.css'
})
export class ListStoresComponent implements OnInit{
  stores : Store[] = [];


  ngOnInit(): void {
    this.stores = [{
      id : 1,
      name : "store 1",
      phoneNumber: "01010187876",
      city : "cairo"
    },
    {  
      id : 2,
      name : "store 2",
      phoneNumber: "01129231114",
      city : "Alex"
    }];
  }

}
