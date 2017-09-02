import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  templateBindings = `
<!-- parent.component.html -->
<app-property-binding [num]="num" (update)="num = num + 2"></app-property-binding>`
;
  componentBindings = `
//property-binding.component.ts
export class PropertyBindingComponent {
  @Input() num: number;
  @Output() update = new EventEmitter();
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
