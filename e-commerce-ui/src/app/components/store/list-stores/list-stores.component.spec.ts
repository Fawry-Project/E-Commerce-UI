import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoresComponent } from './list-stores.component';

describe('ListStoresComponent', () => {
  let component: ListStoresComponent;
  let fixture: ComponentFixture<ListStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
