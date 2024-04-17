import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsConsumptionsComponent } from './list-products-consumptions.component';

describe('ListProductsConsumptionsComponent', () => {
  let component: ListProductsConsumptionsComponent;
  let fixture: ComponentFixture<ListProductsConsumptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductsConsumptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductsConsumptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
