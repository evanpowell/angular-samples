import { Component, OnInit } from '@angular/core';

import { NavRoute } from './global-nav.model';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {
  public navRoutes: Array<NavRoute>;

  constructor() { }

  ngOnInit() {
    this.setDefaultProperties();
  }

  private setDefaultProperties(): void {
    this.navRoutes = [
      {
        title: 'Home',
        link: '/',
        isActiveExact: true
      },
      {
        title: 'Forms',
        link: '/forms'
      },
      {
        title: 'Directives',
        link: '/directives'
      },
      {
        title: 'Pipes',
        link: '/pipes'
      },
      {
        title: 'Services',
        link: '/services'
      },
    ]
  }
}
