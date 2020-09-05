import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // step 1: create custom event  --- create an object for EventEmitter
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter();  // step 2: @output() will make profileLoaded as custom event

  constructor() { }

  ngOnInit(): void {
    console.log('Inside ngOnInit'); // lifecycle hook
    // ideal place for ajax calls/emitting events
    // step3: emit the custom data
    this.profileLoaded.emit('Abhay'); // step4: sending abhay to parent component
  }

  sendDataHandler(): void {
    // step3. emit the custom event
    this.profileLoaded.emit('Abhay');
    // step 4: sending Abhay to parent component
  }
}
