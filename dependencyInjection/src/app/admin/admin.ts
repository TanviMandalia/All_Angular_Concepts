import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Admin {
  constructor(){
    console.log('AdminService CREATED (Lazy Loaded)');
  }

  getData(){
    return ['user1', 'user2', 'user3'];
  }
}
