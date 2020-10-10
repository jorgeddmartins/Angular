import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'alerts-page',
  	templateUrl: './alerts.component.html'
  	// styleUrls: ['./home.component.css']
})
export class AlertsComponent implements OnInit {

	alertname: string;


	constructor() { 

		this.alertname = 'Tasks Alerts';
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/alerts.js');
	}
}
