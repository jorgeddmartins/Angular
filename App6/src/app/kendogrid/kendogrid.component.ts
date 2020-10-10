import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'kendogrid',
  	templateUrl: './kendogrid.component.html'
  	// styleUrls: ['./home.component.css']
})
export class KendogridComponent implements OnInit {

	constructor() { }

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/kendogrid/kendogrid.js');
	}

}
