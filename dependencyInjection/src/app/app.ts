import { Component } from '@angular/core';
import { Demo } from './demo/demo';


@Component({
  selector: 'app-root',
  imports: [Demo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
