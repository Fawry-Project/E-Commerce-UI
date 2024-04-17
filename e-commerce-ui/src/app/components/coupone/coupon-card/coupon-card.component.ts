import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Coupon } from '../../../models/coupon-model';
import { DatePipe } from '@angular/common';
import { CouponService } from '../../../service/coupon/coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './coupon-card.component.html',
  styleUrl: './coupon-card.component.css',
})
export class CouponCardComponent {
  @Input() coupon!: Coupon;
  @Output() deleteCoupon: EventEmitter<string> = new EventEmitter<string>();

  constructor(private couponService: CouponService, private router: Router) {}

  onDeleteClick(couponCode: string) {
    // Emit the delete event with the Couponcode
    this.deleteCoupon.emit(couponCode);
  }

  onUpdateClick(productCode: string) {
    this.router.navigate(['/coupon-service/update-coupon'], {
      queryParams: { code: productCode },
    });
  }
}
