import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'addlead-page',
  	templateUrl: './addlead.component.html'
  	// styleUrls: ['./home.component.css']
})
export class AddleadComponent implements OnInit {

	costumers: object = {};
	addresses: object = {};

	costcontcts: object = {};

	constructor() {

		this.costumers = [

			{ name: 'Title', inputname: 'title' },
			{ name: 'First Name', inputname: 'firstname' },
			{ name: 'Last Name', inputname: 'lasttname' }
		];

		this.addresses = [

			{ name: 'Address Line 1', inputname: 'address' },
			{ name: 'Address Line 2', inputname: 'address' },
			{ name: 'Town', inputname: 'town' },
			{ name: 'City', inputname: 'city' },
			{ name: 'Country', inputname: 'country' }
		];

		this.costcontcts = [

			{ mainClass: 'boxInp100', name: 'Email', inputname: 'email' },
			{ mainClass: '', name: 'Home Phone', inputname: 'homephone' },
			{ mainClass: '', name: 'Work Phone', inputname: 'workphone' },
			{ mainClass: '', name: 'Mobile Phone', inputname: 'mobilephone' }
		]
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.fn.addLead = function() {

			return this.on('click', '*', function() {

				let ThEvent = $(this);

				switch(true) {

					case (ThEvent.hasClass('addCustomerBtn')):
						$('.addCustomer').fadeOut(300);
						$('.costumeraddLead').removeClass('costumerRightBorder');
						break;
				}

			});
		}

		$(document).addLead();

		$.getScript('assets/js/addnewLead.js');
	}

}
