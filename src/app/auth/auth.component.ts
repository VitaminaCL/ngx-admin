import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'vitamina-auth',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
              <router-outlet></router-outlet>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthComponent {

  constructor(protected location: Location) {
  }

  back() {
    this.location.back();
    return false;
  }
}
