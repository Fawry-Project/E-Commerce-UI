import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { StoreSideNavComponent } from '../store-side-nav/store-side-nav.component';

@Component({
  selector: 'app-store-service',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    RouterModule,
    StoreSideNavComponent
  ],
  templateUrl: './store-service.component.html',
  styleUrl: './store-service.component.css'
})
export class StoreServiceComponent {

}
