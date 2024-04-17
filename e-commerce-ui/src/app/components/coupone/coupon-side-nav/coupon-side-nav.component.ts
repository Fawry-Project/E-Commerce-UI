import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-coupon-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, RouterOutlet],
  templateUrl: './coupon-side-nav.component.html',
  styleUrl: './coupon-side-nav.component.css',
})
export class CouponSideNavComponent {}
