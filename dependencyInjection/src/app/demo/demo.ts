import { Component } from '@angular/core';
import { Logger } from '../services/logger';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {

  constructor(private logger: Logger) { }

  sayHello() {
    this.logger.log("Hello from Component!");
  }

}
