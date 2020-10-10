import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'newstemp-page',
  	templateUrl: './newstemp.component.html'
  	// styleUrls: ['./home.component.css']
})
export class newstempComponent implements OnInit {

	constructor() {}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/newstemp.js');
	}

}
