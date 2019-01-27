import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pages = [
      'Prices',
      'About',
      'Help',
      'Login'
  ];

  showBorder = false;

  onScrollHandler($event) {
    if ($event.detail.currentY === 0) {
      console.log('hide border');
      this.showBorder = false;
    } else {
      console.log('show border');
      this.showBorder = true;
    }
  }
}
