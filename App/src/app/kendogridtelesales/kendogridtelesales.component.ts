import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'kendogridtelesales',
  	templateUrl: './kendogridtelesales.component.html'
  	// styleUrls: ['./home.component.css']
})
export class KendogridtelesalesComponent implements OnInit {


	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/kendogridtelesales/kendogristelesales.js');

	}

}
