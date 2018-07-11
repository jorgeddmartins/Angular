import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'contacts-page',
  	templateUrl: './contacts.component.html',
  	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

 	constructor() { }

  	ngOnInit() {}

  	ngAfterViewInit() {

  		$.getScript('assets/js/contact-post.js');
  		$.getScript('assets/js/contacts.js');
  	}

}
