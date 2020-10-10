import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'leads-page',
	templateUrl: './leads.component.html'
})
export class LeadsComponent implements OnInit {

	topinfos: object = {};
	closeBtns: object = {};

	constructor() { 
		this.topinfos = [

			{ mClass: 'date-time-info', title: 'Date', desc: '25/11/2016', alertClass: '', alertVal: '' },
			{ mClass: 'position-info', title: 'Position', desc: 'Reject', alertClass: '', alertVal: '' },
			{ mClass: 'position-info', title: 'Position', desc: 'Reject', alertClass: '', alertVal: '' },
			{ mClass: 'source-info', title: 'Source', desc: 'Affiliate', alertClass: '', alertVal: '' },
			{ mClass: 'source-info', title: 'Lead Alert', desc: 'PQREQUIRED', alertClass: 'alertmodal', alertVal: '192' }
		],
		this.closeBtns = [

			{ topClass: 'save-btn boxbl-save', url: '#', iconClass: 'icon icon-check savebtn', tipClass: 'tool-save', tipName: 'Save' },
			{ topClass: 'save-close-btn boxbl-saveclose', url: '/', iconClass: 'icon icon-chevrons-contract-vertical saveCloseBtn', tipClass: 'tool-saveclose', tipName: 'Save and Close' },
			{ topClass: 'close-btn boxbl-close', url: '/', iconClass: 'icon icon-chevron-down closeBtn', tipClass: 'tool-close', tipName: 'Close' },
			{ topClass: 'prev-btn boxbl-prev', url: '#', iconClass: 'icon icon-chevron-left prevBtn', tipClass: '', tipName: '' },
			{ topClass: 'next-btn boxbl-next', url: '#', iconClass: 'icon icon-chevron-right prevBtn', tipClass: '', tipName: '' }
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		// Lead Screen Scripts
		$.getScript('assets/js/leadscreen.js');

		$.getScript('assets/js/flashInfo/flashInfo.js');

		// Right Panel
		$.getScript('assets/js/leadRight.js');

		// Right Panel Search
		// $.getScript('assets/js/leadRight_In.js');

		// Structure HTML
		$.getScript('assets/js/StractureHT/StractureHT.js');

		// Load Calendars
		$.getScript('assets/js/GridTeleSalesCalendar/GridCalendar.js');

	}

}
