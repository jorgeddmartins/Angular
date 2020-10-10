import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'tasks-page',
  	templateUrl: './tasks.component.html'
  	// styleUrls: ['./home.component.css']
})
export class TasksComponent implements OnInit {

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/tasks.js');

		$.getScript('assets/js/gridCalendar/gridCalendar.js');
	}
}