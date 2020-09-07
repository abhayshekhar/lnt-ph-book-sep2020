import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
// tslint:disable-next-line: new-parens
today: Date = new Date;
randomText = 'Lorem ipsum';
  constructor() { }

  ngOnInit(): void {
  }

}
