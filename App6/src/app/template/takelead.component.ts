import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'takelead-page',
  	templateUrl: './takelead.component.html'
  	// styleUrls: ['./home.component.css']
})
export class TakeleadComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/takelead.js');
	}
}