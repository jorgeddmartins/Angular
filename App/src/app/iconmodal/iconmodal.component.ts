import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'iconmodal-page',
	templateUrl: './iconmodal.component.html',
	styleUrls: ['./iconmodal.component.css']
})
export class IconmodalComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	constructor(private breakpointObserver: BreakpointObserver) {};

	ngAfterViewInit() {

		$.getScript('assets/js/icomodal/iconmodal.js');

		$.getScript('assets/js/colorpicker/colorpicker.js');
	}
}
