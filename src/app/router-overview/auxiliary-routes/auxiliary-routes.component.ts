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
  <router-outlet name="modal"></router-outlet>
  <a [routerLink]="[ {outlets: { modal: 'modal' } } ]"><button md-button>Open Modal</button></a>
`;

  constructor() { }

  ngOnInit() {
  }

}
