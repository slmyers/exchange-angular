import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-overview',
  templateUrl: './components-overview.component.html',
  styleUrls: ['./components-overview.component.css'],
})
export class ComponentsOverviewComponent implements OnInit {
  cssCode =
`
p {
  color:red;
}`.trim();
  constructor() { }

  ngOnInit() {}

}
