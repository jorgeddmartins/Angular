import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'bugreport-page',
  	templateUrl: './bugreport.component.html'
  	// styleUrls: ['./home.component.css']
})
export class bugreportComponent implements OnInit {

	constructor() {}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/bugReport.js');
	}

}
