/* tslint:disable */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit, OnDestroy {
  constructor(public dialog: MdDialog, private router: Router) { }

  ngOnInit() {
    setTimeout( () => this.dialog.open(MyModalDialog), 0 );
    this.dialog.afterAllClosed.subscribe(_ => this.router.navigate(['/routing/auxiliary-routes/', {outlets: {modal: null}}]));
  }

  ngOnDestroy() {
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'app-my-modal-dialog',
  template: `
    <h2 md-dialog-title>Hi I'm a modal with a route: {{activeRoute}}</h2>
    <md-dialog-content>Do you like kittens?</md-dialog-content>
    <md-dialog-actions>
      <button md-button md-dialog-close>No, I'm horrible</button>
      <!-- Can optionally provide a result for the closing dialog. -->
      <button md-button [md-dialog-close]="true">Yes of course</button>
    </md-dialog-actions>
  
  `
})
export class MyModalDialog implements OnInit {
  activeRoute = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.activeRoute = this.router.routerState.snapshot.url;
  }
}

