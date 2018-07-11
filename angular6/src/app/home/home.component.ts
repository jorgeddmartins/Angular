import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'home-page',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	marketlists: object = {};
	homeOptions: object = {};

	homeTitle: string;
	homeSubTtitle: string;
	homeImg: string;

	accordionTabs: object = {};

  	constructor() { 

  		this.homeTitle = 'Capture . Validate . Deliver';
  		this.homeSubTtitle = 'At VeroCover, our approach is to harness the power of our network of websites which have been created with the sole purpose of generating and offering real-time leads. Our goal is to maximise your lead conversion rate and return on investment.';
  		this.homeImg = 'assets/img/seo_specialist_workplace-optimized.png';

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

  		this.homeOptions = [

  			{ 
  				title: '100% Exclusive', 
  				content: 'Our pre validated leads are 100% exclusive to you at delivery and for future marketing campaigns. They are not shared with any other clients.'
  			},
  			{ 
  				title: 'High Quality', 
  				content: 'Validated using our proprietary validation engine which checks for telephone validity and 19 other quality related KPIs as well as matched against a huge database of invalid data, allowing for one of the lowest invalid lead rates in the industry.'
  			},
  			{ 
  				title: 'Large Selection', 
  				content: 'Offering a vast range of leads for different products, from life insurance to mortgages, window instalations to university education ... we have the leads for the specific needs and wants of your business.'
  			}
  		],

  		this.accordionTabs = [

  			{ 
  				icon: 'fa fa-crosshairs',
  				title: 'Capture',
  				content: 'Our lead capture process consolidates and validates all leads on a real time basis from the highest converting sources in to one, unified system.',
  				classD: 'panel-display'
  			},
  			{ 
  				icon: 'fa fa-eye',
  				title: 'Validate',
  				content: 'Leads are validated in real time using our proprietary validation engine which uses unique lead finger printing technology to insure leads delivered are of the highest quality.',
  				classD: ''
  			},
  			{ 
  				icon: 'fa fa-money',
  				title: 'Deliver',
  				content: 'Our systems have been built on powerful foundations using the latest technology ensuring for the best delivery rates, uptime and consistency in the industry.',
  				classD: ''
  			}
  		]

  	}

  	ngOnInit() {}

  	ngAfterViewInit() {

  		$.getScript('assets/js/home.js');

  	}

}
