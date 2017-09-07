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
  <!-- notice the ngModel and it's surrounding [()] brackets => implies 2 way binding -->
  <input placeholder="name" [(ngModel)]="name" name="name" required/>
  <input placeholder="age" [(ngModel)]="age" name="age" pattern="[0-9]+" required/>
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
<div> Async validation ran: {{count}} times</div>
<!-- notice how we pass in a 'formGroup' property -->
<form  
    [ngStyle]="{'border': myForm.valid ? 'blue solid 1px' : 'red solid 1px'}" 
    novalidate 
    (ngSubmit)="submit(myForm)" 
    [formGroup]="myForm"> 
  <!-- the following inputs will match with properties in the 'formGroup' via 'formControlName' -->
  <input placeholder="name" formControlName="name"/>
  <input placeholder="age" formControlName="age"/>
  <button type="submit" [disabled]="!myForm.valid">Submit</button>
</form>
`;

  reactiveComponent = `
export class MyReactiveForm implements OnInit {
  // form as a data structure
  myForm: FormGroup;
  // count how many times we've ran async validation
  count = 0;
  // this function runs on initialization
  ngOnInit() {
    // notice how the object properties map to the 'formControlName' directives
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.compose([Validators.pattern('[0-9]+$'), Validators.required]))
    }, null, this.validateAsync.bind(this));
  }
  // this validation will only run when synchronous validations return no errors.
  validateAsync(c: FormControl) {
    return new Promise( (resolve, reject) => {
      const name = c.value.name;
      const age = c.value.age;
      const valid = ( name.toLowerCase().trim() === 'john' && age === '23' );
      this.count++;

      // null implies no errors, object implies errors.
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
