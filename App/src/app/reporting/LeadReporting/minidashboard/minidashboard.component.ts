import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'minidashboard-page',
	templateUrl: './minidashboard.component.html',
	styleUrls: ['./minidashboard.component.css']
})
export class MinidashboardComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	

	constructor(private breakpointObserver: BreakpointObserver) {


	}

	ngAfterViewInit() {

		// Runs Aniamtion Function
		$.getScript('assets/js/miniDash/miniDashFunction.js');

		// Runs First Panel
		$.getScript('assets/js/miniDash/miniDashboard.js');

	}
}
