import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed  selector --element
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.css'] // css
})
export class AppComponent {
  // ts
  title = 'lnt-ph-book-sep2020';
}
