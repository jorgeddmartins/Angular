import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'news-page',
  	templateUrl: './news.component.html'
  	// styleUrls: ['./home.component.css']
})
export class NewsComponent implements OnInit {

	constructor() {}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/news.js');
	}

}
