import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  genders = [ 'male', 'female'];
  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required,
      Validators.minLength(4)]),
      'email': new FormControl(null, Validators.required),
      'gender': new FormControl('male'),
      'message': new FormControl(null, Validators.required)
    });
  }

  get name() { return this.contactForm.get('name'); }

  get email() { return this.contactForm.get('email')}

  get message() { return this.contactForm.get('message')}
  
  onSubmit() {
    console.warn(this.contactForm.value);
  }
}
