import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-navigation',
  template: '<span><ng-content></ng-content></span>',
  styles: ['']
})
export class ArrowNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
