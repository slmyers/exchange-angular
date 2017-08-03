import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MdToolbarModule, MdGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridListOverviewComponent } from './grid-list-overview/grid-list-overview.component';
import { ComponentsOverviewComponent } from './components-overview/components-overview.component';
import { SideNavComponent } from './side-nav/side-nav.component';
/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

import { PrismComponent } from 'angular-prism/dist/src/prism.component';

const appRoutes: Routes = [
  { path: '',
    component: GridListOverviewComponent,
    pathMatch: 'full'
  },
  { path: 'components',
    component: ComponentsOverviewComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridListOverviewComponent,
    ComponentsOverviewComponent,
    SideNavComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdGridListModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
