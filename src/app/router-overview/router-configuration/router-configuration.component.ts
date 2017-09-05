/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-router-configuration',
  templateUrl: './router-configuration.component.html',
  styleUrls: ['./router-configuration.component.css']
})
export class RouterConfigurationComponent implements OnInit {
  routerConfiguration = `
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
`;

  componentCode = `
...
  colors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' }
  ];

  color: Observable<string>;
  count = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.color = this.route.queryParamMap
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      .do(_ => ++this.count);
  }
...
`;

  templateCode = `
<ul>
  <li *ngFor="let choice of colors">
    <a
      routerLinkActive="active-link"
      [routerLink]="['./']"
      [queryParams]="{ color: choice.color}"
      [routerLinkActiveOptions]="{ exact: true }">
      {{ choice.color }} 
    </a>
  </li>
</ul>

<div class="color-output">
  <div 
    *ngFor="let choice of colors" 
    [ngStyle]="{'border-color': (color | async) === choice.color ? choice.color : null }"> 
    {{ choice.color }}
  </div>
</div>

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
      .do(_ => ++this._count)
      .share();
  }
`;

  _templateCode_ = `
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
      .do(_ => ++this.count);

    this._color = this.route.queryParamMap
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      .do(_ => ++this._count)
      .share();

    this._color_ = this.route.queryParamMap
      .map( (obj: any) => obj.params.color ? obj.params.color : 'inherit')
      .do(_ => console.log(`_count_: ${++this._count_}`) );

  }
}
