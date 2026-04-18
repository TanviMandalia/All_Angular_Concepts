import { Component, signal } from '@angular/core';
import { RouterLink} from '@angular/router';
import { About } from './pages/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterLink,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routing');
}
