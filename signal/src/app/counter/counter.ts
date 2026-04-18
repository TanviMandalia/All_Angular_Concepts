import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);
  value: number = 0;

  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update((value: number) => value + 1);
  }

  decrement() {
    this.count.update((value: number) => {
    if (value <= 0) return 0;
    return value - 1;
  });
  }

  reset() {
    this.count.set(0);
  }
}
