import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/hignlight.directive';

@Component({
  selector: 'app-demo',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  isVisible = true;

  items = ['apple', 'mango', 'banana'];

  isActive = true;

  toggle(){
    this.isVisible =! this.isVisible;
  }
}
