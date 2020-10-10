import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'telesales-page',
	templateUrl: './telesales.component.html',
	styleUrls: ['./telesales.component.css']
})
export class TelesalesComponent implements OnInit {

	toptasks: object = {};
	topflips: object = {};
	caseflags: object = {};

	switchtitles: object = {};

	userteles: object = {}

	constructor() { 

		this.toptasks = [
			{ 
				backcolorClass: 'flipGrey', 
				name: 'Leads pot', 
				icoClass: 'fa-server', 
				dataClass: 'totalleads', 
				datanum: 2341 
			},
			{ 
				backcolorClass: 'flipMidiumGrey', 
				name: 'Processed', 
				icoClass: 'fa-server', 
				dataClass: 'totalprocessed', 
				datanum: 136 
			},
			{ 
				backcolorClass: 'flipSmothGrey flipMargin-right', 
				name: 'Call Count', 
				icoClass: 'fa-server', 
				dataClass: 'totalcallcount', 
				datanum: 627 
			},
			{ 
				backcolorClass: 'flipGreen', 
				name: 'Transferred', 
				icoClass: 'fa-arrow-right', 
				dataClass: 'totalTrans', 
				datanum: 82 
			},
			{ 
				backcolorClass: 'flipGreenSmoothBlue', 
				name: 'Trans Std', 
				icoClass: 'fa-arrow-right', 
				dataClass: 'notpqhkTrans', 
				datanum: 15 
			},
			{ 
				backcolorClass: 'flipGreenBlue', 
				name: 'Trans PQ', 
				icoClass: 'fa-arrow-right', 
				dataClass: 'pqTrans', 
				datanum: 67 
			},
			{ 
				backcolorClass: 'flipGreen2', 
				name: 'Trans HK', 
				icoClass: 'fa-arrow-right', 
				dataClass: 'hkTrans', 
				datanum: 0 
			},
			{ 
				backcolorClass: 'flipRed', 
				name: 'Deleted', 
				icoClass: 'fa-close', 
				dataClass: 'totaldeleted', 
				datanum: 30 
			},
			{ 
				backcolorClass: 'flipBlue', 
				name: 'Rejected', 
				icoClass: 'fa-arrow-left', 
				dataClass: 'totalrejected', 
				datanum: 1 
			},
			{ 
				backcolorClass: 'flipPurple flipMargin-right', 
				name: 'Retained', 
				icoClass: 'fa-arrow-down', 
				dataClass: 'totalretained', 
				datanum: 23 
			},
			{ 
				backcolorClass: 'flipOrange', 
				name: 'Total Tasks', 
				icoClass: 'fa-bell', 
				dataClass: 'totalTask', 
				datanum: 62 
			},
			{ 
				backcolorClass: 'flipSmothOrange', 
				name: 'Today Tasks', 
				icoClass: 'fa-bell', 
				dataClass: 'todaysTask', 
				datanum: 19 
			}
		],

		this.topflips = [
			{ 
				countData: 0, 
				name: 'Jan Wilson' 
			},
			{ 
				countData: 451, 
				name: 'Gemma Sweeney' 
			},
			{ 
				countData: 503, 
				name: 'Geraldine Henry' 
			},
			{ 
				countData: 499, 
				name: 'John Boland' 
			},
			{ 
				countData: 477, 
				name: 'Susanna Lucas' 
			},
			{ 
				countData: 577, 
				name: 'George Thomson' 
			}
		],

		this.caseflags = [
			{ }
		],

		this.switchtitles = [
			{
				name: 'Rejectable Affiliate',
				sw: 1
			},
			{
				name: 'Inside Rejection Period',
				sw: 2
			}
		],

		this.userteles = [

			{
				imgf: 'assets/img/avatar/male.jpg',
				count: 2435,
				name: 'Jan Wilson'
			},

			{
				imgf: 'assets/img/avatar/male.jpg',
				count: 435,
				name: 'Gemma Sweeney'
			},
			{
				imgf: 'assets/img/avatar/male.jpg',
				count: 2435,
				name: 'James Holland'
			},

			{
				imgf: 'assets/img/avatar/male.jpg',
				count: 435,
				name: 'Geraldine Henry'
			},
			{
				imgf: 'assets/img/avatar/male.jpg',
				count: 2435,
				name: 'Donna Green'
			},

			{
				imgf: 'assets/img/avatar/male.jpg',
				count: 435,
				name: 'John Boland'
			},
			{
				imgf: 'assets/img/avatar/male.jpg',
				count: 435,
				name: 'Susanna Lucas'
			}
		]

	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/teleSales.js');

	}

}
