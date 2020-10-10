import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'onriskpolicies-page',
  	templateUrl: './onriskpolicies.component.html'
  	// styleUrls: ['./home.component.css']
})
export class OnriskpoliciesComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/onriskpolicies.js');

		$.getScript('assets/js/gridCalendar/gridCalendar.js');

	}

}
