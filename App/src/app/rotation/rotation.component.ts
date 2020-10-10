import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'rotation-page',
	templateUrl: './rotation.component.html',
	styleUrls: ['./rotation.component.css']
})
export class RotationComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	tabs: object = {};
	ths: object = {};
	
	constructor(private breakpointObserver: BreakpointObserver) {

		this.tabs = [

			{
				class: 'mon',
				name: "Mon"
			},
			{
				class: 'tue',
				name: "Tue"
			},
			{
				class: 'wed',
				name: "Wed"
			},
			{
				class: 'thu',
				name: "Thu"
			},
			{
				class: 'fri',
				name: "Fri"
			},
			{
				class: 'sat',
				name: "Sat"
			},
			{
				class: 'sun',
				name: "Sun"
			}
		];

		this.ths = [

			{
				classA: 'firstTh',
				name: ''
			},
			{
				classA: '',
				name: 'Merchant'
			},
			{
				classA: '',
				name: 'Cycle Every'
			},
			{
				classA: '',
				name: 'Daily Limit'
			},
			{
				classA: '',
				name: 'Priority'
			},
			{
				classA: '',
				name: 'Start Time'
			},
			{
				classA: '',
				name: 'End Time'
			},
			{
				classA: '',
				name: ''
			}
		]
	};

	ngAfterViewInit() {

		// Rotation Main Script
		$.getScript('assets/js/rotation.js');

		// Log History Search(Autocomplete) 
		$.getScript('assets/js/leadRight_In.js');

		// $.getScript('assets/js/StractureHT/StractureHT.js');
	}
}
