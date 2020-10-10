import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'fishing-page',
  	templateUrl: './fishing.component.html'
  	// styleUrls: ['./home.component.css']
})
export class FishingComponent implements OnInit {

	topelems: object = {};
	fishheads: object = {};

	footpages: object = {};

	constructor() { 

		this.topelems = [

			{ mainClass: 'wTh4', name: 'Dates', inputname: 'dates' },
			{ mainClass: 'wTh4', name: 'Start Date', inputname: 'startdate' },
			{ mainClass: 'wTh4', name: 'End Date', inputname: 'enddate' },
			{ mainClass: 'wTh4', name: 'Consultant', inputname: 'consultant' },
			{ mainClass: 'wTh4', name: 'Team', inputname: 'team' },
			{ mainClass: 'wTh4', name: 'Lead Status', inputname: 'leadstatus' },
			{ mainClass: 'wTh4', name: 'Lead Providers', inputname: 'leadproviders' }
		];

		this.fishheads = [

			{ name: 'Ref#', adtClass: '' },
			{ name: 'Status', adtClass: '' },
			{ name: 'Client', adtClass: '' },
			{ name: 'Sum', adtClass: '' },
			{ name: 'Term', adtClass: '' },
			{ name: 'Added', adtClass: '' },
			{ name: 'Lead Provider', adtClass: '' },
			{ name: 'Supplier', adtClass: '' },
			{ name: 'Owner', adtClass: '' },
			{ name: 'Action', adtClass: 'actionFish' }
		];

		this.footpages = [

			{ name: '<<' },
			{ name: '1' },
			{ name: '2' },
			{ name: '3' },
			{ name: '>>' }
		]
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/fishing.js');
	}

}
