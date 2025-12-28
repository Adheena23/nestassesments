// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ApiService } from '../../api-service';

// @Component({
//   selector: 'app-product',
//   standalone: true,                 // 👈 REQUIRED
//   imports: [CommonModule],          // 👈 REQUIRED for *ngFor
//   templateUrl: './product.html',
//   styleUrl: './product.css',
// })
// export class Product implements OnInit {

  // array declaration
//   import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,          // ✅ REQUIRED
  imports: [CommonModule, RouterLink],   // ✅ REQUIRED for *ngFor
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  products: any[] = [];

  constructor(private apiservice: ApiService ) {}

  ngOnInit() {
    this.apiservice.getproduct().subscribe((data: any) => {
      this.products = data;
    });
  }
}