import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  routes = {
    'components': [
      'intro',
      'templates',
      'change-detection'
    ],
    'reactive-forms': [
      'comparison-with-template-forms',
      'example'
    ],
    'routing': [
      'configuration',
      'auxiliary-routes',
      'lazy-load'
    ],
    'tooling': [
      'ng-cli'
    ]
  };

  constructor(private router: Router) {}

  ngOnInit() {
    Observable.fromEvent(document, 'keyup')
      .pluck('key')
      .filter(key => key === 'ArrowRight' || key === 'ArrowLeft')
      .map(key => [key, this.router.url.split('/').filter(x => x.length > 0)])
      .subscribe( ([direction, location]) => {
        const section = this.routes[(location[0])];
        if (!section) {
          return;
        }

        const currentIndex = section.indexOf(location[1]);
        if (currentIndex < 0) {
          return;
        }

        const newIndex = direction === 'ArrowLeft' ? (currentIndex - 1) : (currentIndex + 1);

        if (newIndex > (section.length - 1) || newIndex < 0) {
          return this.router.navigateByUrl('/');
        }

        this.router.navigateByUrl( [location[0], section[newIndex]].join('/') );
      });
  }
}
