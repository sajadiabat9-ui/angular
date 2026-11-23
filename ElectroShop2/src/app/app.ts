import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop22');

  storeName:string=    "ElectroShop";
storeDescription:string=    "Your favorite electronics store";
storeAddress:string =    "    Amman, Jordan";
totalProducts:number=    12;
isStoreOpen:boolean=true;
currency:string="USD";


productNames: string[] = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Smart Watch",
  "Keyboard"
];

productPrices: number[] = [
  750,
  450,
  80,
  120,
  45
];

featuredProduct = {
  name: "Laptop",
  price: 750,
  description: "High-performance laptop"
};

storeStatus: string = "";

discountPercentage: number = 10;
finalPrice: number = 0;


//البارت الاخير
productsCount: number = 0;
highestPrice: number = 0;
lowestPrice: number = 0;
totalValue: number = 0;


constructor() {
  if (this.isStoreOpen == true) {
    this.storeStatus = "We Are Open";
  } else {
    this.storeStatus = "We Are Closed";
  }


  //discount
   if (this.discountPercentage > 0) {
    this.finalPrice = this.featuredProduct.price -
      (this.featuredProduct.price * this.discountPercentage / 100);
  } else {
    this.finalPrice = this.featuredProduct.price;
  }



  // البارت الاخير 
this.productsCount = this.productNames.length;

this.highestPrice = this.productPrices[0];
this.lowestPrice = this.productPrices[0];

for (let i = 0; i < this.productPrices.length; i++) {

  let price = this.productPrices[i];

  this.totalValue += price;

  if (price > this.highestPrice) {
    this.highestPrice = price;
  }

  if (price < this.lowestPrice) {
    this.lowestPrice = price;
  }

}
}




}





