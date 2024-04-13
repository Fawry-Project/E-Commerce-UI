import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeComponent } from './de.component';

describe('DeComponent', () => {
  let component: DeComponent;
  let fixture: ComponentFixture<DeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
