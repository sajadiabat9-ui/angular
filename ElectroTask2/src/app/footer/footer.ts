import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer { storeName = 'ElectroShop';
  address = 'Amman, Jordan';
  email = 'info@electroshop.com';
  copyright = 'Copyright © 2026 ElectroShop';}
