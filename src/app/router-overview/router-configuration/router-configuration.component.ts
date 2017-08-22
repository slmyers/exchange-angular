/* tslint:disable */
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-router-configuration',
  templateUrl: './router-configuration.component.html',
  styleUrls: ['./router-configuration.component.css']
})
export class RouterConfigurationComponent implements OnInit {
  routerConfiguration= `
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

  constructor() { }

  ngOnInit() {
  }

}
