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
export class MyReactiveFormComponent {
  // options for our select
  options = [
    'red',
    'green',
    'black'
  ].sort( (a, b) => a.localeCompare(b));
  // options for autofill
  brandOptions = [
    'ford',
    'honda',
    'hondai',
    'hondiaia',
    'chevrolet'
  ].sort( (a, b) => a.localeCompare(b));

  // the form we hook up to controls
  form: FormGroup;
  // the content returned from our service (result of fake server call)
  content$: Observable<any>;
  // Observable used to populate autofill
  brands: Observable<string[]>;
  // we will inject a service providing the FormGroup
  constructor(private fs: FormServiceService ) { }

  ngOnInit() {
    this.form = this.fs.form;

    // FormControl#valueChanges is an Observable interface that emits changes -- think onchange.
    this.brands = this.form.get('brand').valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.brandOptions);

    // our service will push the results of our fake API through our local Observable
    this.content$ = this.fs.content$.asObservable();
  }

  // regex test on our array of brands
  filter(val): string[] {
    return this.brandOptions.filter(option => new RegExp('^' + val, 'gi').test(option));
  }
}
`;

  formServiceDescription = `
export class FormService {
  form: FormGroup;
  // a Subject can be used to push or pull events/values. We will use to push results from query to consumer(s).
  content$: Subject<any>;

  constructor(private fb: FormBuilder, private api: FakeApiService) {
    // we can use a FormBuilder to make it easier to build our FormGroup
    this.form = fb.group({
      'color': [''],
      'brand': ['']
    }, {
      'validator': FormServiceService.validateSync,
      'asyncValidator': this.validateAsync.bind(this)
    });

    this.content$ = new Subject();
  }

  // checks to see if we have an empty value in our form => valid if no empty value
  static validateSync(c: FormControl) {
    const color = c.get('color').value;
    const brand = c.get('brand').value;
    return (color === '' || brand === '') ? { emptyField: true } : null;
  }

  // used to make fake API call and push content via content$
  validateAsync(c: FormControl) {
    return Observable.of(c.value) // lift our form value
      .mergeMap( val => this.api.getByBoth(val.brand, val.color) ) // make call and resolve value
      .do( content => this.content$.next(content) ) // push the content
      .map( (content: any[]) => content.length > 0 ? null : { emptyResponse: true } );
  }
}
`;

  componentTemplateDescription = `
<!-- reference our FormGroup -->
<section class="example" [formGroup]="form">

  <!-- the control for the color property of our form -->
  <md-select formControlName="color" placeholder="Select Color" [style.border-left-color]="form.value.color">
    <md-option *ngFor="let option of options" [value]="option">
      <span [style.border-left-color]="option"> {{ option }}</span>
    </md-option>
  </md-select>

  <md-input-container>
    <!-- the control for the brand property of our form -->
    <input type="text" placeholder="brand" mdInput formControlName="brand" [mdAutocomplete]="auto">
  </md-input-container>

  <!-- reacts to changes in the text input -->
  <md-autocomplete #auto="mdAutocomplete">
    <!-- the brands Observable populates our autofill -->
    <md-option *ngFor="let option of brands | async" [value]="option">
      {{ option }}
    </md-option>
  </md-autocomplete>

</section>

<!-- the results from the fake search -->
<section class="centered">
    <md-divider></md-divider>

    <!-- if no errors show this -->
    <md-list *ngIf="!form.errors; else noContent">
      <!-- content$ is used to populate list -->
      <md-list-item *ngFor="let item of content$ | async">
        <h1 md-line> {{item.name}} </h1>
        <h2 md-line> {{item.color}} </h2>
        <h2 md-line class="demo-2"> {{item.manufacturer}} </h2>
      </md-list-item>
    </md-list>

    <!-- if there are errors show this -->
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
