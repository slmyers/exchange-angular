import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MdToolbarModule, MdGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridListOverviewComponent } from './grid-list-overview/grid-list-overview.component';

const appRoutes: Routes = [
  { path: '',
    component: GridListOverviewComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridListOverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdGridListModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
