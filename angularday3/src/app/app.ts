import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angularday3');
  productName = signal('Laptop');
description = signal('Dell Laptop, Core i7, 16GB RAM');
price = signal(850);
isAvailable = signal(true);

//recive from output 
cartName = '';
cartQuantity = 0;
cartPrice = 0;

receiveCart(data: any) {
  this.cartName = data.name;
  this.cartQuantity = data.quantity;
  this.cartPrice = this.price();
}



//change 
changeProduct() {
  this.productName.set('Wireless Headphones');
  this.description.set('Bluetooth Headphones');
  this.price.set(120);
  this.isAvailable.set(true);
}
}
