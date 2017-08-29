import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowNavigationComponent } from './arrow-navigation/arrow-navigation.component';
import { PrismComponent } from 'angular-prism/src/prism.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArrowNavigationComponent,
    PrismComponent
  ],
  exports: [
    ArrowNavigationComponent,
    PrismComponent
  ]
})
export class SharedModule { }
