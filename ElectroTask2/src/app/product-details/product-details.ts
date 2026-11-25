import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  productName = 'Laptop';
  productDescription = 'High-performance laptop';
  productPrice = 750;
  productImage = 'laptop.jpg';
  quantity = 1;
  isAvailable = true;
  discountPercentage = 10;

}