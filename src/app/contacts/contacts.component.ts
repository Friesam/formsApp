import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {ContactFormService} from '../services/contact-form.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  genders = [ 'male', 'female'];
  contactForm: FormGroup;
  constructor(private contactCard: ContactFormService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl('', [Validators.required,
      Validators.minLength(4)]),
      'email': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'message': new FormControl('', Validators.required)
    });
  }

  get name() { return this.contactForm.get('name'); }

  get email() { return this.contactForm.get('email'); }
  //get gender() { return this.contactForm.get('gender'); }
  get message() { return this.contactForm.get('message'); }
  
  onSubmit() {
    console.log(this.contactForm.value);
  }

  addContact(name, email, gender, message) {
    this.contactCard.addContact(name, email, gender, message);
  }
}
