import { Component, signal } from '@angular/core';
import { TemplateForm } from './template-form/template-form';
import { ReactiveFormComponent } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [ TemplateForm, ReactiveFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
