import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'vitamina-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <vitamina-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </vitamina-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
