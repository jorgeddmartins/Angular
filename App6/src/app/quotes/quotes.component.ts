import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'quotes-page',
  	templateUrl: './quotes.component.html'
  	// styleUrls: ['./home.component.css']
})
export class QuotesComponent implements OnInit {

	costumers: object = {};
	genequotes: object = {};

	clstateUps: object = {};
	clstates: object = {};

	constructor() { 

		this.costumers = [

			{ name: 'Title', inputname: 'title' },
			{ name: 'First Name', inputname: 'firstname' },
			{ name: 'Last Name', inputname: 'lasttname' }
		];

		this.genequotes = [

			{ widthClass: 'boxInp23-35', labelColor: 'blueLabel', name: 'To Age', inputname: 'toage' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Term', inputname: 'term' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Life', inputname: 'life' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'CIC', inputname: 'cic' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Level Term', inputname: 'levelterm' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Guaranteed', inputname: 'guaranteed' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'WOL', inputname: 'wol' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Death', inputname: 'death' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Lives', inputname: 'lives' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Frenquency', inputname: 'frenquency' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Quote By', inputname: 'quoteby' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: '% Comn Ret.', inputname: 'comnret' },
			{ widthClass: 'boxInp23-35', labelColor: '', name: 'Sum Assured', inputname: 'sumassured' }
		];

		this.clstateUps = [

			{ heightClass: 'heightLevel', datehour: '02/10/2018 14:25', cover: 'LEV LI', for: 'Life joint', over: '25 years', guaranteed: 'Guaranteed', comm: '100%' },
			{ heightClass: 'heightLevel', datehour: '02/10/2018 14:25', cover: 'LEV LI', for: 'Life joint', over: '25 years', guaranteed: 'Guaranteed', comm: '100%' },
			{ heightClass: 'heightLevel', datehour: '02/10/2018 14:25', cover: 'LEV LI', for: 'Life joint', over: '25 years', guaranteed: 'Guaranteed', comm: '100%' },
			{ heightClass: 'heightLevel', datehour: '02/10/2018 14:25', cover: 'LEV LI', for: 'Life joint', over: '25 years', guaranteed: 'Guaranteed', comm: '100%' },
			{ heightClass: 'heightLevel', datehour: '02/10/2018 14:25', cover: 'LEV LI', for: 'Life joint', over: '25 years', guaranteed: 'Guaranteed', comm: '100%' },
			{ heightClass: 'heightLevel', datehour: '02/10/2018 14:25', cover: 'LEV LI', for: 'Life joint', over: '25 years', guaranteed: 'Guaranteed', comm: '100%' }
			// { heightClass: 'heightLevel', datehour: '02/10/2018 14:25', cover: 'LEV LI', for: 'Life joint', over: '25 years', guaranteed: 'Guaranteed', comm: '100%' }

		];

		this.clstates = [

			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: 'State 1', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: 'State 2', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			// { colorBack: 'blueBack', name: 'State 3' },
			{ colorBack: '', name: 'State 3', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },

			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },

			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },

			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },

			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' },
			{ colorBack: '', name: '', img: 'assets/img/vitality.svg', topprice: '£22.87' }
		]

	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/quotes.js');
	}

}
