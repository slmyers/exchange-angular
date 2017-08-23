import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-content',
  templateUrl: './lazy-content.component.html',
  styleUrls: ['./lazy-content.component.css']
})
export class LazyContentComponent implements OnInit {

  lazyloadDeclaration = `
{
    path: 'lazy-load',
    loadChildren: 'app/lazy/lazy.module#LazyModule'
}
`;

  constructor() { }

  ngOnInit() {
  }

}
