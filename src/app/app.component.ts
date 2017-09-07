import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/do';

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
    ],
    'reactive-forms': [
      'comparison-with-template-forms',
      'example'
    ],
    'routing': [
      'reactive-example',
      'lazy-load'
    ],
    'tooling': [
      'ng-cli',
      'language-services'
    ]
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

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

    this.router.events.map(ev => ev instanceof NavigationEnd )
      .debounceTime(20)
      .mergeMapTo(this.route.queryParamMap)
      .pluck('params')
      .filter(params => Object.keys(params).length === 0)
      .subscribe(_ => {
        document.body.scrollTop = 0;
      });
  }
}
