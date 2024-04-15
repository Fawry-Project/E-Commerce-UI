import { Component, Input } from '@angular/core';
import { Coupon } from '../../models/coupon-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-coupon-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './coupon-card.component.html',
  styleUrl: './coupon-card.component.css',
})
export class CouponCardComponent {
  @Input() coupon!: Coupon;
}
