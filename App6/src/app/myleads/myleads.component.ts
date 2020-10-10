import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'myleads-page',
  	templateUrl: './myleads.component.html'
  	// styleUrls: ['./home.component.css']
})
export class MyleadsComponent implements OnInit {

	potTabs: object = {};
	potGridHeads: object = {};

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/myleads.js');
		$.getScript('assets/js/gridCalendar/gridCalendar.js');
		$.getScript('assets/js/headerGridCalendar/headerGridCalendar.js');
	}

}
