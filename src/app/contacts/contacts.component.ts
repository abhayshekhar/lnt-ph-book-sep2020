import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  contactList: any[];

  constructor(private contactService: ContactService) {  // Step 1: connect to service
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    // ideal place for us to send the ajax calls
    console.log('Inside ngOnInIt');
    // 2. send the req to the service
    this.contactService.getContacts()
    .subscribe( (res: any) => {  // step 3: get the response from REST API
      console.log(res);
      this.contactList = res;
    });
  }

}
