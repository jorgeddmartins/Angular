import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'popups-page',
  	templateUrl: './popups.component.html'
  	// styleUrls: ['./home.component.css']
})
export class popupsComponent implements OnInit {

	constructor() {}

	ngOnInit() { }

	ngAfterViewInit() {

		$(function() {

			$(document).on('click', '.SendSms_Btn', function() { $('.SendSmsCover').show(); });
			$(document).on('click', '.CancelSendSms', function() { $('.SendSmsCover').hide(); });

		});

		$.getScript('assets/js/calendarPickers.js');
	}

}
