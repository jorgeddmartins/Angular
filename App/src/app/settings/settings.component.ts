import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'settings-page',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	sforms: object = {};

	constructor(private breakpointObserver: BreakpointObserver) {

		this.sforms = [
			
			{
				name: 'Current Password',
				type: 'text',
				value: '',
				iClass: 'cPassword'
			},
			{
				name: 'Enter New Password',
				type: 'password',
				value: '',
				iClass: 'enPassword'
			},
			{
				name: 'Confirm New Password',
				type: 'password',
				value: '',
				iClass: 'cnPassword'
			}
		]
	};

	ngAfterViewInit() {

		$.getScript('assets/js/profileSettings.js');

	}
}
