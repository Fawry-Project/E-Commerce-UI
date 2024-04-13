import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCouponComponent } from './create-coupon.component';

describe('CreateCouponComponent', () => {
  let component: CreateCouponComponent;
  let fixture: ComponentFixture<CreateCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCouponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
