import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'presavepolicies-page',
  	templateUrl: './presavepolicies.component.html'
  	// styleUrls: ['./home.component.css']
})
export class PresavepoliciesComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/presavepolicies.js');

		$.getScript('assets/js/gridCalendar/gridCalendar.js');
	}

}
