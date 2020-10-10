import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'fishingsection-page',
  	templateUrl: './fishingsection.component.html'
  	// styleUrls: ['./home.component.css']
})
export class FishingsectionComponent implements OnInit {

	detailsinputs: object = {};
	phonenumbers: object = {};

	constructor() {

		this.detailsinputs = [

			{ mainClass: 'detailUpLeadFishing', id: 'firstname', name: 'First Name', inputname: 'firstname' },
			{ mainClass: 'detailUpLeadFishing', id: 'lastname', name: 'Last Name', inputname: 'lastname' },
			{ mainClass: 'detailUpLeadFishing', id: 'sumassured', name: 'Sum Assured', inputname: 'sumassured' },
			{ mainClass: 'detailUpLeadFishing', id: 'term', name: 'Term', inputname: 'term' }
		];
		
		this.phonenumbers = [

			{ mainClass: 'detailLeadW', id: 'homephone', name: 'Home Phone', inputname: 'homephone' },
			{ mainClass: 'detailLeadW', id: 'workphone', name: 'Work Phone', inputname: 'workphone' },
			{ mainClass: 'detailLeadW', id: 'mobilephone', name: 'Mobile Phone', inputname: 'mobilephone' }
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {}

}
