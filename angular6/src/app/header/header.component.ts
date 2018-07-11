import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  	selector: 'header-nav',
  	templateUrl: './header.component.html',
})
export class HeaderComponent {
	
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	logoImg: string;
    topMenus: object = {};
    sliderItems: object = {};

	constructor(private breakpointObserver: BreakpointObserver) {

		this.logoImg = 'assets/img/vero-cover-logo.svg';

        this.topMenus = [

            { liClass: 'borderNav', mainClass: 'home', url: '/', name: 'Home' },
            { liClass: '', mainClass: 'why', url: '/why', name: 'Why Use Us' },
            { liClass: '', mainClass: 'products', url: '/products', name: 'Products' },
            { liClass: '', mainClass: 'contacts', url: '/contacts', name: 'Contact' }
        ],

        this.sliderItems = [

            { h2S: 'Exclusive', h2T: 'Quality', text: 'Our real time, web generated leads are exclusive to each lead buyer and the quality is constantly optimised against your performance metrics to give you the best results.', img: 'assets/img/slider/slide1.svg' },
            { h2S: 'Web Generated', h2T: 'Leads in Real Time', text: 'Multiple methods to deliver and distribute leads to our clients. Our team of developers can intergrate with any system for lead delivery direct into your CRM in real time.', img: 'assets/img/slider/slide2.svg' },
            { h2S: 'High', h2T: 'Conversion Rate', text: 'Access historical reports online in real-time and view data the way you want it. Quality feedback is used consistently to deliver and improve conversion rate, day on day.', img: 'assets/img/slider/slide3.svg' },
            { h2S: 'Proprietary', h2T: 'Validation Engine', text: 'Lead fingerprinting technology process and prevalidates leads allowing for only the best quality.', img: 'assets/img/slider/slide4.svg' }
        ]
	}

	ngAfterViewInit() {

        $.getScript('assets/js/header.js');
    }
}
