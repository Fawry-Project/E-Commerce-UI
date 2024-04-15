import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStockComponent } from './delete-stock.component';

describe('DeleteStockComponent', () => {
  let component: DeleteStockComponent;
  let fixture: ComponentFixture<DeleteStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
