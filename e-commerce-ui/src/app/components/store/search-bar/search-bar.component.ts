import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreService } from '../../../service/store/store.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { Store } from '../../../models/storeResponse-model';
import { HttpErrorResponse } from '@angular/common/http';
import { StockService } from '../../../service/store/stock.service';
import { Stock } from '../../../models/stockResponse-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent{
  @Input() placeHolderValue: string = '';
  inputText: string = '';
  @Output() storeName: EventEmitter<string> = new EventEmitter<string>();
  @Output() code: EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    if(this.placeHolderValue === 'search with store name'){
      this.storeName.emit(this.inputText);
    } else{
      this.code.emit(this.inputText);
    }
  }

}