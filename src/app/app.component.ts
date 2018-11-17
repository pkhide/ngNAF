import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fuck you';
  headPage = 'test Angular';
  condition = false; // show register component
  show = true; // show login component
  showuser = false; // show userstat component

}