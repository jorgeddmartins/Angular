import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'hourlycapturereport-page',
	templateUrl: './hourlycapturereport.component.html',
	styleUrls: ['./hourlycapturereport.component.css']
})
export class HourlycapturereportComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngAfterViewInit() {

		//$.getScript('assets/js/header.js');
	}
}
