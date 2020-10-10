import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'salepersontypes-page',
  	templateUrl: './salepersontypes.component.html'
  	// styleUrls: ['./home.component.css']
})
export class SalepersontypesComponent implements OnInit {

	salesGridHeads: object = {};
	salesFooterNums: object = {};

	constructor() { 

		this.salesGridHeads = [

			{ name: 'Name' },
			{ name: 'Lead Limit' }
		],

		this.salesFooterNums = [

			{ num: '1', cClass: 'SelectedFoot' }
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/salespersontypes.js');
	}

}
