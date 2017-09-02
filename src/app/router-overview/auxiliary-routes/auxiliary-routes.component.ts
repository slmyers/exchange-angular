import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auxiliary-routes',
  templateUrl: './auxiliary-routes.component.html',
  styleUrls: ['./auxiliary-routes.component.css']
})
export class AuxiliaryRoutesComponent implements OnInit {

  auxRoute = `
const appRoutes: Routes = [
  ...,
  {
    path: 'modal',
    outlet: 'modal',
    component: MyModalComponent
  }
];  
`;

  auxMarkup = `
  <!-- app.component.html -->
  <router-outlet name="modal"></router-outlet>
  <!-- router-overview/auxiliary-routes/auxiliary-routes.component.html -->
  <a [routerLink]="[ {outlets: { modal: 'modal' } } ]"><button md-button>Open Modal</button></a>
`;

  constructor() { }

  ngOnInit() {
  }

}
