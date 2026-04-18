import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList {
   users = [
    { id: 1, name: 'Amit', email: 'amit@gmail.com' },
    { id: 2, name: 'Rahul', email: 'rahul@gmail.com' },
    { id: 3, name: 'Priya', email: 'priya@gmail.com' }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('error fetching user', err);
      }
    });
  }
}