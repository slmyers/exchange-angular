import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  templateBindings = `<my-component [prop]="foo" (bar)="handleBar($event)></my-component>`;
  directives = `<my-other-component *ngFor="let item of items" highlight></my-other-component>`;
  pipes = `<div *ngIf="asyncBook$ | async as book; else loading">
   Id: {{book.id}}, Name: {{book.name}}
</div>   
<ng-template #loading>Loading Data...</ng-template>`;
  constructor() { }

  ngOnInit() {
  }

}
