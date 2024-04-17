import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponSideNavComponent } from './coupon-side-nav.component';

describe('CouponSideNavComponent', () => {
  let component: CouponSideNavComponent;
  let fixture: ComponentFixture<CouponSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
