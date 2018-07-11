import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'products-page',
  	templateUrl: './products.component.html',

  	styles: [
  			 	'.color1 { color: #36b5d7 }',
  			 	'.color2 { color: #225167 }',
  			 	'.color3 { color: #206fc6 }',
  			 	'.color4 { color: #662d91 }',
  			 	'.color5 { color: #8dc63f }',
  			 	'.color6 { color: #e88f29 }',
  			 	'.color7 { color: #fed140 }',
  			 	'.color8 { color: #f0492f }',
  			 	'.color9 { color: #478abc }',

  			 	'.backColor1 { background: #36b5d7 }',
  			 	'.backColor2 { background: #225167 }',
  			 	'.backColor3 { background: #206fc6 }',
  			 	'.backColor4 { background: #662d91 }',
  			 	'.backColor5 { background: #8dc63f }',
  			 	'.backColor6 { background: #e88f29 }',
  			 	'.backColor7 { background: #ecbd24 }',
  			 	'.backColor8 { background: #f0492f }',
  			 	'.backColor9 { background: #478abc }'
  			]
})
export class ProductsComponent implements OnInit {

	marketlists: object = {};
	textinfo: string;
	textinfo2: string;
	productimgs: object = {};
	titleproducts: string;
	subtitleproducts: string;

  	constructor() {

  		this.titleproducts = 'LEADERS IN LEAD GENERATION';
  		this.subtitleproducts = 'Our lead lead generating software makes it easy to capture leads; whether from a lead form on your landing page or inserted directly into the system via host and post. You act as the advertiser, setting rules and filters that instantly connect your data to the highest bidder.';

  		this.textinfo = 'Time is money and we recognize that your time is important. We can help you generate the customers you want without having to filter through reams of information. We continually optimise our traffic to give the best performance for each channel &amp; buyer ahead of time. We offer consumers what they’re looking for and match you with the consumers you want to sell your product to.';
  		this.textinfo2 = 'Get in touch with us today to see how you could start generating leads for your business.';

  		this.marketlists = [

  			{ colorClass: 'color1', name: 'Insurance' },
  			{ colorClass: 'color2', name: 'Finance' },
  			{ colorClass: 'color3', name: 'Software' },
  			{ colorClass: 'color4', name: 'Gambling' },
  			{ colorClass: 'color5', name: 'Forex' },
  			{ colorClass: 'color6', name: 'Binary' },
  			{ colorClass: 'color7', name: 'Lottery' },
  			{ colorClass: 'color8', name: 'Home Improvement' },
  			{ colorClass: 'color9', name: 'Travel' }
  		],

  		this.productimgs = [

  			{ backClass: 'backColor1', icon: 'fa fa-umbrella', title: 'Insurance' },
  			{ backClass: 'backColor2', icon: 'fa fa-bank', title: 'Finance' },
  			{ backClass: 'backColor3', icon: 'fa fa-laptop', title: 'Software' },
  			{ backClass: 'backColor4', icon: 'fa fa-database', title: 'Gambling' },
  			{ backClass: 'backColor5', icon: 'fa fa-bar-chart', title: 'Forex' },
  			{ backClass: 'backColor6', icon: 'fa fa-barcode', title: 'Claims' },
  			{ backClass: 'backColor7', icon: 'fa fa-ticket', title: 'Lottery' },
  			{ backClass: 'backColor8', icon: 'fa fa-home', title: 'Home Improvement' },
  			{ backClass: 'backColor9', icon: 'fa fa-plane', title: 'Travel' }
  		]

  	}

  	ngOnInit() {}

  	ngAfterViewInit() {

  		$.getScript('assets/js/products.js');

  	}

}
