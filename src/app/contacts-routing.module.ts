import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'contacts', component: ContactsComponent },
{ path: 'contacts/add', component: AddContactComponent },
{ path: 'contacts/:id', component: ContactDetailsComponent }, // url parameter
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class ContactsRoutingModule { }
