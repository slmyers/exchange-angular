/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-router-configuration',
  templateUrl: './router-configuration.component.html',
  styleUrls: ['./router-configuration.component.css']
})
export class RouterConfigurationComponent implements OnInit {
  componentCode = `
// my-component.component.ts
export class MyComponent implements OnInit {
  colors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' }
  ];

  // an Observable (in this context) is a stream of events that emit over time
  color: Observable<string>;
  count = 0;

  // ActivatedRoute provides various interfaces related to the current route
  constructor(private route: ActivatedRoute) { }

  // this function will run when the component is instantiated 
  ngOnInit() {
    this.color = this.route.queryParamMap
      // extract the query parameter associated with color, if not there then use inherit
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      // this.count represents how many times this observable chain is executed
      // (we'll get back to this)
      .do(_ => this.count++);
  }
}
`;

  templateCode = `
<!-- my-component.component.html -->
<ul>
  <li *ngFor="let choice of colors">
    <!-- link to same page with different query params, apply 'active-link' style to the activated link -->
    <a
      routerLinkActive="active-link"
      [routerLink]="['./']"
      [queryParams]="{ color: choice.color}"
      [routerLinkActiveOptions]="{ exact: true }">
      {{ choice.color }} 
    </a>
  </li>
</ul>

<!-- the query param will change the border color (if the color matches the query param) -->
<!-- notice we pass the 'color' variable through the 'async' pipe. -->
<div class="color-output">
  <div 
    *ngFor="let choice of colors" 
    [ngStyle]="{'border-color': (color | async) === choice.color ? choice.color : null }"> 
    {{ choice.color }}
  </div>
</div>

<!-- pass color through the async pipe twice more -->
<section class="bullet-points">
  <ul title="overview points" [style.color]="color | async">
    <li> The number of executions is: {{ count }}</li>
    <li> This color is {{ color | async }} </li>
  </ul>
</section>
`;

  _componentCode = `
  _color: Observable<string>;
  _count = 0;
  
  ngOnInit() {
    this._color = this.route.queryParamMap
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      .do(_ => this._count++)
      // we share the previous results to the subscribers
      .share();
      
  }
`;

  _templateCode_ = `
<!-- we can resolve the observable once and make a local variable available -->
<section class="bullet-points" *ngIf="(_color_ | async) as resolvedColor" >
  <ul title="overview points" [style.color]="resolvedColor">
    <li> The number of executions is: {{ _count_ }}</li>
    <li> This color is {{ resolvedColor }} </li>
  </ul>
</section>
`;


  colors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' }
  ];

  color: Observable<string>;
  _color: Observable<string>;
  _color_: Observable<string>;
  count = 0;
  _count = 0;
  _count_ = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.color = this.route.queryParamMap
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      .do(_ => this.count++);

    this._color = this.route.queryParamMap
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      .do(_ => this._count++)
      .share();

    this._color_ = this.route.queryParamMap
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      .do(_ => console.log(`_count_: ${this._count_++}`) );

  }
}
