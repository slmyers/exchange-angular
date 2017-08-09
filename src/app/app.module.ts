import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ChangeDetectionComponent } from './components-overview/change-detection/change-detection.component';
import { ReactiveFormsOverviewComponent } from './reactive-forms-overview/reactive-forms-overview.component';
import { ComparisonComponent } from './reactive-forms-overview/comparison/comparison.component';



const appRoutes: Routes = [
  { path: '',
    component: GridListOverviewComponent,
    pathMatch: 'full'
  },
  { path: 'components',
    component: ComponentsOverviewComponent,
    children: [
      { path: 'intro',  component: IntroComponent },
      { path: 'templates', component: TemplatesComponent },
      { path: 'change-detection', component: ChangeDetectionComponent }
    ]
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsOverviewComponent,
    children: [
      { path: 'comparison-with-template-forms', component: ComparisonComponent }
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
    TemplatesComponent,
    ChangeDetectionComponent,
    ReactiveFormsOverviewComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdGridListModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
