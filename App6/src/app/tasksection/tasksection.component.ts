import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'tasksection-page',
  	templateUrl: './tasksection.component.html'
  	// styleUrls: ['./home.component.css']
})
export class tasksectionComponent implements OnInit {

	constructor() {}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/taskzoom.js');

	}

}
