import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  // Route Param Example
  id: string | null = "";

  constructor(private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
