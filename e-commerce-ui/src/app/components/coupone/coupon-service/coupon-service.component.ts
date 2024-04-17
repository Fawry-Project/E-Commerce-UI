import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CouponSideNavComponent } from '../coupon-side-nav/coupon-side-nav.component';

@Component({
  selector: 'app-coupon-service',
  standalone: true,
  templateUrl: './coupon-service.component.html',
  styleUrl: './coupon-service.component.css',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    RouterModule,
    CouponSideNavComponent,
  ],
})
export class CouponServiceComponent {}
