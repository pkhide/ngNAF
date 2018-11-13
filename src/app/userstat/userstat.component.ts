import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstat',
  templateUrl: './userstat.component.html',
  styleUrls: ['./userstat.component.css']
})
export class UserstatComponent implements OnInit {

  name: string;
  lname: string;
  age: string;

  constructor() { }

  ngOnInit() {
  }

  whenClicked() {
    console.log(this.name);
    console.log(this.lname);
    console.log(this.age);
  }
}
