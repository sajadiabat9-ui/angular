import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

   products = [
    {
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image: 'laptop.jpg',
      isAvailable: true
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'smartphone.jpg',
      isAvailable: true
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'headphones.jpg',
      isAvailable: true
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'watch.jpg',
      isAvailable: true
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'keyboard.jpg',
      isAvailable: false
    }
  ];

  buyProduct(name: string) {
    alert('You selected ' + name);
  }

}
