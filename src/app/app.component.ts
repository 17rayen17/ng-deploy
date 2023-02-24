import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shownav= true;

  constructor(private router: Router) {
    router.events.subscribe(
      (val) => {
        if (val instanceof NavigationEnd) {
          if (val.url == '/login' || val.url == '/profile') {
            this.shownav=false
          }
          else
            this.shownav=true
        }
      }
    )

  }
}
