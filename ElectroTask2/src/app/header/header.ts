import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  storeName = 'ElectroShop';
  welcomeMessage = 'Welcome to ElectroShop';
  slogan = 'Everything You Need in One Place';

}