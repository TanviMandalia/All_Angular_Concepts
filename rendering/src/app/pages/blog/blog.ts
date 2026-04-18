import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
 standalone: true,
  selector: 'app-blog',
  imports: [NgIf],
  template: `
    <div *ngIf="post">
      {{ post.title }}
    </div>
  `
})
export class Blog {
  private http = inject(HttpClient);
  post: any;

  constructor() {
    this.http.get('https://api.example.com/post/1')
      .subscribe(data => {
        this.post = data;
      });
  }
}