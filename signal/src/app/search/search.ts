import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchText = signal('');
  debouncedText = signal('');

  private timeout: any;

  constructor() {
    effect(() => {
      const value = this.searchText();

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.debouncedText.set(value);
      }, 500)
    });
  }
    onInput(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.searchText.set(value);
  }
}
