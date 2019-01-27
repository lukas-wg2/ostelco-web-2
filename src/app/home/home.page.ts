import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pages = [
      { label: 'Prices', url: '/list' },
      { label: 'About', url: '/list' },
      { label: 'Help', url: '/home' },
      { label: 'Login', url: '/home' },
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
