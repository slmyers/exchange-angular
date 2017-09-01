import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-language-services',
  templateUrl: './language-services.component.html',
  styleUrls: ['./language-services.component.css']
})
export class LanguageServicesComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

}
