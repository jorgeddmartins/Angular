import { Component } from '@angular/core';

declare var $: any;

@Component({

  	selector: 'app-menu',

  	templateUrl: './menu.component.html',

  	styleUrls: ['./menu.component.scss']

})
export class MenuComponent {

	reports: object = {};
    qreports: object = {};
    freports: object = {};

  	constructor() {

        // LEAD REPORTING MENU
  		this.reports = [

  			{ id: 16, url: '/', title: 'Capture Total', icon: 'fa fa-area-chart'},
  			{ id: 17, url: '/', title: 'Distribution Totals', icon: 'fa fa-exchange'},
  			{ id: 159, url: '/', title: 'Origin Id Distribution Totals', icon: 'fa fa-plus-circle'},
  			{ id: 18, url: '/', title: 'Lead Volume Report', icon: 'fa fa-pie-chart'},
  			{ id: 128, url: '/', title: 'Transfer Report', icon: 'fa fa-arrow-circle-right'},
  			{ id: 171, url: '/', title: 'Transfer Returned Report', icon: 'fa fa-arrow-circle-left'},
  			{ id: 123, url: '/', title: 'Hourly Capture Report', icon: 'fa fa-clock-o'},
  			{ id: 121, url: '/', title: 'Affiliate Reconciliation Report', icon: 'fa fa-users'},
  			{ id: 127, url: '/', title: 'Mini Dashboard', icon: 'fa fa-dashboard'},
  			{ id: 147, url: '/', title: 'Postcode Outcode Lead Count', icon: 'fa fa-map-marker'},
  			{ id: 148, url: '/', title: 'Digital Report', icon: 'fab fa-adversal'},
  			{ id: 170, url: '/', title: 'Combined Lead Report', icon: 'fas fa-code-branch'},
  			{ id: 150, url: '/', title: 'Lead Product Answers Report', icon: 'fa fa-question-circle'},
  			{ id: 152, url: '/', title: 'Transferred Age Report', icon: 'fab fa-accusoft'},
  			{ id: 153, url: '/', title: 'Captured Age Report', icon: 'fa fa-address-card'},
  			{ id: 166, url: '/', title: 'Lead Switch', icon: 'fas fa-map-signs'}
  		],

        this.qreports = [

            { id: 21, url: '/', title: 'Top Line', icon: 'fa fa-level-up'},
            { id: 22, url: '/', title: 'Digital', icon: 'fad fa-ad'},
            { id: 23, url: '/', title: 'Affiliate', icon: 'far fa-user-astronaut'},
            { id: 120, url: '/', title: 'Contextual', icon: 'fa fa-newspaper-o'},
            { id: 122, url: '/', title: 'Search', icon: 'fa fa-search-plus'},
            { id: 155, url: '/', title: 'Lead Origin Lookup', icon: 'fas fa-binoculars'},
            { id: 156, url: '/', title: 'Origin Quality Report', icon: 'fa fa-sliders'}
        ],

        this.freports = [

            { id: 25, url: '/', title: 'Top Line P&L', icon: 'fa fa-line-chart'},
            { id: 116, url: '/', title: 'Source P&L', icon: 'fa fa-list'},
            { id: 129, url: '/', title: 'Contextual P&L', icon: 'fa fa-newspaper-o'},
            { id: 26, url: '/', title: 'Merchant Revenue', icon: 'fa fa-wpforms'},
            { id: 27, url: '/', title: 'Merchant Revenue Summary', icon: 'fas fa-money-check-alt'},
            { id: 29, url: '/', title: 'Product and Source Summary', icon: 'fad fa-box-open'},
            { id: 33, url: '/', title: 'Adjustments', icon: 'fa fa-eye'},
            { id: 34, url: '/', title: 'Missing Cost/Revenue Data', icon: 'fa fa-circle-o-notch'},
            { id: 119, url: '/', title: 'Affiliate ACPL', icon: 'fa fa-star-o'},
            { id: 138, url: '/', title: 'Affiliate Offer ACPL', icon: 'fas fa-shopping-bag'},
            { id: 139, url: '/', title: 'Monthly GP by Product', icon: 'fa fa-line-chart'},
            { id: 141, url: '/', title: 'Monthly GP by LeadSource', icon: 'fa fa-area-chart'},
            { id: 143, url: '/', title: 'Monthly Revenue Costs By Products', icon: 'fas fa-bolt'},
            { id: 145, url: '/', title: 'Monthly Merchant Profit Lost', icon: 'fas fa-chart-bar'}
        ]
  	}

	ngAfterViewInit() {

        $(window).on('load', function() {

            $('body').navSett({

                // Menu Lead Reporting Injection
                leadrepItem: $('#open-id_15'),

                // Menu Quality Reporting Injection
                qualrepItem: $('#open-id_20'),

                // Menu Financial Reporting Injection
                finrepItem: $('#open-id_24')

            });
        });

        $.getScript('assets/js/nav.js');
    }

}
