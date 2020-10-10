import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'distributiontotals-page',
	templateUrl: './distributiontotals.component.html',
	styleUrls: ['./distributiontotals.component.css']
})
export class DistributiontotalsComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngAfterViewInit() {

		//$.getScript('assets/js/header.js');
	}
}
