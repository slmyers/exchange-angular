import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  templateBindings = `
<!-- templates.component.html -->
<ul>
  <li>
    num in parent = {{ num }}
  </li>
</ul>
<app-property-binding [num]="num" (update)="num = num + 2"></app-property-binding>
<!--property-binding.component.html-->
<span>
  num in child = {{ num }}
  <button md-button (click)="update.emit()">update</button>
</span>`

  ;
  componentBindings = `
//property-binding.component.ts
export class PropertyBindingComponent implements OnInit {
  @Input() num: number;
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.num++;
  }
}`;
  directives = `<my-other-component *ngFor="let item of items" highlight></my-other-component>`;
  pipes = `<div *ngIf="asyncBook$ | async as book; else loading">
   Id: {{book.id}}, Name: {{book.name}}
</div>   
<ng-template #loading>Loading Data...</ng-template>`;
  num = 0;
  constructor() { }

  ngOnInit() {
  }

}
