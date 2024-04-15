import { Component } from '@angular/core';
import { CouponDTO } from '../../models/couponDTO-model';
import { FormsModule } from '@angular/forms';
import { CouponService } from '../../service/coupon/coupon.service';

@Component({
  selector: 'app-create-coupon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-coupon.component.html',
  styleUrl: './create-coupon.component.css',
})
export class CreateCouponComponent {
  coupon: CouponDTO = new CouponDTO();

  constructor(private couponService: CouponService) {}

  onSubmit() {
    console.log('Submitted Coupon:', this.coupon);
    this.couponService.createCoupon(this.coupon).subscribe(
      (response) => {
        console.log('Coupon created successfully:', response);
        this.clearForm();
      },
      (error) => {
        console.error('Error creating coupon:', error);
      }
    );
  }

  clearForm() {
    this.coupon.code = '';
    this.coupon.maxNumberOfUsages = 0;
    this.coupon.valueType = '';
    this.coupon.value = 0;
    this.coupon.expiryDate;
  }
}
