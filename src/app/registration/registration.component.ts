import { Component, OnInit } from '@angular/core';

export class User {
  name: string;
  email: string;
  phone: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  user: User = new User();
  addUser(){
    alert(this.user);
    console.log(this.user);
  }
  ngOnInit(): void {
  }
}
