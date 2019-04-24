import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {
        path: 'template',
        component: TemplateFormComponent
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent
      }
    ]
  },
  {
    path: 'directives',
    component: DirectiveSampleComponent
  },
  {
    path: 'pipes',
    component: PipeSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
