import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'home-page',
  	templateUrl: './home.component.html'
  	// styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	costumers: object = {};
	addresses: object = {};

	costcontcts: object = {};

	fishheads: object = {};

	constructor() { 

		this.costumers = [

			{ name: 'Title', inputname: 'title' },
			{ name: 'First Name', inputname: 'firstname' },
			{ name: 'Last Name', inputname: 'lasttname' }
		];

		this.addresses = [

			{ name: 'Address Line 1', inputname: 'address', inputClass: 'AddressLine1SingleInput' },
			{ name: 'Address Line 2', inputname: 'address' },
			{ name: 'Town', inputname: 'town', inputClass: 'TownSingleInput' },
			{ name: 'City', inputname: 'city', inputClass: 'CitySingleInput' },
			{ name: 'Country', inputname: 'country', inputClass: 'CountrySingleInput' }
		];

		this.costcontcts = [

			{ mainClass: 'boxInp100', name: 'Email', inputname: 'email' },
			{ mainClass: '', name: 'Home Phone', inputname: 'homephone' },
			{ mainClass: '', name: 'Work Phone', inputname: 'workphone' },
			{ mainClass: '', name: 'Mobile Phone', inputname: 'mobilephone' }
		];

		this.fishheads = [

			{ name: 'Ref#' },
			{ name: 'Status' },
			{ name: 'Client' },
			{ name: 'Sum' },
			{ name: 'Term' },
			{ name: 'Added' },
			{ name: 'Lead Provider' },
			{ name: 'Supplier' },
			{ name: 'Owner' },
			{ name: 'Action' }
		]
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/home.js');

		//$.getScript('assets/js/newJs/newHome.js');

		$.getScript('assets/js/newJs/newPhoneNumber.js');

		$.getScript('assets/js/gridCalendar/gridCalendar.js');
	}

}
