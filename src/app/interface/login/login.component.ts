import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  psw = ''


  constructor() { }

  ngOnInit(): void {
  }

  click() {
    if (this.email == '' || this.psw == '') {
      return false
    } else
      return true

  }

}
