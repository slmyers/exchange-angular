import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  @Input() num: number;
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.num++;
  }
}
