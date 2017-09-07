import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  MdToolbarModule, MdGridListModule,
  MdSelectModule, MdAutocompleteModule,
  MdInputModule, MdListModule,
  MdDialogModule, MdButtonModule,
  MdTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridListOverviewComponent } from './grid-list-overview/grid-list-overview.component';
import { ComponentsOverviewComponent } from './components-overview/components-overview.component';
import { HelloworldComponent } from './components-overview/helloworld/helloworld.component';
import { IntroComponent } from './components-overview/intro/intro.component';
import { TemplatesComponent } from './components-overview/templates/templates.component';
import { ChangeDetectionComponent } from './components-overview/change-detection/change-detection.component';
import { ReactiveFormsOverviewComponent } from './reactive-forms-overview/reactive-forms-overview.component';
import { ComparisonComponent } from './reactive-forms-overview/comparison/comparison.component';
import { ReactiveExampleComponent } from './reactive-forms-overview/reactive-example/reactive-example.component';
import { FormServiceService } from './reactive-forms-overview/reactive-example/form-service.service';
import { FakeApiService } from './reactive-forms-overview/reactive-example/fake-api.service';
import { RouterOverviewComponent } from './router-overview/router-overview.component';
import { RouterConfigurationComponent } from './router-overview/router-configuration/router-configuration.component';
import { AuxiliaryRoutesComponent } from './router-overview/auxiliary-routes/auxiliary-routes.component';
import { MyModalComponent, MyModalDialog } from './router-overview/auxiliary-routes/my-modal/my-modal.component';
import { SharedModule } from './shared/shared.module';
import { ToolingOverviewComponent } from './tooling-overview/tooling-overview.component';
import { NgCliComponent } from './tooling-overview/ng-cli/ng-cli.component';
import { LanguageServicesComponent } from './tooling-overview/language-services/language-services.component';
import { ExampleGifComponent, AlsGifComponent } from './tooling-overview/language-services/example-gif/example-gif.component';
import { PropertyBindingComponent } from './components-overview/templates/property-binding/property-binding.component';


const appRoutes: Routes = [
  { path: 'modal',  outlet: 'modal',  component: MyModalComponent },
  {
    path: '',
    component: GridListOverviewComponent,
    pathMatch: 'full',
  },
  {
    path: 'components',
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
      { path: 'comparison-with-template-forms', component: ComparisonComponent },
      { path: 'example', component: ReactiveExampleComponent }
    ]
  },
  {
    path: 'routing',
    component: RouterOverviewComponent,
    children: [
      { path: 'reactive-example', component: RouterConfigurationComponent },
      { path: 'auxiliary-routes', component: AuxiliaryRoutesComponent },
      { path: 'lazy-load',  loadChildren: 'app/lazy/lazy.module#LazyModule' },
    ]
  },
  {
    path: 'tooling',
    component: ToolingOverviewComponent,
    children: [
      { path: 'ng-cli', component: NgCliComponent },
      { path: 'language-services', component: LanguageServicesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GridListOverviewComponent,
    ComponentsOverviewComponent,
    HelloworldComponent,
    IntroComponent,
    TemplatesComponent,
    ChangeDetectionComponent,
    ReactiveFormsOverviewComponent,
    ComparisonComponent,
    ReactiveExampleComponent,
    RouterOverviewComponent,
    RouterConfigurationComponent,
    AuxiliaryRoutesComponent,
    MyModalComponent,
    MyModalDialog,
    ToolingOverviewComponent,
    NgCliComponent,
    LanguageServicesComponent,
    ExampleGifComponent,
    AlsGifComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdGridListModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdInputModule,
    MdListModule,
    MdDialogModule,
    MdButtonModule,
    MdTooltipModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [FormServiceService, FakeApiService],
  entryComponents: [ MyModalDialog, AlsGifComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
