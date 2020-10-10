import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'allpolicies-page',
  	templateUrl: './allpolicies.component.html'
  	// styleUrls: ['./home.component.css']
})
export class AllpoliciesComponent implements OnInit {

	potTabs: object = {};
	potGridHeads: object = {};

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/allpolicies.js');

		$.getScript('assets/js/gridCalendar/gridCalendar.js');
	}

}
