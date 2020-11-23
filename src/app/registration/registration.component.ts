import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  myForm = new FormGroup ({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userPhone: new FormControl('', Validators.pattern('[0-9]{10}'))
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.myForm.value);
    alert(this.myForm.value);
  }

  ngOnInit(): void {
  }
}

