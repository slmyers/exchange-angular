import { Injectable, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FakeApiService } from './fake-api.service';

@Injectable()
export class FormServiceService {
  form: FormGroup;
  content$: Observable<any>;

  constructor(@Inject(FormBuilder)fb: FormBuilder, private api: FakeApiService) {
    this.form = fb.group({
      'color': [''],
      'brand': ['']
    }, null, );

    this.content$ = Observable.create();
  }

  validateAsync(c: FormControl) {
    
  }

}
