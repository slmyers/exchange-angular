import { Component } from '@angular/core';
@Component({
  selector: 'app-hello-world',
  template: `<span> Hello {{ message }}</span>`,
  styles: ['span { color: purple; font-size: larger; font-weight: bolder; border: solid 2px red; padding: 1em; }']
})
export class HelloworldComponent{ message = 'world'; }
