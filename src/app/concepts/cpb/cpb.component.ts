import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {
    // Step 1: creatingcustom property
    @Input() age = 25; // @Input() --
  constructor() { }

  ngOnInit(): void {
  }

}
