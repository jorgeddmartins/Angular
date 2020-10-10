import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'header-nav',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	qinexLogo: string;
	avatarImg: string;

	dashLogo: string;
	qinexgreen: string;

	userStatus: string;
	userFirstName: string;

	constructor(private breakpointObserver: BreakpointObserver) {

		this.qinexLogo = 'assets/img/QinexLogo.svg';
		this.avatarImg = 'assets/img/avatar/male.jpg';
		this.dashLogo = 'assets/img/navleft/x-dash-logo.svg';
		this.qinexgreen = 'assets/img/navleft/newqinex-green.svg';

		this.userStatus = 'Super Admin';
		this.userFirstName = 'Jorge';
	}

	ngAfterViewInit() {

		$.getScript('assets/js/header.js');
	}
}
