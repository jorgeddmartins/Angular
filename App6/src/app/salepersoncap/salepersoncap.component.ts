import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'salepersoncap-page',
  	templateUrl: './salepersoncap.component.html'
  	// styleUrls: ['./home.component.css']
})
export class SalepersoncapComponent implements OnInit {

	salesGridHeads: object = {};
	salesFooterNums: object = {};

	constructor() { 

		this.salesGridHeads = [

			{ name: 'First Name' },
			{ name: 'Last Name' },
			{ name: 'Type' },
			{ name: 'Lead Override Count' },
			{ name: 'Total Daily Quote' }
		],

		this.salesFooterNums = [

			{ num: '1', cClass: 'SelectedFoot' },
			{ num: '2', cClass: '' },
			{ num: '3', cClass: '' },
			{ num: '4', cClass: '' },
			{ num: '5', cClass: '' },
			{ num: '6', cClass: '' },
			{ num: '7', cClass: '' }
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/salesperson.js');
	}

}
