import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazyContentComponent } from './lazy-content/lazy-content.component';
import { SharedModule } from '../shared/shared.module';


const lazyRoutes: Routes = [
  { path: '', component: LazyContentComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes),
    SharedModule
  ],
  declarations: [
    LazyContentComponent
  ]
})
export class LazyModule { }
