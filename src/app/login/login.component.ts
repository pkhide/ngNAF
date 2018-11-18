import { Component, OnInit } from '@angular/core';
import { toASCII } from 'punycode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  txtSearch: string;

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.txtSearch);
  }

}
