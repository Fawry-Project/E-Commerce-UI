import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from '../../../service/coupon/coupon.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
    private couponService: CouponService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.couponCode = params['code'];
      // Fetch the product data by product code
      this.couponService.getCouponByCode(this.couponCode).subscribe(
        (coupon) => {
          this.coupon = coupon;
          this.coupon.expiryDate = this.datePipe.transform(this.coupon.expiryDate, 'yyyy-MM-dd'),
          console.log('Fetching Coupon', coupon);
        },
        (error) => {
          alert(error);
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
        alert(error);
      }
    );
  }
}