import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'user-page',
  	templateUrl: './user.component.html'
  	// styleUrls: ['./home.component.css']
})
export class UserComponent implements OnInit {

	activeUser: string;

	constructor() { 

		this.activeUser = 'John Doe';
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/user.js');
	}

}
