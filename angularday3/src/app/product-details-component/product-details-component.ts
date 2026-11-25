import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {



quantity = signal(1);

increaseQuantity() {
  this.quantity.update(q => q + 1);
}

decreaseQuantity() {
  if (this.quantity() > 1) {
    this.quantity.update(q => q - 1);
  }

}
  @Output() addToCart = new EventEmitter<any>();


sendToCart() {
  this.addToCart.emit({
    name: this.productName,
    quantity: this.quantity()
  });
}
//input 
@Input() productName: string = '';
@Input() description: string = '';
@Input() price: number = 0;
@Input() isAvailable: boolean = false;
}

