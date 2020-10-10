import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'teleuserreport-chart',
	templateUrl: './teleuserreport.component.html'
	//styleUrls: ['./userreport.component.css']
})
export class TeleuserreportComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/rightNav/tlusrReportChart.js');
	}

}
