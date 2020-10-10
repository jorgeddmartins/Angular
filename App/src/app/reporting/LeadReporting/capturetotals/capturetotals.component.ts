import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'capturetotals-page',
	templateUrl: './capturetotals.component.html',
	styleUrls: ['./capturetotals.component.css']
})
export class CapturetotalsComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngAfterViewInit() {

		//$.getScript('assets/js/header.js');
	}
}
