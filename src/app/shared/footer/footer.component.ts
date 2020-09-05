import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div  style='text-align:center'>
      <hr>
      <app-menu></app-menu>
    <p>Copyright 2020  | Abhay</p>
  </div> `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
