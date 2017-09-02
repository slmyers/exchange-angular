import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { FakeApiService } from './fake-api.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class FormServiceService {
  form: FormGroup;
  content$: Subject<any>;

  constructor(private fb: FormBuilder, private api: FakeApiService) {

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
    return (color === '' || brand === '') ? { emptyField: true } : null;
  }

  validateAsync(c: FormControl) {
    return Observable.of(c.value)
      .mergeMap( val => this.api.getByBoth(val.brand, val.color))
      .do(content => this.content$.next(content))
      .map((content: any[]) => content.length > 0 ? null : {emptyResponse: true});
  }
}
