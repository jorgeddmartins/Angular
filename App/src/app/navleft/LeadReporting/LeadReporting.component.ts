import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'leadreporting-nav',
	templateUrl: './LeadReporting.component.html'
})

export class LeadreportingComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	LreportingsubItems: object = {};
	QreportingsubItems: object = {};
	FreportingsubItems: object = {};
	AreportingsubItems: object = {};
	TSreportingsubItems: object = {};
	PTreportingsubItems: object = {};

	constructor(private breakpointObserver: BreakpointObserver) {

		this.LreportingsubItems = [
			{ 
				routerLink: '/capturetotals', 
				name: 'Capture Total', 
				icon: 'fa fa-area-chart' 
			},
			{ 
				routerLink: '/distributiontotals', 
				name: 'Distribution Totals', 
				icon: 'fa fa-exchange' 
			},
			{ 
				routerLink: '/leadvolumereport', 
				name: 'Lead Volume Report', 
				icon: 'fa fa-pie-chart' 
			},
			{ 
				routerLink: '/transferreport', 
				name: 'Transfer Report', 
				icon: 'fa fa-arrow-circle-right' 
			},
			{ 
				routerLink: '/hourlycapturereport', 
				name: 'Hourly Capture Report', 
				icon: 'fa fa-clock-o' 
			},
			{ 
				routerLink: '/affiliatereconciliationreport', 
				name: 'Affiliate Reconciliation Report', 
				icon: 'fa fa-users' 
			},
			{ 
				routerLink: '/minidashboard', 
				name: 'Mini Dashboard', 
				icon: 'fa fa-dashboard' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Postcode Outcode Lead Count', 
				icon: 'fa fa-map-marker' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Digital Report', 
				icon: 'fa fa-search' 
			}
		],
		this.QreportingsubItems = [
			{ 
				routerLink: '/leads', 
				name: 'Top Line', 
				icon: 'fa fa-level-up' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Affiliate', 
				icon: 'fa fa-users' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Contextual', 
				icon: 'fa fa-newspaper-o' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Search', 
				icon: 'fa fa-search-plus' 
			}
		],
		this.FreportingsubItems = [
			{ 
				routerLink: '/leads', 
				name: 'Top Line P&L', 
				icon: 'fa fa-line-chart' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Source P&L', 
				icon: 'fa fa-list' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Contextual P&L', 
				icon: 'fa fa-newspaper-o' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Merchant Revenue', 
				icon: 'fa fa-wpforms' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Merchant Revenue Summary', 
				icon: 'fa fa-flash' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Product and Source Summary', 
				icon: 'fa fa-product-hunt' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Adjustments', 
				icon: 'fa fa-eye' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Missing Cost/Revenue Data', 
				icon: 'fa fa-circle-o-notch' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Affiliate ACPL', 
				icon: 'fa fa-star-o' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Affiliate Offer ACPL', 
				icon: 'fa fa-plus-circle' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Monthly GP by Product', 
				icon: 'fa fa-line-chart' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Monthly GP by LeadSource', 
				icon: 'fa fa-area-chart' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Monthly Revenue Costs By Products', 
				icon: 'fa fa-line-chart' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Monthly Merchant Profit Lost', 
				icon: 'fa fa-line-chart' 
			}
		],
		this.AreportingsubItems = [
			{ 
				routerLink: '/leads', 
				name: 'Accounts Top Line P&L', 
				icon: 'fa fa-line-chart'
			},
			{ 
				routerLink: '/leads', 
				name: 'Accounts Source P&L', 
				icon: 'fa fa-fax'
			},
			{ 
				routerLink: '/leads', 
				name: 'Acc Monthly GP by Product', 
				icon: 'fa fa-line-chart'
			},
			{ 
				routerLink: '/leads', 
				name: 'Acc Monthly GP by LeadSource', 
				icon: 'fa fa-area-chart'
			}
		],
		this.TSreportingsubItems = [
			{ 
				routerLink: '/leads', 
				addClass: 'SublinkUrl', 
				name: 'Top Line', 
				icon: 'fa fa-bar-chart-o'
			},
			{ 
				routerLink: '/leads', 
				addClass: 'SublinkUrl', 
				name: 'Top Line Additional', 
				icon: 'fa fa-area-chart'
			},
			{ 
				routerLink: '/telesales', 
				addClass: 'teleSalesUrl',
				name: 'Tele Sales Home', 
				icon: 'fa fa-plus-circle'
			},
			{ 
				routerLink: '/leads', 
				addClass: 'SublinkUrl', 
				name: 'Call Outcomes', 
				icon: 'fa fa-list'
			}
		],
		this.PTreportingsubItems = [
			{ 
				routerLink: '/leads', 
				name: 'Mortgage Postcode Reporting', 
				icon: 'fa fa-bank'
			}
		]
	}

	ngAfterViewInit() {

		$.getScript('assets/js/LeadReporting.js');

	}
}
