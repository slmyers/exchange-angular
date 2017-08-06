import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  typescriptCode =
    `import { Component } from '@angular/core';
@Component({
  selector: 'hello-world',
  template: '<span> Hello {{ message }} </span>',
  styles: ['span { color: purple; font-size: larger; font-weight: bolder; border: solid 2px red; padding: 1em; }']  
})
export class HelloworldComponent{ message = 'world'; }`;
  constructor() { }

  ngOnInit() {
  }

}
