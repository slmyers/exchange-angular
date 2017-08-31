import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-list-overview',
  templateUrl: './grid-list-overview.component.html',
  styleUrls: ['./grid-list-overview.component.css']
})
export class GridListOverviewComponent {

  constructor(public router: Router) { }

}
