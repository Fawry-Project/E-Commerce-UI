import { Component } from '@angular/core';
import { SideNavComponent } from '../product-side-nav/side-nav.component';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-product-service',
  standalone: true,
  templateUrl: './product-service.component.html',
  styleUrl: './product-service.component.css',
  imports: [
    SideNavComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterModule,
  ],
})
export class ProductServiceComponent {}
