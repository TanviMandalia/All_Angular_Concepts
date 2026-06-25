import { Component, signal, effect, computed } from '@angular/core';
import { Counter } from './counter/counter';
import { Search } from './search/search';

@Component({
  selector: 'app-root',
  imports: [Counter, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal');

  name = signal('');

  constructor() {
    effect(() => {
      console.log("Name Chnaged:", this.name());

    });
  }
  update(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name.set(value);
  }

  form = signal({
    email: '',
    password: ''
  });

  updateEmail(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.form.update(f => ({
      ...f,
      email: value
    }));
  }

  updatePassword(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.form.update(f => ({
      ...f,
      password: value
    }));
  }

  isValid = computed(() => {
    const f = this.form();
    return f.email.includes('@') && f.password.length >=6;
  });
}
