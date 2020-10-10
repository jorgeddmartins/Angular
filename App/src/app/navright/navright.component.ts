import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'right-nav',
	templateUrl: './navright.component.html',
	styleUrls: ['./navright.component.css']
})
export class NavrightComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/rightNav/rightNav.js');

		// $.getScript('assets/js/rightNav/rnCharts.js');
	}

}
