import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/services';

@Component({
  selector: 'vitamina-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
