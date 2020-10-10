import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'listenlive-page',
  	templateUrl: './listenlive.component.html'
  	// styleUrls: ['./home.component.css']
})
export class ListenliveComponent implements OnInit {

	potGridHeads: object = {};

	constructor() {

		this.potGridHeads = [

			{ name: 'Ext' },
			{ name: 'Name' },
			{ name: 'Telephone' },
			{ name: 'Duration' },
			{ name: 'Actions' }
			// { name: 'Last Name' },
			// { name: 'Sum' },
			// { name: 'Term' },
			// { name: 'DOB' },
			// { name: 'Post Code' },
			// { name: 'Email' },
			// { name: 'Added' },
			// { name: 'Lead Age' },
			// { name: 'Lead Source' },
			// { name: 'User ID' }
		]
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$('.TrBody:odd').css({ background: '#f9f9f9'});
		$("#StBody").mCustomScrollbar({ 

			theme:"dark-3",
			scrollInertia: 50 
		});

		// $.getScript('assets/js/news.js');
	}

}
