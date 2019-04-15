import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsComponent } from '../contacts/contacts.component';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  uri = 'http://localhost:4000/addContact';

  constructor(private http: HttpClient) { }

  addContact(name, email, gender, message) {
    const obj = {
      name: name,
      email:email,
      gender: gender,
      message: message
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Successful'));
}

updateAddContact(name, email, gender, message) {

  const obj = {
    name: name,
    email:email,
    gender: gender,
    message: message
  };
  this
    .http
    .post(`${this.uri}/update/${email}`, obj)
    .subscribe(res => console.log('Done'));
}
}
