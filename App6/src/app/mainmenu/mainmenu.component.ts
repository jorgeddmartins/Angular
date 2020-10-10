import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'mainmenu-page',
  	templateUrl: './mainmenu.component.html'
  	// styleUrls: ['./home.component.css']
})
export class MainmenuComponent implements OnInit {

	leadsettings: object = {};
	policiesNavs: object = {};
	tasksNavs: object = {};
	chaselogNavs: object = {};
	retentionNavs: object = {};
	complianceNavs: object = {};
	pbxNavs: object = {};
	reportstargetsNavs: object = {};
	settingsNavs: object = {};

	constructor() { 

		this.leadsettings = [
			{ url: 'leadpot', UrlClass: 'leadpotUrl Leadpot longWith', name: 'Lead Pot' },
			{ url: 'salepersoncap', UrlClass: 'salepersoncap longWith', name: 'Sale Person Cap' },
			{ url: 'salepersontypes', UrlClass: 'salepersontypes longWith', name: 'Sale Person Types' }
		],

		this.policiesNavs = [
			{ url: 'preriskpolicies', UrlClass: 'preriskpolicies longWith', name: 'PreRisk/PreReferred Policies' },
			{ url: 'presavepolicies', UrlClass: 'presavepolicies longWith', name: 'Pre Save Policies' },
			{ url: 'precancellation', UrlClass: 'precancellation longWith', name: 'Pre Cancellation Policies' },
			{ url: 'onriskpolicies', UrlClass: 'onriskpolicies longWith', name: 'On Risk Policies' },
			// { url: 'policies', UrlClass: 'policies', name: 'All Policies' }
			{ url: 'allpolicies', UrlClass: 'allpolicies longWith', name: 'All Policies' }
		],

		this.tasksNavs = [
			{ url: 'tasks', UrlClass: 'tasks longWith', name: 'Task Fishing' },
			{ url: '', UrlClass: 'normal', name: 'My Tasks' },
			{ url: '', UrlClass: 'normal', name: 'All Tasks' }
		],

		this.chaselogNavs = [
			{ url: '', UrlClass: 'normal', name: 'Chase Log' },
			{ url: '', UrlClass: 'normal', name: 'Initial Decision' },
			{ url: '', UrlClass: 'normal', name: 'MedDec Log' },
			{ url: '', UrlClass: 'normal', name: 'Referred Amendments' }
		],

		this.retentionNavs = [
			{ url: '', UrlClass: 'normal', name: 'Rated Policies' },
			{ url: '', UrlClass: 'normal', name: 'Decline Policies' },
			{ url: '', UrlClass: 'normal', name: 'Cancellation' },
			{ url: '', UrlClass: 'normal', name: 'NTU' }
		],

		this.complianceNavs = [
			{ url: '', UrlClass: 'normal', name: 'Compliance' },
			{ url: '', UrlClass: 'normal', name: 'Compliance Admin' }
		],

		this.pbxNavs = [
			{ url: '', UrlClass: 'normal', name: 'Direct Dial In Phones' },
			{ url: '', UrlClass: 'normal', name: 'Call Listen' }
		],

		this.reportstargetsNavs = [
			{ url: '', UrlClass: 'normal', name: 'Commission' },
			{ url: '', UrlClass: 'normal', name: 'Sales Person Clawback' },
			{ url: '', UrlClass: 'normal', name: 'Processor Targets' },
			{ url: '', UrlClass: 'normal', name: 'Processors Report' },
			{ url: '', UrlClass: 'normal', name: 'Sales Dashboard' },
			{ url: '', UrlClass: 'normal', name: 'Canx Dashboard' },
			{ url: '', UrlClass: 'normal', name: 'Sales Manager Report' },
			{ url: '', UrlClass: 'normal', name: 'Sales Amendment Report' },
			{ url: '', UrlClass: 'normal', name: 'Sales Manager STP Report' }
		],

		this.settingsNavs = [
			{ url: '', UrlClass: 'normal', name: 'Roles' },
			{ url: '', UrlClass: 'normal', name: 'Users' },
			{ url: '', UrlClass: 'normal', name: 'Groups' },
			{ url: '', UrlClass: 'normal', name: 'Insurers' },
			{ url: '', UrlClass: 'normal', name: 'Sales Persons' },
			{ url: '', UrlClass: 'normal', name: 'Alert Types' },
			{ url: '', UrlClass: 'normal', name: 'Logs' },
			{ url: '', UrlClass: 'normal', name: 'Missing Policies' },
			{ url: '', UrlClass: 'normal', name: 'Emails' },
			// { url: '', UrlClass: 'normal', name: 'Menu List' },
			{ url: 'menusettings', UrlClass: 'Menusettings longWith', name: 'Menu Settings' },
			{ url: '', UrlClass: 'normal', name: 'Feedback' },
			{ url: '', UrlClass: 'normal', name: 'Email Types' },
			{ url: '', UrlClass: 'normal', name: 'Email Templates' },
			{ url: 'policydetail', UrlClass: 'policydetailUrl', name: 'Policy Detail' },
			{ url: 'backqueue', UrlClass: 'longWith', name: 'Pack Queue' },
			{ url: 'policies', UrlClass: 'policies', name: 'Add Policy' },
			{ url: 'news', UrlClass: 'newsUrl longWith', name: 'Ticker Manger' },
			{ url: 'listenlive', UrlClass: 'listenUrl', name: 'Listen Live' },
			{ url: 'iconmodal', UrlClass: 'iconmodalUrl longWith', name: 'Icon Picker' }
		]
		
	}

	ngOnInit() { }

	ngAfterViewInit() { $.getScript('assets/js/nav.js') }

}