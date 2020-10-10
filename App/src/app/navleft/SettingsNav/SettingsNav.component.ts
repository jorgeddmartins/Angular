import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'settingsnav-nav',
	templateUrl: './SettingsNav.component.html'
})

export class SettingsNavComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	MsettingssubItems: object = {};
	MerchFeedbSubs: object = {};

	AffiliatesSubs: object = {};
	SearchSubs: object = {};
	NativeSubs: object = {};
	SocialSubs: object = {};
	EmailSubs: object = {};

	FsettingssubItems: object = {};
	SYsettingssubItems: object = {};

	BlackListSubs: object = {};
	UsersSubs: object = {};
	MenuSubs: object = {};

	constructor(private breakpointObserver: BreakpointObserver) {

		this.MsettingssubItems = [
			{ 
				routerLink: '/leads', 
				name: 'Merchant Details', 
				icon: 'fa fa-list-alt' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Merchant Lead Pricing', 
				icon: 'fa fa-cc-visa' 
			},
			{ 
				routerLink: '/rotation', 
				name: 'Delivery Rotation', 
				icon: 'fa fa-refresh' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Rejection Reasons', 
				icon: 'fa fa-window-close' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Retain Reasons', 
				icon: 'fa fa-arrow-circle-down' 
			}
		],
		this.MerchFeedbSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Feedback Status', 
				icon: 'fa fa-comment-o' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Feedback Status Details', 
				icon: 'fa fa-comments-o' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Feedback Status Mapping', 
				icon: 'fa fa-commenting-o' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Feedback Status Details Mapping', 
				icon: 'fa fa-commenting' 
			}
		],
		this.AffiliatesSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Affiliate List', 
				icon: 'fd fi-results-demographics' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Offer List', 
				icon: 'fa fa-list-ol' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Affiliate Cap', 
				icon: 'fa fa-thermometer-half' 
			}
		],
		this.SearchSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Platform Management', 
				icon: 'fd fi-thumbnails' 
			}
		],
		this.NativeSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Platform Management', 
				icon: 'fa fa-newspaper-o' 
			}
		],
		this.SocialSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Platform Management', 
				icon: 'fa fa-envelope-open-o' 
			}
		],
		this.EmailSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Platform Management', 
				icon: 'fa fa-facebook-official' 
			}
		],
		this.FsettingssubItems = [
			{ 
				routerLink: '/leads', 
				name: 'Global Rates', 
				icon: 'fa fa-balance-scale' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Source Spend', 
				icon: 'fa fa-money' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Merchant Lead Pricing', 
				icon: 'fa fa-cc-visa' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Lead Price Changes', 
				icon: 'fa fa-exchange' 
			}
		],
		this.SYsettingssubItems = [
			{ 
				routerLink: '/leads', 
				name: 'Product Types', 
				icon: 'fa fa-cubes' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Websites', 
				icon: 'fa fa-sitemap' 
			},
			{ 
				routerLink: '/leads', 
				name: 'URL Source Mapping', 
				icon: 'fa fa-globe' 
			}
		],
		this.BlackListSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Restictions', 
				icon: 'fa fa-exclamation-triangle' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Blacklistings', 
				icon: 'fa fa-remove' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Merchant Restrictions', 
				icon: 'fa fa-expeditedssl' 
			}
		],
		this.UsersSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Users Settings', 
				icon: 'fd fi-torsos-female-male' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Users Qinex Last Login', 
				icon: 'fa fa-user-circle-o' 
			},
			{ 
				routerLink: '/leads', 
				name: 'Telesale Users Setting', 
				icon: 'fa fa-plus-circle' 
			}
		],
		this.MenuSubs = [
			{ 
				routerLink: '/leads', 
				name: 'Menu List', 
				icon: 'fa fa-list-alt' 
			},
			{ 
				routerLink: '/menusettings', 
				name: 'Menu Setting', 
				icon: 'fa fa-pencil-square-o' 
			}
		]
	}

	ngAfterViewInit() {}
}
