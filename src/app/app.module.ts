import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MdToolbarModule, MdGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridListOverviewComponent } from './grid-list-overview/grid-list-overview.component';
import { ComponentsOverviewComponent } from './components-overview/components-overview.component';
import { PrismComponent } from 'angular-prism/dist/src/prism.component';
import { HelloworldComponent } from './components-overview/helloworld/helloworld.component';
import { ArrowNavigationComponent } from './arrow-navigation/arrow-navigation.component';
import { IntroComponent } from './components-overview/intro/intro.component';
import { TemplatesComponent } from './components-overview/templates/templates.component';



const appRoutes: Routes = [
  { path: '',
    component: GridListOverviewComponent,
    pathMatch: 'full'
  },
  { path: 'components',
    component: ComponentsOverviewComponent,
    children: [
      { path: 'intro',  component: IntroComponent },
      { path: 'templates', component: TemplatesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridListOverviewComponent,
    ComponentsOverviewComponent,
    PrismComponent,
    HelloworldComponent,
    ArrowNavigationComponent,
    IntroComponent,
    TemplatesComponent
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
