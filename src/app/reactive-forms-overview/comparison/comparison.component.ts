import { Component } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent {

  templateExample = `
  <form #f="ngForm" (ngSubmit)="submit(f)">
    <span> <input placeholder="name" [(ngModel)]="name" name="name" required/> </span>
    <span> <input placeholder="age" [(ngModel)]="age" name="age"/> </span>
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

  submit(f) {
    console.log(f);
    alert(JSON.stringify(f.value));
  }

}
