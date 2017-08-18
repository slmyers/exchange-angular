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

  constructor(private fs: FormServiceService ) { }

  ngOnInit() {
    this.form = this.fs.form;

    this.brands = this.form.get('brand').valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.brandOptions);

    this.content$ = this.fs.content$.asObservable();
  }

  filter(val): string[] {
    return this.brandOptions.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }
}
