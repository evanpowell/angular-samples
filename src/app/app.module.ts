import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    DirectiveSampleComponent,
    PipeSampleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
