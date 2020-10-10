import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'gridscreen-page',
  	templateUrl: './gridscreen.component.html'
  	// styleUrls: ['./home.component.css']
})
export class GridscreenComponent implements OnInit {

	constructor() {}

	ngOnInit() { }

	ngAfterViewInit() {
		// $.getScript('assets/js/addnewLead.js');
	}

}
