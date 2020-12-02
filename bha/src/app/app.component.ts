import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 	
  	deals: object = {};

  	public show:boolean = false;

  	authShow() {

    	this.show = !this.show;
	}

  	constructor() {

		this.deals = [

			{
				img: 'assets/img/sandwish.jpg',
				desc: 'Turkey on Weat with Lettuce, Tomato and Onion',
				price: '4.50',
				deal: 'Best Price'
			},
			{
				img: 'assets/img/chicken.jpg',
				desc: 'Beef on Weat with Lettuce and Tomato',
				price: '5.50',
				deal: 'Day Special'
			},
			{
				img: 'assets/img/pickle.jpg',
				desc: 'Beef on Rye with Lettuce, Tomato and pickle',
				price: '4.50',
				deal: 'Best Deal'
			},
			{
				img: 'assets/img/chicken2.jpg',
				desc: 'Ham and Pickle (White Bread )',
				price: '4.00',
				deal: 'Xmas Special'
			},
			{
				img: 'assets/img/beef.jpg',
				desc: '"Onion Lover" - Ham or Beef on Rye with Onion',
				price: '7.00',
				deal: 'Deal of the Week'
			},
			{
				img: 'assets/img/yummy.jpg',
				desc: '"Jamon, jamon" - Ham on Wheat with Lettuce and Tomato',
				price: '6.30',
				deal: 'Just For You'
			},
			{
				img: 'assets/img/fish.jpg',
				desc: 'Turkey, Lettuce and Tomato on Rye',
				price: '6.30',
				deal: 'Special of the day'
			},
			{
				img: 'assets/img/chicken3.jpg',
				desc: 'Beef, Lettuce and Tomato on Rye',
				price: '6.30',
				deal: 'Xmas Special'
			},
			{
				img: 'assets/img/bacon.jpg',
				desc: 'Ham on Wheat with Lettuce, Tomato and Onion',
				price: '6.30',
				deal: 'Winter sandwish'
			}
		]
	}
}
