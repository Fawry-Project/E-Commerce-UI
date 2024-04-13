import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-store-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterModule, RouterOutlet],
  templateUrl: './store-side-nav.component.html',
  styleUrl: './store-side-nav.component.css'
})
export class StoreSideNavComponent {

}
