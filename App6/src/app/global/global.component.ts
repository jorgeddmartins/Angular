import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'global-area',
  	templateUrl: './global.component.html'
  	// styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

	smarterlogo: string;

	createDate: string;
	modifDate: string;

	constructor() { 

		this.smarterlogo = 'assets/img/smarterlogo.svg';

		this.createDate = '04/04/2018';
		this.modifDate = '04/04/2018';
	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/globalFunc.js');

		$.getScript('assets/js/global.js');
		//$.getScript('assets/js/globalUpdate.js');
		//$.getScript('assets/js/newJs/newGlobal.js');

		// Routing
		$.getScript('assets/js/routing.js');

		// Sms Pop Ups
		$.getScript('assets/js/sms.js');

		// Runs Toaster
		//$.getScript('assets/js/toastr/OverToastr.js');
	}

}
