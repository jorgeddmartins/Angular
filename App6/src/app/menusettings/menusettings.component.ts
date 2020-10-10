import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'menusettings-page',
  	templateUrl: './menusettings.component.html'
  	// styleUrls: ['./home.component.css']
})
export class MenusettingsComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/navSettings/jquery.nestable.js');
		$.getScript('assets/js/navSettings/menuSettings.js');
	}

}
