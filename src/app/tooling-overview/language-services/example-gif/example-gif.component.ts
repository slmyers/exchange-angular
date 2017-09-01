import { Component, OnInit, HostListener } from '@angular/core';
import { MdDialog } from '@angular/material';


@Component({
  selector: 'app-example-gif',
  templateUrl: './example-gif.component.html',
  styleUrls: ['./example-gif.component.css']
})
export class ExampleGifComponent implements OnInit {
  src = 'assets/angular-language-service-example.gif';
  @HostListener('click') show() {
    this.dialog.open(AlsGifComponent, {
      width: '90%',
    });
  }



  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-als-gif',
  template: `<img src ="/assets/angular-language-service-example.gif" />`,
  styles: [
    `
      img {
        width: 100%;
      }
    `
  ]
})
export class AlsGifComponent {}
