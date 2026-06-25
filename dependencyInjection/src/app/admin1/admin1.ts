import { Component } from '@angular/core';
import { Admin } from '../admin/admin';

@Component({
  selector: 'app-admin1',
  imports: [],
  templateUrl: './admin1.html',
  styleUrl: './admin1.css',
})
export class Admin1 {
  users: string[] = [];

  constructor(private AdminSevice : Admin){}

  load(){
    this.users = this.AdminSevice.getData();
  }
}
