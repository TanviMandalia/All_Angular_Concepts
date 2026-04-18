
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  user = {
    name: '', email: ''
  };

  onSubmit(form: any) {
    console.log('Template Form Data: ', form.value);
  }
}
