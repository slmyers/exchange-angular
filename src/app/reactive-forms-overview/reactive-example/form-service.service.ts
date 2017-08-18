import { Injectable, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { FakeApiService } from './fake-api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class FormServiceService {
  form: FormGroup;
  content$: Subject<any>;

  constructor(@Inject(FormBuilder)fb: FormBuilder, private api: FakeApiService) {

    this.form = fb.group({
      'color': [''],
      'brand': ['']
    }, {
      'validator': FormServiceService.validateSync,
      'asyncValidator': this.validateAsync.bind(this)
    });

    this.content$ = new Subject();
  }

  static validateSync(c: FormControl) {
    const color = c.get('color').value;
    const brand = c.get('brand').value;

    if (color === '' || brand === '') {
      return {emptyField: 'One or more empty fields'};
    }
    return null;
  }

  validateAsync(c: FormControl) {
    return Observable.of(c.value)
      .do( _ => console.log(_))
      .switchMap( val => this.api.getByBoth(val.brand, val.color))
      .do( thing => console.log(thing))
      .do(content => this.content$.next(content))
      .map((content: any[]) => {
        if (content.length > 0) {
          return {};
        }
        return {emptyResponse: true};
      });
  }
}
