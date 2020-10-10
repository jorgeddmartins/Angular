import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'preriskpolicies-page',
  	templateUrl: './preriskpolicies.component.html'
  	// styleUrls: ['./home.component.css']
})
export class PreriskpoliciesComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/preriskpolicies.js');
	}

}
