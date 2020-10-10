import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'generalsettings',
	templateUrl: './generalsettings.component.html',
	styleUrls: ['./generalsettings.component.css']
})
export class GeneralsettingsComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	sglobals: object = {};

	constructor(private breakpointObserver: BreakpointObserver) {

		this.sglobals = [

			{
				id: 0,
				name: 'Main Nav Colors'
			},

			{
				id: 1,
				name: 'Global Colors'
			},

			{
				id: 2,
				name: 'Manage Tool Tips'
			}
		]

	};

	ngAfterViewInit() {
 
		// $.getScript('assets/js/colorpicker/colorpicker.js');

		$.getScript('assets/js/generalSettings.js');
	}
}
