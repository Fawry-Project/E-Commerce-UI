import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../service/coupon/coupon.service';
import { Coupon } from '../../models/coupon-model';
import { CouponCardComponent } from '../coupon-card/coupon-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-coupons',
  standalone: true,
  imports: [CouponCardComponent, CommonModule],
  templateUrl: './list-coupons.component.html',
  styleUrl: './list-coupons.component.css',
})
export class ListCouponsComponent implements OnInit {
  coupons!: Coupon[];

  constructor(private couponService: CouponService) {}

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons(): void {
    this.couponService
      .getCoupons()
      .subscribe((coupons) => (this.coupons = coupons));
  }
}
