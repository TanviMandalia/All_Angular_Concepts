import { Component } from '@angular/core';
import { UserList } from './component/user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserList],
  templateUrl: './app.html'
})
export class App {}