import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

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
<form class="reactive-auto-complete" novalidate (ngSubmit)="submit(myForm)" [formGroup]="myForm"> 
  <span> <input placeholder="name" formControlName="name"/> </span>
  <span> <input placeholder="age" formControlName="age"/> </span>
  <button type="submit" [disabled]="!myForm.valid">Submit</button>
</form>
`;

  reactiveComponent = `
myForm: FormGroup;
ngOnInit() {
  this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.compose([Validators.pattern('[0-9]+$'), Validators.required]) )
  });
} 
`;


  myForm: FormGroup;
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.compose([Validators.pattern('[0-9]+$'), Validators.required]) )
    });
  }


  submit(f) {
    console.log(f);
    alert(JSON.stringify(f.value));
  }

}
