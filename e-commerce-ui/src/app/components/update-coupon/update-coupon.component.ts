import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from '../../service/coupon/coupon.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-coupon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-coupon.component.html',
  styleUrl: './update-coupon.component.css',
})
export class UpdateCouponComponent {
  coupon: any = {};
  couponCode!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private couponService: CouponService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.couponCode = params['code'];
      // Fetch the product data by product code
      this.couponService.getCouponByCode(this.couponCode).subscribe(
        (coupon) => {
          this.coupon = coupon;
          console.log('Fetching Coupon', coupon);
        },
        (error) => {
          console.error('Error fetching Coupon:', error);
        }
      );
    });
  }

  onSubmit() {
    this.couponService.updateCoupon(this.couponCode, this.coupon).subscribe(
      (response) => {
        // Navigate to the Coupon list page
        this.router.navigate(['/coupon-service/list-coupons']);
      },
      (error) => {
        console.error('Error updating Coupon:', error);
      }
    );
  }
}
