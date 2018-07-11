import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'why-page',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {}

  	ngAfterViewInit() {

  		$.getScript('assets/js/why.js');
  	}

}
