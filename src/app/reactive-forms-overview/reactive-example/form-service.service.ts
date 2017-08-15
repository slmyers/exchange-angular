import { Injectable, Inject } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FormServiceService {
  form: FormGroup;
  constructor(@Inject(FormBuilder)fb: FormBuilder) {
    this.form = fb.group({
      'color': ['white', Validators.required],
      'brand': ['', Validators.required]
    });

    console.log(this.form);
  }

}
