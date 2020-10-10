import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'precancellationpolicies-page',
  	templateUrl: './precancellationpolicies.component.html'
  	// styleUrls: ['./home.component.css']
})
export class PrecancellationpoliciesComponent implements OnInit {

	potTabs: object = {};
	potGridHeads: object = {};

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/precancellationpolicies.js');

		$.getScript('assets/js/gridCalendar/gridCalendar.js');

	}

}
