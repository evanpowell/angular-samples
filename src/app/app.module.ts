import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { ServiceSampleComponent } from './service-sample/service-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    HomeComponent,
    FormsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    DirectiveSampleComponent,
    PipeSampleComponent,
    ServiceSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
