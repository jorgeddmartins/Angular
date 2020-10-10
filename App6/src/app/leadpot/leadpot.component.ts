import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'leadpot-page',
  	templateUrl: './leadpot.component.html'
  	// styleUrls: ['./home.component.css']
})
export class LeadpotComponent implements OnInit {

	potTabs: object = {};
	potGridHeads: object = {};

	constructor() {

		this.potTabs = [

			{ name: 'All Leads', selectClass: 'selected' },
			{ name: 'New Leads', selectClass: '' },
			{ name: 'Not Contacted', selectClass: '' },
			{ name: 'Quoted', selectClass: '' },
			{ name: 'No Bank Details', selectClass: '' },
			{ name: 'Sold', selectClass: '' },
			{ name: 'Fca Check', selectClass: '' },
			{ name: 'Fca Failed', selectClass: '' }
		],

		this.potGridHeads = [

			{ name: 'LeadId' },
			{ name: 'CRMid' },
			{ name: 'Status' },
			{ name: 'Alerts' },
			{ name: 'First Name' },
			{ name: 'Last Name' },
			{ name: 'Sum' },
			{ name: 'Term' },
			{ name: 'DOB' },
			{ name: 'Post Code' },
			{ name: 'Email' },
			{ name: 'Added' },
			{ name: 'Lead Age' },
			{ name: 'Lead Source' },
			{ name: 'User ID' }
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/leadpot.js');
		$.getScript('assets/js/gridCalendar/gridCalendar.js');
		// $.getScript('assets/js/headerGridCalendar/headerGridCalendar.js');
		
	}

}
