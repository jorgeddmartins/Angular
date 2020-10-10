import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'mypolicies-page',
  	templateUrl: './mypolicies.component.html'
  	// styleUrls: ['./home.component.css']
})
export class MypoliciesComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/myleads.js');
		$.getScript('assets/js/gridCalendar/gridCalendar.js');
		// $.getScript('assets/js/headerGridCalendar/headerGridCalendar.js');
	}

}
