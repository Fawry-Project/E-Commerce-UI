import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStoreComponent } from './update-store.component';

describe('UpdateStoreComponent', () => {
  let component: UpdateStoreComponent;
  let fixture: ComponentFixture<UpdateStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
