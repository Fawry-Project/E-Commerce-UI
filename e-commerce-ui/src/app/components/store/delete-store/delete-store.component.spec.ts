import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStoreComponent } from './delete-store.component';

describe('DeleteStoreComponent', () => {
  let component: DeleteStoreComponent;
  let fixture: ComponentFixture<DeleteStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
