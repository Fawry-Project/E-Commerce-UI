import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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