import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'transferreport-page',
	templateUrl: './transferreport.component.html',
	styleUrls: ['./transferreport.component.css']
})
export class TransferreportComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngAfterViewInit() {

		//$.getScript('assets/js/header.js');
	}
}