import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  	selector: 'footer-section',
  	templateUrl: './footer.component.html'
})
export class FooterComponent {
	
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	footerLogo: string;
	footermenus: object = {};

	constructor(private breakpointObserver: BreakpointObserver) {

		this.footerLogo = 'assets/img/vero-cover-logo2.svg';

		this.footermenus = [

			{ routerlink: '/', name: 'Home' },
			{ routerlink: '/why', name: 'Why Use Us' },
			{ routerlink: '/products', name: 'Products' },
			{ routerlink: '/contacts', name: 'Contact' },
			{ routerlink: '/', name: 'Privacy Policy' },
			{ routerlink: '/', name: 'Ts & Cs' }
		]
	}

	ngAfterViewInit() {}
}
