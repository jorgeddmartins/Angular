import { Component } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	logoImg = 'assets/img/logo.svg';
	userImg = 'assets/img/male.jpg';
	menuImg = 'assets/img/menu.svg';

	menus: object = {};

	public shownow:boolean = false;

	mtoggle() {

		this.shownow = !this.shownow;
	}

  	constructor() {

  		this.menus = [

  			{ url: '/', name: 'Deals of the day' },
  			{ url: '/', name: 'Drinks' },
  			{ url: '/', name: 'Weekend Fun' },
  			{ url: '/', name: 'Our Specials' },
  			{ url: '/', name: 'My Orders' }
  		]
  	}
}
