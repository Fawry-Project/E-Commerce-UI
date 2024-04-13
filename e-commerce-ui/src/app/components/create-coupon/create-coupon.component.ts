import { Component } from '@angular/core';
import { CouponDTO } from '../../models/coupon-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-coupon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-coupon.component.html',
  styleUrl: './create-coupon.component.css',
})
export class CreateCouponComponent {
  coupon: CouponDTO = new CouponDTO();

  onSubmit() {
    console.log('Submitted Coupon:', this.coupon);
    this.clearForm();
  }

  clearForm() {
    this.coupon.code = '';
    this.coupon.maxUsage = 0;
    this.coupon.valueType = '';
    this.coupon.value = 0;
    this.coupon.expiryDate;
  }
}
