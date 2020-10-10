import { Component } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	ngAfterViewInit() { 

		$.fn.SmarterAppBlk = function(appBl, SmarterOption) {

			let smarterDefault = {

				appBlk: true
			};

			let smarterSettings = $.extend( true, {}, smarterDefault, SmarterOption );

			// Remove Smarter App Security
			const SmarterBlk = smarterSettings.appBlk == false ? appBl.detach() : '';
		}

		$(document).SmarterAppBlk($('.Injection_Temp'));

	}

}
