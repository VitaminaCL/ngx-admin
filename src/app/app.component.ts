import { Component, OnInit } from '@angular/core';
import { AnalyticsService, SeoService } from './@core/services';

@Component({
  selector: 'vitamina-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
  ) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
