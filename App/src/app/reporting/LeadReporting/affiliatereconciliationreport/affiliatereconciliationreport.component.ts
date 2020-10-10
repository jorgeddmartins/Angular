import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'affiliatereconciliationreport-page',
	templateUrl: './affiliatereconciliationreport.component.html',
	styleUrls: ['./affiliatereconciliationreport.component.css']
})
export class AffiliatereconciliationreportComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngAfterViewInit() {

		//$.getScript('assets/js/header.js');
	}
}
