import { Component } from '@angular/core';

declare var $: any;

@Component({

  	selector: 'app-nav',

  	templateUrl: './nav.component.html',

  	styleUrls: ['./nav.component.scss']

})
export class NavComponent {

	navItems: object = {};

  	constructor() {

  		this.navItems = [

  			{ id: 15, title: 'Lead Reporting', subtitle: 'Capture & Distribution Reports', icon: 'fad fa-chart-bar'},
  			{ id: 20, title: 'Quality Reporting', subtitle: 'Asses lead quality performance', icon: 'fad fa-badge-check'},
  			{ id: 24, title: 'Financial Reporting', subtitle: 'Profitability Reporting', icon: 'fad fa-piggy-bank'}
  		]
  	}	

	ngAfterViewInit() {

		$.getScript('assets/js/routing.js');
	}

}
