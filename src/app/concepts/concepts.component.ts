import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .greenText{
      color:'green'
    }

    `
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Phone Book App!';
  exp = 20; // todos: work with boolean, array, obj

  // property binding related
  companyName = 'L & T Constructions';
  isLoggedIn = true;    // also used in *ngif
  courseName = 'Angular';
  // custom event related
  profileName: any; // change any to number or whatever the type of data

  // *ngFor related
  skillsList: string[] = ['html', 'css', 'js'];

  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number {
    return this.exp;
  }

  // prop binding
  isAuth(): boolean {
    return !this.isLoggedIn;
  }
  // event binding
  clickHandler(evt): void {
    console.log(evt);
    alert('clicked');
    // todo: change button label to clicked and disable it on click
  }

  // custom event binding
  profileLoadedHandler(evt): void {
    console.log(evt);
    this.profileName = evt;

  }
}
