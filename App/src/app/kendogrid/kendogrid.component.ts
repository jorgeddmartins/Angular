import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'kendogrid',
  	templateUrl: './kendogrid.component.html'
  	// styleUrls: ['./home.component.css']
})
export class KendogridComponent implements OnInit {

	tabs: object = {};
	ids: object = {};

	constructor() {

		this.tabs = [

			{
				seleClass: 'k-state-active',
				name: 'All'
			},
			{
				seleClass: '',
				name: 'Requires Review'
			},
			{
				seleClass: '',
				name: 'Queued For Transfer'
			},
			{
				seleClass: '',
				name: 'Transfered'
			},
			{
				seleClass: '',
				name: 'Rejected'
			},
			{
				seleClass: '',
				name: 'Deleted'
			},
			{
				seleClass: '',
				name: 'Retained'
			}
		];

		this.ids = [

			{
				id: 'AllLeadsGrid'
			},
			{
				id: 'RequiresGrid'
			},
			{
				id: 'QueuedGrid'
			},
			{
				id: 'TransferedGrid'
			},
			{
				id: 'RejectedGrid'
			},
			{
				id: 'DelectedGrid'
			},
			{
				id: 'RetainedGrid'
			}
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/kendogrid/kendogrid.js');

	}

}
