import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'rightbtn-page',
  	templateUrl: './rightbtn.component.html'
  	// styleUrls: ['./home.component.css']
})
export class RightbtnComponent implements OnInit {

	topbtns: object = {};

	constructor() { 

		this.topbtns = [
		
			{ mainClass: 'bigBtn', name: 'Not Contacted' },
			{ mainClass: 'bigBtn', name: 'No Bank Details' },
			{ mainClass: 'bigBtn', name: 'Turned Down' },
			{ mainClass: 'bigBtn', name: 'Quoted' },
			{ mainClass: 'bigBtn', name: 'Contacted' }
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		// $.getScript('assets/js/home.js');
	}
}
