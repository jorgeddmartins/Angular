import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'userreport-chart',
	templateUrl: './userreport.component.html'
	//styleUrls: ['./userreport.component.css']
})
export class UserreportComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/rightNav/rnCharts.js');
	}

}
