import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './form-service.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent implements OnInit {
  form: FormGroup;
  content$: Observable<any>;
  options = [
    'red',
    'green',
    'black'
  ].sort( (a, b) => a.localeCompare(b));
  brandOptions = [
    'ford',
    'honda',
    'hondai',
    'hondiaia',
    'chevrolet'
  ].sort( (a, b) => a.localeCompare(b));

  brands: Observable<string[]>;

  componentClassDescription = `
constructor(private fs: FormServiceService ) { }

  ngOnInit() {
    this.form = this.fs.form;

    this.brands = this.form.get('brand').valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.brandOptions);

    this.content$ = this.fs.content$.asObservable();
  }

  filter(val): string[] {
    return this.brandOptions.filter(option => new RegExp('^' + val, 'gi').test(option));
  }
}`;

  formServiceDescription = `
export class FormService {
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
      .switchMap( val => this.api.getByBoth(val.brand, val.color) )
      .do( content => this.content$.next(content) )
      .map( (content: any[]) => content.length > 0 ? null : { emptyResponse: true } );
  }
}
`;

  componentTemplateDescription = `
<section class="example" [formGroup]="form">

      <md-select formControlName="color" placeholder="Select Color" [style.border-left-color]="form.value.color">
        <md-option *ngFor="let option of options" [value]="option">
          <span [style.border-left-color]="option"> {{ option }}</span>
        </md-option>
      </md-select>

      <md-input-container>
        <input type="text" placeholder="brand" mdInput formControlName="brand" [mdAutocomplete]="auto">
      </md-input-container>

      <md-autocomplete #auto="mdAutocomplete">
        <md-option *ngFor="let option of brands | async" [value]="option">
          {{ option }}
        </md-option>
      </md-autocomplete>

</section>

<section class="centered">
    <md-divider></md-divider>

    <md-list *ngIf="!form.errors; else noContent">
      <md-list-item *ngFor="let item of content$ | async">
        <h3 md-line> {{item.name}} </h3>
        <p md-line> {{item.color}} </p>
        <p md-line class="demo-2"> {{item.manufacturer}} </p>
      </md-list-item>
    </md-list>

    <ng-template #noContent>No Content</ng-template>
</section>
`;



  constructor(private fs: FormServiceService ) { }

  ngOnInit() {
    this.form = this.fs.form;

    this.brands = this.form.get('brand').valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.brandOptions);

    this.content$ = this.fs.content$.asObservable();
  }

  filter(val): string[] {
    return this.brandOptions.filter(option => new RegExp('^' + val, 'gi').test(option));
  }
}
