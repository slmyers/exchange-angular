import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
  name;
  age;


  templateExample = `
<form #f="ngForm" (ngSubmit)="submit(f)">
  <span> <input placeholder="name" [(ngModel)]="name" name="name" required/> </span>
  <span> <input placeholder="age" [(ngModel)]="age" name="age" pattern="[0-9]+" required/> </span>
  <button type="submit" [disabled]="!f.valid">Submit</button>
</form>
`;
  templateComponent = `
export class SomeComponent {
  submit(f) {
    console.log(f);
    alert(JSON.stringify(f.value));
  }
}
`;


  reactiveExample = `
<div> Async validation ran: {{asyncValidationRun}}</div>
<form 
    class="reactive-form" 
    [ngStyle]="{'border': myForm.valid ? 'blue solid 1px' : 'red solid 1px'}" 
    novalidate 
    (ngSubmit)="submit(myForm)" 
    [formGroup]="myForm"> 
  <span> <input placeholder="name" formControlName="name"/> </span>
  <span> <input placeholder="age" formControlName="age"/> </span>
  <button type="submit" [disabled]="!myForm.valid">Submit</button>
</form>
`;

  reactiveComponent = `
myForm: FormGroup;
count = 0;
ngOnInit() {
  this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.compose([Validators.pattern('[0-9]+$'), Validators.required]))
  }, null, this.validateAsync.bind(this));
}
validateAsync(c: FormControl) {
    return new Promise( (resolve, reject) => {
      const name = c.value.name;
      const age = c.value.age;
      const valid = ( name.toLowerCase().trim() === 'john' && age === '23' );
      this.count++;

      setTimeout( () => {
        if (valid) {
          resolve(null);
        } else {
          reject({'invalid-name': name});
        }
      }, 200);

    });
  }
`;


  myForm: FormGroup;
  count = 0;
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.compose([Validators.pattern('[0-9]+$'), Validators.required]) )
    }, null, this.validateAsync.bind(this));

  }

  submit(f) {
    console.log(f);
    alert(JSON.stringify(f.value));
  }

  validateAsync(c: FormControl) {
    return new Promise( (resolve, reject) => {
      const name = c.value.name;
      const age = c.value.age;
      const valid = ( name.toLowerCase().trim() === 'john' && age === '23' );
      this.count++;

      setTimeout( () => {
        if (valid) {
          resolve(null);
        } else {
          reject({'invalid-name': name});
        }
      }, 200);

    });
  }

}
